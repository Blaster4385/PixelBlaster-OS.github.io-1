import React from 'react'

const IFrame = props => {
    return (
        <div className="myFrame">
            <iframe src={props.url} />
        </div>

    )
}

export default IFrame