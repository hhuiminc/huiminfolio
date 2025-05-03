import React from 'react'
import {useState, useEffect, useRef, useMemo} from 'react'
import {AiOutlineCode} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {HiOutlineHeart} from 'react-icons/hi'
import {RiInstagramLine} from 'react-icons/ri'
import ThinkingBubble from '../../assets/thinking.png'
import './about.css'

const About = () => {
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

  const [isHoveringEdu, setIsHoveringEdu] = useState(true);
  const [isHoveringSk, setIsHoveringSk] = useState(false);
  const [isHoveringAsp, setIsHoveringAsp] = useState(false);
  const [isHoveringHob, setIsHoveringHob] = useState(false);
  const [isTLDR, setIsTLDR] = useState(false);

  const toggleTLDR = () => {
    setIsTLDR(!isTLDR);
  };

  const handleMouseOver = (e) => {
    e.stopPropagation();
    e.target.classList.contains("education") ? setIsHoveringEdu(true) : setIsHoveringEdu(false);
    e.target.classList.contains("skills") ? setIsHoveringSk(true) : setIsHoveringSk(false);
    e.target.classList.contains("aspirations") ? setIsHoveringAsp(true) : setIsHoveringAsp(false);
    e.target.classList.contains("hobbies") ? setIsHoveringHob(true) : setIsHoveringHob(false);
  };

    return (
      <section ref={ref} id="about" className={"nav alternate " + (isInViewport ? 'visible' : '')}>
        <h5>who i am</h5>
        <h2>ABOUT ME</h2>

        <div className="container about__container">
          <div className="about__content">
            <div className="about__cards">
              <article className={"about__card education " + ((isHoveringSk || isHoveringAsp || isHoveringHob ? '' : 'default'))} onMouseOver={handleMouseOver}>
                <HiOutlineAcademicCap className="about__icon"/>
                <h5>Education</h5>
                <p><a className="education" href="https://www.sp.edu.sg/soc/courses/full-time-diplomas/infocomm-security-management" target="_blank" rel="noreferrer">Diploma in Infocomm Security Management <small className="education">(DISM)</small></a></p>
              </article>

              <article className={"about__card skills " + ((isHoveringEdu || isHoveringAsp || isHoveringHob ? '' : 'default'))} onMouseOver={handleMouseOver}>
                <AiOutlineCode className="about__icon"/>
                <h5>Skills</h5>
                <p>HTML, CSS, Javascript, Python, React, PHP,<br/>...</p>
              </article>

              <article className={"about__card aspirations " + ((isHoveringEdu || isHoveringSk || isHoveringHob ? '' : 'default'))} onMouseOver={handleMouseOver}>
                <img src={ThinkingBubble} className="about__icon" alt="Thinking Bubble"/>
                <h5>Aspirations</h5>
                <p>Web Developer, Software Engineer,<br/>...</p>
              </article>

              <article className={"about__card hobbies " + ((isHoveringEdu || isHoveringSk || isHoveringAsp ? '' : 'default'))} onMouseOver={handleMouseOver}>
                <HiOutlineHeart className="about__icon"/>
                <h5>Hobbies</h5>
                <p>Music, Art, Crocheting, Crafting, Baking,<br/>...</p>
              </article>

              <div className="about__details">
                <div className={"about__detail__container education " + (isHoveringEdu ? 'showing' : 'hiding')}>
                  <div className="about__detail">
                    <div className="about__detail__wrapper">
                      <div className="about__detail__group">
                        <h5>2018 <small>(Secondary 4)</small></h5>
                        <p>Contemplating between Biology/Chemistry and IT courses</p>

                        <h5>2019 <small>(After O Level Results)</small></h5>
                        <p>A simple 'ethical hacking' phrase in a course booklet caught my attention, applied for DISM in Singapore Polytechnic</p>

                        <h5>2019 <small>(Polytechnic Year 1)</small></h5>
                        <p>Started classes, introduced to Front-End Development, coding, computing and security</p>

                        <h5>2020 <small>(Polytechnic Year 2)</small></h5>
                        <p>Introduced to Back-End Web Development and in-depth security elements</p>

                        <h5>2021 <small>(Polytechnic Year 3)</small></h5>
                        <p>Internship (6 months)<br/>
                        <a href="https://www.sp.edu.sg/soc/soc-projects-showcase/Project-2021/dism_project-enist" target="_blank" rel="noreferrer">Final Year Project ("Project ENIST" - Top 3)</a></p>
                        <h5>2022 <small>(Graduation)</small></h5>
                        <p>And the journey continues...</p>                        
                      </div>                      
                    </div>
                  </div>
                </div>

                <div className={"about__detail__container skills " + (isHoveringSk ? 'showing' : 'hiding')}>
                  <div className="about__detail">
                    <div className="about__detail__wrapper">
                      <div className="about__detail__group">
                        <h5>Web Development</h5>
                        <p>
                          HTML<br/>
                          CSS<br/>
                          MySQL<br/>
                          React<br/>
                          PHP<br/>
                          Bootstrap<br/>
                          Apache Web Server
                        </p>
                      </div>

                      <div className="about__detail__group">
                        <h5>Security</h5>
                        <p>
                          Malware Reverse Engineering<br/>
                          Digital Forensics<br/>
                          Ethical Hacking<br/>
                          Web Security<br/>
                          Windows Security<br/>
                          Applied Cryptography
                      </p>
                      </div>                     

                      <div className="about__detail__group">
                        <h5>Programming Languages</h5>
                        <p>
                          Javascript<br/>
                          Python
                        </p>

                        <h5>Others</h5>
                        <p>
                          Network Infrastructure<br/>                          
                          Basic Linux/Windows Administration<br/>
                        </p>
                      </div>                     
                     
                    </div>
                  </div>
                </div>

                <div className={"about__detail__container aspirations " + (isHoveringAsp ? 'showing' : 'hiding')}>
                <div className="about__detail">
                    <div className="about__detail__wrapper">
                      <div className="about__detail__group">
                        <div className="tldr__wrapper">
                          <div className={"btn btn-secondary tldr " + (isTLDR ? 'active' : 'inactive')} onClick={toggleTLDR}>TL;DR</div>
                        </div>
                        <h5>Web Developer</h5>
                        <p className={"long " + (isTLDR ? 'isTldr' : 'isNotTldr')}>
                          Why a web developer when I'm in a security course? In my 3 years of Polytechnic, the exposure of both security and web development has shown me what I prefer and am more skilled at. During my first semester, I really enjoyed the freedom and creative aspects of front-end web dev, compared to the 'rigidness' of security modules. Since young, I always loved making/building things from scratch, such as painting and crafting! Because of this, I felt that a career in web dev resonates the most with me. Hence, I chose a web dev company for my mandatory internship, in contrast to most of my peers who chose security companies. Did I have my fears? Of course. Initially, I was scared if web dev companies would not accept me as an intern, and if they did, I would fall behind my peers for the Final Year Project as I would not have industry experience in infocomm security.
                          <br/><br/>
                          Luckily, I was accepted into a web dev company and also had reliable, knowledgeable teammates during my FYP. It all worked out in the end, as I was assigned to set up an Apache web server in the infrastructure, which was a proof-of-concept travel agency website. We eventually made it to the Top 3 teams of the semester. More info about the FYP can be found under <a href="#experience">Experience</a> or on the <a href="https://www.sp.edu.sg/soc/soc-projects-showcase/Project-2021/dism_project-enist" target="_blank" rel="noreferrer">Project Showcase</a>!
                        </p>
                        <p className={"short " + (isTLDR ? 'isTldr' : 'isNotTldr')}>
                         In my Poly studies, I really enjoyed the freedom and creative aspects of front-end web development, compared to the 'rigidness' of security modules. This made me realise what type of work I would like to do in the future!
                        </p>

                        <h5>Software Engineer</h5>
                        <p className={"long " + (isTLDR ? 'isTldr' : 'isNotTldr')}>
                          Similar to my reasons under web dev, I enjoyed coding programs more than the security modules, and is also something that I could build from scratch. Though I only have experience in Javascript and Python, I like the way programming makes me work my brain in finding solutions that suits the problem.  
                        </p>   
                        <p className={"short " + (isTLDR ? 'isTldr' : 'isNotTldr')}>
                         I really enjoyed the problem-solving aspects of coding while I was studying, which made me interested in software engineering.
                        </p>

                        <h5>Cafe Barista</h5>
                        <p className={"long " + (isTLDR ? 'isTldr' : 'isNotTldr')}>
                          Now you may be thinking: "What?" No, you didn't read it wrong. I always found that baristas were really cool. When I was 16, I got a chance to serve at my church cafe for about 3 years and I thoroughly enjoyed it 100%. The only thing about it was due to space constraints, we could only do capsuled coffee and limited drinks like juice, so the most I did was slotting capsules and adding milk for lattes, aside from grilling wraps and microwaving ready-made food.
                          <br/><br/>
                          I definitely would want to experience working in a full-scale cafe that brews their own coffee from beans and cooks their own food. Other than the physical action of making drinks, I also loved the team I worked with and would look forward to seeing them every time I was rostered. We had amazing teamwork which got us through rush periods and found ways to pass time when there was no crowd.
                          <br/><br/>
                          This would probably not be my full time job, but I would love to work in a cafe at some point in my life, and also have a coffee machine of my own at home. 
                        </p>   
                        <p className={"short " + (isTLDR ? 'isTldr' : 'isNotTldr')}>
                         An aspiration that doesn't fit the rest! When I was 16, I had the chance to help out in a cafe and I really enjoyed how it was like just making coffee and serving customers. This will probably not be a full-time job for me, but I would certainly want to experience working as a barista one day.
                        </p>
                      </div>                                       
                    </div>
                  </div>
                </div>



                <div className={"about__detail__container hobbies " + (isHoveringHob ? 'showing' : 'hiding')}>
                <div className="about__detail">
                  <div className="about__detail__wrapper">
                    <div className="about__detail__group">
                        <h5>Music</h5>
                        <p>
                          Since I was young, I have been exposed to multiple instruments and have been enjoying music ever since. I have experience in playing the Piano, Violin (P1-P6), Cello (P3), Acoustic Guitar and most recently, the Electric Guitar, where I served as an electric guitarist in my church youth band from 2018-2020.
                          <br/>
                          <br/>
                          I also like listening to music! I listen to mostly kpop, but I like other genres too. Some of my favourite artists are:<br/>(G)-idle, BTS, Lesserafim, Dreamcatcher <small>(love their eguit instrumentals!)</small>, CLASS:y, Jay Chou and Alan Walker. Songs that I will never get bored of are Naruto OSTs!
                        </p>

                        <h5>Art</h5>
                        <p>I used to attend art classes at the community centre when I was a kid, such as painting, drawing, oil pastels and pottery. That made me interested in various mediums of art!<br/><br/>
                          
                          <h6 className="detail__header">Crocheting
                              <a href="https://instagram.com/rainyterris.crochet" target='_blank' className="detail__link"><RiInstagramLine className="detail__icon"></RiInstagramLine>@rainyterris.crochet
                              </a>
                          </h6>
                          <p>                          
                            One of my most recent interests! I first started crocheting in late October 2022, after my older brother asked me if I knew how to. I made my first octopus amigurumi <small>(the Japanese art of knitting or crocheting small, stuffed yarn dolls)</small> and have not stopped since. I have clocked over 300 hours of crocheting to date!
                          </p>

                          <h6 className="detail__header">Crafting</h6>
                          <p>I don't really know how to categorize the rest, so I'll put them all here. I really love to make stuff with my hands! I used to (around 2018) make earrings by buying parts from Daiso, such as jump rings, eye pins and assorted shapes. Some earrings are shaped by myself. Then I discovered the convenience of Shopee, which exposed me to resin art. I made some earrings with them too.
                          <br/><br/>
                          Another recent interest I've been exploring is keycap making! When I was experimenting with resin, I also made some keycaps with it, but found it hard to work with as resin was not a very beginner friendly medium, at least to me. For 2022's Christmas, I asked for some clay (Sculpey Premo) and started making keycaps with it and it was much easier - I had lots of time to work with them, since polymer clay does not harden until you bake it. My first ever clay keycaps made was a pair of Strawberry Cow keycaps inspired by some instagram posts. It was mistaken as a pig by multiple friends though... If I ever get serious enough with keycaps, I might make an account for them just like my crocheting journey.
                          </p>
                        </p>
                        <h5>Baking</h5>
                        <p>
                          I started 'baking' when I was in primary school, just throwing random ingredients in a bowl, mixing them and putting it in the oven. It tasted alright for the most part, but then I realised I could just follow recipes and make cookies. I really like how baking works and I feel really rewarded when the stuff I make taste good and the people around me enjoy them. 
                          <br/><br/>
                          The thing I bake the most now are macarons! Surprisingly, my first attempt was a success when I was in Secondary 3 (2017), when everyone around me was telling me how hard macarons are to bake and thats why they are so expensive. My friends would buy boxes from me (I sold them real cheap, like $3 for 6 macarons lol) and they would ask me when would I bake more. Now its 2022, I bake them for fun and usually give them to my boyfriend after a long week :D
                          <br/><br/>
                          The only thing about baking that I don't like is the cleaning up. I would glady bake the whole day but washing dishes highly demotivates me..
                        </p>

                      </div>                                             
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>


      </section>
    )
}

export default About