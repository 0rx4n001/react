import React from 'react';
import classNames from 'classnames';
import styles from './baner2.module.css';
import "./LuckiestGuy-Regular.ttf";
import banimg from './Slider2.jpeg'

const Baner2 = () => {
    return (
        <div className={classNames(styles.baner)}>
                        <div className={classNames(styles.baner_foto)}>
                <img src={banimg} alt="" className={classNames(styles.baner_foto_img)}/>
            </div>
            <div></div>
            <div className={classNames(styles.baner_text)}>
                <h2 className={classNames(styles.baner_head)} >NATURAL TREATS <br /> FOR HAPPY PETS</h2>
                <p>Lorem, ipsum dolor.</p>
                <p>Enjoy a 25% Flat off</p>
                <button>SHOP NOW</button>
            </div>


        </div>
    )
}

export default Baner2
