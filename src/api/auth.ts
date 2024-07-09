import { Navigate, useNavigate } from "react-router-dom";
import { gomuksuInstance } from "../lib/axiosInstance";
import { LoginResult, LoginType, RegisterResult, RegisterType, SuccessResponse } from "../types/AuthType";

gomuksuInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	async (error) => {
		const errorMessage = error.response.data.message;
		alert(errorMessage);
		return errorMessage;
	}
);

export async function login({ userId, password }: LoginType) {
	const res = await gomuksuInstance.post<SuccessResponse<LoginResult>>(`/login`, { userId, password });

	return res.data;
}

export async function register({ userId, password, userName, phoneNumber }: RegisterType) {
	const res = await gomuksuInstance.post<SuccessResponse<RegisterResult>>(`/register`, {
		userId,
		password,
		userName,
		phoneNumber,
	});

	return res.data;
}
