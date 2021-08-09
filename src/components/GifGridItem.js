import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        //Para CSS es className y no class
        <div className="card animate__fadeIn">
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}
