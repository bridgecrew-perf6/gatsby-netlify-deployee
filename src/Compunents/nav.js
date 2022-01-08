import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./nav.module.css"
export default function Navbar() {
    return (<div className={styles.navbar}>

        <Link to="/">Home</Link>
        <Link to="/introduction">Introduction</Link>
        <Link to="/history1">History</Link>
        <Link to="/isostandard">ISO-Standard</Link>
        <Link to="/application">Application</Link>

    </div>)
}