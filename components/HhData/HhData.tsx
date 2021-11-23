import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import cn from "classnames";
import React from "react";
import { Card } from "..";

export const HhData = ({ count }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countCalue}>{count}</div>
            </Card>
        </div>
    );
};
