import '../styling/PowerCampaign.css';
import { SendToMobileOutlined } from '@mui/icons-material';
import useDonation from '../context/useDonation.js';

export default function PowerCampaign() {
    const { selectedAmountOption, chooseDonationAmount, setDonationOpen } = useDonation();

    const amounts = [
        { label: 'KES 200', option: '200' },
        { label: 'KES 500', option: '500' },
        { label: 'KES 1000', option: '1000' },
        { label: 'Custom Amount', option: 'custom' },
    ];

    return (
        <section className="power-section">
            <div className="power-content">
                <p className="power-eyebrow">A GRASSROOTS MOVEMENT</p>
                <h1 className="power-title">Power the Campaign</h1>
                <p className="power-description">
                    We are building a grassroots movement. Every shilling helps us reach more voters<br />in Karura.
                </p>

                <div className="donation-chips">
                    {amounts.map(({ label, option }) => (
                        <button
                            key={option}
                            type="button"
                            className={`chip-btn ${selectedAmountOption === option ? 'selected' : ''}`}
                            aria-pressed={selectedAmountOption === option}
                            onClick={() => chooseDonationAmount(option)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <button type="button" className="mpesa-btn" onClick={() => setDonationOpen(true)}>
                    <SendToMobileOutlined className="mpesa-icon" /> Contribute via M-Pesa
                </button>
            </div>
        </section>
    );
}