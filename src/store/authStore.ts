import { create } from "zustand";
import { AuthStore } from "../types/AuthType";
import { getToken, removeToken, setToken } from "../util/localStorage";

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
