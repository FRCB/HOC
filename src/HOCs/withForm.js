import React, { Component } from 'react'

function withForm(WrappedComponent) {
    return class extends Component {
        handleChange = (e) => {
            e.preventDefault()
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault()
            console.log('the form info is: ', this.state)
        }

        render() {
            return <WrappedComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.props} />
        }
    }
}

export default withForm