import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import cn from "classnames";
import React from "react";
import { Card } from "..";
import RateIcon from "./rate.svg";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{juniorSalary}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.field} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{middleSalary}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.field} />
                        <RateIcon className={styles.field} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{seniorSalary}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.field} />
                        <RateIcon className={styles.field} />
                        <RateIcon className={styles.field} />
                    </div>
                </div>
            </Card>
        </div>
    );
};
