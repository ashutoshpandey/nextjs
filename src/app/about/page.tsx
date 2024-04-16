'use client'
import { useEffect, useState } from "react";

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
            <h1>Welcome to about</h1>
            <hr />
            <select>
                {items.map(item => (
                    <option key={item.id} value={item.id}>
                        {item.title}
                    </option>
                ))}
            </select>
        </main>
    );
}
