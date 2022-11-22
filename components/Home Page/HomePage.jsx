import React from 'react'
import styles from '../../styles/Home.module.css'
import Circul from '../Circurls'
const HomePage = () => {
    return ( <>
        <main className={styles.Main}>
            <Circul number={"first"}/>
            <Circul number={"seconde"}/>
            <Circul number={"third"}/>
            <header className={styles.MainHeader}>
                <span className={styles.Contact}>
                    Contact us
                </span>
                <a href='/signIn' className={styles.Join}>
                    Join
                </a>
            </header>
            <div className={styles.AAdisplay}>
                <img src="/Logo.png"  className={styles.LogoDisplay} />
                <div  className={styles.text}>
                    <h1>Welcom to Ask & Answer</h1>
                    <span>
                            A&A is where you can search for any topics that intrest you,
                            challenge other friends in any subjects
                            and Also chat with multiple persons in any domain you like  
                    </span>
                </div>
            </div>
            <div className={styles.MediaSM}>
                <button className={styles.Join}>
                    Join 
                </button>
            </div>
            <div></div>
        </main>
    </> );
}
 
export default HomePage;