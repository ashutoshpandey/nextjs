import { Metadata } from "next";
import SiteLayout from "../_layouts/site-layout";
import Test from "../test/page";
import Link from "next/link";
import Card from "../custom-components/card";

export const metadata: Metadata = {
    title: "About page",
    description: "This is about us page",
};

export default function About() {
    return (
        <SiteLayout>
            <main>
                <h1>Welcome to about</h1>
                <hr />
                <Test />
                <br />
                <Card>
                    <Link href="/profile">Profile</Link>
                </Card>
                <hr />
                <Link href="/todos">Todos</Link>
                <hr />
                <Link href="/slugs/first/second/third">Slugs</Link>
            </main>
        </SiteLayout>
    );
}
