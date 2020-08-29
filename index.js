// add solution here
function theBeatlesPlay(musicians, instruments){
 var band = [];
  for (let x = 0; x < 4; x +=1){
    band.push( `${musicians[x]} plays ${instruments[x]}`);  
  }
  return band;
}

function johnLennonFacts(fact){
      let num = 0;
     var newFacts = [];
      while (num < fact.length) {
        newFacts.push(`${fact[num]} !!!`);
        num += 1; 
      }
      return newFacts;
}