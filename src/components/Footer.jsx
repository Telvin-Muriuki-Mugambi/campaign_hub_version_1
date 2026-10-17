import { 
  PhoneOutlined, 
    MailOutlineOutlined, 
  Instagram, 
    CloseOutlined,
  OpenInNew, 
  MusicNoteOutlined
} from '@mui/icons-material';
import "../styling/Footer.css"

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/* Left Side: Brand and Contact */}
                <div className="footer-left">
                    <h2 className="footer-logo">Sandra Mbuvi 2027</h2>
                    <div className="footer-contact">
                        <a href="tel:+254700000000" className="contact-link">
                            <PhoneOutlined className="contact-icon" /> Phone
                        </a>
                        <a href="mailto:hello@sandrambuvi27.co.ke" className="contact-link">
                            <MailOutlineOutlined className="contact-icon" /> Email
                        </a>
                    </div>
                </div>

                {/* Right Side: Socials and Utility Button */}
                <div className="footer-right">
                    <div className="social-icons">
                        <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                            <Instagram />
                        </a>
                        <a href="#x" className="social-icon-btn" aria-label="X (Twitter)">
                            <CloseOutlined />
                        </a>
                        <a href="#tiktok" className="social-icon-btn" aria-label="TikTok">
                            <MusicNoteOutlined />
                        </a>
                    </div>
                    
                    {/* Live IEBC Link */}
                    <a 
                      href="https://verify.iebc.or.ke/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="iebc-btn"
                    >
                        <OpenInNew className="iebc-icon" /> Verify your voter status at the IEBC Portal.
                    </a>
                </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="footer-bottom">
                <p>Copyright. © 2026.</p>
            </div>
        </footer>
    );
}