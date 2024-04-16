'use client'

export default function Slugs({ params }: { params: { slugs: string[]; } }) {
    return (
        <main>
            <h1>Here are the passed slugs</h1>
            <hr />
            <ul>
                {params.slugs.map(slug => (
                    <li key={slug}>{slug}</li> // Correct usage of JSX in map function
                ))}
            </ul>

        </main>
    );
}
