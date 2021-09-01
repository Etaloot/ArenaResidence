import React from "react";
import ParteneriComponent from "./ParteneriComponent";
import "./ParteneriPage.scss";

import Barrier from "../../images/parteneri/Barrier_Bistrita2.png";
import Porotherm from "../../images/parteneri/Porotherm2.png";
import Rehau from "../../images/parteneri/Rehau-Logo.jpg";
import Scheider from "../../images/parteneri/schneider-electric-vector-logo.png";


const ParteneriPage = () => {
  return (
    <div className="container">
      <h1 className="title-parteneri">PARTENERI</h1>
        <p className='text-content'>
          Eat imagine you chiefly few end ferrars complete. Be visitor females am ferrars inquiry.
           Latter law remark two lively thrown. Spot set they know rest its.
        </p>
      <div className='big-box'>
        <div className='box-1'>
                <div className='style-boxing-1'> 
                     <img src={Barrier} alt="barrier logo" />
                </div>
                <div className='style-boxing-2' >
                   <h1 className='header-text'>BARRIER</h1>
                   <p className='text'>Profesioniștii Barrier sunt alături de tine din prima clipă și îți oferă soluții personalizate, simple și fiabile pentru spațiul pe care ti-l doresti.</p>
                </div>
        </div>

        <div className='box-2'>
           <div className='style-boxing-1'>
               <img src={Porotherm} alt="porotherm" />
           </div>
           <div className='style-boxing-2' >
               <h1 className='header-text'>POROTHERM</h1>
               <p className='text'> Porotherm 36.5 TermoPlus este un bloc ceramic slefuit cu insertii de vata minerala bazaltica, realizat in fabricile din Germania din material durabil.</p>
           </div>
        </div>
      </div> 


      <div className='big-box2'>
        <div className='box-3'>
           <div className='style-boxing-1'>
                <img className='rehau' src={Rehau} alt="rehau" />
           </div>
           <div className='style-boxing-2' >
               <h1 className='header-text'>REHAU</h1>
               <p className='text'>REHAU - specialist în soluții pe bază de polimeri în sectoarele construcțiilor, auto și industrial, cu peste 20.000 de angajați în întreaga lume.</p>
           </div>
      </div>
      <div className='box-4'>
           <div className='style-boxing-1'>
                  <img src={Scheider} alt="schneider" />
           </div>
           <div className='style-boxing-2' >
               <h1 className='header-text'>SCHNEIDER</h1>
               <p className='text'>Scopul Schneider Electric este de a le oferi tuturor mijloacele necesare pentru a beneficia de energia si resursele noastre, respectand normele.</p>
           </div>
      </div>
      </div>
    </div>
  );
};

export default ParteneriPage;
