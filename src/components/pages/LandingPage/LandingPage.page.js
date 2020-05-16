import React from 'react'
import Header from '../../organisms/Header/Header.organism'
import Footer from '../../organisms/Footer/Footer.organism'
import './LandingPage.page.scss'
import LocationIndicator from '../../organisms/LocationIndicator/LocationIndicator.organism'

function LandingPage() {
    return (
        <div className="landing-page">
            <Header />
            <div className="content">
                {[1, 2, 3, 4, 5].map(() => (
                    <div className="section">
                        <h1>karmakurier hilft</h1>
                        <p>Coming soon...</p>
                    </div>
                ))}
            </div>
            <LocationIndicator />
            <Footer />
        </div>
    )
}

export default LandingPage
