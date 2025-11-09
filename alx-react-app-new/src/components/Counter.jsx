import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            textAlign: 'center',
            padding: '20px',
            margin: '20px',
            border: '2px solid #007BFF',
            borderRadius: '10px',
            backgroundColor: '#f8f9fa'
        }}>
            <p style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333'
            }}>
                Current Count: {count}
            </p>
            <div>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        margin: '5px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Increment
                </button>
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        margin: '5px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Decrement
                </button>
                <button 
                    onClick={() => setCount(0)}
                    style={{
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        margin: '5px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;