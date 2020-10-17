function checkExam(array1, array2) {
    let score = 0;
    let empty = "";
    for(let i = 0; i < array1.length; i += 1){
     if(array2[i] == empty){
         score += 0;
     }   
    else if(array1[i] === array2[i]){
        score += 4;
    }else if(array1 !== array2[i]){
        score += -1;
    }
  }


  if(score < 0){
    score = 0;
  }

  return score;
}


// Test.describe("Basic tests",() => {
     console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
     //6
    console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
    //7
      console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
      //16
 console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));  
     //0
