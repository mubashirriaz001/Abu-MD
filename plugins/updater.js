function Jsl_0x55c1(){const _0xce2b8a=['replace','5311110rUnYuf','_Restarting_','all','hard','exec','HEROKU_APP_NAME','..origin/','reset','594REpBOm','_Successfully\x20updated_','push','@adiwajshing/baileys','git_url','673CMTbDx','22pzYQLR','updt','Updates\x20bot','owner','ᴜᴘᴅᴀᴛᴇ\x20ᴄʜᴇᴄᴋᴇʀ!','_Pending\x20updates:_\x0a\x0a','2148840QKaWGG','heroku\x20remote\x20ekli','simple-git','7780444YdwHZt','•\x20*','log','heroku','stream','sendMessage','1652648HHgqUr','https://i.imgur.com/OseHc3b.jpg','upstream','client','abu-bot','jid','get','_Bot\x20up\x20to\x20date_','1221813SqJxgy','Heroku\x20information\x20wrong!','.updt','message','HEROKU_API_KEY','fetch','_Bot\x20up\x20to\x20date!_','main','reply','START\x20UPDATE','24QhEmYS','5057980jkYWxu','3iLJtIn','total','../lib/','update','https://api:'];Jsl_0x55c1=function(){return _0xce2b8a;};return Jsl_0x55c1();}function Jsl_0x4679(_0x85df83,_0x47cd5a){const _0x55c13f=Jsl_0x55c1();return Jsl_0x4679=function(_0x46792d,_0x203895){_0x46792d=_0x46792d-0x126;let _0xffbafc=_0x55c13f[_0x46792d];return _0xffbafc;},Jsl_0x4679(_0x85df83,_0x47cd5a);}const Jsl_0x55283c=Jsl_0x4679;(function(_0x4d38b6,_0x2eb20e){const _0x2a728f=Jsl_0x4679,_0x42b321=_0x4d38b6();while(!![]){try{const _0x1ed54c=-parseInt(_0x2a728f(0x128))/0x1*(parseInt(_0x2a728f(0x15a))/0x2)+parseInt(_0x2a728f(0x14c))/0x3*(-parseInt(_0x2a728f(0x138))/0x4)+-parseInt(_0x2a728f(0x12f))/0x5+-parseInt(_0x2a728f(0x152))/0x6+parseInt(_0x2a728f(0x132))/0x7+parseInt(_0x2a728f(0x14a))/0x8*(parseInt(_0x2a728f(0x140))/0x9)+-parseInt(_0x2a728f(0x14b))/0xa*(-parseInt(_0x2a728f(0x129))/0xb);if(_0x1ed54c===_0x2eb20e)break;else _0x42b321['push'](_0x42b321['shift']());}catch(_0x542706){_0x42b321['push'](_0x42b321['shift']());}}}(Jsl_0x55c1,0x930fb));const simpleGit=require(Jsl_0x55283c(0x131)),git=simpleGit(),{Module}=require(Jsl_0x55283c(0x14e)),{MessageType}=require(Jsl_0x55283c(0x126)),Config=require('../config'),exec=require('child_process')[Jsl_0x55283c(0x156)],Heroku=require('heroku-client'),{PassThrough}=require(Jsl_0x55283c(0x136)),heroku=new Heroku({'token':Config[Jsl_0x55283c(0x144)]}),{jslbuffer}=require(Jsl_0x55283c(0x13c));Module({'pattern':Jsl_0x55283c(0x14f),'fromMe':!![],'desc':Jsl_0x55283c(0x12b),'type':'owner'},async(_0x73c41,_0x496f30)=>{const _0x4724a2=Jsl_0x55283c;await git['fetch']();var _0x393359=await git['log'](['main'+_0x4724a2(0x158)+_0x4724a2(0x147)]),_0x4cddc7='';if(_0x393359[_0x4724a2(0x14d)]===0x0)return _0x4cddc7=_0x4724a2(0x146),await _0x73c41[_0x4724a2(0x148)](_0x4cddc7);else{var _0x31d103=_0x4724a2(0x12e);for(var _0x42d098 in _0x393359[_0x4724a2(0x154)]){_0x31d103+=parseInt(_0x42d098)+0x1+_0x4724a2(0x133)+_0x393359[_0x4724a2(0x154)][_0x42d098][_0x4724a2(0x143)]+'*\x0a';}_0x4cddc7=_0x31d103;var _0x38c08c=[{'buttonId':_0x4724a2(0x142),'buttonText':{'displayText':_0x4724a2(0x149)},'type':0x1}];}const _0x3ddb86={'image':{'url':_0x4724a2(0x139)},'caption':_0x4cddc7,'footer':_0x4724a2(0x12d),'buttons':_0x38c08c,'headerType':0x1};return await _0x73c41[_0x4724a2(0x13b)]['sendMessage'](_0x73c41[_0x4724a2(0x13d)],_0x3ddb86);}),Module({'pattern':Jsl_0x55283c(0x12a),'type':Jsl_0x55283c(0x12c),'fromMe':!![],'dontAddCommandList':!![],'desc':Jsl_0x55283c(0x12b)},async(_0x78e613,_0x3b7845)=>{const _0x29aea8=Jsl_0x55283c;await git[_0x29aea8(0x145)]();var _0x563e8b=await git[_0x29aea8(0x134)]([_0x29aea8(0x147)+'..origin/'+'main']);if(_0x563e8b[_0x29aea8(0x14d)]===0x0)return await _0x78e613[_0x29aea8(0x13b)]['sendMessage'](_0x78e613[_0x29aea8(0x13d)],{'text':_0x29aea8(0x13f)});else{await _0x78e613[_0x29aea8(0x13b)][_0x29aea8(0x137)](_0x78e613['jid'],{'text':'_Started\x20update.._'});try{var _0x5ceeda=await heroku[_0x29aea8(0x13e)]('/apps/'+Config[_0x29aea8(0x157)]);}catch{await _0x78e613['client']['sendMessage'](_0x78e613[_0x29aea8(0x13d)],{'text':_0x29aea8(0x141)}),await new Promise(_0x33fc4a=>setTimeout(_0x33fc4a,0x3e8));}git['fetch'](_0x29aea8(0x13a),_0x29aea8(0x147)),git[_0x29aea8(0x159)](_0x29aea8(0x155),['FETCH_HEAD']);var _0x446565=_0x5ceeda[_0x29aea8(0x127)][_0x29aea8(0x151)]('https://',_0x29aea8(0x150)+Config[_0x29aea8(0x144)]+'@');try{await git['addRemote'](_0x29aea8(0x135),_0x446565);}catch{console[_0x29aea8(0x134)](_0x29aea8(0x130));}await git[_0x29aea8(0x15c)]('heroku',_0x29aea8(0x147)),await _0x78e613[_0x29aea8(0x13b)][_0x29aea8(0x137)](_0x78e613[_0x29aea8(0x13d)],{'text':_0x29aea8(0x15b)}),await _0x78e613[_0x29aea8(0x13b)][_0x29aea8(0x137)](_0x78e613[_0x29aea8(0x13d)],{'text':_0x29aea8(0x153)});}});
