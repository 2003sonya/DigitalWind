import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css'
import mainLogo from '../img/mainLogo.svg';
import exitLogo from '../img/exitLogo.svg';
import vkLogo from '../img/vkLogo.svg';

function Menu(){
    return(
        <>
        <div className='container'>

            <div className='logo'><img className='mainLogo' src={mainLogo} alt="maimLogo"/></div>
            
            <div className='info'>
                
                <div className='contactInformation'>
                    <p className='telephone'>(8452) 99-87-34</p>
                    <a href=''><img className='vkLogo' src={vkLogo} alt="maimLogo"/></a>
                    <p className='eu'>EU</p>
                    <img className='exitLogo' src={exitLogo} alt="maimLogo"/>
                </div>

                <div className='links'>
                    <a href='' className='new'>Новости</a>
                    <a href='' className='catalog'>Каталог работ</a>
                    <a href='' className='information'>Информация</a>
                    <a href='' className='contacts'>Контакты</a>
                    <a href='' className='masterClasses'>Мастер-классы</a>
                    <a href='' className='organizer'>Организаторы и партнёры</a>
                </div>

            </div>
           
        </div>
        </>
        
    )
}
export default Menu;