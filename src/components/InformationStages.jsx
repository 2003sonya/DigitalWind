import React from 'react';
import './InformationStages.css'
import flashLogo from '../img/flashLogo.svg';

function InformationStages() {
    return(
        <>
        <div className='containerHaed'>
            <div className='line'></div>
            <h2 className='heading1'>ИНФОРМАЦИЯ ОБ ЭТАПАХ КОНКУРСА</h2>
            <img className='flashLogo' src={flashLogo} alt="flashLogo"/>
        </div>
        
        
        <div className='stages'>
            <div className='region'>
                <p className='maintext'>Региональные этапы</p>
                <p className='date'>до 31 марта 2022</p>
            </div>
            <div className='international'>
                <p className='maintext'>Международный этап</p>
                <p className='date'>до 17 апреля 2022</p>
            </div>
        </div>

        <div className='notNecessary'>
            <p className='textNotNecessary'>Участие в региональном этапе <span className='boldnotnecessary'>не является обязательным</span> для участия в международном конкурсе.</p>
            <p className='textNotNecessary'>Если в вашем регионе региональный этап не проводится, то нужно сразу регистрировать работы на международный этап.</p>
        </div>
        
       
       
        </>
    )
}
export default InformationStages;