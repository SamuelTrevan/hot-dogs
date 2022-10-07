/*
    define a function that takes that object as input (needs a parameter), and outputs (returns) the following HTML representation of that computer.
*/

const computer = {
  id: 1,
  manufacturer: "Apple",
  make: "Macbook",
  model: "Pro",
  specs: {
    memory: 32,
    hardDrive: "500 GB",
    processor: 2.4,
  },
};

const computerHTMLMaker = (computerObject) => {
  const computerHTMLSection = `<section id = computer--${computerObject.id}> \n <h1>${computerObject.manufacturer} ${computerObject.make}</h1 \n <div>Model: ${computerObject.model}</div> \n <div>Memory: ${computerObject.specs.memory} GB</div> \n <div>Hard drive space: ${computerObject.specs.hardDrive}</div> \n <div>Processor speed: ${computerObject.specs.processor} Ghz</div> \n </section>`;
  return computerHTMLSection; //at the end of this function after it did the task the return was set to return computerObject this caused my output to be just the computerObject before it did the task.
};

const output = computerHTMLMaker(computer);
console.log(output);
