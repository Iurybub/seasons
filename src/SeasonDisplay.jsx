import './SeasonDisplay.css'
import React from 'react'
import "semantic-ui-css/semantic.min.css";


const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Brrr it's chilly...",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (lat > 2 && month < 12) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, props.month);
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season-wrapper ${season}`}>
            <i className={`icon-left icon massive ${iconName}`}></i>
            <h1>{text}</h1>
            <i className={`icon-right icon massive ${iconName}`}></i>

        </div>
    )
}

export default SeasonDisplay
