/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "@/app/components/Frontpage/Mobile/page.module.scss"
import Data from "../../../../../public/assets/mobile.json"

export default function Mobile() {

    return (

        <main id={styles.mainContainer}>
            <img id={styles.logo} src={Data.content.globals.finalLogo} alt="" />

            <div id={styles.imgContainer}>
                {
                    Data.content.frontpage.map((el: any, index: number) => (
                        <img id={styles.img} key={index} src={Data.content.frontpage[index]} alt="" />
                    ))
                }

            </div>
            <p id={styles.title}>
                {Data.content.globals.frontpageTitle}
            </p>
        </main>

    )
}