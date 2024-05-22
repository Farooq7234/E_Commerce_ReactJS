import React from 'react'

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#6a9739]",
    textColor = "",
    className = "",
    ...props
}){
    return  ( <button
    className={`px-4 py-2 rounded-lg hover:bg-[#8bc34a] text-white ${bgColor} ${textColor} ${className} `}
    {...props}
    >
        {children}
    </button>)
}