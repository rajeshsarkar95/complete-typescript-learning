// void - function doese not return value
function logMessage(message:string):void{
  console.log(message);
}
// Why use void?
// The function performs an action.
// It prints a message.
// It does not return any meaningful value.
function greet():void{
   console.log("Hello");
}
let result = greet();
console.log(result); // undefind value
// Even though JavaScript returns undefined
// TypeScript uses void to indicate that you should not expect a return value.
// Real-world use cases:
// Logging messages
// Showing notifications
// Updating UI
// Button click handlers
// Sending analytics events







