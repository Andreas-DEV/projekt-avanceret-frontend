/* eslint-disable @next/next/no-img-element */
import styles from './page.module.scss'
import data from "../../public/assets/data.json"
import Link from 'next/link';


export default function Home() {

  const frontpage = data.content.frontpage



  return (
    <main id={styles.mainContainer}>

      <img id={styles.logo} src={data.content.globals.logo} alt="" />

      <div id={styles.navigationContainer}>

        {

          data.content.frontpage.map((element: any, index: number) => (

            <div id={styles.navigationImg} key={index}>

              <Link href={data.content.href[index]}>

                <img id={styles.pointer} src={data.content.frontpage[index - 1]} alt="" />
              </Link>

            </div>

          ))
        }

        <div id={styles.test}>

          <Link href={data.content.href[3]}>
            <img id={styles.pointer} src={data.content.frontpage[2]} alt="" />
          </Link>


          <h3 id={styles.imgText}>

            {data.content.text.moretocome}

          </h3>

        </div>

      </div>



    </main>
  )
}
