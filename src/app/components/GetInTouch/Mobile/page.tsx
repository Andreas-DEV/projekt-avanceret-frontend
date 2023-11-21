/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Data from "../../../../../public/assets/mobile.json"
import styles from "@/app/components/GetInTouch/Mobile/page.module.scss"

export default function Mobile() {
    return (
        <main id={styles.mainContainer}>

            <header id={styles.headerContainer}>

                <img src={Data.content.getintouch.header.back} alt="" />

                <div id={styles.menuContainer}>

                    <Link href={'/WhatWeDo'}>

                        <img id={styles.absolute} src={Data.content.getintouch.header.menu[0].nav} alt="" />


                    </Link>
                    <Link href={'/Maintainable'}>
                        <img id={styles.test} src={Data.content.getintouch.header.menu[1].nav} alt="" />
                    </Link>

                    <div id={styles.navContainer}>

                        <Link href={'/GetInTouch'}>
                            <img id={styles.absolute} src={Data.content.getintouch.header.menu[2].where} alt="" />
                            <img id={styles.test} src={Data.content.getintouch.header.menu[2].nav} alt="" />
                        </Link>

                    </div>



                </div>

            </header>

            <section id={styles.sectionContainer}>

                <img src={Data.content.getintouch.page.img} id={styles.sectionHero} alt="" />

                <h1 id={styles.sectionTitle}>{Data.content.getintouch.page.text.title1} <span id={styles.sectionTitleSpan}>{Data.content.getintouch.page.text.title2}</span> ...</h1>

                <p id={styles.sectionText}>
                    {Data.content.getintouch.page.text.text}
                </p>

                <p id={styles.sectionText}>
                    {Data.content.getintouch.page.text.text}
                </p>

                <div id={styles.flex}>
                {
                    Data.content.getintouch.page.contact.map((el: any, index: number) => (
                        <div key={index}>
                            <div id={styles.personalinfo}>
                                <img src={Data.content.getintouch.page.contact[index].img} alt="" />
                                <p id={styles.contactinfo}>
                                    {Data.content.getintouch.page.contact[index].text}
                                </p>
                            </div>
                        </div>
                    ))
                }

                </div>
            </section>


            <img src={Data.content.globals.logo2} id={styles.logo} alt="" />

        </main>
    )
}