'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('none');
  const [show, setShow] = useState('flex');

  const click = () => {
    if(display === 'none') {
      setDisplay('flex');
      setShow('none');
    } else {
      setDisplay('none');
      setShow('flex');
    }
  }

  const reset = () => {
    setDisplay('none');
    setShow('flex');
  }

  return (
    <main className={styles.main}>

    <div className={styles.dropdown} style={{ display: `${display}` }}>
      <Image className={styles.cross}
        src="/cross.svg"
        alt=""
        width={24}
        height={24}
        onClick={reset}
      />
      <ul className={styles.footer_nav}>
      <li className={`${styles.footer_li} ${styles.li}`}><a href="#shop">SHOP</a></li>
        <li className={`${styles.footer_li} ${styles.li}`}><a href="#arrival">NEW ARRIVALS</a></li>
        <li className={`${styles.footer_li} ${styles.li}`}><a href="#about">ABOUT</a></li>
        <li className={`${styles.footer_li} ${styles.li}`}><a href="#gallery">GALLERY</a></li>
        <li className={`${styles.footer_li} ${styles.li}`}><a href="#mail">MAIL</a></li>
      </ul>
    </div>

    <nav className={styles.nav} style={{ display: `${show}` }}>
      <div className={styles.name}>
        <span className={styles.fade}>THE</span>NORTHPOLE
      </div>
      <ul className={styles.nav_links}>
        <li className={styles.link}><a href="#shop">SHOP</a></li>
        <li className={styles.link}><a href="#arrival">NEW ARRIVALS</a></li>
        <li className={styles.link}><a href="#about">ABOUT</a></li>
        <li className={styles.link}><a href="#gallery">GALLERY</a></li>
        <li className={styles.link}><a href="#mail">MAIL</a></li>
      </ul>
      <div className={styles.login}>
        <Image className={styles.user}
          src="/user.svg"
          alt=""
          width={28}
          height={84}
        />
        Log In
        <Image className={styles.bag}
          src="/shopping-bag.svg"
          alt=""
          width={30}
          height={30}
        />
      </div>
      <Image className={styles.menu}
        src="burger-menu.svg"
        alt=""
        width={40}
        height={40}
        onClick={click}
      />
    </nav>

    <div className={styles.home} style={{ display: `${show}` }}>
      <h1 className={styles.h1}>PLAN YOUR ADVENTURE</h1>
      <button className={styles.btn}>SHOP NOW</button>
    </div>

    <div className={styles.socials}>
      <div className={styles.icon}>
        <Image
          src="/facebook.svg"
          alt=""
          width={28}
          height={28}
        />
      </div>
      <div className={styles.icon}>
        <Image
          src="/twitter.svg"
          alt=""
          width={28}
          height={28}
        />
      </div>
      <div className={styles.icon}>
        <Image
          src="/instagram.svg"
          alt=""
          width={28}
          height={28}
        />
      </div>
    </div>

    <div className={styles.section} id="arrival" style={{ display: `${show}` }}>
      <div className={styles.left}>
        <h1 className={styles.h1}>NEW ARRIVALS</h1>
        <button className={styles.btn}>SHOP NOW</button>
      </div>
      <div className={styles.right}></div>
    </div>

    <div className={styles.gallery} id="gallery" style={{ display: `${show}` }}>
      <div className={styles.gallery_img}>
        <div className={styles.img1}><div className={styles.overlay}>Backpacks</div></div>
      </div>
      <div className={styles.gallery_img}>
        <div className={styles.img2}><div className={styles.overlay}>Backpacks</div></div>
      </div>
      <div className={styles.gallery_img}>
        <div className={styles.img3}><div className={styles.overlay}>Backpacks</div></div>
      </div>
    </div>

    <div className={styles.products} id="shop" style={{ display: `${show}` }}>
      <h1 className={`${styles.h1} ${styles.section_h1}`}>NOW ON SALE</h1>
      <div className={styles.discount}>UPTO 50% OFF</div>
      <div className={styles.container}>
        <div className={styles.product_card}>
          <Image className={styles.bags}
            src="/bag1.webp"
            alt=""
            width={335}
            height={350}
          />
          <p className={styles.title}>CANVAS BACKPACK</p>
          <p className={styles.price}><span className={styles.strike}>$75.00</span> $67.50</p>
        </div>
        <div className={`${styles.product_card} ${styles.middle}`}>
          <Image className={styles.bags}
            src="/bag2.webp"
            alt=""
            width={335}
            height={350}
          />
          <p className={styles.title}>TECHNICAL PACK</p>
          <p className={styles.price}><span className={styles.strike}>$75.00</span> $67.50</p>
      </div>
      <div className={styles.product_card}>
          <Image className={styles.bags}
            src="/bag3.webp"
            alt=""
            width={335}
            height={350}
          />
          <p className={styles.title}>CAMO BACKPACK</p>
          <p className={styles.price}><span className={styles.strike}>$75.00</span> $67.50</p>
        </div>
    </div>
    </div>

    <div className={styles.about} id="about" style={{ display: `${show}` }}>
      <div className={styles.about_us}>
        <h1 className={`${styles.h1} ${styles.about_h1}`}>ABOUT US</h1>
        <p className={styles.para}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
    </div>

    <div className={styles.mailus} id="mail" style={{ display: `${show}` }}>
      <h1 className={`${styles.h1} ${styles.h}`} style={{ fontSize: '44px', letterSpacing: '1.2px' }}>JOIN OUR MAILING LIST</h1>
      <div className={styles.discount}>AND NEVER MISS AN UPDATE</div>
      <label className={styles.label}>Enter your Mail below*</label>
      <input type="email" className={styles.input}></input>
      <button className={styles.submit}>SUBSCRIBE</button>
    </div>

    <div className={styles.footer} style={{ display: `${show}` }}>
      <div className={styles.copyright}>© 2035 by NORTHPOLE. Powered and secured by Wix</div>
      <ul className={styles.footer_nav}>
      <li className={styles.footer_li}><a href="#shop">SHOP</a></li>
        <li className={styles.footer_li}><a href="#arrival">NEW ARRIVALS</a></li>
        <li className={styles.footer_li}><a href="#about">ABOUT</a></li>
        <li className={styles.footer_li}><a href="#gallery">GALLERY</a></li>
        <li className={styles.footer_li}><a href="#mail">MAIL</a></li>
      </ul>
    </div>

    </main>
  );
}
