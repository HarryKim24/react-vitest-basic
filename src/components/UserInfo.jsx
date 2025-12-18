import { useState } from 'react'
import { fetchUser } from '../api/userApi'

const UserInfo = () => {

  const [name, setName] = useState(null);

  const handleClick = async () => {
    const user = await fetchUser();
    setName(user.name);
  }

  return (
    <div>
      <button onClick={handleClick}>Load User</button>
      {name && <p>User: {name}</p>}
    </div>
  )
}

export default UserInfo
