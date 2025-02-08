import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser'; // Componente Modal
import { getUsers } from './utils/api';

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
  const [refresh, setRefresh] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Función para cargar usuarios
  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  // Cargar usuarios al inicio y cuando cambie 'refresh'
  useEffect(() => {
    loadUsers();
  }, [refresh]);

  const toggleModal = () => setIsModalOpen(!isModalOpen); // Función para abrir/cerrar el modal

  return (
    <div className="container mt-4">
      {/* Botón de crear usuario */}
      <div className="mb-4">
        <button className="btn btn-success" onClick={toggleModal}>
          Crear Nuevo Usuario
        </button>
      </div>

      {/* Lista de usuarios */}
      <UserList userlist={users} />

      {/* Modal de creación de usuario */}
      <AddUser
        isOpen={isModalOpen} 
        onClose={toggleModal} 
        onSubmit={() => setRefresh(!refresh)} // Actualiza la lista de usuarios
      />
    </div>
  );
}

export default App;
