import React from 'react'
import './style.css'

export default function AProgress({ done }) {
    const [style, setStyle] = React.useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 300);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="progress">
                            <div className="progress-done" style={style}>{done}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
