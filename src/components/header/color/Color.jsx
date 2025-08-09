import React from 'react'
import {useState} from 'react'
import './color.css'

const Color = () => {
  return (
    <div className="color__options">
        <div className="color__option" id="default"></div>
        <div className="color__option" id="green"></div>
        <div className="color__option" id="blue"></div>
        <div className="color__option" id="bistre"></div>
    </div>
  )
}

export default Color