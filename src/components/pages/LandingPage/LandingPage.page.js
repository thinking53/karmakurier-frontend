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
                <div className="section">
                    <h1>Section </h1>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="section">
                    <h1>Section </h1>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="section">
                    <h1>Section </h1>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <LocationIndicator />
            <Footer />
        </div>
    )
}

export default LandingPage
