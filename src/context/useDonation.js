import { useContext } from 'react';
import DonationContext from './donationContextValue.js';

export default function useDonation() {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
}