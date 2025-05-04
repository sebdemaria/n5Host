import { lazy, Suspense, useState } from "react";

const Rick = lazy(() => import("charactersRick/CharactersList"));
const Harry = lazy(() => import("charactersHarry/CharactersList"));

export default function App() {
    const [active, setActive] = useState<string | null>(null);

    const changeLanguage = (lang: "en" | "es") => {
        localStorage.setItem("app_lang", lang);
        window.dispatchEvent(new Event("languageChanged"));
    };

    return (
        <>
            <button onClick={() => changeLanguage("es")}>Es</button>
            <button onClick={() => changeLanguage("en")}>En</button>

            <button onClick={() => setActive("rick")}>Rick and Morty</button>
            <button onClick={() => setActive("harry")}>Harry Potter</button>

            <Suspense fallback={<div>Cargando...</div>}>
                {active === "rick" && <Rick />}
                {active === "harry" && <Harry />}
            </Suspense>
        </>
    );
}
