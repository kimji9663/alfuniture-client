import { defineConfig } from "@playwright/test"

/**
 * 브라우저 E2E 테스트 (e2e/*.spec.ts)
 *
 *   npm run test:e2e        빌드 후 E2E 실행
 *   npx playwright test     이미 빌드된 build/ 로 실행
 *
 * 프로덕션 빌드(build/)를 scripts/serve-build.js 로 띄워서 테스트한다.
 * 각 테스트는 새 브라우저 컨텍스트에서 돌아서 localStorage(장바구니·찜)가 비어 있는 첫 방문 상태로 시작한다.
 */
const PORT = 4173

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    // 앱은 최대 너비 420px 모바일 레이아웃
    viewport: { width: 420, height: 900 },
    isMobile: true,
    hasTouch: true,
    locale: "ko-KR",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
  webServer: {
    command: `node scripts/serve-build.js build ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
})
