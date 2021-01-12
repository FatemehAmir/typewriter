
let delay = 0
const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  setTimeout(() => { 
    process.stdout.write(char);}, delay)
  delay+=50;
}
setTimeout(() => { 
  console.log("\n");}, delay)
