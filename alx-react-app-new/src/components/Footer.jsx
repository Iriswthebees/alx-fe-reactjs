function Footer() {
    return (
        <div>
           <footer style={{backgroundColor: '#0f172a', color: '#e6eef8', padding: '14px 20px', textAlign: 'center' }}> 
                <small>© {new Date().getFullYear()} - City Lovers. All rights reserved</small>           </footer>
        </div>
    );
}

export default Footer;