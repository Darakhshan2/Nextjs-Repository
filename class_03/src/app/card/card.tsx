import React from 'react'

interface Props {
    name:string,
    age:number,
    rollNo:number
}

function Card(props: Props) {
    return (
        <>
        <h2>Name:{props.name}</h2>
        <h2>Age:{props.age}</h2>
        <h2>rollNO:{props.rollNo}</h2>
        </>
    )
}
export default Card
