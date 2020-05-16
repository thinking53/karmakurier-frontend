import React from 'react'
import './LocationIndicator.organism.scss'

function LocationIndicator() {
    return (
        <div className="location-indicator">
            {[1, 2, 3].map(() => (
                <span>&#9675;&nbsp;</span>
            ))}
        </div>
    )
}

export default LocationIndicator
