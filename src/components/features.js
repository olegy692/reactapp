/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
import React from 'react';
import Upcycle from "./images/Argo_Game_Logo.png";
import Collect from "./images/recycleBorder.png";
import Build from "./images/UI_Graphic_Resource_Tools.png";
import './Features.css';


//https://getbootstrap.com/docs/4.0/utilities/flex/
//https://getbootstrap.com/docs/4.0/utilities/spacing/
//https://getbootstrap.com/docs/4.0/utilities/text/
//https://github.com/startbootstrap/startbootstrap-heroic-features/blob/master/LICENSE
function Features(){
    /*const imgStyle = {
        width: '150px',   // Set your desired width value
        height: '100px',  // Set your desired height value'
        backgroundColor: '#03467A',
        borderRadius: '5%',
        
    };*/
    /*const divStyle = {
        backgroundColor: '#035895', // Set your desired background color
        width: '250px',
        
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        paddingTop: '10px',
        paddingRight: ' 0px',
        paddingBottom: '10px',
        paddingLeft: '40px',
        border: '1px solid #000',
        borderRadius: '10%',
      };*/
      /*const divStyle ={
        backgroundColor: '#035895',
        maxWidth: '200px',
        border: '1px solid #000',
        borderRadius: '10%',
        margin: '0 auto', 
        padding: '10px',
        
      };*/
      const elements = [
        { title: "Opsamle", imgSrc: Collect, alt: "opsamle billedet", description: "Samle affald og få ressourcer til bygge nye genstande" },
        { title: "Genbrug", imgSrc: Upcycle, alt: "Genbrugs billedet", description: "Samle affald og få ressourcer til bygge nye genstande" },
        { title: "Byg", imgSrc: Build, alt: "byg billedet", description: "Samle affald og få ressourcer til bygge nye genstande" },
        { title: "Genanvend", imgSrc: Upcycle, alt: "Genanvend billedet", description: "Samle affald og få ressourcer til bygge nye genstande" },
        // ...more elements
      ];

    return(
        /*<div class="row ">
            
            <div className="col-lg-4 col-xxl-4 mb-5 text-center " style={{ ...divStyle, marginRight: '15px' }}>
                <h2 className='fs-4 fw-bold'>Opsamle</h2>
                <img class="rounded mx-auto d-block" src={Collect} alt="opsamle billedet" style={imgStyle} ></img>
                <p>Samle affald og få ressourcer til bygge nye  genstande</p>
            </div>
            <div className="col-lg-4 col-xxl-4 mb-5 text-center "style={{ ...divStyle, marginRight: '15px' }} >
                <h2 className='fs-4 fw-bold'>Genbrug</h2>
                <img class="rounded mx-auto d-block" src={Upcycle} alt="Genbrugs billedet" style={imgStyle}></img>
                <p>Samle affald og få ressourcer til bygge nye  genstande</p>
            </div>
            <div className="col-lg-4 col-xxl-4 mb-5 text-center " style={{ ...divStyle, marginRight: '15px' }}>
                <h2 className='fs-4 fw-bold'>Byg</h2>
                <img class="rounded mx-auto d-block" src={Build} alt="byg billedet" style={imgStyle}></img>
                <p>Samle affald og få ressourcer til bygge nye  genstande</p>
            </div>
            <div className="col-lg-4 col-xxl-4 mb-5 text-center" style={divStyle}>
                <h2 className='fs-4 fw-bold'>Genanvend</h2>
                <img class="rounded mx-auto d-block" src={Upcycle} alt="Genanvend billedet" style={imgStyle}></img>
                <p >Samle affald og få ressourcer til bygge nye  genstande</p>
            </div>
            
        </div>*/
        <div class="row justify-content-center mb-5">
            {elements.map((element, index) => (
            <div class='col-lg-3 col-md-5 col-sm-12 col-xs-12 bg-primary rounded p-3 border border-dark border-1 mx-2 my-2 mb-2' key={index} style={{ maxWidth: '250px', borderRadius: '10%', margin: '0 auto' }}>
                <h2 >{element.title}</h2>
                <img class="img-responsive rounded p-3 border border-dark border-1" src={element.imgSrc} alt={element.alt} style={{width:'100%',backgroundColor: '#03467A'}}></img>
                <p>{element.description}</p>
            </div>
            ))}
        </div>
        
    );

}
export default Features;

