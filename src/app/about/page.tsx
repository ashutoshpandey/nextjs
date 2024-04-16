'use client'
import Test from "../test/page";
import Link from "next/link";

export default function About() {
    return (
        <main>
            <h1>Welcome to about</h1>
            <hr />
            <Test />
            <br />
            <Link href="/profile">Profile</Link>
            <hr />
            <Link href="/todos">Todos</Link>
            <hr />
            <Link href="/slugs/first/second/third">Slugs</Link>
        </main>
    );
}
