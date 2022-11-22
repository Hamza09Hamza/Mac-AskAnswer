import React from 'react';
import styles from "../../styles/Home.module.css"
import Circul from '../Circurls';
import stylesSign from "../../styles/Signin&up.module.css"
import { useState } from 'react';

const SignInPage = () => {
        const [Email,setEmail]=useState('')
        const [Password,setPassword]=useState('')
        const [Close, setClose]=useState(true)
        const FocusInputs=(child)=>{
            if(!child.className.includes(stylesSign.LabelsWInputsFocused)){
                child.className=child.className+" "+stylesSign.LabelsWInputsFocused
            }
        }
        const UnFocusInputs=(child,value)=>{
            if(value ==""){
                console.log(value)
                child.className=child.className.replace(stylesSign.LabelsWInputsFocused,"")
            }
        }
        
    return ( <>
            <main className={styles.Main}>    
                <Circul number={"first"}/>
                <Circul number={"seconde"}/>
                <Circul number={"fifth"}/> 
                <header className={stylesSign.inUpHeader}>
                    <img src="/Logo.png" className={stylesSign.LogoIcon} alt="Logo" />
                    <a href='/' className={stylesSign.HomeLink} > Home </a >
                </header>
                    <h1 className={stylesSign.H1Elm}  > Register in your Account  </h1>
                <section className={stylesSign.SectionInputsSignIns}>
                        <div className={stylesSign.Relativebox}>
                            <label className={stylesSign.Labels} for="Email" >
                             Email
                            </label>
                            <img src="/Sign/mail.png" alt="" style={{height:"35%",top:"19px"}} className={stylesSign.ImageInput} />
                            <input
                                value={Email}
                                id="Email" type={"email"}
                                onChange={e=>setEmail(e.target.value)}
                                className={stylesSign.InputDesign+' '+stylesSign.InputWidth}
                                onFocus={(e)=>FocusInputs(e.currentTarget.parentElement.children[0])}
                                onBlur={(e)=>UnFocusInputs(e.currentTarget.parentElement.children[0],e.target.value)}
                            />
                        </div>
                        <div className={stylesSign.Relativebox}>
                            <label className={stylesSign.Labels} for="Password" >
                             Password
                            </label>
                            <img src={Close ? "/Sign/eyeClosed.png" : "/Sign/eyeOpen.png"} onClick={()=>setClose(!Close)}  alt="" style={{cursor:"pointer"}} className={stylesSign.ImageInput} />
                            <input
                                 value={Password}
                                id="Password" type={Close ? "password" : "text"}
                                onChange={e=>setPassword(e.target.value)}
                                className={stylesSign.InputDesign+' '+stylesSign.InputWidth}
                                onFocus={(e)=>FocusInputs(e.currentTarget.parentElement.children[0])}
                                onBlur={(e)=>UnFocusInputs(e.currentTarget.parentElement.children[0],e.target.value)}
                            />
                        </div>
                </section>
                    <span className={stylesSign.SigninSpan}>
                        New member  ?  
                        <a  href="/signUp" className={stylesSign.SigninLink}>
                             Create new Account 
                        </a>
                    </span>
                <section className={stylesSign.BtnsSection}>   
                    <button className={stylesSign.Btn+" "+stylesSign.MethBtn}>
                        Change Methode
                    </button>
                    <button className={stylesSign.Btn+" "+stylesSign.Sumb} >
                        Register
                    </button>
                </section>
            </main>
    </> );
}
 
export default SignInPage;