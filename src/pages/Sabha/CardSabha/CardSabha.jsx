import React,{useState} from 'react'
import "./styles.css"

const CardSabha = ({sabha,title,descr}) => {
   const [conuting, setconut] = useState(0);
   function handclick(){
    setconut((conuting)=>conuting+1)
   }
   function handlerest(){
    setconut(0)
   }
  return (
    <div className='tope'>
        <div className='counter'>
       <div className='image'>
       <img   src={sabha} alt="sabha" />
       </div>
      <span className='counter-number'>{conuting}</span>
            <button onClick={handclick} className='click'></button>
      <button onClick={handlerest} className='reset'></button>
        </div>
      <h3>
        {title}
      </h3>
     <p>
      {descr}
     </p>
    </div>
  )
}

export default CardSabha