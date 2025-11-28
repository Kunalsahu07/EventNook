import { FaLongArrowAltRight, FaCalendarAlt, FaUsers, FaLaptop } from "react-icons/fa";

export const Home = () => {
    return (
        <main className="home-page">

            {/* ============= HERO SECTION ============= */}
            <section className="hero-section">
                <div className="hero-wrapper">

                    {/* LEFT SIDE CONTENT */}
                    <div className="hero-content">
                        <h1 className="hero-title">
                            College Events Made Simple <br />
                            <span className="highlight-text">Participate With One Click.</span>
                        </h1>

                        <p className="hero-description">
                            Explore all upcoming college events — cultural, sports, academic, and technical.
                            Check details instantly and apply for participation directly from your dashboard.
                        </p>

                        <div className="hero-buttons">
                            <button className="hero-btn outline-btn">
                                <a href="/registration" className="home-participate-btn">Register as Participant</a>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hero-image">
                        <div className="hero-img-box">
                            <img
                                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
                                alt="College Event"
                            />
                        </div>

                        <div className="floating-card">
                            <h3>20+ Annual Events</h3>
                            <p>Sports • Cultural • Technical • Academic</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============= FEATURES SECTION ============= */}
            <section className="features-section">
                <h2 className="section-title">What You Can Do Here</h2>

                <div className="features-grid">

                    <div className="feature-card">
                        <FaCalendarAlt className="icon" />
                        <h3>See All Events</h3>
                        <p>All college events in one place — no more confusion or missed deadlines.</p>
                    </div>

                    <div className="feature-card">
                        <FaUsers className="icon" />
                        <h3>Apply for Participation</h3>
                        <p>Fill participation forms online for sports, fests, seminars & competitions.</p>
                    </div>

                    <div className="feature-card">
                        <FaLaptop className="icon" />
                        <h3>Track Your Registrations</h3>
                        <p>See which events you applied for and get updates from organizers.</p>
                    </div>

                </div>
            </section>

            {/* ============= WHY CHOOSE US ============= */}
            <section className="why-section">
                <div className="why-wrapper">
                    <div className="why-text">
                        <h2>Why This Platform?</h2>
                        <p>Built specially for college departments to manage events
                            without manual paperwork and confusion.</p>

                        <ul>
                            <li>✔ Simple participation process</li>
                            <li>✔ Event details available 24/7</li>
                            <li>✔ No need to contact teachers manually</li>
                            <li>✔ Organized for students & coordinators</li>
                        </ul>
                    </div>

                    <div className="why-image">
                        <img
                            src="https://t4.ftcdn.net/jpg/02/92/43/84/360_F_292438425_stcA1MBoNvKcJsteVEh9UpAJZciV06Pq.jpg"
                            alt="Why Choose Us"
                        />
                    </div>
                </div>
            </section>

            {/* ============= CALL TO ACTION ============= */}
            <section className="cta-section">
                <h2>Ready To Participate?</h2>
                <p>Check the list of upcoming events and register today.</p>

                <button className="cta-btn">
                    <a href="/event">Explore Events</a> <FaLongArrowAltRight />
                </button>
            </section>

        </main>
    );
};
