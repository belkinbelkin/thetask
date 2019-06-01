
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import InfoScreen from './components/info-screen/InfoScreen'
import configureStore from './redux/store/store'
import { Provider } from 'react-redux'
import MainScreen from './components/main-screen/MainScreen'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <div className='router-container'>
                <Route path="/" component={App}></Route>
                <Route exact path="/" component={MainScreen}></Route>
                <Route path="/info" component={InfoScreen}></Route>
            </div>
        </Router>
    </Provider>,
document.getElementById('root'));



registerServiceWorker();
