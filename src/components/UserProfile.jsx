import { useState } from "react"

const UserProfile = () => {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);

  const handleClick = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 200));

    setName('Tom');
    setLoading(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Load User</button>
      {loading && <p>Loading...</p>}
      {name && <p>User: {name}</p>}
    </div>
  )
}

export default UserProfile
