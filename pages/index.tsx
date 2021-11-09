import React from "react";
import { HTag } from "../components";
import { Button } from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <HTag tag="h1">Текст</HTag>
            <Button appearance="primary" className="dsada">Кнопка</Button>
            <Button appearance="ghost">Кнопка</Button>
        </>
    );
}
