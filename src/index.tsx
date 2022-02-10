import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import App from './pages/App'
import './styles/index.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserView>
            <App />
        </BrowserView>
        <MobileView>
            <h1>Mobile is not supported for this app</h1>
        </MobileView>
    </React.StrictMode>,
    document.getElementById('root')
)
