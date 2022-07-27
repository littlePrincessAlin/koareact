const Koa = require('koa');
// jsx编译之后会用到React对象, 所以需要引入
import React from 'react';
import { renderToString } from "react-dom/server";
import routes from './router';

const app = new Koa();
const App = () => <div>Hello Koa SSR</div>

app.use(ctx => {
    ctx.body = renderToString(<App/>);
})

app.use(routes.routes(), routes.allowedMethods());

app.listen(9000, () => {
    console.log(`node服务已经启动, 请访问localhost:9000`)
})