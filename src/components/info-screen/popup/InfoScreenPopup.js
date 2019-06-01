import React, { Component } from 'react'
import { setUserToEdit, setUserList } from '../../../redux/actions/userActions'
import { connect } from 'react-redux'
import './InfoScreenPopup.css'
import { IoIosSave, IoIosClose } from 'react-icons/io';

class InfoScreenPopup extends Component {

    closePopup = () => this.props.setUserToEdit(null)
    saveUser = (user) => {
        this.props.setUserList([...this.props.users.userList.filter(x => x.id !== user.id), user])
        this.props.setUserToEdit(null)
    }

    render() {

        let user = this.props.users.userToEdit

        if (!user) return null
        else return (
            <div className='user-edit-popup'>
                <div className='close-button-container'>
                    <div className='close-button-wrapper'>
                        <IoIosClose size={40} onClick={this.closePopup}/>
                    </div>
                </div>
                <div className='user-edit-row'>
                    <span className='user-edit-label'>Name:</span>
                    <input defaultValue={user.name} onChange={(e) => user.name = e.target.value}/>
                </div>
                <div className='user-edit-row'>
                    <span className='user-edit-label'>Email:</span>
                    <input defaultValue={user.email} onChange={(e) => user.email = e.target.value}/>
                </div>
                <div className='user-edit-row'>
                    <span className='user-edit-label'>City:</span>
                    <input defaultValue={user.address.city} onChange={(e) => user.address.city = e.target.value}/>
                </div>
                <div className='user-edit-row'>
                    <span className='user-edit-label'>Phone:</span>
                    <input defaultValue={user.phone} onChange={(e) => user.phone = e.target.value}/>
                </div>
                <div className='user-edit-row'>
                    <span className='user-edit-label'>Website:</span>
                    <input defaultValue={user.website} onChange={(e) => user.website = e.target.value}/>
                </div>
                <div className='user-edit-row'>
                    <span className='user-edit-label'>Company:</span>
                    <input defaultValue={user.company.name} onChange={(e) => user.company.name = e.target.value}/>
                </div>
                <div className='user-edit-save' onClick={() => this.saveUser(user)}>
                    <span>Save</span>
                    <IoIosSave size={26}/>
                </div>
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
        setUserToEdit: (user) => {
            dispatch(setUserToEdit(user))
        },
        setUserList: (userList) => {
            dispatch(setUserList(userList))
       },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoScreenPopup)