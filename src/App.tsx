import Pages from "./components/Pages";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    );
}
