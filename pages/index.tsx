import React, { useEffect, useState } from "react";
import { HTag, Ptag, Rating, Tag } from "../components";
import { Button } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <HTag tag="h1">Заголовок</HTag>
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
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}

export default withLayout(Home);