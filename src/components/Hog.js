import React, { useState } from 'react';
import truffle_shuffle from "../assets/truffle_shuffle.jpg";


function Hog({ name, specialty, greased, weight, medalAchieved, pigImages }) {
    
    const [isFlipped, setIsFlipped] = useState(false)

    // const {name, specialty, greased, weight, "highest medal achieved":medalAchieved} = hog

    const handleHogClick = () => {
        setIsFlipped((isFlipped) => !isFlipped)
    }
    
    const renderHog = () => {
        if (!isFlipped) {
            return (
                <div style={{marginTop: '25px'}} onClick={handleHogClick} className="ui eight wide column">
                    <h2>{name}</h2>
                    <img style={{height: '100px' }} alt={name} src={pigImages.find((pigImage) => pigImage === name)}></img>
                </div>
            )
        } else {
            return (
                <div onClick={handleHogClick} className="ui eight wide column">
                    <h3>{specialty}</h3>
                    <h6>{weight}</h6>
                    {greased ? <p>Greased</p> : <p>Ungreased</p>}
                    <p>Highest Medal Achieved: {medalAchieved}</p>
                </div>
            )
        }
    }

    return (
        <div>
          {renderHog()}
        </div>

    )

}



export default Hog;