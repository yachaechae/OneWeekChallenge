export interface LoginType {
	userId: string;
	password: string;
}
export interface SuccessResponse<T> {
	resultCode: string;
	data: T;
}
export interface LoginResult {
	accessToken: string;
}
export interface LoginRejected {
	message: string;
}
export interface AuthStore {
	token: string | null;
	setToken: (token: string) => void;
	clearToken: () => void;
}

export interface RegisterType {
	userId: string;
	password: string;
	userName: string;
	phoneNumber: string;
}
export interface RegisterResult {}

export interface RegisterRejected {
	message: string;
}

export interface UserInfo {
	userId: string;
	userName: string;
	phoneNumber: string;
}

export interface UserUpdateType {
	userName: string;
	phoneNumber: string;
}

export interface UserStore {
	userInfo: UserInfo | null;
	fetchUser: () => Promise<void>;
	updateUser: (userUpdate: UserUpdateType) => Promise<void>;
}
export interface ChangePasswordType {
	uid: string;
	currentPassword: string;
	newPassword: string;
}
