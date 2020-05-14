import React from 'react'
import './style.css'

export default function HoverPicture({name, image}) {
    return (
        <div className="picture">
            <div className="backdrop"><p className="name">{name}</p></div>
            <img className="image" src={image} alt={name} />
        </div>
    )
}