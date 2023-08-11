import React from "react";
import * as layoutStyles from "./layout.module.css"
import {ReactElement} from "react";

type LayoutProps = {
    children?: React.ReactElement
}

const Layout = ({children}: LayoutProps): ReactElement | null => {
    return (
        <div className={layoutStyles}>{children}</div>
    )
}

export default Layout
