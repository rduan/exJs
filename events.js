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