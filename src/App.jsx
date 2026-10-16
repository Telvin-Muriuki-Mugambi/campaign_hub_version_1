import './App.css'
import { 
  TrendingUpOutlined, 
  MenuBookOutlined, 
  FavoriteBorderOutlined, 
  ShieldOutlined 
} from '@mui/icons-material';
import Hero_Section from './components/Hero_Section'
import Navigation from './components/Navigation'
import Vision from './components/Vision'
import Engagement_Hub from './components/Engagement_Hub';


const visionData = [
  {
    icon: <TrendingUpOutlined className="pillar-icon" />,
    title: "Youth Empowerment",
    description: "Creating localized digital skills training and facilitating access to county youth tenders."
  },
  {
    icon: <MenuBookOutlined className="pillar-icon" />,
    title: "Quality Education",
    description: "A digitized, transparent blueprint for equitable Ward Bursary allocation."
  },
  {
    icon: <FavoriteBorderOutlined className="pillar-icon" />,
    title: "Better Healthcare",
    description: "Equipping local dispensaries and ensuring reliable maternal care for all residents."
  },
  {
    icon: <ShieldOutlined className="pillar-icon" />,
    title: "Transparent Leadership",
    description: "Open-door policy, community-led decision making, and zero tolerance for corruption."
  }
];

function App() {
  return (
    <>
      <Navigation />
      <Hero_Section/>
      <Vision visionData={visionData}/>
      <Engagement_Hub/>
      
    </>
  )
}

export default App