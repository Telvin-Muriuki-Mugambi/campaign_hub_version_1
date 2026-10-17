import { 
    ChatBubbleOutlineOutlined, 
    PeopleOutlineOutlined, 
    ArrowForward, 
    PersonOutlineOutlined, 
  PhoneOutlined,
  KeyboardArrowDown
} from "@mui/icons-material";
import "../styling/Engagement_Hub.css"

export default function Engagement_Hub({ view = 'all' }) {
    const showAgenda = view === 'all' || view === 'agenda';
    const showRegistry = view === 'all' || view === 'registry';

    return (
        <section className={`hub-section${view === 'all' ? '' : ' hub-section-focused'}`}>
            <div className="hub-header">
                <p className="hub-eyebrow">LISTEN. CONNECT. ACT.</p>
                <h1 className="hub-title">{view === 'agenda' ? 'Shape the Karura Agenda' : view === 'registry' ? 'The Karura Youth Registry' : 'Be Part of the Solution Today'}</h1>
            </div>

            <div className="hub-grid">
                {/* Left Card: Shape the Agenda */}
                {showAgenda && (
                <div className="hub-card">
                    <div className="hub-icon-wrapper">
                        <ChatBubbleOutlineOutlined className="hub-icon" />
                    </div>
                    <h2 className="hub-card-title">Shape the Karura Agenda</h2>
                    <p className="hub-card-description">
                        Leadership begins with listening. What needs fixing in your neighborhood?
                    </p>

                    <form className="hub-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <select className="hub-select" defaultValue="">
                                <option value="" disabled>Select Neighborhood</option>
                                <option value="gigiri">Gigiri</option>
                                <option value="githogoro">Githogoro</option>
                                <option value="muthaiga">Muthaiga</option>
                                <option value="runda">Runda</option>
                                <option value="village-market">Village Market</option>
                            </select>
                            <KeyboardArrowDown className="select-icon" />
                        </div>
                        
                        <textarea 
                            className="hub-textarea" 
                            placeholder="Describe the issue"
                            rows="4"
                        ></textarea>
                        
                        <button type="submit" className="hub-btn">
                            Share with Sandra <ArrowForward className="btn-icon" />
                        </button>
                    </form>
                </div>
                )}

                {/* Right Card: Youth Registry */}
                {showRegistry && (
                <div className="hub-card">
                    <div className="hub-icon-wrapper">
                        <PeopleOutlineOutlined className="hub-icon" />
                    </div>
                    <h2 className="hub-card-title">The Karura Youth Registry</h2>
                    <p className="hub-card-description">
                        Pre-register your youth group to get updates on campaign-sponsored sports and skills workshops.
                    </p>

                    <form className="hub-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-wrapper">
                            <PersonOutlineOutlined className="input-prefix-icon" />
                            <input 
                                type="text" 
                                className="hub-input with-prefix" 
                                placeholder="Name/Group Name" 
                            />
                        </div>

                        <div className="input-wrapper">
                            <PhoneOutlined className="input-prefix-icon" />
                            <input 
                                type="tel" 
                                className="hub-input with-prefix" 
                                placeholder="Phone Number" 
                            />
                        </div>

                        <button type="submit" className="hub-btn">
                            Join the Network <ArrowForward className="btn-icon" />
                        </button>
                    </form>
                </div>
                )}
            </div>
        </section>
    );
};