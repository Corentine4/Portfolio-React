import React from 'react';

const ProgressBarDevelopement = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Expérience</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                props.languages.map((item) => {
                let xpYears = 2;
                let progressBarDevelopement = item.xp / xpYears * 100 + '%';
                
                return (
                    <div key={item.id} className="languagesgraphismList">
                        <li>{item.value}</li>
                        <div className="progressBar" style={
                            {width:progressBarDevelopement}}></div>
                        </div>
                )
                })
                }
            </div>
            
        </div>


    );
};

export default ProgressBarDevelopement;