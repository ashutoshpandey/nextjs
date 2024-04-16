'use client'
import { useEffect, useState } from "react";
import Test from "../test/page";
import Link from "next/link";

interface Item {
    id: number;
    title: string;
}

export default function About() {
    const [items, setItems] = useState<Item[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();

            setItems(data);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect to run fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []);  // Empty dependency array means this effect will only run once after initial render

    return (
        <main>
            <h1>TODO List</h1>
            <hr />
            {items.map(item => (
                <div key={`${item.id}`}>
                    <Link href={`/todos/${item.id}`}>
                        {item.title}
                    </Link>
                </div>
            ))}
        </main>
    );
}
