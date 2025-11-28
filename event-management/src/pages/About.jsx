import './CSS/About.css';
import myPic from '../assets/logo.png';

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-box">

                <div className="image-section">
                    <img src={myPic} alt="Kunal Sahu" className="about-img" />
                </div>

                <h1>About Me</h1>

                <p>
                    Hi, I’m <strong>Kunal Sahu</strong>, a passionate and energetic MCA
                    student at <strong>Pandit Ravishankar Shukla University, Raipur</strong>.
                    I’m currently in my 3rd semester, focusing on becoming a skilled
                    full-stack developer while exploring various domains in computer science.
                </p>


                <p>
                    In our department (CS & IT), I’m an active member of the
                    <strong> Technical Team</strong>, where I help organize coding-related activities
                    like quizzes, debugging rounds, treasure hunts, and technically creative events
                    for students. I enjoy creating digital tools, designing websites, and making
                    interactive programs that add value to college events.
                </p>


                <p className="ending">
                    Thank you for visiting my website. I hope you find my work helpful and inspiring!
                </p>
            </div>
        </div>
    );
};
