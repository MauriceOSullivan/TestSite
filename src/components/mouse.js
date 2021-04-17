import React, {useEffect, useState} from 'react'

function Mouse(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    var [r, setR] = useState(0)
    var [g, setG] = useState(0)
    var [b, setB] = useState(0)

    const logMouseposition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
        setR(e.cleintX/5)
        setG(e.cleintY/6)
        setB(e.cleintX/4)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMouseposition)
    }, [])

    const divStyle = {
        margin: '40px',
        textAlign: 'center',
        //color: 'blue'
        color:`rgb(${r},${g},${b})`
    };

    return (
        <div>
            <h1 style={divStyle}>{x}, {y}</h1>
        </div>
    )
}


export default Mouse; 