import React from 'react'

export const About = (props) => {

    return (
        <section>
            <div className='container'>
                <h1>{props.data ? props.data.title : 'loading...'}</h1>
            </div>
        </section>
    )
}
