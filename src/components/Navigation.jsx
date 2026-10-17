import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vision from './Vision';
import Engagement_Hub from './Engagement_Hub';
import Hero_Section from './Hero_Section';
import PowerCampaign from './PowerCampaign';
import TouchpointShowcase from './TouchpointShowcase';
import Header from './Header';
import Footer from './Footer';
import { DonationProvider } from '../context/DonationContext.jsx';
import useDonation from '../context/useDonation.js';
import { 
  TrendingUpOutlined, 
  MenuBookOutlined, 
  FavoriteBorderOutlined, 
  ShieldOutlined 
} from '@mui/icons-material';

const visionData = [
  {
    icon: <TrendingUpOutlined className="pillar-icon" />,
    title: "Youth Empowerment",
    description: "Support opportunities that help young people develop skills access opportunities and build a sustainabl livelihood."
  },
  {
    icon: <MenuBookOutlined className="pillar-icon" />,
    title: "Quality Education",
    description: "Advocate for better education opportunities and support system that give children and young people a chance to succeed."
  },
  {
    icon: <FavoriteBorderOutlined className="pillar-icon" />,
    title: "Better Healthcare",
    description: "Support accessible quality healthcare services and strong support for the residents who depend on public health facilities."
  },
  {
    icon: <ShieldOutlined className="pillar-icon" />,
    title: "Transparent Leadership",
    description: "Public leadership should be transparent and accountable. Residents deserve to know how decisions are affecting their ward."
  }
];
function NavigationContent() {
  const { donationOpen, setDonationOpen } = useDonation();
    return (
    <>
          <Header onDonate={() => setDonationOpen(true)} />
          <Routes>
            <Route path="/" element={
              <>
                <Hero_Section />
                <Vision visionData={visionData} />
                <Engagement_Hub />
                <PowerCampaign />
              </>
            } />
            <Route path="/agendas" element={<main className="route-page"><Vision visionData={visionData} /><Engagement_Hub view="agenda" /></main>} />
            <Route path="/youth-registry" element={<main className="route-page"><Engagement_Hub view="registry" /></main>} />
            <Route path="/volunteer" element={<main className="route-page volunteer-page">
              <p className="volunteer-eyebrow">GET INVOLVED</p>
              <h1>Volunteer with the campaign</h1>
              <p>Help us listen, connect, and serve communities across Karura.</p>
              <a href="mailto:hello@sandrambuvi27.co.ke?subject=Campaign%20Volunteer">Contact the campaign team</a>
            </main>} />
            <Route path="*" element={<main className="route-page not-found-page"><h1>Page not found</h1><a href="/">Return home</a></main>} />
          </Routes>
          <Footer />
          {donationOpen && <TouchpointShowcase onClose={() => setDonationOpen(false)} />}
        </>
    )
}

export default function Navigation() {
    return (
      <DonationProvider>
        <BrowserRouter>
          <NavigationContent />
        </BrowserRouter>
      </DonationProvider>
    );
}