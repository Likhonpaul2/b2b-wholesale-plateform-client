import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-infinity loading-xl animate-spin"></span>
            {/* <span className="loading loading-infinity  loading-xl animate-spin"></span> */}
            {/* <span className="loading loading-ball loading-xl animate-ping"></span>
            <span className="loading loading-ball loading-xl animate-ping"></span> */}
        </div>
    );
};

export default Spinner;