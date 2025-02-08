import axios from "axios";

interface Users {
	id: number;
	name: string;
	email: string;
	phone: string;
	createdAt: string;
	address: string;
}

const api = axios.create({
	baseURL: "http://localhost:777/api/users",
    //	withCredentials: true,
});

export const getUserById = async (id: number) => {
	const response = await api.get(`/:${id}`);
	return response.data;
};

export const getUsers = async () => {
	const response = await api.get("/");
	return response.data;
};

export const createUser = async (data: Users) => {
	const response = await api.post("/", data);
	return response.data;
};

export const updateUser = async (id: number, data: Partial<Users>) => {
    const response = await api.put(`/${id}`, data); // Usar ruta correcta
    return response.data;
};

export const deleteUser = async (id: number) => {
	const response = await api.delete(`/${id}`);
	return response.data;
};
export const formatCreatedAt = (date: any) => {
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
