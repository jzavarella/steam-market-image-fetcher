var htmlparser = require("htmlparser");
var read = require('read-file');

var rawHtml = read.sync('index2.html', 'utf8');
var handler = new htmlparser.DefaultHandler(function (error, dom) {
    if (error)
        console.log('error');
    else {
      const obj = dom[2].children[3].children[1].children[13].children[5].children[9].children[3].children[1].children[1].attribs.src;
      console.log(obj);
      // for(var i = 0; i < obj.length; i ++) {
      //   console.log(obj[i].raw);
      //   console.log('---------------------');
      // }
    }
});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(rawHtml);
