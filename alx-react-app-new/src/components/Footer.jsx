function Footer() {
    return (
        <div>
           <footer style={{backgroundColor: 'navy', color: 'white', padding: '14px 20px', textAlign: 'center' }}> 
                <small>© {new Date().getFullYear()} - City Lovers. All rights reserved</small>           </footer>
        </div>
    );
}

export default Footer;