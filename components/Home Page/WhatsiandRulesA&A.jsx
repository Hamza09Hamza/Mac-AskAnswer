import React from 'react'
import Circul from '../Circurls'
import styles from '../../styles/Home.module.css'
const WhatInAndRules = ({dataList, type}) => {
    return ( <>
        <main className={styles.Main}>
           {
           type=="what's in" ? 
            <>
                <Circul number={"fourth"}/>
                <Circul number={"seconde"}/>
                <Circul number={"fifth"}/> 
            </> 
            :
            null
          }

          { 
            type=="rules" 
                ?
            <>
                <Circul number={"sixth"}/>
                <Circul number={"first"}/>
                <Circul number={"third"}/> 
            </> 
            :
            null
        }
        
            <h1 className={styles.HeaderTitle}> 
            {
            type== "what's in" 
            ?
             "What's in Ask & Answer" 
            :
             "Our Rules are Simple: "
             } 
             </h1>
            <section className={styles.SectionDisplay}> 

                { 
                dataList.map((item)=>{
                       return (<>
                        <div className={styles.gridElements}>
                        <img src={item.URL} className={styles.componentImage} alt={item.alt} />
                        <div className={styles.componentText}>
                            <h2>{item.Title}</h2>
                            <span>
                                {item.Discription}
                            </span>
                        </div>
                        </div>
                        </>)
                })
            }

                
            </section>
            
        </main>
    </> );
}
 
export default WhatInAndRules;