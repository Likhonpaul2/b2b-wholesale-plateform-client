import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 30px)', marginTop: '30px' }}>
            <span className="loading loading-infinity loading-xl animate-spin"></span>
        </div>
    );
};

export default Spinner;