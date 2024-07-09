import { gomuksuInstance } from "../lib/axiosInstance";
import {
	ChangePasswordType,
	LoginResult,
	LoginType,
	RegisterResult,
	RegisterType,
	SuccessResponse,
	UserInfo,
	UserUpdateType,
} from "../types/AuthType";

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
	const res = await gomuksuInstance.post<SuccessResponse<LoginResult>>(`/auth/login`, { userId, password });

	return res.data;
}

export async function register({ userId, password, userName, phoneNumber }: RegisterType) {
	const res = await gomuksuInstance.post<SuccessResponse<RegisterResult>>(`/auth/register`, {
		userId,
		password,
		userName,
		phoneNumber,
	});

	return res.data;
}

export async function fetchUserInfo(): Promise<UserInfo> {
	const res = await gomuksuInstance.get<SuccessResponse<UserInfo>>(`/user`);
	return res.data.data;
}

export async function updateUserInfo(userUpdate: UserUpdateType): Promise<void> {
	await gomuksuInstance.put(`/user`, userUpdate);
}

export async function changePassword({ uid, currentPassword, newPassword }: ChangePasswordType) {
	const res = await gomuksuInstance.put<SuccessResponse<void>>(`/user/${uid}/password`, {
		currentPassword,
		newPassword,
	});
	return res.data;
}
