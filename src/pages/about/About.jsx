import React from 'react'
import classNames from 'classnames';
import styles from './about.module.css';
import image from './about_dec.jpg'

const About = () => {
    return (
        <div>
            <div className={classNames(styles.uper_section)}>
                <h2>About</h2>
                <div className={classNames(styles.uper_items)}>
                    <a href="">Home</a>
                    <p>></p>
                    <a href="">About</a>
                </div>
            </div>
            <div className={classNames(styles.dec_section)}>
                <div className={classNames(styles.dec_section_img)}>
                    <img src={image} alt="" />
                </div>
                <div className={classNames(styles.dec_section_txt)}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Aliquid iure reiciendis 
                        assumenda iusto, atque asperiores facilis 
                        nihil id magnam. Iste expedita enim numquam 
                        distinctio labore laboriosam pariatur dicta 
                        necessitatibus nihil quo quisquam eum velit 
                        quod laborum animi eligendi consectetur, 
                        iure consequuntur modi quasi? Ratione aliquid, 
                        consectetur earum tempora modi qui!</p>
                </div>
            </div>
        </div>
    )
}

export default About
