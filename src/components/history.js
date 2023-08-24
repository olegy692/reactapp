/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
import React from 'react';
import './Features.css';

function History(){
    return(
        
        <div class='row col-lg-8 col-md-9 col-sm-11 col-xs-12 justify-content-center mb-5 rounded p-3 border border-2 mb-5'style={{background:'#fff'}} >
            <h2 class='row justify-content-center'>
                Hvordan spillet started
            </h2>
            <div class=' row col-lg-11'>
                <div class='col-lg-6 p-responsive'>
                    <p> 
                        Et computerspil der skal informere og motivere børn i alderen 8-12 år omkring genbrug og upcycling. 
                        Mark og Phillip fra Zealand – Sjællands Erhvervsakademi har udviklet en løsning, der skal gøre det sjovt at lære om genbrug. 
                        I ”Genbrugsspillet” skal spilleren samle ressourcer på genbrugspladsen for at bygge nye produkter og reparere gamle. 
                        Undervejs kan man samle penge og besparet CO2, jo mere du upcycler og reparerer. 
                        Børn kan spille mod hinanden, hjælpe hinanden ved at dele ressourcer og komme med gode idéer. 
                        På den måde gamificeres læring om genbrug gennem et børnevenligt, interaktivt og sjovt læringsunivers.
                    </p>
                    <p>Gruppen vandt derudover 15.000 kr. som en af COCONF-forløbets b(l)æredygtige grupper af studerende.</p>
                </div>
                <div class='col-lg-6 image-wrapper'>
                    <img style={{width:'100%'}} src='https://corolab.dk/wp-content/uploads/Genbrugsspillet-Morgendagens-loesning-til-Argo.jpg' alt='billede af Mark'></img>
                </div>
                
            </div>
            <a class=' row justify-content-end' href='https://corolab.dk/projekter/genbrugsspillet-morgendagens-loesning-til-argo/'>Corolab Udfordringen fra Argo</a>

        </div>
    );
};
export default History;
