/**
 * Created by zhangrui on 1/19/16.
 */
var fs = require('fs'),
    util = require('util'),
    url = require('url'),
    http = require('http'),
    temp = require('temp'),
    mime = require('mime');

function base64Image(filename, _mime){
    var data = fs.readFileSync(filename).toString("base64");
    return util.format("data:%s;base64,%s", _mime || mime.lookup(filename), data);
}

function base64FromFile(src, cb, config){
    cb && cb(base64Image(src, config.mime));
}

function base64FromURL(src, cb, config){
    download(src, function(err, path){
        !err && cb && cb(base64Image(path, config.mime || mime.lookup(url.parse(src).pathname)));
    });
}

function download(url, cb){

    temp.track(); // 用于清理临时文件

    var stream = temp.createWriteStream();

    stream.on('finish', function(){
        stream.close(function(){
            cb && cb(null, this.path);
        });
    });

    http.get(url, function(response){
        response.pipe(stream);
    }).on('error', function(err) {
        if(cb)cb(err.message);
    });

}

exports.base64ImageSync = base64Image;
exports.base64FromFile = base64FromFile;
exports.base64FromURL = base64FromURL;