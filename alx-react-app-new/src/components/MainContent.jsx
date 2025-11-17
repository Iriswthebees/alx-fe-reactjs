function MainContent() {
    return (
        <div>
            <main style={{ padding: '24px', backgroundColor: 'white', minHeight: '60vh' }}>
                <section style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <article style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                        <h3 style={{color: 'black', marginTop: 0 }}>Places to Visit</h3>
                        <p style={{color: 'navy', margin: '6px 0 12px' }}>Here are some cities I love — each has its own vibe and design inspiration.</p>
                        <ul style={{ paddingLeft: '20px', margin: 0 }}>
                            <li style={{color: 'navy', marginBottom: '6px' }}>Nairobi — lively markets and coffee</li>
                            <li style={{color: 'navy', marginBottom: '6px' }}>Mombasa — coastal architecture and beaches</li>
                            <li style={{color: 'navy', marginBottom: '6px' }}>Kisumu — lakeside views and relaxed pace</li>
                        </ul>
                    </article>
                </section> 
            </main>
        </div>
    );
}

export default MainContent;