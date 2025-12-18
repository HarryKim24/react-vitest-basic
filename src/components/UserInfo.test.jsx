import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import UserInfo from './UserInfo'
import * as userApi from '../api/userApi'

vi.mock('../api/userApi');

describe('UserInfo 컴포넌트', () => {
  it('API 응답으로 받은 유저 이름을 표시한다', async () => {
    vi.spyOn(userApi, 'fetchUser').mockResolvedValue({
      name: 'Tom',
    })

    render(<UserInfo />);
    const user = userEvent.setup();

    await user.click(
      screen.getByRole('button', { name: 'Load User' })
    )

    expect(
      await screen.findByText('User: Tom')
    ).toBeInTheDocument();
  });
  
});
