import React from 'react';

const ClickBtn = ({data}) => {
    return (
        <button
            className="font-bold border cursor-pointer text-lg uppercase w-30 h-10 text-[#000000] justify-center transition-colors duration-300"
        >
            {data}
        </button>
    );
};

export default ClickBtn;