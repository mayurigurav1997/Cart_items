import React from 'react'

function Alert(props) {
    return (
        <>
            <Alert color="primary">
                One Item is added in Cart.
                Total Items are {props.count}!
            </Alert>
        </>
    )
}

export default Alert