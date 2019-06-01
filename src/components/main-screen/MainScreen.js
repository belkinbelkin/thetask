import React, { Component } from 'react'
import './MainScreen.css'
import { Link } from 'react-router-dom'

export default class MainScreen extends Component {

    render() {
      return (
        <div className='greeting-button-container'>
            <Link to="/info">
                <div className='greeting-button-wrapper'>
                    <span>View users</span>
                </div>
            </Link>
        </div>
      )
    }
}