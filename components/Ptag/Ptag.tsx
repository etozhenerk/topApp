import { PtagProps } from "./Ptag.prop";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({ size = "m", children, className, ...props }: PtagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === "s",
                [styles.l]: size === "l",
            })}
            {...props}
        >
            {children}
        </p>
    );
};