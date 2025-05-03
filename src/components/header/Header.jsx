import React from 'react'
import {useState, useEffect, useRef, useMemo} from 'react'
import Particles from './bubbles/Bubbles'
import Color from './color/Color'
import './header.css'

const Header = () => {
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
    <section ref={ref} id="home" className={"nav " + (isInViewport ? 'visible' : '')}>
      <Particles/>
      <Color/>
      <div className="container header__container">
        <div className="wrapper">
          <div className="background-card"></div>
          <div className="sub-container shrink">
              <h3 className="typewriter">HELLO THERE, I'M</h3>
          </div>

          <br/>
          
          <div className="sub-container appear">
            <h1 className="typewriter delayed">HUIMIN!</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header