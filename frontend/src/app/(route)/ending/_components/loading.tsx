'use client'
import React from "react";


const Loading: React.FC  = () => {

    return (
        <div className="flex justify-center items-center w-auto h-auto mt-15 relative">
            <div className="border-t-8 border-t-yellow border-8 border-white h-64 w-64 rounded-full animate-spinner"></div>
            <div className="absolute text-xl font-semibold">과연 점수는?!</div>
        </div>
    )
}

export default Loading

