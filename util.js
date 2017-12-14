var util = require('util');
var log = util.debuglog('fulcrum');
var log2 = util.debuglog('foobar');

log('this is a fulcrum message');
log2('this is a foobar message');

//NODE_DEBUG=foobar node util.js

