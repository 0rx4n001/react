import React from 'react';
import classNames from 'classnames';
import styles from './baner.module.css';
import "./LuckiestGuy-Regular.ttf";
import banimg from './Slider.jpeg'

const Baner = () => {
    return (
        <div className={classNames(styles.baner)}>
            {/* <div className={classNames(styles.baner_txt_side)}> */}
            <div className={classNames(styles.baner_text)}>
                <h2 className={classNames(styles.baner_head)} >MULTI NUTRION <br /> PET FOOD</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Enjoy a 25% Flat off</p>
                <button>SHOP NOW</button>
            </div>
            {/* </div> */}


            <div className={classNames(styles.baner_foto)}>
                <img src={banimg} alt="" className={classNames(styles.baner_foto_img)}/>
            </div>
        </div>
    )
}

export default Baner
