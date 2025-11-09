import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{ 
            padding: '40px',
            backgroundColor: '#f8f9fa',
            minHeight: 'calc(100vh - 200px)'
        }}>
            <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>Contact Us</h1>
            <div style={{ 
                maxWidth: '600px', 
                margin: '0 auto',
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ 
                                width: '100%', 
                                padding: '12px', 
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ 
                                width: '100%', 
                                padding: '12px', 
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px'
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ 
                                width: '100%', 
                                padding: '12px', 
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                fontSize: '16px',
                                minHeight: '150px',
                                resize: 'vertical'
                            }}
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        style={{
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            padding: '15px 30px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            width: '100%'
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;