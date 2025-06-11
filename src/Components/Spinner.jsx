import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-infinity loading-xl animate-spin"></span>
        </div>
    );
};

export default Spinner;