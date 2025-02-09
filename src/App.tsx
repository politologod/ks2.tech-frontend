import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import { getUsers } from './utils/api';
import Modal from './components/Modal';
interface User {
  id_autoincrement: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // Función para cargar usuarios
  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };


  useEffect(() => {
    loadUsers();
  }, [refresh]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="container mt-4">
      
      <div className="mb-4">
        <button className="btn btn-success" onClick={toggleModal}>
          Crear Nuevo Usuario
        </button>
      </div>


      <UserList userlist={users} />


      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSubmit={() => setRefresh(!refresh)}
      />
    </div>
  );
}

export default App;
