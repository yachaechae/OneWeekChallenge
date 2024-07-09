import React, { useEffect } from "react";
import { getLocalStorage } from "../util/localStorage";
import { authStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	const token = getLocalStorage();
	const setToken = authStore((state) => state.setToken);

	useEffect(() => {
		if (token) {
			setToken(token);
			navigate("/");
		} else {
			navigate("/login");
		}
	}, [token, setToken, navigate]);

	return (
		<div>
			<div>메인페이지 수정 진행중</div>
			{token ? (
				<button
					onClick={() => navigate("/mypage")}
					className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
				>
					마이페이지
				</button>
			) : (
				<button
					onClick={() => navigate("/login")}
					className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
				>
					로그인
				</button>
			)}
		</div>
	);
}
