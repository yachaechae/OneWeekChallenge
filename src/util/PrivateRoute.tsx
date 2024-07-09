import { Route, Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "../util/localStorage";
import { PrivateRouteType } from "../types/AuthType";

export function PrivateRoute() {
	const token = getLocalStorage();

	return token ? <Outlet /> : <Navigate to="/login" />;
}
