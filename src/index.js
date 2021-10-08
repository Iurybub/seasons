import React, { Component } from 'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'



export class App extends Component {
    constructor(props) {
        super(props)
        // The only time we do a direct assignment
        this.state = {
            lat: null,
            error: null,
            month: null,

        }

    }
    renderContenct() {
        if (this.state.error && !this.state.lat) {
            return <div> Error: {this.state.error} </div>
        }
        if (!this.state.error && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} month={this.state.month} />
        }

        return <Loader message="Waiting for user permission..." />
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ error: err.message })
        );
        this.setState({ month: new Date().getMonth() });
    }
    componentDidUpdate() {
        console.log('My component was just updated and was rerendered!')
    }
    render() {
        return (
            <div className="border red">
                {this.renderContenct()}
            </div>
        )

    }
}


ReactDom.render(
    <App />,
    document.querySelector("#root")
);