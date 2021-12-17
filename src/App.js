import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<Home />
							</div>
						</>
					}
				></Route>
				<Route
					path="/users"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<UserList />
							</div>
						</>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
