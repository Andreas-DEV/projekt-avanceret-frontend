/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Popup from 'reactjs-popup';
import styles from "@/app/components/Popup/popup.module.scss"
import 'reactjs-popup/dist/index.css';
import Data from "../../../../public/assets/mobile.json"

export default function PopupModule() {
    return (


        <Popup

            trigger={<img src={Data.content.getintouch.page.contact[0].img} />}
            modal
            nested
            >
            
            {(

                <div id={styles.container}>
                    <div id={styles.controls_container}>

                        <h1 id={styles.title}>Fill in and submit the form and we will contact you.</h1>

                        <div id={styles.content}>

                            <h3 id={styles.label}>Name</h3>

                            <input type="text" name="" id={styles.input_name} />


                            <h3 id={styles.label}>Email</h3>

                            <input type="text" name="" id={styles.input_email} />

                            <h3 id={styles.label}>Comment</h3>

                            <textarea name="" id={styles.input_textarea} cols="30" rows="10"></textarea>

                            <button id={styles.button}>Submit</button>



                        </div>

                        <div id={styles.actions}>


                        </div>
                    </div>
                </div>
            )}

        </Popup >
      



    )
    }

