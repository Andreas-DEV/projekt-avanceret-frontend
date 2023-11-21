/* eslint-disable @next/next/no-img-element */

'use client'
import styles from './page.module.scss'
import data from "../../public/assets/data.json"
import Link from 'next/link';
import React, { FC, useState, useEffect } from 'react';
import Desktop from './components/Frontpage/Desktop/page';
import Mobile from './components/Frontpage/Mobile/page';


export default function Home() {

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
      {
        isMobile ? (
          <Mobile />
        ) : (
          <Desktop />
        )
      }
    </>
  )
}
