import React from "react";
import { HTag, Ptag } from "../components";
import { Button } from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <HTag tag="h1">Текст</HTag>
            <Button appearance="primary" className="dsada" arrow="right">Кнопка</Button>
            <Button appearance="ghost" arrow="down">Кнопка</Button>
            <Ptag size="s">Текст</Ptag>
            <Ptag>Текст</Ptag>
            <Ptag size="l">Текст</Ptag>
        </>
    );
}
