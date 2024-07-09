import { create } from "zustand";
import { AuthStore, UserStore, UserUpdateType } from "../types/AuthType";
import { fetchUserInfo, updateUserInfo } from "../api/auth";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../util/localStorage";

export const authStore = create<AuthStore>((set) => ({
	token: getLocalStorage(),
	setToken: (token) => {
		setLocalStorage(token);
		set({ token });
	},
	removeToken: () => {
		removeLocalStorage();
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
