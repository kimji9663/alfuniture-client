import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
  window.history.pushState({}, '', '/');
});

test('홈 화면이 렌더링된다 (라우터·장바구니·찜 Provider·Swiper 포함)', async () => {
  render(<App />);
  // 홈 첫 섹션 제목과 하단 내비게이션
  expect(await screen.findByText('2023 Furniture')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /HOME/ })).toBeInTheDocument();
  // 접근성 라벨 (10번 작업)
  expect(screen.getByRole('link', { name: '알림' })).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});
