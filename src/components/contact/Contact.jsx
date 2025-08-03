import React from 'react'
import {useState, useEffect, useRef, useMemo} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fa916kz', 'template_ht9i4le', form.current, 'lNnPWEdJQM-yhzSyW')
      .then((result) => {
        console.log(result.text);
        alert("Your message has been sent.");
        }, (error) => {
          console.log(error.text);    
          alert("An error has occured, please try again.");
          
        });

      e.target.reset();

  };


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
    <section ref={ref} id="contact" className={"alternate " + (isInViewport ? 'visible' : '')}>
      <h5>let's get in touch</h5>
      <h2>CONTACT</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__subcontainer">
            <a href="https://linkedin.com/in/hhuiminc" target='_blank' title='LinkedIn Profile'>
              <article className="contact__option half">
                <FaLinkedin className="contact__option-icon"/>
              </article>          
            </a>
            <a href="https://github.com/hhuiminc" target='_blank' title='GitHub Profile'>
              <article className="contact__option half">
                <FaGithub className="contact__option-icon"/>
              </article>          
            </a>
          </div>
            <a href="mailto:hhuiminc@gmail.com">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon"/>
                <h5>Email</h5>            
                <h5>hhuiminc@gmail.com</h5>
              </article>          
            </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-secondary">Send Email</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact