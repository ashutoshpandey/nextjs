export default function Card({ children }: { children: React.ReactNode }) {
    const cardStyle = {
        padding: "100px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5"
    };

    return <div style={cardStyle}>{children}</div>;
};