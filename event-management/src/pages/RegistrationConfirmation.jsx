import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Printer, Home, CheckCircle } from "lucide-react";
import "./CSS/RegistrationConfirmation.css";

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8 - 4;
        this.alpha = 1;
        this.life = 100;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.2;
        this.alpha -= 0.01;
        this.life--;
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createFireworks = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(
          new Particle(Math.random() * canvas.width, Math.random() * canvas.height * 0.5)
        );
      }
    };

    const animate = () => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 0) {
        requestAnimationFrame(animate);
      }
    };

    createFireworks();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export const RegistrationConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const printRef = useRef();
  const [showFireworks, setShowFireworks] = useState(true);

  const registrationData = location.state?.registrationData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFireworks(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!registrationData) {
    return (
      <div className="confirmation-error">
        <div className="error-content">
          <p>No registration data found. Please register again.</p>
          <button className="btn" onClick={() => navigate("/registration")}>
            Go Back to Registration
          </button>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const confirmationNumber = `REG${Date.now().toString().slice(-8)}`;
  const registrationDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const registrationTime = new Date().toLocaleTimeString("en-IN");

  return (
    <div className="confirmation-container">
      {showFireworks && <Fireworks />}
      <div className="confirmation-header">
        <div className="success-badge">
          <CheckCircle size={40} className="icon-success" />
          <h1>Registration Successful!</h1>
        </div>
        <p className="confirmation-subtitle">Your registration has been confirmed</p>
      </div>

      <div className="confirmation-content" ref={printRef}>
        {/* Acknowledgement Certificate */}
        <div className="certificate">
          <div className="certificate-header">
            <h2>📋 REGISTRATION ACKNOWLEDGEMENT</h2>
          </div>

          <div className="certificate-body">
            <div className="confirmation-number-box">
              <p className="label">Confirmation Number</p>
              <p className="confirmation-number">{confirmationNumber}</p>
            </div>

            <div className="date-time-box">
              <div className="date-box">
                <p className="label">Registration Date</p>
                <p className="date-value">{registrationDate}</p>
              </div>
              <div className="time-box">
                <p className="label">Registration Time</p>
                <p className="time-value">{registrationTime}</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="participant-details">
              <h3>👤 Participant Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">
                    {registrationData.firstname} {registrationData.lastname}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Roll Number:</span>
                  <span className="detail-value">{registrationData.rollno}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Department:</span>
                  <span className="detail-value">{registrationData.department}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Class:</span>
                  <span className="detail-value">{registrationData.className}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Mobile Number:</span>
                  <span className="detail-value">{registrationData.mobile}</span>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="event-details">
              <h3>🎯 Event Details</h3>
              <div className="details-grid">
                <div className="detail-item full-width">
                  <span className="detail-label">Event Category:</span>
                  <span className="detail-value badge-category">
                    {registrationData.eventCategory.replace(/_/g, " ")}
                  </span>
                </div>
                <div className="detail-item full-width">
                  <span className="detail-label">Event Name:</span>
                  <span className="detail-value badge-event">
                    {registrationData.subEvent}
                  </span>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="certificate-footer">
              <p className="footer-text">
                This is your registration acknowledgement. Please keep it for your records.
              </p>
              <p className="footer-note">
                Thank you for registering! We look forward to seeing you at the event.
              </p>
            </div>
          </div>

          <div className="certificate-bottom">
            <p className="watermark">EventNook</p>
          </div>
        </div>
      </div>

      <div className="confirmation-actions no-print">
        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={18} />
          Print Acknowledgement
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          <Home size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
};
