const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:560,height:795},deviceScaleFactor:2});
await p.goto('file://'+__dirname+'/invitation2.html');await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:'invitation2-A5.pdf',width:'148mm',height:'210mm',printBackground:true});
await p.locator('.card').screenshot({path:'preview2.png'});await b.close();})();
