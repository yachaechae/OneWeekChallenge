import React, { useEffect } from "react";
import { getToken } from "../util/localStorage";
import { authStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	const setToken = authStore((state) => state.setToken);

	useEffect(() => {
		const token = getToken();
		if (token) {
			setToken(token);
			navigate("/");
		} else {
			navigate("/login");
		}
	}, [setToken, navigate]);

	return (
		<div>
			<div>메인페이지 수정 진행중</div>
		</div>
	);
}
