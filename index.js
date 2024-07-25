// Code your solutions in this file
const names = ["John ", "Doe", "Mwaura"];

function writeCards(arrNames, eventName) {
  const messages = [];
  for (let i = 0; i < arrNames.length; i++) {
    messages.push(
      `Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return messages;
}

function countDown(start) {
  let count = start;
  while(count >= 0) {
    console.log(count);
    count--;
  }
}
