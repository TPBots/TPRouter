/* js Telepresence protocol

*/

const express = require('express');
const axios = require('axios');
const http = require('http');
const ws = require('ws');
const wsServer = ws.WebSocketServer;
const wsClient = ws.WebSocketClient;


module.exports = function(TPProtocol){

    const roleL = TPProtocol.roles;
    const routeL = TPProtocol.routes;
    const role = ;


    // ENVIRONMENT ... effected by enviroment
    // does not account duplicate routes

    let route;
    let _;
    let verb;
    let roles;
    let procedures = [];

    routeL.forEach((routeObj)=>{
        
        route = routeObj.route;
        verb = routeobj.verb;
        roles = routeobj.roles;

        if (protocol === "http")        _ = expressInstance;
        else if (protocol === "ws")     _ = wsInstance;
        else throw new Error("protocol not supported")

        _[verb](route,(req,res)=>{
            procedures.forEach((procedurename)=>{
                proceduremap[procedurename](req,res);
            })
        })
    });

}