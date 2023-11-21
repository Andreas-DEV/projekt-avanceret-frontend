/* eslint-disable @next/next/no-img-element */

'use client'
import React, { FC, useState, useEffect } from 'react';
import Desktop from "../components/Maintainable/Desktop/page";
import Mobile from "../components/Maintainable/Mobile/page";


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
            )

            }
        </>
    )
}