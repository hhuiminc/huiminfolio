import React from 'react'
import {useState, useEffect, useRef, useMemo} from 'react'
import './experience.css'

const Experience = () => {
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
    <section ref={ref} id="experience" className={isInViewport ? 'visible' : ''}>
    <h5>what i've learnt</h5>
    <h2>EXPERIENCE</h2>

    <div className="container experience__container">
      <div className="experience__internship">
        <h3>Internship</h3>
        <div className="experience__content">
          <article className="experience___details">
            
          </article>
        </div>
      </div>

      <div className="experience__fyp">
        <h3>Final Year Project</h3>
        <div className="experience__content">
          <article className="experience___details">

          </article>

        </div>

      </div>
    </div>



    </section>
  )
}

export default Experience