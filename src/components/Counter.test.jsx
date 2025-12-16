import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe('Counter 컴포넌트', () => {
  const setup = () => {
    render(<Counter />)
    return {
      button: screen.getByRole('button', { name: '+' })
    }
  }

  it('초기 값이 0이다', () => {
    setup()
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
  })

  it('버튼 클릭 시 값이 증가한다', async () => {
    const { button } = setup()
    const user = userEvent.setup()
    await user.click(button)
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})