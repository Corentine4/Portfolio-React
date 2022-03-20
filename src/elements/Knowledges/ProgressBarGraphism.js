import React from 'react';

const ProgressBarGraphism = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Expérience</span>
                <span className='Years'>2 ans</span>
                <span className='Years'>4 ans</span>
                <span className='Years'>6 ans</span>
                <span className='Years'>8 ans</span>
            </div>

            <div>
                {
                props.graphism.map((item) => {
                let xpYears = 8;
                let progressBarGraphism = item.xp / xpYears * 100 + '%';
                
                return (
                    <div key={item.id} className="languagesgraphismList">
                        <li>{item.value}</li>
                        <div className="progressBar" style={
                            {width:progressBarGraphism}}></div>
                        </div>
                )
                })
                }
            </div> 
        </div>
    );
};

export default ProgressBarGraphism;