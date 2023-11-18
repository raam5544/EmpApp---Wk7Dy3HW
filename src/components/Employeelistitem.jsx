import React from 'react'

function Employeelistitem(props) {
    return (
        <>
            <div>{props.employeeName}</div>
            <div>{props.employeePosition}</div>
        </>
    )
}

export default Employeelistitem