import Head from 'next/head'
import WhatInAndRules from '../components/Home Page/WhatsiandRulesA&A.jsx';
import HomePage from './../components/Home Page/HomePage.jsx';
import { Whatsin ,Rules } from '../public/data.js';


export default function Home() {
  return (
     <> 
     <Head>
        <title>Ask & Answer</title>
        <meta 
          name="description" 
          content={` Ask & Answer  is where you can find all  the  Answers for your Question 
          , Also  challenging your friends and compete with them or everbody about any subject `}/>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <HomePage />
      <WhatInAndRules key="what's in" dataList={Whatsin} type={"what's in"} />
      <WhatInAndRules key="rules"dataList={Rules} type={"rules"} />
     
    </>
  )
}
