import { GetStaticProps } from "next";
import React, { useState } from "react";
import { HTag, Ptag, Rating, Tag } from "../components";
import { Button } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <HTag tag="h1">Заголовок</HTag>
            <Button appearance="primary" className="dsada" arrow="right">
                Кнопка
            </Button>
            <Button appearance="ghost" arrow="down">
                Кнопка
            </Button>
            <Ptag size="s">Текст</Ptag>
            <Ptag>Текст</Ptag>
            <Ptag size="l">Текст</Ptag>
            <Tag size="s" color="ghost">
                S
            </Tag>
            <Tag size="m" color="red">
                M
            </Tag>
            <Tag size="s" color="green">
                S
            </Tag>
            <Tag size="s" color="primary">
                S
            </Tag>
            <Tag size="s" color="gray">
                S
            </Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string,unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
