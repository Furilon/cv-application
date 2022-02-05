import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Body from './components/body/main-body'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
    return (
        <div>
            <Header />
            <div id="body">
                <Body />
            </div>
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
