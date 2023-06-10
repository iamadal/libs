/*
 * 01. ES6 Promise for anyschronous javascript - Something will happened in the future
 * 02. Giving someone promise that you actually do the work
 * 03. OutCome: Success(Resolve) or Fail(Reject)
 * 04. This is useful for async task completion. such as downloading
 *
 */
 
 let p = new Promise(function(reject,resolve){
	 let sum = 1+3;
	 if(sum == 2){
		 resolve('Success');
	 } else {
		 reject('Failed');
	 }
 });
 
 
 // Listen for data using then if its come
 
 p.then(function(messsage){
	 console.log('From then '+messsage); // Called Resolve if success
 }).catch(function(message){
	 console.log('Catched the error '+ message); // Called reject
 });
 
 // this code can break down into async and await
 
 async function go(){
	 // just wait
	 await sleep(300);
	 // or capture the returned value
	 const response = await sleep(750);
	 console.log(response);
 }
 
 
 // Another examples
 // This is a thing abstraction of callBack
 // Easy Parallel Processing
 
 let readFile = Promise(function(aa,bb){});
 readFile('config.json').then(....).catch(...);
 
 // Chaining promise
 
 sleep(1000).then(function(){
	 console.log('one');
	 return sleep(1000)
 }).then(......)  chaining promises
 
 // Promise.all() 
 // Error control using catch() at the end  
 // Generator Function that can pause executon 
 // Promises + Generator Function == Awesome
 // Async and wait is the combination of Promises and + Generator 
 
 async function getUser(){
	 let result = await fetchJSON('/users');
	 console.log(result);
 }
 
 // we will tell await will pause the whole function and.  await until fethcing is comple in no blocking manner
 
 
 async function readConfig(){
	 try {
		 let content = await readFile('config.json');
		 let obj     = JSON.parse(content.toString());
		 console.log(0bj);
	 }catch(error){
		 console.log('Error');
	 }
 }
 
 
 async function animate(element){
	 for(let i=0;i<=100;i++){
		 element.style.left = i+'px';
		 await sleep(16);
	 }
 }
 
 // Async funciton must returns promise
 // When we wait a promise our fucntion pauses until the promise ready to resoleve
 // We can still use all of our favourite promise helpers such as Promise.all()
 
 
 /*
  * 01. Do'nt forget to await
  * 02. Becareful about too much doing sequencially when you can actually do it in the parallel 
  * 03. Using await in map /filter won't do what you might expect
  * 04. Even thought it looks synchronous , rem
  *
  *
  */



  async function() {}


