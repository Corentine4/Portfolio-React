import React from 'react';

const Softskills = () => {
    return (
        <div>
            <h3>Mes "soft skills"</h3>
            <ul>
                <div className="rigor">
                    <i class="fas fa-search-plus"></i>
                    <li>Rigeur, attention aux détails</li>
                </div>
                <div className="creative">
                    <i class="fas fa-lightbulb"></i>
                    <li>Créativité et attrait pour l'innovation</li>
                </div>
                <div className="organization">
                    <i class="fas fa-tasks"></i>
                    <li>Organisation</li>
                </div>
                <div className="empathy">
                    <i class="fas fa-hands-helping"></i>
                    <li>Empathie</li>
                </div>
            </ul>
        </div>
    );
};

export default Softskills;