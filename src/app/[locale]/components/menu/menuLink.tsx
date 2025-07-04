"use client";

import Link from 'next/link';
import classes from "@/src/app/[locale]/components/menu/menuLink.module.css";
import { usePathname } from "next/navigation";

type MenuLinkProps = { 
    href: string; 
    children: React.ReactNode 
};

export default function MenuLink({ href, children }: MenuLinkProps) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
            {children}
        </Link>
    );
}