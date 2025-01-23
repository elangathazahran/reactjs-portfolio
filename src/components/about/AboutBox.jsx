import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutBox = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const elements = aboutRef.current.querySelectorAll('.about__title');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateNumbers(elements);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 } // Animasi akan berjalan ketika elemen terlihat 50%
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateNumbers = (elements) => {
        const targetValues = [100, 398, 71, 2931];

        elements.forEach((element, index) => {
            gsap.fromTo(
                element,
                { innerText: 0 },
                {
                    innerText: targetValues[index],
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerText: 1 }, // Memastikan angka bulat
                    stagger: 0.5,
                }
            );
        });
    };

    return (
        <div className="about__boxes grid" ref={aboutRef}>
            {/* Projects */}
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Projects</span>
                </div>
            </div>

            {/* Coffee */}
            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            {/* Clients */}
            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Users</span>
                </div>
            </div>

            {/* Work Hours */}
            <div className="about__box">
                <i className="about__icon icon-clock"></i>
                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Time works</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;