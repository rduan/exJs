process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  process.stdout.write('chunk:'+chunk.toString());
  
}
);

process.stdin.on('end', () => {
  process.stdout.write('end');
}
)

//cat fib.txt | node standinout