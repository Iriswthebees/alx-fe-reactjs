function Header() {
    return (
        <div>
            <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center'}} >
                <h1 style={{ margin: 0, fontSize: '28px' }}>My Favorite Cities</h1>
                <p style={{ margin: '6px 0 0', fontSize: '14px', opacity: 0.9 }}>A small list of places I love</p>
            </header>  
        </div>
    );
}

export default Header;