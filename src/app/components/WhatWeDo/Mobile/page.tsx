/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "@/app/components/WhatWeDo/Mobile/page.module.scss"
import Data from "../../../../../public/assets/mobile.json"

export default function Mobile() {
    return (
        <main id={styles.mainContainer}>

            <header id={styles.headerContainer}>

                <img src={Data.content.whatwedo.header.back} alt="" />

                <div id={styles.menuContainer}>

                    <div id={styles.navContainer}>

                        <Link href={'/WhatWeDo'}>

                            <img id={styles.absolute} src={Data.content.whatwedo.header.menu[0].where} alt="" />
                            <img id={styles.test} src={Data.content.whatwedo.header.menu[0].nav} alt="" />

                        </Link>

                    </div>

                    <Link href={'/Maintainable'}>
                        <img id={styles.test} src={Data.content.whatwedo.header.menu[1].nav} alt="" />
                    </Link>

                    <Link href={'/GetInTouch'}>
                        <img id={styles.test} src={Data.content.whatwedo.header.menu[2].nav} alt="" />
                    </Link>

                </div>

            </header>

            <section id={styles.sectionContainer}>

                <img src={Data.content.whatwedo.page.img} id={styles.sectionHero} alt="" />

                <h1 id={styles.sectionTitle}>{Data.content.whatwedo.page.text.title1} <span id={styles.sectionTitleSpan}>{Data.content.whatwedo.page.text.title2}</span> ...</h1>

                <p id={styles.sectionText}>
                    {Data.content.whatwedo.page.text.text}
                </p>

                <p id={styles.sectionText}>
                    {Data.content.whatwedo.page.text.text}
                </p>
                <p id={styles.sectionText}>
                    {Data.content.whatwedo.page.text.endtext}
                </p>

            </section>

            <img src={Data.content.globals.logo} id={styles.logo} alt="" />

        </main>
    )
}