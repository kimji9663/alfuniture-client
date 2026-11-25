import { expect, test } from "@playwright/test"

test.describe("릴스 영상", () => {
  test("압축 영상이 재생되고, 로딩 중 포스터가 있다", async ({ page }) => {
    const videoSizes: number[] = []
    page.on("response", async (r) => {
      if (/\/videos\/.+\.mp4$/.test(r.url())) {
        const len = Number(r.headers()["content-length"] ?? 0)
        if (len) videoSizes.push(len)
      }
    })
    await page.goto("/style/reels")
    const video = page.locator("video")
    await expect(video).toHaveAttribute("poster", "/videos/video3-poster.webp")
    await expect(video).toHaveAttribute("playsinline", "")

    // 실제 재생: Playwright 기본 Chromium은 H.264 코덱이 없어 재생할 수 없다.
    // 코덱을 지원하는 브라우저(Chrome 채널 등)에서만 재생까지 확인한다.
    const h264 = await page.evaluate(() => document.createElement("video").canPlayType('video/mp4; codecs="avc1.640028"'))
    if (h264) {
      await expect.poll(async () => video.evaluate((v: HTMLVideoElement) => v.currentTime), { timeout: 10_000 }).toBeGreaterThan(0.3)
      const info = await video.evaluate((v: HTMLVideoElement) => ({ w: v.videoWidth, h: v.videoHeight, muted: v.muted }))
      expect(info).toEqual({ w: 720, h: 1366, muted: true })
    } else {
      test.info().annotations.push({ type: "note", description: "이 브라우저는 H.264를 지원하지 않아 재생 확인을 건너뜀 (실제 Chrome에서 수동 확인함)" })
    }

    // 포스터 이미지도 정상 응답
    const poster = await page.request.get("/videos/video3-poster.webp")
    expect(poster.ok()).toBe(true)
    expect(poster.headers()["content-type"]).toContain("image/webp")

    // 원본 25MB → 2MB 미만 (응답 크기를 알 수 있을 때만 확인)
    for (const size of videoSizes) expect(size).toBeLessThan(2 * 1024 * 1024)
  })
})
