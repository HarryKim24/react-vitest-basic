import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import LoginForm from './LoginForm'

describe('LoginForm 컴포넌트', () => {
  it('이메일 입력 후 제출하면 결과가 표시된다', async () => {
    render(<LoginForm />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('Email');
    const button = screen.getByRole('button', { name: 'Submit' });

    await user.type(input, 'test@example.com');

    await user.click(button);

    expect(
      screen.getByText('Submitted: test@example.com')
    ).toBeInTheDocument()
  });
  
  it('이메일 없이 제출하면 에러가 표시되고 결과는 나오지 않는다', async () => {
    render(<LoginForm />);
    const user = userEvent.setup();

    await user.click(
      screen.getByRole('button', { name: 'Submit' })
    )

    expect(
      screen.getByRole('alert')
    ).toHaveTextContent('Email is required')

    expect(
      screen.queryByText(/Submitted:/)
    ).not.toBeInTheDocument()
  })
})