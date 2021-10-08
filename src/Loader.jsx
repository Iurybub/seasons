import React from 'react'
import './Loader.css'
const Loader = (props) => {
    return (
        <div class="ui segment spinner">
            <div class="ui active dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    )
}
Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader
