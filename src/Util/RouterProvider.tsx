import React from 'react';
import {  Routes, Route } from "react-router-dom";

interface RouterConfigProps{
    path:string,
    element:React.ReactNode,
    children?:RouterConfigProps[],
}

const renderRouter =(router:RouterConfigProps[])=>{
    return router.map((route:RouterConfigProps,index:number)=>{
        if (route.children){
            return(
                <Route key={index} path={route.path} element={route.element}>
                    {renderRouter(route.children)}
                </Route>
            )
        }
        return <Route key={index} path={route.path} element={route.element}/>
    })
}
export const createRouterProvider =(routes: RouterConfigProps[])=>{
    return(
        <Routes>
            {renderRouter(routes)}
        </Routes>
    )
}