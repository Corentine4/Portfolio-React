import React from 'react';

const ProgressBarGraphism = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Pourcentage</span>
                <span>0%</span>
                <span>100%</span>
            </div>

            <div>
                {
                props.graphism.map((item) => {
                let xpYears = 2;
                let progressBarGraphism = item.xp / xpYears * 100 + '%';
                
                return (
                    <div key={item.id} className="graphismList">
                        <li>{item.value}</li>
                        <div className="progressBarGraphism" style={
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