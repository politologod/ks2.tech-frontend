import { useState, useEffect } from 'react'
import UserList from './components/UserList'
import { getUserById, getUsers, updateUser, createUser, deleteUser, formatCreatedAt } from "./utils/api";



interface User {
  id_autoincrement?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
}


function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers(); // GET /api/users
      setUsers(users);
      localStorage.setItem('users', JSON.stringify(users));
    };
    fetchUsers();
  }, []);



  return (
    <>
      |   <UserList
        userlist={users}
        onUserDeleted={() => {
          // Esta función volverá a cargar los usuarios
          const fetchUsers = async () => {
            const updatedUsers = await getUsers();
            setUsers(updatedUsers);
          };
          fetchUsers();
        }}
      />
    </>
  )
}

export default App
