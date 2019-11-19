import React from 'react';
import './spinner.scss';
 const Spinner=()=>{
     const renderAnimation=()=>{
         return(
        <div>
            <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        </div>
        <a className="dribbble" href="https://dribbble.com/shots/5533600-Loading-boxes" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""/></a>
    </div>
         );
     }
    return(
        <div>
            {renderAnimation()}
        </div>
        );
    }

export default Spinner;