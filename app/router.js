import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';

const Home = () => (
    <div>
        <h1>首页</h1>
        <Link to="/list">跳转列表页</Link>
    </div>
)

const list = [
    'react真好玩',
    'koa有点意思',
    'ssr更有意思'
]

const List = () => (
    <ul>
        { list.map((item, i) => <li key={ i }>{ item }</li>) }
    </ul>
)

const routerComponent = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/list" element={ <List /> }/>
        </Routes>
    )
}

export default routerComponent