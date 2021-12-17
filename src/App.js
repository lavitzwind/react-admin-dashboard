import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

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
				<Route
					path="/user/:userId"
					element={
						<>
							<Topbar />
							<div className="container">
								<Sidebar />
								<User />
							</div>
						</>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
