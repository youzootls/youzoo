"use client"

import React, { useState } from 'react';

export default function TruncatedText({ text }: { text: any }) {
    const [isTruncated, setIsTruncated] = useState(true);
    const maxLength = 350; // Nombre de caractères à afficher avant de tronquer

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };

    const needTruncate = text?.length > maxLength;
    const truncatedText = text?.length > maxLength
        ? text.substring(0, maxLength) + '...'
        : text;

    return (
        <>
            {isTruncated ? truncatedText : text}
            {needTruncate && <button onClick={toggleTruncate} className="text-blue-500 hover:underline">
                {isTruncated ? 'plus' : 'moins'}
            </button>}
        </>
    );
};

