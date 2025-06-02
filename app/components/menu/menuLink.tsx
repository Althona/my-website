"use client";

import Link from "next/link";
import classes from "./menuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ href, children }: { href: string, children: React.ReactNode }) {
    const path = usePathname();

    console.log("Current path:", path);

    return (
        <Link
            href={href}
            className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
            {children}
        </Link>
    );
}