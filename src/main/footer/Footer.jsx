import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import classNames from 'classnames';
import styles from './footer.module.css';
import logo from './Bowow_Logo_Footer_1.avif';
import soc1 from './twitter.svg';
import soc2 from './facebook.svg';
import soc3 from './instagram.svg';
import { FaRegCalendarAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classNames(styles.footer)}>
      <div className={classNames(styles.footer_up)}>
        <div className={classNames(styles.footer_up_Aside)}>
          <div className={classNames(styles.footer_logoContainer)}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
          <p>Cras eu pulvinar felis, vitae aliquet metus.
            <br /> Class aptent taciti sociosqu ad
            litora torquentper.</p>
          <div className={classNames(styles.contactInfo)}>
            <div className={classNames(styles.contactItem)}>
              <div className={classNames(styles.contactItem_logo)}>
                <img src="" alt="" />
              </div>
              <span>1234567890</span>
            </div>
            <div className={classNames(styles.contactItem)}>
              <div className={classNames(styles.contactItem_logo)}>
                <img src="" alt="" />
              </div>
              <span>example@mail.com</span>
            </div>
            <div className={classNames(styles.contactItem)}>
              <div className={classNames(styles.contactItem_logo)}>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className={classNames(styles.socialIcons)}>
            <div className={classNames(styles.socialIcons_item)}>
              <a href=""><img src={soc1} alt="Logo" className={styles.socialIcons_itemm_img} /></a>
            </div>
            <div className={classNames(styles.socialIcons_item)}>
              <a href=""><img src={soc2} alt="Logo" className={styles.socialIcons_itemm_img} /></a>
            </div>
            <div className={classNames(styles.socialIcons_item)}>
              <a href=""><img src={soc3} alt="Logo" className={styles.socialIcons_itemm_img} /></a>
            </div>
          </div>
        </div>
        <div className={classNames(styles.footer_up_center)}>
          <div className={classNames(styles.footer_up_center_items)}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">My Cart</a></li>
              <li><a href="#">Orders and Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className={classNames(styles.footer_up_center_items)}>
            <h3>Help & Support</h3>
            <ul>
              <li><a href="#">Store Info</a></li>
              <li><a href="#">Chat Support</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>
          <div className={classNames(styles.footer_up_center_items)}>
            <h3>Services</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </div>
        </div>
        <div className={classNames(styles.footer_up_Bside)}>
        <h3>Newsletter</h3>
        <span>Subscribe our Newsletter to get the latest news and insights</span>
        <input type="text" class="custom-input" placeholder="Your email adress"></input>
        <span>By subscribing, you accept the Privacy Policy</span>
          <div className={classNames(styles.footer_up_Bside_date)}>
          <FaRegCalendarAlt className={classNames(styles.footer_up_Bside_date_icon)} />
          <div className={classNames(styles.footer_up_Bside_date_items)}>
            <p>Monday-Saturday</p>
            <p>9.00 Am - 9.00Pm</p>
          </div>
    
          </div>
        </div>
      </div>
      <div className={classNames(styles.footer_down)}>
      <div className={classNames(styles.footer_down_horizontal_line)} class=""></div>
      <p>All Right Reserved © 2024, Bowow | Pet Shop Shopify Theme (Password : buddha)</p>
      </div>
    </div>
  );
}

export default Footer;
