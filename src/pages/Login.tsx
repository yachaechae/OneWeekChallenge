import React, { useState } from "react";
import { InputBox } from "../components/InputBox";
import { authStore } from "../store/authStore";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [userId, setUserId] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const setToken = authStore((state) => state.setToken);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const data = await login({ userId, password });
			const token = data.data.accessToken;
			const navigate = useNavigate();
			if (token) {
				setToken(token);
				navigate(`/`);
			}
		} catch (error) {}
	};
	return (
		<div className=" flex px-2 flex-col justify-center w-screen h-screen items-center">
			<div className="text-3xl font-bold text-center mb-2">Login</div>
			<div className="mt-10 px-2 max-w-screen-sm w-full ">
				<form className="space-y-6 " onSubmit={handleSubmit}>
					<InputBox
						type="text"
						title="userId"
						id="loginId"
						name="loginId"
						autoComplete="text"
						placeholder="아이디를 입력해주세요!"
						required
						value={userId}
						onChange={(e) => setUserId(e.target.value)}
					/>
					<InputBox
						type="password"
						title="PASSWORD"
						id="loginPassword"
						name="loginPassword"
						autoComplete="current-password"
						placeholder="비밀번호를 입력해주세요!"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
			<p className="mt-5 text-center text-sm text-gray-500">Not a member?</p>
		</div>
	);
}
