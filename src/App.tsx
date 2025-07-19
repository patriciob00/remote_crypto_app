import ReactDOM from "react-dom/client";

import "./index.css";
import CryptoDashboard from "./screens/crypto-dashboard/index.tsx";



const App = () => (
    <CryptoDashboard />
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);