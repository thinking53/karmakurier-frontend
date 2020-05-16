import React from 'react'
import LeftSlideButton from '../../atoms/LeftSlideButton/LeftSlideButton.atom'
import RightSlideButton from '../../atoms/RightSlideButton/RightSlideButton.atom'

function Slider() {
    return (
        <div className="slider">
            <LeftSlideButton />
            <RightSlideButton />
        </div>
    )
}

export default Slider
