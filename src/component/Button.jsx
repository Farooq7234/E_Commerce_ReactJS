import React, { useState } from 'react';

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#6a9739]",
    textColor = "",
    className = "",
    ...props
}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 6000);
    };

    return (
        <button
            onClick={handleClick}
            className={`px-4 py-2 rounded-lg hover:bg-[#8bc34a] text-white ${bgColor} ${textColor} ${className} ${isClicked ? 'animate-pulse' : ''}`}
            {...props}
        >
            {children}
        </button>
    );
}
