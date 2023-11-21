/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Data from "../../../../../public/assets/data.json"
import styles from "@/app/GetInTouch/page.module.scss"
import PopupModule from "@/app/components/Popup/popup"
import 'reactjs-popup/dist/index.css';

export default function Desktop() {


    return (
        <main id={styles.mainContainer}>
            <PopupModule />
            
            <div id={styles.menuContainer}>


                <div id={styles.menuContainer}>
                    <Link href={'/'}>
                        <img id={styles.box} src={Data.content.subsides.maintainable.images.back} alt="" />
                    </Link>
                    <Link href={'/WhatWeDo'}>
                        <img id={styles.box} src={Data.content.subsides.whatwedo.images.nav} alt="" />
                    </Link>

                    <Link href={'/Maintainable'}>
                        <img src={Data.content.subsides.maintainable.images.nav} alt="" />
                    </Link>
                    <div id={styles.firstbox}>
                        <Link href={'/GetInTouch'}>
                            <img src={Data.content.subsides.maintainable.images.menu[1]} alt="" />
                        </Link>
                        <Link href={'/WhatWeDo'}>
                            <img id={styles.where} src={Data.content.subsides.getintouch.images.where} alt="" />
                        </Link>
                    </div>


                </div>

            </div>

            <div id={styles.contentContainer}>

                <img id={styles.woman} src={Data.content.subsides.getintouch.images.man} alt="" />

                <div id={styles.textContainer}>

                    <h3 id={styles.textTitle}>
                        {Data.content.subsides.getintouch.subtitle} <span id={styles.matter}>{Data.content.subsides.getintouch.subtitle2}</span> ...
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

                    <div id={styles.infoContainer}>

                        {Data &&

                            Data.content.subsides.getintouch.images.module.map((element: any, index: number) => (

                                <div key={index}>

                                    <div id={styles.personalinfo}>
                                        <img src={Data.content.subsides.getintouch.images.module[index].img} alt="" />
                                        <p id={styles.contactinfo}>
                                            {Data.content.subsides.getintouch.images.module[index].text}
                                        </p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>


                    <h3 id={styles.imgText}>

                        {Data.content.subsides.getintouch.title}

                    </h3>
                </div>



            </div>
                    




        </main>
    )
}