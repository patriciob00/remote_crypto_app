import ReactDOM from "react-dom/client";

import "./index.css";
import SkeletonCard from "./base-components/skeleton-card";
import BackgroundWrapper from "./base-components/background-wrapper";
import Title from "./base-components/title";
import Paragraph from "./base-components/paragraph";
import CryptoItemsListWithinBox from "./components/crypto-items-list-within-box/index.tsx";
import CryptoCardHighlight from "./components/crypto-card-highlight/index.tsx";



const App = () => (
    <BackgroundWrapper style={{ justifyContent: 'space-around', padding: '1.5rem', overflow: 'hidden', alignItems: 'flex-start' }}>
      <CryptoCardHighlight />
      <CryptoItemsListWithinBox />
    </BackgroundWrapper>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);