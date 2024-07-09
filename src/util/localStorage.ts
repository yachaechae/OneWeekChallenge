export function getLocalStorage() {
	return localStorage.getItem("token");
}

export function setLocalStorage(token: string) {
	localStorage.setItem("token", token);
}

export function removeLocalStorage() {
	localStorage.removeItem("token");
}
