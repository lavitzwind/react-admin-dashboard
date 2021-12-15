import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

function App() {
	return (
		<div>
			<Topbar />
			<div className="container">
				<Sidebar />
				<div className="lol">other pages</div>
			</div>
		</div>
	);
}

export default App;
