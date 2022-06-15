import React from 'react';
import styles from './header.module.css'


 const Header = () => {
    return (
        
        <>
        <div className={styles.container}>
           <h2>Intocode Fucking ShopCamp</h2> 
           <p>Гаджеты и Телефоны</p>
           <p>Бытовая техника</p>
           <p>ect...</p>
           </div>
        </>
    );
};

export default Header;
