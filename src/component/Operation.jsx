import React, { useEffect, useState } from 'react'
import "./Operation.css";


export default function Operation() {

const [count , setCount] = useState(0);
const[isVisible , setIsVisible] = useState(true);
const [message , setMessage] = useState('');
const [changColor , setChangeColor] = useState("lightblue");
const [showHelloMessage , setShowHelloMessage] = useState(true)

useEffect (()=> {
    if (count >= 1000){
    setIsVisible(false);}
    else if (count <= 0){
    setIsVisible(true);}

}, [count]); 

useEffect(() => { if (count === 10 || count === 100 || count === 1000){
  setChangeColor(
    count === 10 ? "yellow" : count === 100 ? "green" : "red"
  );   }
}, [count]);

useEffect(() => {
  const timer = setTimeout(() => setShowHelloMessage(false), 2000);
}, []); 



const  increment = () =>{
  
  if (count < 1000 ){
  
        if (count < 10){
          setMessage("hello 10");
          setCount(count + 1);
        }
       else if (count <100){
         setMessage( "hello 100");
        setCount(count + 10);
       }
       else {
         setMessage( "hello 1000")
        setCount(count + 100);
       }
      
      }};

    const  decrement  = () =>{if (count <= 1000  && count>100){
        setMessage( "hello 1000")
          setCount(count-100);
        
    } else if (count <=100 && count >10){
      setMessage( "hello 100")
        setCount(count-10);
       }
       else if (count <= 10 && count >=1 ){
         setMessage("hello 10")
        setCount(count-1);
       }
      
      } ;





  return (
    <>
    <div className='content'>
    <div>{count}</div>
    <div>{message}</div>
    
    
   { isVisible ? (<button className='butt1'  onClick = { increment }   style={{backgroundColor: changColor }}>inc</button>) : 
    (<button className='butt1'  onClick = { decrement}  style={{backgroundColor: changColor }}>dec</button> )}
   {showHelloMessage && <div className='hello-div'>hello world</div>}
   </div>
    </>
  );
}
