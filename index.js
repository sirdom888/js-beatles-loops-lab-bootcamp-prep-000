// add solution here
function theBeatlesPlay(musicians, instruments){
 var band = [];
  for (let x = 0; x < 4; x +=1){
    band.push( `${musicians[x]} plays ${instruments[x]}`);  
  }
  return band;
}

function johnLennonFacts(fact){
     const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
     let num = 0;
     var newFacts = [];
      while (num < fact.length) {
        newFacts.push(fact[num] + "!!!");
        num += 1; 
      }
      return newFacts;
}