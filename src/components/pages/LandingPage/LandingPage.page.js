import React from 'react'
import { useInView } from 'react-intersection-observer'
import Footer from '../../organisms/Footer/Footer.organism'
import Header from '../../organisms/Header/Header.organism'
import LocationIndicator from '../../organisms/LocationIndicator/LocationIndicator.organism'
import Chores from '../../templates/Chores/Chores.template'
import SliderHeadline from '../../templates/Slider/Slider.template'
import './LandingPage.page.scss'

const LandingPage = () => {
    // see: https://github.com/researchgate/react-intersection-observer/blob/master/README.md
    // see: https://github.com/thebuilder/react-intersection-observer/blob/HEAD/docs/Recipes.md#lazy-image-load
    const [ref /* inView, entry */] = useInView({
        /* Optional options */
        threshold: 0,
    })

    return (
        <div className="landing-page">
            <Header />
            <div className="content">
                <div ref={ref} className="section">
                    <h1>karmakurier hilft bei Besorgungen</h1>
                    <Chores />
                </div>
                <div className="section">
                    <SliderHeadline headline="Wie funktioniert karmakurier?" />
                </div>
                <div className="section">
                    <h1>Unser Karmaprogramm</h1>
                </div>
                <div className="section">
                    <h1>Unsere Unterstützer</h1>
                </div>
                <div className="section">
                    <h1>
                        Werden Sie Teil von <span className="highlight">karmakurier</span>
                    </h1>
                </div>
            </div>
            <LocationIndicator />
            <Footer />
        </div>
    )
}

export default LandingPage
