import React from 'react';
import { render } from 'react-dom';
import './style/index.less';
import logo from './static/img/timg.png';
import { BrowserRouter } from 'react-router-dom';
import Lrouter from './router'

function App() {
    return (
        <div>
            <h1>Hello React !!!</h1>
            <img src={ logo } className="logo"/>
            <BrowserRouter>
                <Lrouter/>
            </BrowserRouter>
        </div>
    )
}

render(
    <App />,
    document.getElementById('app')
);