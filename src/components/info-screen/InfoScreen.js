import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserList, setUserToEdit } from '../../redux/actions/userActions'
import data from '../../data.json'
import './InfoScreen.css'
import InfoScreenPopup from './popup/InfoScreenPopup'


const redTheme = {
    themeColor: 'rgb(247, 12, 57)',
    themeLightColor: 'rgb(255, 42, 87)',
    width: '300px',
}

const blueTheme = {
    themeColor: 'rgb(57, 12, 247)',
    themeLightColor: 'rgb(87, 42, 255)',
    width: '',
}

class InfoScreen extends Component { 

    state = {
        ...redTheme,
        isRed: true,
    }

    switchTheme = () => {
        const newTheme = this.state.isRed ? blueTheme : redTheme
        this.setState({
            isRed: !this.state.isRed,
            ...newTheme
        })
    }

    setUserToEdit = (user) => this.props.setUserToEdit(user)

    componentDidMount() {
        this.props.setUserList(data)
    }
        
    render() {
        const list = this.props.users.userList
        const {themeColor, themeLightColor, width} = this.state

        return (
            <div className='user-list-wrapper'>
                <div className='switch-color-button' style={{borderColor: themeColor}} onClick={this.switchTheme}>
                    <span>Switch color</span>
                </div>
                <div className='user-list-container'>
                    { 
                        list.map(user => 
                            <div key={user.id} className='user-info-container' 
                                style={{backgroundColor: themeColor, width: width}} 
                                onDoubleClick={()=> this.setUserToEdit(user)}>

                                <span className='user-container-header' style={{backgroundColor: themeLightColor}}>{user.name}</span>
                                <span className='user-field'>{user.email}</span>
                                <span className='user-field'>{user.address ? user.address.city : ''}</span>
                                <span className='user-field'>{user.phone}</span>
                                <span className='user-field'>{user.website}</span>
                                <span className='user-field'>{user.company ? user.company.name : ''}</span>
                                
                            </div>
                            )
                    }
                </div>
                <InfoScreenPopup/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}
  
  
const mapDispatchToProps = dispatch => {
    return {
       setUserList: (userList) => {
            dispatch(setUserList(userList))
       },
       setUserToEdit: (user) => {
            dispatch(setUserToEdit(user))
       },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen)