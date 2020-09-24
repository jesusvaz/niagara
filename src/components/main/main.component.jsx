import React  ,{useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import WORK_SAMPLES from '../work/samples';
import Content from '../content/content.component';
import MenuImage from '../picture/picture.copmponent';
import Arrow from '../arrow/arrow.component';
import logo from  '../images/Logo.png';

//https://github.com/jesusvaz/niagara.git

import './main.styles.scss';
 
const Main = () => {
   const [lang,setLang] = useState('en');
   const [menu,setMenu] = useState(WORK_SAMPLES);
   const [menuCounter,setmenuCounter] = useState(0);


   const Advance = (add) => {
       let arrayLength = WORK_SAMPLES.samples.length;
       
      // debugger;
       if( menuCounter < arrayLength ) {
           
           add === '+' ? setmenuCounter(menuCounter + 1) : setmenuCounter(menuCounter - 1)
           localStorage.setItem('menuCounter', menuCounter);
       }
   }



   return (
       <>
            <h1>Waterproof</h1>
            <img width="200" height="200" src={logo} alt="waterproof logo" />
            {
              lang === "en" ?  <p>Leaks no more!</p> : <p>No mas goteras!</p>
            }
            <div className="deaderDropDown">
                <select name="language"
                onChange={
                        e => (setLang(e.target.value))
                    }>
                    <option value="en">English </option>
                    <option value="es">Espanol</option>
                
                </select>
            </div>

            <div  className="main">
                <div className="escription">
                <Content
                lang={lang}
                workSamples={WORK_SAMPLES.samples[menuCounter]}/>
            </div>
            <div className="description-img">
                <MenuImage menuInfo={WORK_SAMPLES.samples[menuCounter]} />
            </div>
            </div>
            
       {    
            (menuCounter >= 1) ? (
                    <button onClick={
                        () => Advance('-')
                    }><Arrow label={lang === 'en' ? ' << PREVIOUS' : ' << ANTERIOR'} /></button>
                ) : null
        }
    
         {
              (menuCounter < WORK_SAMPLES.samples.length - 1) ? (
                <button onClick={
                    () => Advance('+')
                }><Arrow label={lang === 'en' ? '  NEXT >>' : ' SIGUIENTE >>'} /></button>
                ) : null  
         }
       </>
         
   )
}
 
export default Main