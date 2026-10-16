import  { useState } from 'react';
import '../styling/PowerCampaign.css';
import { SendToMobileOutlined } from '@mui/icons-material';

export default function PowerCampaign() {
    const [selectedAmount, setSelectedAmount] = useState('KES 500');

    const amounts = ['KES 200', 'KES 500', 'KES 1000', 'Custom Amount'];

    return (
        <section className="power-section">
            <div className="power-content">
                <p className="power-eyebrow">A GRASSROOTS MOVEMENT</p>
                <h1 className="power-title">Power the Campaign</h1>
                <p className="power-description">
                    We are building a grassroots movement. Every shilling helps us reach more voters<br />in Karura.
                </p>

                <div className="donation-chips">
                    {amounts.map((amount) => (
                        <button
                            key={amount}
                            className={`chip-btn ${selectedAmount === amount ? 'selected' : ''}`}
                            onClick={() => setSelectedAmount(amount)}
                        >
                            {amount}
                        </button>
                    ))}
                </div>

                <button className="mpesa-btn">
                    <SendToMobileOutlined className="mpesa-icon" /> Contribute via M-Pesa
                </button>
            </div>
        </section>
    );
}