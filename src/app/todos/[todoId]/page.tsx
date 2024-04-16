'use client'
import Link from "next/link";

export default function ProductDetail({ params }: { params: { productId: number } }) {
    return (
        <main>
            <h1>Welcome to about</h1>
            <hr />
            <Link href="/todos">Go back to list</Link>
            <hr />

        </main>
    );
}
