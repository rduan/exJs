var stream = require('stream');

var a=0,b=1;

var rs = new stream.Readable();

rs._read = function() {
  if(b<144) {
    var c = a+b;
    a = b;
    b = c;
    rs.push(''+c+'\n');

  } else {
    this.push(null);
    
  }
};

// rs.pipe(process.stdout);

// process.stdout.on('error', process.exit);
module.exports = rs;