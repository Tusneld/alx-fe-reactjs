function About() {
    return (
        <div style={{ 
            padding: '40px',
            backgroundColor: '#f8f9fa',
            minHeight: 'calc(100vh - 200px)'
        }}>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>About Us</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    Our company has been providing top-notch services since 1990. 
                    We specialize in various fields including technology, marketing, and consultancy.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                    With over 30 years of experience, we have helped thousands of businesses 
                    achieve their goals through our innovative solutions and dedicated support.
                </p>
            </div>
        </div>
    );
}

export default About;