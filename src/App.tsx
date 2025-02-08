import { useState, useEffect } from 'react'
import UserList from './components/UserList'
import { getUserById, getUsers, updateUser, createUser, deleteUser, formatCreatedAt } from "./utils/api";
interface Users {
  id: number;
  name: string;
  email: string;
  phone  : string;
  createdAt : string;
  address: string;
}

function App() {

    const [users, setUsers] = useState<Users[]>([]);

        useEffect(() => {
            const fetchUsers = async () => {
                const users = await getUsers();
                setUsers(users);
                console.log(users);
            }
            
            fetchUsers();
        }, []);



  return (
    <>
  |   <UserList  userlist={users} />
    </>
  )
}

export default App
