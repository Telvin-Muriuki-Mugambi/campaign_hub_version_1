import { useState } from 'react';
import DonationContext from './donationContextValue.js';

export function DonationProvider({ children }) {
  const [donationAmount, setDonationAmount] = useState(500);
  const [selectedAmountOption, setSelectedAmountOption] = useState('500');
  const [donationOpen, setDonationOpen] = useState(false);

  const chooseDonationAmount = (option) => {
    setSelectedAmountOption(option);
    setDonationAmount(option === 'custom' ? 0 : Number(option));
  };

  return (
    <DonationContext.Provider value={{
      donationAmount,
      setDonationAmount,
      selectedAmountOption,
      chooseDonationAmount,
      donationOpen,
      setDonationOpen,
    }}>
      {children}
    </DonationContext.Provider>
  );
}