var http = require("http");
var url = require("url");

const tableData = [
    {
        key: '1',
        name: 'John Brown',
        age: 3288,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 4288,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 3288,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.write("Hello World");
    //设置允许跨域的域名，*代表允许任意域名跨域
    //response.setHeader("Access-Control-Allow-Origin", "*");

    response.writeHead(200, {"Content-Type": "application/json"});
    
    response.end(JSON.stringify(tableData));
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server listen port 8888.");
}

exports.start = start;