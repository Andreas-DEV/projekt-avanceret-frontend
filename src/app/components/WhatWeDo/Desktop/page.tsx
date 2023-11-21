/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link"
import styles from "@/app/WhatWeDo/page.module.scss"
import React, { FC, useState, useEffect } from 'react';
import Data from "../../../../../public/assets/data.json"

export default function Desktop() {
    return (
        <main id={styles.mainContainer}>

        <div id={styles.menuContainer}>


            <div id={styles.menuContainer}>
                <Link href={'/'}>
                    <img id={styles.box} src={Data.content.subsides.whatwedo.images.back} alt="" />
                </Link>

                <div id={styles.firstbox}>
                    <Link href={'/WhatWeDo'}>
                        <img id={styles.box} src={Data.content.subsides.whatwedo.images.nav} alt="" />
                    </Link>
                    <Link href={'/WhatWeDo'}>
                        <img id={styles.where} src={Data.content.subsides.whatwedo.images.where} alt="" />
                    </Link>
                </div>
            </div>

            {
                Data.content.subsides.whatwedo.images.menu.map((element: any, index: number) => (

                    <div key={index} id={styles.menuContainer}>
                        <Link href={Data.content.href[index + 2]}>
                            <img id={styles.box} src={Data.content.subsides.whatwedo.images.menu[index]} alt="" />

                        </Link>
                    </div>

                ))
            }
        </div>

        <div id={styles.contentContainer}>

            <img id={styles.woman} src={Data.content.subsides.whatwedo.images.woman} alt="" />

            <div id={styles.textContainer}>

                <h3 id={styles.textTitle}>
                    {Data.content.subsides.whatwedo.subtitle} <span id={styles.matter}>{Data.content.subsides.whatwedo.subtitle2}</span> ...
                </h3>

                <p id={styles.textAlone}>
                    {Data.content.subsides.whatwedo.starttext}
                </p>

                <p id={styles.textMain}>
                    {Data.content.subsides.whatwedo.text}
                </p>

                <p id={styles.textMiddle}>
                    {Data.content.subsides.whatwedo.endtext}
                </p>

                <p id={styles.textEnd}>
                    {Data.content.subsides.whatwedo.lasttext}
                </p>
                <h3 id={styles.imgText}>

                    {Data.content.subsides.whatwedo.title}

                </h3>

            </div>

        </div>




    </main>
    )
}