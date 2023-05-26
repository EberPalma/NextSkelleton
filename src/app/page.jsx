//import Image from "next/image";
import "../styles/styles.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export default async function Home() {
    return (
        <main className="main-content">
            <div>
                <h1><Icon className="icon" icon="far-regular fa-house" /> Hi this is the main page</h1>

            </div>
        </main>
    );
}
