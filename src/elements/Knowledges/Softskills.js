import React from 'react';

const Softskills = () => {
    return (
        <div className="SoftskillsHobbys">
            <div className="Softskills">
                <h3>Soft skills</h3>
                <ul>
                    <li>
                        <i class="fas fa-search-plus"></i> Rigeur, attention aux détails
                    </li>
                    <li>
                        <i class="fas fa-lightbulb"></i> Créativité et attrait pour l'innovation
                    </li>    
                    <li>
                        <i class="fas fa-tasks"></i> Organisation
                    </li>    
                    <li>
                        <i class="fas fa-hands-helping"></i> Empathie
                    </li>
                </ul>
            </div>
            <div className="Hobbys">
                <h3>Hobbys</h3>
                <ul>
                    <li>
                        <i class="fas fa-camera"/> Photographie
                    </li>
                    <li>
                        <i class="fas fa-palette"></i> Peinture, dessin numérique
                    </li>
                    <li>
                        <i class="fas fa-seedling"></i> Jardinage
                    </li>
                    <li>
                        <i class="fas fa-horse-head"></i> L'équitation
                    </li>
                </ul>
        </div>
    </div>
    );
};

export default Softskills;