URL_PATH = process.argv[2]
OUTPUT_PATH = process.argv[3]

const fs = require('fs');
const puppeteer = require('puppeteer');
var mkdirp = require('mkdirp');
let Data = fs.readFileSync(URL_PATH);
let jsonData = JSON.parse(Data);



var htmlData = '';
var appurl = '';
var appname = '';
var pdf_urls = JSON;
var result = [];

for (var i in jsonData) {
    result.push([i, jsonData[i]]);
}

try {
    (async () => {

        for (i = 0; i < result.length; i++) {
            appname = result[i][0];
            appurl = result[i][1];

            // add pages links which are in pdf format to json
            if (appurl.endsWith('pdf')) {
                pdf_urls[appname] = appurl;
            }
            else {
                console.log('not pdf');

                try {
                    // puppeteer for headless browser
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(appurl, { waitUntil: 'load', timeout: 0 });
                    htmlData = await page.evaluate(() => document.body.innerHTML);
                    await browser.close();

                }
                catch (error) {
                    console.log(error)
                }

                //write html to files
                await fs.writeFile(OUTPUT_PATH + '/' + appname + '.html', htmlData, (err) => {
                    //In case of a error throw err. 
                    if (err) throw err;

                })

            }

        }

        jsonobj = JSON.stringify(pdf_urls);
        //console.log(jsonobj);

        // add json pdf urls to pdf_urls file
        fs.writeFile('../pdf_urls.json', jsonobj, (err) => {
            // In case of a error throw err. 
            if (err) throw err;
        });
    })();
}
catch (error) {
    console.log(error)
}





