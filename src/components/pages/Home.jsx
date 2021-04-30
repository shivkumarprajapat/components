import React from 'react'

export default function Home(props) {
    return (
        <section>
            <div className='container'>
                <h1>{props.data ? props.data.title : 'loading...'}</h1>
            </div>
        </section>
    )
}
