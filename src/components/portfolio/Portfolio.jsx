import React from 'react'
import {useState, useEffect, useRef, useMemo} from 'react'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './portfolio.css'

const data = [
  {
    projecttype: 'Internship - Elves Lab',
    title: 'Tanyu Skyline Catering',
    link: 'http://www.scgroup.com.sg',
    folder: 'Tanyu',
    images: [
        {
          img: 'Tanyu_Main',
          caption: 'homepage'
        },
        {
          img: 'Tanyu_Company-Tab',
          caption: 'about tanyu tab'
        },
        {
          img: 'Tanyu_FishFlavours-Tab',
          caption: 'fish flavours tab'
        },
        {
          img: 'Tanyu_SideDishes-Tab',
          caption: 'side dishes tab'
        },
        {
          img: 'Tanyu_DrinksDessert-Tab',
          caption: 'drinks and desserts tab'
        },
        // {
        //   img: 'Tanyu_AboutUs',
        //   caption: 'about skyline catering page'
        // },
        {
          img: 'Tanyu_JoinUs',
          caption: 'join us page'
        },
        {
          img: 'Tanyu_ContactUs',
          caption: 'contact us page'
        },
    ],
    briefdesc: 'whole website + cms',
    focalpoints: [
      'Menu-Like Layout',
      'Animations',
      'Carousels',
    ],
    description: `This is a solo project I did for a restaurant called Tanyu. It has a menu-like layout, where the menu is divided into tabs on the homepage. Each menu tab has carousels that cycle through images of the different menu items!
    There are many on-scroll animations! Take a look to see how they go :) `,
  },
  {
    projecttype: 'Personal Project',
    title: 'Connect 4',
    link: 'https://connect4-hhuiminc.netlify.app/',
    folder: 'Connect4',
    images: [
        // {
        //   mp4: 'Connect4_Gameplay',
        //   caption: 'Gameplay'
        // },
        {
          img: 'Connect4_Light',
          caption: 'Light Mode'
        },
        {
          img: 'Connect4_Dark',
          caption: 'Dark Mode'
        },
    ],
    briefdesc: 'local 2-player game',
    focalpoints: [
      'Dark/light mode toggle',
      'Sound effects',
      'Confetti!',
    ],
    description: `This web application was made with Vue.js, where 2 players can play a local game of Connect 4. Check it out for yourself to experience some confetti!`,
  },
  {
    projecttype: 'Internship - Elves Lab',
    title: 'ITW Singapore',
    link: 'https://sea.itwwelding.com/Home',
    folder: 'ITW',
    images: [
        {
          img: 'ITW_Main',
          caption: 'homepage'
        },
        {
          img: 'ITW_AboutUs',
          caption: 'about us'
        },
        {
          img: 'ITW_Distributors',
          caption: 'our distributors'
        },
        {
          img: 'ITW_ContactUs',
          caption: 'contact us'
        },
        {
          img: 'ITW_OurTeam',
          caption: 'our team'
        },
    ],
    briefdesc: 'front-end, multiple pages and overall changes',
    focalpoints: [
      'Animations',
      'Filters',
    ],
    description: 'I did some pages for ITW Singapore, which are shown in the images above, other than the homepage, which I only made some small changes. There are animations in the pages and a filter for the \'our team\' page.',
  },
  {
    projecttype: 'Internship - Elves Lab',
    title: 'Singapore Ability Scales',
    link: 'https://www.singaporeabilityscales.sg/',
    folder: 'SAS',
    images: [
        {
          img: 'SAS_AboutUs',
          caption: 'about us'
        },
        {
          img: 'SAS_CertifiedUsers',
          caption: 'certified users'
        },
        {
          img: 'SAS_ContactUs',
          caption: 'contact us'
        },
        {
          img: 'SAS_FAQ',
          caption: 'faq'
        },
    ],
    briefdesc: 'front-end, multiple pages',
    focalpoints: [
    ],
    description: 'I did a few pages for this website, which are shown in the images above. There are small animations sprinkled around the pages.',
  },
  {
    projecttype: 'Internship - Elves Lab',
    title: 'Kao Laundry',
    link: '',
    folder: 'KaoLaundry',
    images: [
        {
          img: 'KaoLaundry_FlairConditioner',
          caption: 'KaoLaundry Flair Conditioner'
        },
    ],
    briefdesc: 'front-end, single page',
    focalpoints: [
      'Simple',
      'Bright'
    ],
    description: 'This is a one page front-end landing site for KaoLaundry\'s flair conditioner. Unfortunately, the link is no longer live :(',
  },
  {
    projecttype: 'Internship - Elves Lab',
    title: 'Aetos',
    link: 'https://www.aetos.com.sg/landing2.aspx',
    folder: 'Aetos',
    images: [
        {
          img: 'Aetos_Main',
          caption: 'landing page'
        },
    ],
    briefdesc: 'front-end, back-end, single page',
    focalpoints: [
      'Animations',
    ],
    description: 'This is a one page front-end only website for Aetos. It is a landing page that embeds a Youtube video, has some animations, and a contact form that features a captcha check.',
  },

  
]

const Portfolio = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);

  function useIsInViewport({root = null, rootMargin, threshold = 0.4}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    

    const observer = useMemo(
      () =>      
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting), {root, rootMargin, threshold}
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
  return (
    <section ref={ref} id="portfolio" className={"nav alternate " + (isInViewport ? 'visible' : '')}>
      <h5>what i've done</h5>
      <h2>PORTFOLIO</h2>
      <Swiper className="portfolio__container container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({projecttype, title, link, folder, images, briefdesc, focalpoints, description}, index) => {
            return (
              <SwiperSlide key={index} className="portfolio__item">
                <Swiper className="portfolio__images"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ dynamicBullets: true, clickable: true }}>
                    {images.map(image => {
                      let imagePath;
                      try {
                        if (image.img) {
                          imagePath = require('../../assets/portfolio/' + folder + '/' + image.img + '.png');
                        } else if (image.gif) {
                          imagePath = require('../../assets/portfolio/' + folder + '/' + image.gif + '.gif');
                        } else if (image.mp4) {
                          imagePath = require('../../assets/portfolio/' + folder + '/' + image.mp4 + '.mp4');
                        }
                      } catch {
                        imagePath = '../../assets/portfolio/default.png';
                      }
                      return (    
                        <SwiperSlide className="portfolio__image-container">
                          <small className="portfolio__image-caption">{image.caption}</small>
                          <div className="portfolio__image-wrapper">
                            {image.img && (
                              <img src={imagePath} alt={image.caption} className="portfolio__image" />
                            )}
                            {image.mp4 && (
                              <video controls autoplay alt={image.caption} className="portfolio__video">
                                <source src={imagePath} type="video/mp4"></source>
                              </video>
                            )}
                          </div>
                        </SwiperSlide>
                        )
                      })
                    }
                </Swiper>
                <div className="portfolio__details">
                  <h5 className="text-light">{projecttype}</h5>
                  <h3>{title}</h3>
                  <h6>{briefdesc}</h6>
                    <ul className="portfolio__focalpoints">
                      {focalpoints.map(focalpoint => {
                        return (
                            <li>{focalpoint}</li>
                          )
                        })
                      }
                    </ul>   
                  <p className="portfolio__description">{description}</p>
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer">
                      <button className="btn btn-secondary">VISIT</button>
                    </a>
                  )}
                </div>
              </SwiperSlide>
              
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Portfolio