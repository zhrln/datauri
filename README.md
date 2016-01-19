# ngm-datauri

```
Usage: app [options]

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -f, --file [file_path]  input file
    -u, --url [url]         Retrieve file from a URL
    --mime [mime]           Explicitly specify mime type

```


### 使用

#### 命令行方式
```
node app -u 'http://example.com/foo.jpg'
node app -u 'http://example.com/foo.ttf' --mime 'font/truetype'
node app -f './foo.jpg'
```

#### lib 方式
```
var datauri = require('ngm-datauri');

// 异步方式获取远程文件的 datauri
lib.base64FromURL(url, function(datauri){
    // ...... code ......
}, {mime:'font/truetype'});
```


```
// 不使用 config 则根据后缀名自动获取 mime
lib.base64FromURL(url, function(datauri){
    // ...... code ......
});
```


```
// 也可以用同步的方式取本地文件的 datauri
var _datauri = lib.base64ImageSync(filepath[, mime]);
```