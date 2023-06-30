import React from 'react';
import './News.css'

function News() {
    return(
        <>

            <div className='containerHaed'>

                <div className='lineNews'></div>
                <h2 className='headingNews'>НОВОСТИ</h2>
                <div className='lineNews2'></div>

            </div>

            <div className='containerMain'>
                <div className='component1'></div>

                <div className='containerContent'>

                    <div className='component2'></div>
                    <div className='component3'></div>

                </div>

            </div>

            <a href='' className='allNews'>Все новости</a>

           

        </>
    )
}
export default News;