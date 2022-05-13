/* js Telepresence protocol

*/

const express = require('express');
const axios = require('axios');
const http = require('http');
const ws = require('ws');
const { appendFile } = require('fs');
const wsServer = ws.WebSocketServer;
const wsClient = ws.WebSocketClient;


function TPRouter(TPProtocol){

    const roleL = TPProtocol.roles;
    const routeL = TPProtocol.routes;
    const role = "node";


    // ENVIRONMENT ... effected by enviroment
    // does not account duplicate routes

    let route;
    let verb;
    let roles;
    let procedures = [];


    app = express();
    routeL
        .filter((routeObj)=>{return routeObj.protocol === "http"})
        .forEach((routeObj)=>{
            route = routeObj.route;
            verb = routeobj.verb;
            roles = routeobj.roles;
            app[verb](route,(req,res)=>{
                procedures.forEach((procedurename)=>{
                    proceduremap[procedurename](req,res);
                })
            })
        });

    
    routeL
        .filter((routeObj)=>{ return routeObj.protocol === "ws"})
        .forEach((routeObj)=>{
            wsServer.on("connection", (ws)=>{
                ws.on(routeObj.path.slice(1), ()=>{
                    procedures.forEach((procedurename)=>{
                        proceduremap[procedurename]();
                    })
                })
            });
        });

}

try {
    module.exports = TPRouter
} catch (e) {
    console.error(e)
}