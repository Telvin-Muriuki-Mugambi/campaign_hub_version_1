import { useEffect } from 'react';
import '../styling/TouchpointShowcase.css';
import {
  Close,
  CheckCircleOutlineOutlined,
  PhoneOutlined,
  SendToMobileOutlined,
  TrendingUpOutlined,
  ArrowForward
} from '@mui/icons-material';
import useDonation from '../context/useDonation.js';

export default function TouchpointShowcase({ onClose }) {
  const { donationAmount, setDonationAmount } = useDonation();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className="touchpoint-overlay" onMouseDown={closeOnBackdrop}>
      <section className="touchpoint-section touchpoint-dialog" role="dialog" aria-modal="true" aria-labelledby="touchpoint-title">
      {/* Header */}
      <div className="touchpoint-header">
        <p className="touchpoint-eyebrow">INTERACTION DETAILS</p>
        <h2 className="touchpoint-title" id="touchpoint-title">Power the Campaign</h2>
      </div>

      {/* Comparison Grid */}
      <div className="touchpoint-grid">
        {/* Left Column:Contribution Sheet */}
        <div className="preview-column">
          <span className="column-label">CONTRIBUTION SHEET</span>

          <div className="sheet-card">
            <div className="drag-handle" />

            <div className="sheet-header">
              <h3 className="sheet-title">Power the Campaign</h3>
              <button type="button" className="close-btn" aria-label="Close donation dialog" onClick={onClose}>
                <Close fontSize="small" />
              </button>
            </div>

            <p className="sheet-description">
              We are building a grassroots movement. Every shilling helps us reach more voters in Karura.
            </p>

            <div className="selected-amount-pill">
              <span className="amount-prefix">KES</span>
              <input
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                aria-label="Donation amount in Kenyan shillings"
                className="amount-input"
                value={donationAmount}
                onChange={(event) => setDonationAmount(Number(event.target.value) || 0)}
              />
              <CheckCircleOutlineOutlined className="check-icon" fontSize="small" />
            </div>

            <div className="phone-input-wrapper">
              <PhoneOutlined className="phone-icon" fontSize="small" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="sheet-input"
                
              />
            </div>

            <button type="button" className="sheet-mpesa-btn">
              <SendToMobileOutlined className="mpesa-icon" fontSize="small" />
              Contribute via M-Pesa
            </button>
          </div>
        </div>

        {/* Right Column: Desktop / Hover */}
        <div className="preview-column">
          <span className="column-label">DESKTOP / HOVER</span>

          <div className="hover-card">
            <div className="hover-icon-wrapper">
              <TrendingUpOutlined className="hover-icon" />
            </div>
            <h3 className="hover-title">Youth Empowerment</h3>
            <p className="hover-description">
              Creating localized digital skills training and facilitating access to county youth tenders.
            </p>
          </div>

          <button type="button" className="join-btn">
            <ArrowForward className="arrow-icon" fontSize="small" />
            Join the Movement
          </button>

          
        </div>
      </div>
      </section>
    </div>
  );
}