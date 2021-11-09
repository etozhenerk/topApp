import React from "react";
import { HTag, Ptag, Tag } from "../components";
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
            <Tag size="s" color="ghost">S</Tag>
            <Tag size="m" color="red">M</Tag>
            <Tag size="s" color="green">S</Tag>
            <Tag size="s" color="primary">S</Tag>
            <Tag size="s" color="gray">S</Tag>
        </>
    );
}
