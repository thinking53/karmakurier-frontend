import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import Footer from '../../organisms/Footer/Footer.organism'
import Header from '../../organisms/Header/Header.organism'
import LocationIndicator from '../../organisms/LocationIndicator/LocationIndicator.organism'
import Chores from '../../templates/Chores/Chores.template'
import './LandingPage.page.scss'

const LandingPage = () => {
    const [activeSection, setActiveSection] = useState(0)
    const threshold = 0.8
    const handleViewChange = (visible, sectionId) => {
        if (visible) {
            setActiveSection(sectionId)
        }
    }

    // see: https://github.com/researchgate/react-intersection-observer/blob/master/README.md
    // see: https://github.com/thebuilder/react-intersection-observer/blob/HEAD/docs/Recipes.md#lazy-image-load

    return (
        <div className="landing-page">
            <Header />
            <div className="content">
                <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 0)}>
                    <div className="section">
                        <h1>Karmakurier hilft bei Besorgungen</h1>
                        <Chores />
                    </div>
                </InView>
                <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 1)}>
                    <div className="section">
                        <h1>Unser Karmaprogramm</h1>
                    </div>
                </InView>
                <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 2)}>
                    <div className="section">
                        <h1>Unsere Unterstützer</h1>
                    </div>
                </InView>
                <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 3)}>
                    <div className="section">
                        <h1>
                            Werden Sie Teil von <span className="highlight">karmakurier</span>
                        </h1>
                    </div>
                </InView>
            </div>
            <LocationIndicator sectionCount="4" activeSection={activeSection} />
            <Footer />
        </div>
    )
}

export default LandingPage
