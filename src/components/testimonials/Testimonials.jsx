import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    name: 'Yuen Wei Meng',
    role: 'Internship Supervisor/Mentor, ElvesLab',
    review: [
    `"She was able to excel in her performance, showcasing her ability to work efficiently after one session of guidance. She was praised as meticulous by the Project Manager as she caught multiple UI and UX issues and provided suggestions which she brought up to the team leader to improve on.`,
    
    `I would highly recommend Hui Min to be accepted in her future endeavours be it further studies or career advancements."`,
    ]
  },
  {
    name: 'Quek Kheng Hai',
    role: 'Internship Boss, ElvesLab',
    review: [
    `"Hui Min has a responsible character and (is) willing to put in additional effort and time to get her work completed. She also has an optimistic attitude and is keen to learn from our team.`,
    
    `In all aspects, Hui Min is hardworking and has demonstrated that she is responsible and can be depended on fully to complete her given tasks up to the highest standards that we set for her."`,
    ]
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="ignore">
      <h5>what they say</h5>
      <h2>TESTIMONIALS</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({name, role, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <h4 className="reviewer">{name}</h4>
                <h6 className="role">{role}</h6>
                
                {review.map(paragraph => {
                    return (
                      <p className="reviewer__review">
                        {paragraph}
                      </p>
                    )
                  })
                }
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials