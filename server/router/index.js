import Router from 'koa-router';
import RouterConfig from '../../app/router';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from "react-dom/server";
import React from 'react';

const routes = new Router();

routes.get('/', (ctx, next) => {
    // StaticRouter来让我们自己设置location
    // 在浏览器上我们可以使用js获取到location，但是在node环境却获取不到
    console.log(ctx);
    console.log('RouterConfig', <RouterConfig/>)
    ctx.body = renderToString(
        <StaticRouter location={ctx.url}>
            <RouterConfig/>
        </StaticRouter>
    )
    next();
})

routes.get('/list', (ctx, next) => {
    ctx.body = renderToString(
        <StaticRouter location={ctx.url}>
            <RouterConfig/>
        </StaticRouter>
    )
    next();
})

export default routes;