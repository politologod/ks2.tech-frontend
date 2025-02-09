import axios from "axios";



interface Users {
    id_autoincrement?: number; // Campo principal
    name: string;
    email: string;
    phone: string;
    address: string;
    createdAt?: string;
}

const url : string = `${import.meta.env.VITE_API}/users`;
const api = axios.create({
	baseURL: url, // Usar variable de entorno
   // withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		
	},
});

export const getUserById = async (id: number) => {
    const response = await api.get(`/${id}`);
    return response.data;
};

export const getUsers = async () => {
	const response = await api.get("/");
	return response.data;
};

export const createUser = async (data: Users) => {
	try {
		const response = await api.post("/", data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateUser = async (id: number, data: Partial<Users>) => {
    const response = await api.put(`/${id}`, data); // Usar ruta correcta
    return response.data;
};

export const deleteUser = async (id: number) => {
	const response = await api.delete(`/${id}`);
	return response.data;
};
export const formatCreatedAt = (date: string | Date) => {
	if (!date) return null; // Manejar valores nulos o indefinidos
	return new Date(date).toLocaleString("es-ES", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
};
