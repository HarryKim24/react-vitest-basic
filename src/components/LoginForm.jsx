import { useState } from "react"

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>

      {submittedEmail && (
        <p>Submitted: {submittedEmail}</p>
      )}
    </form>
  )
}

export default LoginForm
