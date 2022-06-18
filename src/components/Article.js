import React from 'react'

const Article = props => {
    return (
        <article id={props.id}>
            <h2 className="major">{props.title}</h2>
            <p>{props.data}</p>
        </article>
    )
}

export default Article