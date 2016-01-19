/**
 * Created by zhangrui on 1/19/16.
 */

var help = require('commander');

var lib = require('./lib');

//noinspection JSCheckFunctionSignatures
help
    .version('0.0.1')
    .option('-f, --file [file_path]', 'input file')
    .option('-u, --url [url]', 'Retrieve file from a URL')
    .option('--mime [mime]', 'Explicitly specify mime type')
    .parse(process.argv);

var config = {
    mime: ''
};

if(help.mime){
    config.mime = help.mime;
}

if(help.url){
    lib.base64FromURL(help.url, function(datauri){
        console.log(datauri)
    }, config);
}else if(help.file){
    lib.base64FromFile('./lib.js', function(datauri){
        console.log(datauri)
    }, config);
}
