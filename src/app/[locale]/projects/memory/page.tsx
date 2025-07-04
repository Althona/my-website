import Link from "next/link";
import classes from "@/src/app/[locale]/projects/memory/page.module.css";

export default function MemoryPage() {
    return (
        <>
            <h1>Memory</h1>
            <p>This is the Memory page.</p>
            <Link className={classes.githubLink} target="_blank" href="https://github.com/Althona/Trafic-help-Javascript">Github</Link>
        </>
    );
}