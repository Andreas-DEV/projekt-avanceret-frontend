/* eslint-disable @next/next/no-img-element */

'use client'
import React, { FC, useState, useEffect } from 'react';
import Mobile from "../components/WhatWeDo/Mobile/page"
import Desktop from "../components/WhatWeDo/Desktop/page"

export default function Page() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {isMobile ? (
                <Mobile />
            ) : (
                <Desktop />
            )}
        </>
    )
}

