import React, { useState } from 'react'
import Twitter from './../assets/twitter.png'
import Reload from './../assets/refresh.png'
import './randomquote.css'
import v from './../assets/vsym.png'
const Randomquote = () => {

    let quotes=[];
    async function loadQuotes(){
        const response = await fetch('https://type.fit/api/quotes');
        quotes=await response.json();

    }

    const [quote,setquote]=useState({
        text:"One who touches his parents foot daily, He never faces the situation in his life to touch others foot. ",
        author :"Ravindrasinh Jadeja"
    })

    const random = ()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)]
        setquote(select);
    }

    const twitter=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author .split(',')[0]}`)

    }
    loadQuotes()
  return (
    <>
    
        <div className='container'>
        <img src={v} alt='' className='vimg'/>
        <div className='quote'>
            {
                quote.text
            }
        </div>
        <div className='line'>

        </div>
        <div className='bottom'>
            <div className='aut'>
                - {quote.author .split(',')[0]}
            </div>
            <div className='icons'>
               <img src={Twitter} alt='' onClick={()=>{twitter()}} />
                <img src={Reload} alt='' onClick={()=>{random()}} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Randomquote