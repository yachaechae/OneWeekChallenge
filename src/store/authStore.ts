import { create } from "zustand";
import { AuthStore, UserStore, UserUpdateType } from "../types/AuthType";
import { getToken, removeToken, setToken } from "../util/localStorage";
import { fetchUserInfo, updateUserInfo } from "../api/auth";

export const authStore = create<AuthStore>((set) => ({
	token: getToken(),
	setToken: (token) => {
		setToken(token);
		set({ token });
	},
	clearToken: () => {
		removeToken();
		set({ token: null });
	},
}));

export const useUserStore = create<UserStore>((set) => ({
	userInfo: null,
	fetchUser: async () => {
		const data = await fetchUserInfo();
		set({ userInfo: data });
	},
	updateUser: async (userUpdate: UserUpdateType) => {
		await updateUserInfo(userUpdate);
		const data = await fetchUserInfo();
		set({ userInfo: data });
	},
}));
