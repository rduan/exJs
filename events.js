
var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('getup', (data) => {
console.log('getup:',data);

}
)

ee.once('getup', () => {
  console.log('only once');
}
)

function manualOnce() {
  console.log('manual once');
  ee.removeListener('getup',manualOnce);
}

ee.on('getup', manualOnce);

ee.emit('getup', {option: true});
ee.emit('getup', {option: false});
ee.emit('getup', {option: true});

var util = require('util');

function UserList() {
  this.list = [];
  EventEmitter.call(this);
}

util.inherits(UserList, EventEmitter);
UserList.prototype.add = function(name) {
  this.list.push(name);
  this.emit('newuser', name);

}

var list = new UserList();

list.on('newuser', (name) => {
  console.log('hello,',name);
  
}
);

list.add('mike')
list.add('mike2')