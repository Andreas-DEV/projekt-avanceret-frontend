/* eslint-disable @next/next/no-img-element */
'use client'
import Desktop from "../components/GetInTouch/Desktop/page";
import Mobile from "../components/GetInTouch/Mobile/page";
import React, { FC, useState, useEffect } from 'react';

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