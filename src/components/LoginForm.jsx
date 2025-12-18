import { useState } from "react"

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required');
      return
    }
    setError('');
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

      {error && (
        <p role="alert" style={{ color: 'red' }}>{error}</p>
      )}
      {submittedEmail && (
        <p>Submitted: {submittedEmail}</p>
      )}
    </form>
  )
}

export default LoginForm
