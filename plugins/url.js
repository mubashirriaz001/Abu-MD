const Jsl_0x2d36c7=Jsl_0x3966;function Jsl_0x2127(){const _0x33fd97=['video','jid','95611fkBvrk','1136ObOxko','save','link','audio','-map','2472190wGtbea','2kEVstd','524051fxRsjW','1060843piqkFJ','sendMessage','61622328BLRSvh','reply_message','Uploads\x20image\x20to\x20imgur.com','image','../config','-filter_complex','14190UgNLPg','_Failed\x20to\x20upload\x20file!_','downloadMediaMessage','misc','output.mp4','5OhbWFC','fluent-ffmpeg','client','8BwVnZa','7530066KaMWOM','url','duration','54klynki','[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]','[vid]','abu-bot'];Jsl_0x2127=function(){return _0x33fd97;};return Jsl_0x2127();}function Jsl_0x3966(_0x109729,_0x3c3bdd){const _0x21272c=Jsl_0x2127();return Jsl_0x3966=function(_0x39667e,_0x2b9594){_0x39667e=_0x39667e-0xd1;let _0x2a2746=_0x21272c[_0x39667e];return _0x2a2746;},Jsl_0x3966(_0x109729,_0x3c3bdd);}(function(_0x2ea3fe,_0x2b97d0){const _0x551d53=Jsl_0x3966,_0x3abe4e=_0x2ea3fe();while(!![]){try{const _0x22e747=-parseInt(_0x551d53(0xe0))/0x1*(parseInt(_0x551d53(0xe7))/0x2)+parseInt(_0x551d53(0xf1))/0x3*(-parseInt(_0x551d53(0xe1))/0x4)+-parseInt(_0x551d53(0xd3))/0x5*(parseInt(_0x551d53(0xd7))/0x6)+-parseInt(_0x551d53(0xe9))/0x7*(parseInt(_0x551d53(0xd6))/0x8)+parseInt(_0x551d53(0xda))/0x9*(-parseInt(_0x551d53(0xe6))/0xa)+-parseInt(_0x551d53(0xe8))/0xb+parseInt(_0x551d53(0xeb))/0xc;if(_0x22e747===_0x2b97d0)break;else _0x3abe4e['push'](_0x3abe4e['shift']());}catch(_0x145afd){_0x3abe4e['push'](_0x3abe4e['shift']());}}}(Jsl_0x2127,0xb93dc));const {MODE,IMGBB_KEY}=require(Jsl_0x2d36c7(0xef));async function webpUpload(_0x29fc5c){return new Promise(async _0x1fefe1=>{const _0x330806=Jsl_0x3966,_0x2796e8=require('imgbb-uploader');for(let _0x2aae76 of IMGBB_KEY){const _0x81ccfc={'apiKey':_0x2aae76,'imagePath':_0x29fc5c};var _0x5a584f=await _0x2796e8(_0x81ccfc);if(_0x5a584f[_0x330806(0xd8)])return _0x1fefe1(_0x5a584f[_0x330806(0xd8)]);}});}const {Module,isPublic}=require('../lib/'),ffmpeg=require(Jsl_0x2d36c7(0xd4)),{upload}=require(Jsl_0x2d36c7(0xdd));Module({'pattern':'url\x20?(.*)','fromMe':isPublic,'type':Jsl_0x2d36c7(0xd1),'desc':Jsl_0x2d36c7(0xed)},async _0x348e13=>{const _0x130eb3=Jsl_0x2d36c7;if(_0x348e13[_0x130eb3(0xec)]['sticker'])return await _0x348e13[_0x130eb3(0xd5)][_0x130eb3(0xea)](_0x348e13[_0x130eb3(0xdf)],{'text':'_'+await webpUpload(await _0x348e13[_0x130eb3(0xec)]['downloadMediaMessage']())+'_'},{'quoted':_0x348e13});else{if(_0x348e13['reply_message'][_0x130eb3(0xe4)]){if(_0x348e13[_0x130eb3(0xec)][_0x130eb3(0xd9)]>0x5a)return await _0x348e13[_0x130eb3(0xd5)][_0x130eb3(0xea)](_0x348e13[_0x130eb3(0xdf)],{'text':'_Audio\x20too\x20large.\x20Try\x20below\x2090\x20seconds!_'},{'quoted':_0x348e13});var _0xa9136c=await _0x348e13['reply_message'][_0x130eb3(0xf3)]();ffmpeg(_0xa9136c)['outputOptions'](['-y',_0x130eb3(0xf0),_0x130eb3(0xdb),_0x130eb3(0xe5),_0x130eb3(0xdc),'-map\x200:a'])[_0x130eb3(0xe2)](_0x130eb3(0xd2))['on']('end',async()=>{const _0xa2818=_0x130eb3;try{var _0x5a5356=await upload(_0xa2818(0xd2));}catch{return await _0x348e13[_0xa2818(0xd5)][_0xa2818(0xea)](_0x348e13['jid'],{'text':_0xa2818(0xf2)},{'quoted':_0x348e13});}return await _0x348e13[_0xa2818(0xd5)][_0xa2818(0xea)](_0x348e13[_0xa2818(0xdf)],{'text':'_'+_0x5a5356[_0xa2818(0xe3)]+'_'},{'quoted':_0x348e13});});}else{if(_0x348e13[_0x130eb3(0xec)][_0x130eb3(0xee)]||_0x348e13['reply_message'][_0x130eb3(0xde)])try{await _0x348e13[_0x130eb3(0xd5)][_0x130eb3(0xea)](_0x348e13[_0x130eb3(0xdf)],{'text':'_'+(await upload(await _0x348e13[_0x130eb3(0xec)][_0x130eb3(0xf3)]()))[_0x130eb3(0xe3)]+'_'},{'quoted':_0x348e13});}catch{return await _0x348e13[_0x130eb3(0xd5)][_0x130eb3(0xea)](_0x348e13['jid'],{'text':'_Failed\x20to\x20upload\x20file!_'},{'quoted':_0x348e13});}else return await _0x348e13['reply']('_Reply\x20to\x20image|video|audio|sticker_');}}});
