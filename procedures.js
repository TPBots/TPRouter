module.exports = {
    // serverHtmlApp,
    // deleteSocketPairs,
    // pingRegistryTillStream,
    // registerRobot,
    // registerUI,
    // unregister,
    // streamPlayVideo,
    // relayVideoBinary,
    // sendVideoBinary,
    // sendAudioBinary,
    // relayAudioBinary,
    // streamPlayAudio,
    // sendCommands,
    // relayCommands,
    // executeCommands,
}

const serverHtmlApp = (req,res)=>{
    const demoapphtmlfile = require("fs").readFileSync("./demo.html","utf8");
    res.send(demoapphtmlfile);
}




function sendBinary(option, ws, data){
    // sendCommands     // UI to Client
    // sendAudioBinary  // client to UI
    // sendVideoBinary  // client to UI


    ws.send(data);

}
function relayBinary(option,ws,data,socketPairs){

    // let toIPKey = {
    //     "video":"UIIP",
    //     "audio":"UIIP",
    //     "commands":"robotIP",
    // }[option];
    let fromIPKey = {
        "video":"robotIP",
        "audio":"robotIP",
        "commands":"UIIP",
    }[option];

    let toWSKey = {
        "video":"wsUI",
        "audio":"wsUI",
        "commands":"wsRobot"
    }[option];
    // let fromWSKey = {
    //     "video":"wsRobot",
    //     "audio":"wsRobot",
    //     "commands":"wsUI"
    // }[option];

    let socketObj = socketPairs.find((socketObj)=>{
        return socketObj[fromIPKey] === fromIP;
    });
    
    let toWS = socketObj[toWSKey];

    toWS.send(data);
}
function relayVideoBinary() { relayBinary("video", ws, data, socketPairs); };
function relayAudioBinary() { relayBinary("audio", ws, data, socketPairs); };
function relayCommandsBinary() { relayBinary("commands", ws, data, socketPairs); };

function streamExecute(option, evt, cb){ 
    // streamPlayAudio      // js       //
    // streamPlayVideo      // js
    // streamExeCommands    // js, c++
    const arrayBuffer = evt.data;
    //console.log(evt);
    a = await arrayBuffer.arrayBuffer()
    cb(a)
}





const deleteSocketPairs = (req,res) => {}

const pingRegistryTillStream = (req,res) => {}
const registerRobot = (req,res) => {}
const registerUI = (req,res) => {}
const unregister = (req,res) => {}



