/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import styles from "@/app/Maintainable/page.module.scss"
import Data from "../../../../../public/assets/data.json"


export default function Desktop() {
    return (
        <main id={styles.mainContainer}>

            <div id={styles.menuContainer}>


                <div id={styles.menuContainer}>
                    <Link href={'/'}>
                        <img id={styles.box} src={Data.content.subsides.maintainable.images.back} alt="" />
                    </Link>
                    <Link href={'/WhatWeDo'}>
                        <img id={styles.box} src={Data.content.subsides.whatwedo.images.nav} alt="" />
                    </Link>

                    <div id={styles.firstbox}>
                        <Link href={'/Maintainable'}>
                            <img src={Data.content.subsides.maintainable.images.nav} alt="" />
                        </Link>
                        <Link href={'/WhatWeDo'}>
                            <img id={styles.where} src={Data.content.subsides.maintainable.images.where} alt="" />
                        </Link>
                    </div>

                    <Link href={'/GetInTouch'}>
                        <img src={Data.content.subsides.maintainable.images.menu[1]} alt="" />
                    </Link>

                </div>

            </div>

            <div id={styles.contentContainer}>

                <img id={styles.woman} src={Data.content.subsides.maintainable.images.woman} alt="" />

                <div id={styles.textContainer}>

                    <h3 id={styles.textTitle}>
                        {Data.content.subsides.maintainable.subtitle} <span id={styles.matter}>{Data.content.subsides.maintainable.subtitle2}</span> ...
                    </h3>

                    <p id={styles.textAlone}>
                        {Data.content.subsides.maintainable.starttext}
                    </p>

                    <p id={styles.textMain}>
                        {Data.content.subsides.maintainable.text}
                    </p>

                    <p id={styles.textMiddle}>
                        {Data.content.subsides.maintainable.endtext}
                    </p>


                    <h3 id={styles.imgText}>

                        {Data.content.subsides.maintainable.title}

                    </h3>
                </div>


            </div>




        </main>
    )
}