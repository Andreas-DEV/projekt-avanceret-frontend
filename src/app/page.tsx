/* eslint-disable @next/next/no-img-element */

'use client'
import styles from './page.module.scss'
import data from "../../public/assets/data.json"
import Link from 'next/link';


export default function Home() {

  const frontpage = data.content.frontpage

  function test() {
    <Link href="/WhatWeDo"></Link>
    console.log('test');
    
  }

  return (
    <main id={styles.mainContainer}>

      <img id={styles.logo} src={data.content.globals.logo} alt="" />

      <div id={styles.navigationContainer}>

        {frontpage &&

          data.content.frontpage.map((element: any, index: number) => (

            <div id={styles.navigationImg} key={index}>

              <img id={styles.pointer} src={data.content.frontpage[index - 1]} alt="">
              </img>

            </div>

          ))
        }

        <div id={styles.test}>

          <img id={styles.pointer} onClick={test} src={data.content.frontpage[2]} alt="" />

          <h3 id={styles.imgText}>

            {data.content.text.moretocome}

          </h3>

        </div>

      </div>



    </main>
  )
}
