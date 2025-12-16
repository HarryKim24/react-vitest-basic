import { describe, expect, it } from "vitest";
import UserProfile from "./UserProfile";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe('UserProfile 컴포넌트', () => {
  it('버튼 클릭 후 유저 이름이 표시된다', async () => {
    render(<UserProfile />)
    const user = userEvent.setup();

    await user.click(
      screen.getByRole('button', { name: 'Load User' })
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(
      await screen.findByText('User: Tom')
    ).toBeInTheDocument();
  })
})