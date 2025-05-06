import { lazy, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./components/ui/Button";
import { Select } from "./components/ui/Select";
import { Spinner } from "./components/ui/Spinner";
import { MICROS } from "./consts/consts";

const Rick = lazy(() => import("charactersRick/CharactersList"));
const Harry = lazy(() => import("charactersHarry/CharactersList"));

export default function App() {
    const [lang, setLang] = useState<"es" | "en">("es");
    const [activeMicro, setActiveMicro] = useState<keyof typeof MICROS | null>(
        null
    );

    const changeLanguage = (lang: "en" | "es") => {
        localStorage.setItem("app_lang", lang);
        window.dispatchEvent(new Event("languageChanged"));
    };

    useEffect(() => {
        changeLanguage(lang);
    }, [lang]);

    return (
        <AppContainer className='app'>
            <AppControls className='app__controls'>
                <Select
                    options={["en", "es"]}
                    value={lang}
                    onChange={(lang: "en" | "es") => setLang(lang)}
                />

                <AppButtons className='app__buttons'>
                    <Button onClick={() => setActiveMicro("RICK")}>
                        Rick & Morty
                    </Button>
                    <Button onClick={() => setActiveMicro("HARRY")}>
                        Harry Potter
                    </Button>
                </AppButtons>
            </AppControls>

            <AppContent className='app__container'>
                <Suspense fallback={<Spinner />}>
                    {activeMicro === "RICK" && <Rick />}
                    {activeMicro === "HARRY" && <Harry />}
                </Suspense>
            </AppContent>
        </AppContainer>
    );
}

const AppContainer = styled.div`
    padding: 2rem;
    text-align: center;
`;

const AppControls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

const AppButtons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
`;

const AppContent = styled.div`
    margin-top: 2rem;
`;
