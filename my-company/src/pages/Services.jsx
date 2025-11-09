function Services() {
    return (
        <div style={{ 
            padding: '40px',
            minHeight: 'calc(100vh - 200px)'
        }}>
            <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>Our Services</h1>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    border: '2px solid #007BFF'
                }}>
                    <h3 style={{ color: '#007BFF' }}>Technology Consulting</h3>
                    <p>Expert advice on implementing the latest technologies to grow your business.</p>
                </div>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    border: '2px solid #28a745'
                }}>
                    <h3 style={{ color: '#28a745' }}>Market Analysis</h3>
                    <p>Comprehensive market research and analysis to guide your business decisions.</p>
                </div>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    border: '2px solid #dc3545'
                }}>
                    <h3 style={{ color: '#dc3545' }}>Product Development</h3>
                    <p>End-to-end product development services from concept to deployment.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;