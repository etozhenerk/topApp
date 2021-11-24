import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Card, HhData, HTag, Tag } from "../../components";
import React from "react";
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag="h1">{page.title}</HTag>
                {products && (
                    <Tag color="gray" size="m">
                        {products.length}
                    </Tag>
                )}
                <span>Сортировка</span>
            </div>
            <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
            <div className={styles.hhTitle}>
                <HTag tag="h2">Вакансии - {page.category}</HTag>
                <Tag color="red" size="m">
                    hh.ru
                </Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
        </div>
    );
};
