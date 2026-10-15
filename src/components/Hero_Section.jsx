export default function Hero_Section(){
    return ( 
        <header className="hero-section">
            <div className="hero-content">

                <div className="hero-columns">

                    <div className="hero-column1">
                        <p className="hero-year">KARURA WARD. 2027</p>
                        <h1 className="hero-title">Sandra Mbuvi for MCA Karura Ward 2027.</h1>
                        
                        <p className="hero-subtitle">
                            Your Voice, Your Vote, Your Karura.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-primary">Join the Movement</button>
                            <button className="btn-secondary">Read the Blueprint</button>
                        </div>

                    </div>

                    <div className="hero-column2">
                        <img src="/candidate.jpg" alt="Candidate's Image"/>
                    </div>

                </div>
            
            </div>
        </header>

    )
}