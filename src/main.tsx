import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/custom.css";
import Home from "./pages/Home.tsx";
import Todos from "./pages/Todos.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/custom.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import MyPage from "./pages/MyPage.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todo" element={<Todos />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/mypage" element={<MyPage />} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
