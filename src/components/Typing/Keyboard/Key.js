import React from 'react'

const Key = ({ value, type }) => {

    return (
        <div className="sm key letter func" onClick={() => type(value)}><label>{value}</label></div>
    )
}

export default Key
