import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { getToken } from "../util/localStorage";
import { useUserStore } from "../store/authStore";
import { changePassword } from "../api/auth";
import { Modal } from "../components/Modal";

export default function MyPage() {
	const { userInfo, fetchUser, updateUser } = useUserStore();
	const [userId, setUserId] = useState<string>("");
	const [currentPassword, setCurrentPassword] = useState<string>("");
	const [newPassword, setNewPassword] = useState<string>("");
	const [userName, setUserName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	const uid = "userid";
	useEffect(() => {
		const token = getToken();
		if (!token) {
			navigate("/login");
			return;
		}
		const loadUserInfo = async () => {
			await fetchUser();
		};
		loadUserInfo();
	}, [fetchUser, navigate]);

	useEffect(() => {
		if (userInfo) {
			setUserName(userInfo.userName);
			setPhoneNumber(userInfo.phoneNumber);
		}
	}, [userInfo]);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userInfo) {
			try {
				await updateUser({ userName, phoneNumber });
				alert("정보가 수정되었습니다!");
				navigate("/");
			} catch (error) {}
		}
	};
	const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await changePassword({ uid, currentPassword, newPassword });
			alert("Password changed successfully!");
			setIsModalOpen(false);
		} catch (error) {
			console.error("Error changing password:", error);
			alert("Failed to change password.");
		}
	};
	return (
		<div className=" flex px-2 flex-col justify-center w-screen h-screen items-center">
			<div className="text-3xl font-bold text-center mb-2">My Page</div>
			<div className="mt-10 px-2 max-w-screen-sm w-full">
				<form className="space-y-6 " onSubmit={handleSubmit}>
					<InputBox
						type="text"
						title="ID"
						id="mypageId"
						name="mypageId"
						autoComplete="text"
						placeholder="아이디를 입력해주세요!"
						required
						value={userId}
						onChange={(e) => setUserId(e.target.value)}
					/>

					<InputBox
						type="text"
						title="NickName"
						id="mypageName"
						name="mypageName"
						autoComplete="text"
						placeholder="닉네임을 입력해주세요!"
						required
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<InputBox
						type="text"
						title="PhoneNumber"
						id="mypagePhone"
						name="mypagePhone"
						autoComplete="text"
						placeholder="010-1234-1234"
						required
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>

					<div className="flex gap-3">
						<button
							onClick={() => setIsModalOpen(true)}
							className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
						>
							Change Password
						</button>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
						>
							Update
						</button>
					</div>
				</form>
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
						<InputBox
							type="password"
							title="Current Password"
							id="currentPassword"
							name="currentPassword"
							autoComplete="password"
							placeholder="현재 비밀번호를 입력해주세요!"
							required
							value={currentPassword}
							onChange={(e) => setCurrentPassword(e.target.value)}
						/>
						<InputBox
							type="password"
							title="New Password"
							id="newPassword"
							name="newPassword"
							autoComplete="password"
							placeholder="새 비밀번호를 입력해주세요!"
							required
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
						<button
							type="submit"
							className="block mx-auto px-2 py-2 bg-rose-500 text-white rounded hover:bg-rose-600"
						>
							Submit
						</button>
					</form>
				</Modal>
			</div>
		</div>
	);
}
