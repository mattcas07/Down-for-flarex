const a0_0x29c1e1=a0_0x1496;function a0_0x233c(){const _0x15934b=['373228jChmTs','handlers','864885yRIPwj','./handlers/','(((.+)+)+)+$','creds.update','auth','Escribe\x20tú\x20número\x20de\x20WhatsApp:','chrome','registered','creds','setFfmpegPath','constructor','8pECota','requestPairingCode','log','replace','search','question','850287LPNiIu','toString','apply','30NuJzXF','31960656uxiOCQ','6056812zNTgjj','11651538bdiaac','10210417zRYKdD','appropriate','silent','default'];a0_0x233c=function(){return _0x15934b;};return a0_0x233c();}(function(_0x102a03,_0x42b5cd){const _0x1a6147=a0_0x1496,_0x38d7ab=_0x102a03();while(!![]){try{const _0x30c997=parseInt(_0x1a6147(0x1c2))/0x1+-parseInt(_0x1a6147(0x1af))/0x2*(-parseInt(_0x1a6147(0x1c5))/0x3)+parseInt(_0x1a6147(0x1c7))/0x4+-parseInt(_0x1a6147(0x1b1))/0x5+parseInt(_0x1a6147(0x1c8))/0x6+parseInt(_0x1a6147(0x1c9))/0x7*(-parseInt(_0x1a6147(0x1bc))/0x8)+-parseInt(_0x1a6147(0x1c6))/0x9;if(_0x30c997===_0x42b5cd)break;else _0x38d7ab['push'](_0x38d7ab['shift']());}catch(_0x4f58f1){_0x38d7ab['push'](_0x38d7ab['shift']());}}}(a0_0x233c,0xf1a41));import{makeWASocket,useMultiFileAuthState,Browsers}from'@whiskeysockets/baileys';import{createInterface}from'node:readline';import{resolve}from'node:path';import{readdir}from'node:fs/promises';import{keepAlive}from'./keepAlive.js';import{path}from'@ffmpeg-installer/ffmpeg';import a0_0x2e7821 from'fluent-ffmpeg';import a0_0x25048c from'pino';a0_0x2e7821[a0_0x29c1e1(0x1ba)](path);const rl=createInterface({'input':process['stdin'],'output':process['stdout']});keepAlive();function a0_0x1496(_0x356e6e,_0x2af170){const _0x63fb69=a0_0x233c();return a0_0x1496=function(_0x4a0b81,_0x110b2e){_0x4a0b81=_0x4a0b81-0x1ac;let _0x233c90=_0x63fb69[_0x4a0b81];return _0x233c90;},a0_0x1496(_0x356e6e,_0x2af170);}async function connectToWhatsApp(){const _0x7b670d=a0_0x29c1e1,_0x51dba4=(function(){let _0x3563f4=!![];return function(_0x5516f1,_0x376f46){const _0x29d9f8=_0x3563f4?function(){const _0x538d79=a0_0x1496;if(_0x376f46){const _0x1c5ffe=_0x376f46[_0x538d79(0x1c4)](_0x5516f1,arguments);return _0x376f46=null,_0x1c5ffe;}}:function(){};return _0x3563f4=![],_0x29d9f8;};}()),_0x2b5235=_0x51dba4(this,function(){const _0x522d1e=a0_0x1496;return _0x2b5235['toString']()[_0x522d1e(0x1c0)](_0x522d1e(0x1b3))[_0x522d1e(0x1c3)]()[_0x522d1e(0x1bb)](_0x2b5235)['search'](_0x522d1e(0x1b3));});_0x2b5235();const _0x14c62e=_0x3b6ad9=>{const _0x2da50f=a0_0x1496;return new Promise(_0x55bee7=>rl[_0x2da50f(0x1c1)](_0x3b6ad9,_0x55bee7));},{state:_0x1e5c33,saveCreds:_0x1e42f4}=await useMultiFileAuthState(_0x7b670d(0x1b5)),_0x3db8a=makeWASocket({'logger':a0_0x25048c({'level':_0x7b670d(0x1ad)}),'browser':Browsers[_0x7b670d(0x1ac)](_0x7b670d(0x1b7)),'auth':_0x1e5c33,'version':[0x2,0x96d,0xb]});if(!_0x3db8a['authState'][_0x7b670d(0x1b9)][_0x7b670d(0x1b8)]){const _0x391745=await _0x14c62e(_0x7b670d(0x1b6)),_0x161631=_0x391745[_0x7b670d(0x1bf)](/[\s+-]/g,''),_0x501cbb=await _0x3db8a[_0x7b670d(0x1bd)](_0x161631);console[_0x7b670d(0x1be)]('Tu\x20codigo\x20de\x20conexión\x20es:\x20'+_0x501cbb);}const _0x3475ef=await readdir(resolve('src',_0x7b670d(0x1b0)));for(const _0x3fac85 of _0x3475ef){(await import(_0x7b670d(0x1b2)+_0x3fac85))[_0x7b670d(0x1ae)](_0x3db8a);}_0x3db8a['ev']['on'](_0x7b670d(0x1b4),_0x1e42f4);}connectToWhatsApp();export{connectToWhatsApp};