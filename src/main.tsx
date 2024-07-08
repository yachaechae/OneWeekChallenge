import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "./styles/custom.css";
import Home from "./pages/Home.tsx";
import Todos from "./pages/Todos.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./styles/custom.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			{/* <App />
			<Home /> */}
			<Todos />
		</QueryClientProvider>
	</React.StrictMode>
);
