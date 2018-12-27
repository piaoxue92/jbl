let express = require("express");
let path = require("path");
let app = express();
app.use('/web',express.static(path.join(__dirname,'web')));
app.get('/',(req,res )=>res.send("Hello World!"));

let server  = app.listen(8081,()=>console.log('start  ip:'+getLocalIP()));
 

function getLocalIP() {
    const os = require('os');
    const ifaces = os.networkInterfaces();
    let locatIp = '';
    for (let dev in ifaces) {

        if (dev === '以太网') {
            for (let j = 0; j < ifaces[dev].length; j++) {
                if (ifaces[dev][j].family === 'IPv4') {
                    locatIp = ifaces[dev][j].address;
                    break;
                }
            }
        }
    }
    return locatIp;
}
 