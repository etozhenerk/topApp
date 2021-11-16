import { SidebarProps } from "./Sidebar.prop";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return <div {...props}>
        <Menu/>
    </div>;
};
