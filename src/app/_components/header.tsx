export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src="logo.png" alt="Clan Logo" />
            </div>
            <h1>Ravens Oath</h1>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="/backstory">Clan Backstory</a></li>
                <li><a href="./recruitment/">Recruitment</a></li>
                <li><a href="./shop/">Shop</a></li>
            </ul>
        </header>
    )
}