import React, { useState } from "react";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";

export default function Register() {
	const [userId, setUserId] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [checkPassword, setCheckPassword] = useState<string>("");
	const [userName, setUserName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password === checkPassword) {
			try {
				await register({ userId, password, userName, phoneNumber });
				navigate(`/login`);
			} catch (error) {}
		} else {
			alert("비밀번호가 일치하지 않습니다!");
		}
	};
	return (
		<div className=" flex px-2 flex-col justify-center w-screen h-screen items-center">
			<div className="text-3xl font-bold text-center mb-2">Register</div>
			<div className="mt-10 px-2 max-w-screen-sm w-full">
				<form className="space-y-6 " onSubmit={handleSubmit}>
					<InputBox
						type="text"
						title="ID"
						id="registerId"
						name="registerId"
						autoComplete="text"
						placeholder="아이디를 입력해주세요!"
						required
						value={userId}
						onChange={(e) => setUserId(e.target.value)}
					/>
					<InputBox
						type="password"
						title="PASSWORD"
						id="registerPassword"
						name="registerPassword"
						autoComplete="current-password"
						placeholder="비밀번호를 입력해주세요!"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<InputBox
						type="password"
						title="Password Check"
						id="registerPasswordCheck"
						name="registerPassword"
						autoComplete="current-password"
						placeholder="비밀번호를 한번 더 입력해주세요!"
						required
						onChange={(e) => setCheckPassword(e.target.value)}
					/>

					<InputBox
						type="text"
						title="userName"
						id="registerName"
						name="registerName"
						autoComplete="text"
						placeholder="닉네임을 입력해주세요!"
						required
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<InputBox
						type="text"
						title="phoneNumber"
						id="registerPhone"
						name="registerPhone"
						autoComplete="text"
						placeholder="010-1234-1234"
						required
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
