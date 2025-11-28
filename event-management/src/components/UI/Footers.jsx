import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footers = () => {
  return (
    <footer className="simple-footer" role="contentinfo">
      <div className="container">
        <div className="social-links" aria-label="Social links">
          <a href="https://www.facebook.com/rahulkumar.sahu.585559" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/rahul_kumar_7489/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://x.com/sahu_kunal7489" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/kunal-sahu-8196b6305/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>

        <p className="copyright muted" style={{marginTop:8}}>
          © {new Date().getFullYear()} EventNook. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
