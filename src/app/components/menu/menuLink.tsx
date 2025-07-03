"use client";

import { Link } from "@/src/i18n/navigation";
import classes from "@/src/app/components/menu/menuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ href, children }: { href: string, children: React.ReactNode }) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
            {children}
        </Link>
    );
}