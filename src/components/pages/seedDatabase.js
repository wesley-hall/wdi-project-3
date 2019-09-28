import React from 'react'
import axios from 'axios'
import Auth from "../../lib/auth";

class SeedDatabase extends React.Component {
    constructor() {
        super()
        
        this.state = { seeded: false }
        
        this.handleSeed = this.handleSeed.bind(this)
        this.handleReturnHome = this.handleReturnHome.bind(this)
    }
    
    handleReturnHome() {
        Auth.logout()
        this.props.history.push('/')
    }
    
    handleSeed() {
        axios.get('/api/seed')
            .then(res => this.setState({ seeded: true, message: res.data.message, details: res.data.details }, () => setTimeout(this.handleReturnHome, 5000)))
            .catch(err => {
                this.setState({ err })
            })
    }
    
    
    render() {
        return(
            <main className="hero is-bold is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        {!this.state.seeded
                            ?
                            <div>
                                <div className="columns">
                                    <div className="column is-full">
                                        <h1 className="title is-3">Are you sure you want to seed the database?</h1>
                                        <p className="subtitle">This will delete all information and replace it with the information from the seeds file</p>
                                        <p className="subtitle">You will also need to wait or manually restart the dynos before the app will be fully functional again on Heroku</p>
                                    </div>
                                </div>
                                <div className="buttons is-centered">
                                    <button className="button is-danger" onClick={this.handleSeed}>
                                        Yes, seed!
                                    </button>
                                    <button className="button is-warning" onClick={this.handleReturnHome}>
                                        No, return home
                                    </button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="columns">
                                    <div className="column is-full">
                                        <h1 className="title is-3">{this.state.message}</h1>
                                        <ul>
                                            {this.state.details.map(detail => (
                                                <li key={detail} className="subtitle is-italic">{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <button className="button is-success" onClick={this.handleReturnHome}>
                                    {Auth.isAuthenticated() ? 'Logout and return home' : 'Return home'}
                                </button>
                                <p className="is-small is-italic">You will be automatically {Auth.isAuthenticated() ? 'logged out and' : ''} returned to the homepage in 5 seconds.</p>
                            </div>
                        }
                    </div>
                </div>
            </main>
        )
    }
}

export default SeedDatabase