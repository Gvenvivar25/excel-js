console.log('module.js');

async function start() {
  return await Promise.resolve('Hey');
    
}

start().then(console.log);