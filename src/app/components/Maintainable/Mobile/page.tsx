/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Data from "../../../../../public/assets/mobile.json"
import styles from "@/app/components/Maintainable/Mobile/page.module.scss"

export default function Mobile() {
    return (
        <main id={styles.mainContainer}>

            <header id={styles.headerContainer}>

                <img src={Data.content.maintainable.header.back} alt="" />

                <div id={styles.menuContainer}>

                    <Link href={'/WhatWeDo'}>

                        <img id={styles.absolute} src={Data.content.maintainable.header.menu[0].nav} alt="" />


                    </Link>

                    <div id={styles.navContainer}>

                        <Link href={'/Maintainable'}>
                            <img id={styles.absolute} src={Data.content.maintainable.header.menu[1].where} alt="" />
                            <img id={styles.test} src={Data.content.maintainable.header.menu[1].nav} alt="" />
                        </Link>

                    </div>


                    <Link href={'/GetInTouch'}>
                        <img id={styles.test} src={Data.content.maintainable.header.menu[2].nav} alt="" />
                    </Link>

                </div>

            </header>

            <section id={styles.sectionContainer}>

                <img src={Data.content.maintainable.page.img} id={styles.sectionHero} alt="" />

                <h1 id={styles.sectionTitle}>{Data.content.maintainable.page.text.title1} <span id={styles.sectionTitleSpan}>{Data.content.maintainable.page.text.title2}</span> ...</h1>

                <p id={styles.sectionText}>
                    {Data.content.maintainable.page.text.text}
                </p>

                <p id={styles.sectionText}>
                    {Data.content.maintainable.page.text.text}
                </p>
            </section>

            <img src={Data.content.globals.logo} id={styles.logo} alt="" />

        </main>
    )
}