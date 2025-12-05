import React, { useEffect, useState } from 'react';

const Book = () => {
    const [pages, setPages] = useState([
        { id: 'turn-1', turned: false, zIndex: 10 },
        { id: 'turn-2', turned: false, zIndex: 9 }, 
        { id: 'turn-3', turned: false, zIndex: 8 }
    ]);

    const [coverTurned, setCoverTurned] = useState(false);
    const [coverZIndex, setCoverZIndex] = useState(100);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setCoverTurned(true);
        }, 2100);

        const timer2 = setTimeout(() => {
            setCoverZIndex(-1);
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const handleNextPage = (index) => {
        setPages(prevPages => {
            const newPages = [...prevPages];
            newPages[index].turned = true;
            setTimeout(() => {
                setPages(current => {
                    const updated = [...current];
                    updated[index].zIndex = 20 + index; 
                    return updated;
                });
            }, 500);
            return newPages;
        });
    };

    const handlePrevPage = (index) => {
        setPages(prevPages => {
            const newPages = [...prevPages];
            newPages[index].turned = false;
            setTimeout(() => {
                setPages(current => {
                    const updated = [...current];
                    updated[index].zIndex = 10 - index; 
                    return updated;
                });
            }, 500);
            return newPages;
        });
    };

    const handleContactClick = () => {
        handleNextPage(0);
        setTimeout(() => handleNextPage(1), 200);
        setTimeout(() => handleNextPage(2), 400);
    };

    const handleBackToProfile = () => {
        handlePrevPage(2);
        setTimeout(() => handlePrevPage(1), 200);
        setTimeout(() => handlePrevPage(0), 400);
    };

    return (
        <div className="wrapper">
            <div className="cover cover-left"></div>
            <div className={`cover cover-right ${coverTurned ? 'turn' : ''}`} style={{ zIndex: coverZIndex }}></div>

            <div className="book">
                {/* --- PROFILE PAGE (LEFT) --- */}
                <div className="book-page page-left">
                    <div className="profile-page">
                        {/* REPLACE WITH YOUR IMAGE URL */}
                        <img src="Photo.jpg" alt="Kuboja Daniel" /> 
                        <h1>Kuboja Daniel.M</h1>
                        <h3>Aspiring Data Scientist</h3>

                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/kuboja-mabuba-9202b82b6?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                            <a href="https://github.com/Kubojah-Dan" target="_blank"><i className='bx bxl-github'></i></a>
                            <a href="mailto:kubojadaniel.m2024aiml@sece.ac.in"><i className='bx bxl-gmail'></i></a>
                            <a href="#"><i className='bx bx-code-alt'></i></a>
                        </div>

                        <p>
                            With a CGPA of 8.1 in B.E. CSE (AIML), I possess a strong analytical mindset 
                            and a passion for uncovering insights from data. Skilled in Machine Learning, 
                            Deep Learning, and Full Stack Development.
                        </p>

                        <div className="btn-box">
                            <a href="/resume.pdf" download className="btn">Download CV</a>
                            <button className="btn contact-me" onClick={handleContactClick}>Contact Me</button>
                        </div>
                    </div>
                </div>

                {/* --- PAGE 1: WORK & EDUCATION --- */}
                <div 
                    className={`book-page page-right ${pages[0].turned ? 'turn' : ''}`} 
                    id="turn-1" 
                    style={{ zIndex: pages[0].zIndex }}
                >
                    {/* Page 1 Front: Internship/Experience */}
                    <div className="page-front">
                        <h1 className="title">Experience</h1>
                        <div className="workeduc-box">
                            <div className="workeduc-content">
                                <span className="year"><i className='bx bxs-calendar'></i>2025</span>
                                <h3>MERN Stack Internship</h3>
                                <p>
                                    16-day In-house Internship. Built a comprehensive Learning Management System (LMS) 
                                    using MongoDB, Express, React, and Node.js.
                                </p>
                            </div>
                            <div className="workeduc-content">
                                <span className="year"><i className='bx bxs-calendar'></i>2025</span>
                                <h3>Freshathon (Hackathon)</h3>
                                <p>
                                    Secured Third Place. Designed a real-time Scam Detection Application using 
                                    NLP and Machine Learning.
                                </p>
                            </div>
                            <div className="workeduc-content">
                                <span className="year"><i className='bx bxs-calendar'></i>2024</span>
                                <h3>Selfiehack</h3>
                                <p>
                                    Finalist in a 3-round intense hackathon, demonstrating rapid prototyping 
                                    and problem-solving skills.
                                </p>
                            </div>
                        </div>
                        <span className="number-page">1</span>
                        <span className="nextprev-btn" onClick={() => handleNextPage(0)}>
                            <i className='bx bx-chevron-right'></i>
                        </span>
                    </div>

                    {/* Page 1 Back: Education */}
                    <div className="page-back">
                        <h1 className="title">Education</h1>
                        <div className="workeduc-box">
                            <div className="workeduc-content">
                                <span className="year"><i className='bx bxs-calendar'></i>2024 - 2028</span>
                                <h3>B.E. CSE (AIML)</h3>
                                <p>
                                    Sri Eshwar College of Engineering<br/>
                                    CGPA: 8.1 (2nd Sem)
                                </p>
                            </div>
                            <div className="workeduc-content">
                                <span className="year"><i className='bx bxs-calendar'></i>2020 - 2023</span>
                                <h3>KCSE (High School)</h3>
                                <p>
                                    Karura SDA High School<br/>
                                    Score: 80%
                                </p>
                            </div>
                            <div className="workeduc-content">
                                <span className="year"><i className='bx bxs-calendar'></i>2012 - 2019</span>
                                <h3>PSLE</h3>
                                <p>
                                    Joyland International School<br/>
                                    Score: 90%
                                </p>
                            </div>
                        </div>
                        <span className="number-page">2</span>
                        <span className="nextprev-btn back" onClick={() => handlePrevPage(0)}>
                            <i className='bx bx-chevron-left'></i>
                        </span>
                    </div>
                </div>

                {/* --- PAGE 2: SKILLS & CERTS --- */}
                <div 
                    className={`book-page page-right ${pages[1].turned ? 'turn' : ''}`} 
                    id="turn-2" 
                    style={{ zIndex: pages[1].zIndex }}
                >
                    {/* Page 2 Front: Technical Skills */}
                    <div className="page-front">
                        <h1 className="title">Technical Skills</h1>
                        <div className="skills-box">
                            <div className="skills-content">
                                <h3>Languages</h3>
                                <div className="content">
                                    <span><i className='bx bxl-python'></i>Python</span>
                                    <span><i className='bx bxl-c-plus-plus'></i>C++</span>
                                    <span><i className='bx bxl-java'></i>Java</span>
                                </div>
                            </div>
                            <div className="skills-content">
                                <h3>Web & Data</h3>
                                <div className="content">
                                    <span><i className='bx bxl-react'></i>React</span>
                                    <span><i className='bx bxl-nodejs'></i>Node</span>
                                    <span><i className='bx bxs-data'></i>MySQL</span>
                                    <span><i className='bx bxl-mongodb'></i>Mongo</span>
                                </div>
                            </div>
                            <div className="skills-content">
                                <h3>AI/ML</h3>
                                <div className="content">
                                    <span><i className='bx bxl-python'></i>Pandas</span>
                                    <span><i className='bx bx-brain'></i>Tensor</span>
                                </div>
                            </div>
                        </div>
                        <span className="number-page">3</span>
                        <span className="nextprev-btn" onClick={() => handleNextPage(1)}>
                            <i className='bx bx-chevron-right'></i>
                        </span>
                    </div>

                    {/* Page 2 Back: Certifications & Rank */}
                    <div className="page-back">
                        <h1 className="title">Certifications</h1>
                        <div className="services-box">
                            <div className="services-content">
                                <i className='bx bx-code-alt'></i>
                                <h3>LeetCode</h3>
                                <p>Solved 300+ Problems<br/>Global Rank: 356,449</p>
                            </div>
                            <div className="services-content">
                                <i className='bx bxs-certification'></i>
                                <h3>Data Science</h3>
                                <p>Python Libraries (SimpliLearn)<br/>Data Visualization (LinkedIn)</p>
                            </div>
                            <div className="services-content">
                                <i className='bx bx-terminal'></i>
                                <h3>DSA</h3>
                                <p>Data Structures & Algo in C/C++<br/>(Udemy 2025)</p>
                            </div>
                            <div className="services-content">
                                <i className='bx bxl-python'></i>
                                <h3>CodeChef</h3>
                                <p>Solved 1000+ Problems<br/>Global Rank: 186,793</p>
                            </div>
                        </div>
                        <span className="number-page">4</span>
                        <span className="nextprev-btn back" onClick={() => handlePrevPage(1)}>
                            <i className='bx bx-chevron-left'></i>
                        </span>
                    </div>
                </div>

                {/* --- PAGE 3: PROJECTS & CONTACT --- */}
                <div 
                    className={`book-page page-right ${pages[2].turned ? 'turn' : ''}`} 
                    id="turn-3" 
                    style={{ zIndex: pages[2].zIndex }}
                >
                    {/* Page 3 Front: Latest Project */}
                    <div className="page-front">
                        <h1 className="title">Latest Project</h1>
                        <div className="portfolio-box">
                            <div className="img-box">
                                {/* REPLACE WITH YOUR PROJECT IMAGE URL */}
                                <img src="https://via.placeholder.com/600x400" alt="Scam Detection" />
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    <h3>Scam Detection App</h3>
                                    <a href="#">Live Preview <i className='bx bx-link-external'></i></a>
                                </div>
                                <p>Tech Used: Flask, NLP, Docker, React</p>
                                <p>
                                    Designed a real-time platform to identify malicious content across 
                                    multiple communication channels using Machine Learning.
                                </p>
                            </div>
                            <div className="btn-box">
                                <a href="#" className="btn">Source Code</a>
                                <a href="#" className="btn">More Projects</a>
                            </div>
                        </div>
                        <span className="number-page">5</span>
                        <span className="nextprev-btn" onClick={() => handleNextPage(2)}>
                            <i className='bx bx-chevron-right'></i>
                        </span>
                    </div>

                    {/* Page 3 Back: Contact Form */}
                    <div className="page-back">
                        <h1 className="title">Contact Me!</h1>
                        <div className="contact-box">
                            <form action="#">
                                <input type="text" className="field" placeholder="Full Name" required />
                                <input type="email" className="field" placeholder="Email Address" required />
                                <textarea className="field" placeholder="Your Message" required></textarea>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                        <span className="number-page">6</span>
                        <span className="nextprev-btn back" onClick={() => handlePrevPage(2)}>
                            <i className='bx bx-chevron-left'></i>
                        </span>
                        
                        {/* Close Book Button */}
                        <a href="#" className="back-profile" onClick={(e) => { e.preventDefault(); handleBackToProfile(); }}>
                            <p>Profile</p>
                            <i className='bx bxs-user'></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;