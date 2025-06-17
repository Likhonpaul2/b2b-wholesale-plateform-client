import React, { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(() => {
        document.title = "404 found | B2B Wholesale Platform";
    }, []);
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            fontFamily: 'Segoe UI, sans-serif',
            overflow: 'hidden'
        }}>
            <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    marginBottom: '32px',
                    animation: 'float 2s ease-in-out infinite'
                }}
            >
                <circle cx="75" cy="75" r="70" fill="#fff2" />
                <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="64" fill="#fff" fontWeight="bold">404</text>
            </svg>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '16px',
                letterSpacing: '2px',
                textShadow: '0 2px 8px #0002'
            }}>
                Oops! Page Not Found
            </h1>
            <p style={{
                fontSize: '1.2rem',
                marginBottom: '32px',
                color: '#f3f3f3',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <a
                href="/"
                style={{
                    padding: '12px 32px',
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    borderRadius: '25px',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 24px #0002',
                    transition: 'background 0.3s, transform 0.3s',
                    backdropFilter: 'blur(2px)'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            >
                Go Home
            </a>
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0px);}
                        50% { transform: translateY(-20px);}
                        100% { transform: translateY(0px);}
                    }
                `}
            </style>
        </div>
    );
};

export default ErrorPage;