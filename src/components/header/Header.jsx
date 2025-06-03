import "./Header.css"

function Header() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 21;

    let isOpen;

    if (hour >= openHour && hour <= closeHour) {
        isOpen = true;
    } else {
        isOpen = false;
    }

    return (
        <header className="header">
            <h1>Электронный магазин</h1>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Домой</a></li>
                    <li><a href="#catalog">Каталог</a></li>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
            <div className="working-hours">
                {isOpen ? <p>Мы сейчас открыты. Время: {openHour}:00 - {closeHour}:00</p> :
                    <p>Мы сейчас закрыты. Время: {closeHour}:00 - {openHour}:00</p>}

            </div>
        </header>
    )
}

export default Header
