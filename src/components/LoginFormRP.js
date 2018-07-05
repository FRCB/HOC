import React from 'react'
import Form from '../RPs/Form'

export default function LoginFormRP(props) {
    //props = { title: 'another login form' }
    return (
        <Form {...props}>
            {props => (
                <div>
                    <h1>{props.title}</h1>
                    <div>
                        <input name='email' type="text" placeholder='email' onChange={props.handleChange} />
                        <input name='password' type="text" placeholder='password' onChange={props.handleChange} />
                        <button type="submit" onClick={props.handleSubmit}>submit</button>
                    </div>
                </div>
            )}
        </Form>
    )
}