const { warn, clear } = require("console");
var fs = require("fs");

var Template = './iframe-src/index.html' // Template file
var JsPath = './dist/ui.js'; // Script file
var HtmlPath = './dist/index.html'; // Output file

function inlineScript() {

    if (!fs.existsSync(JsPath)) {
        console.log('Script file not found');
        return;
    }

    if (!fs.existsSync(Template)) {
        console.log('Template file not found');
        return;
    }

    if (!fs.existsSync(HtmlPath)) {
        console.log('Deleting existing file');
        fs.unlink(HtmlPath, function (err) {});
    }


    // Copy template file to dist folder
    fs.copyFile(Template, HtmlPath, function (err) {
        if (err) {
            console.log('Error copying template file');
            return;
        }
        // Copy script file data
        fs.readFile(JsPath, 'utf-8', function (err, data) {
            if (err) {
                console.log('Error reading script file');
                return;
            }
            const inlinedScript = "<script>\n".concat(data, "\n</script>\n");

            // Append script to template file
            fs.writeFile(HtmlPath, inlinedScript, { flag: 'a' }, function (err) {
                if (err) {
                    console.log('Error writing script to template file');
                    return;
                }

                // Delete script file
                fs.unlink(JsPath, function (err) {
                    if (err) {
                        console.log('Error deleting script file');
                        return;
                    }
                    console.log('Script inlined successfully');
                });
            });
        });
    });
};

function watch() {
    if (fs.existsSync(JsPath)) {
        console.log('Script file found');
        inlineScript(),2000;
        console.log('Watching for changes in script file');
    } 
}

// Watch for changes in script file
if (process.argv.includes('--watch')){
    setInterval(watch, 500);
    console.log('Watching for changes in script file');
}
else {
    inlineScript();
}



