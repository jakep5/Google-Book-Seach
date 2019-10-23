import React, { Component } from 'react'

function Book (props) {
    return ( 
            <div className = "resultItem">
                <h1 class="bookTitle">{props.volumeInfo.title}</h1>
            </div>
    )
}


export default Book
