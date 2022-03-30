
const findFrequency = function(array) {
const map = {};
array.forEach(item => {
  if(map[item]) {
    map[item]++
  } else{
    map[item] = 1;
  }
});
return map;
};
console.log(findFrequency(['a', 'a', 'b', 'a', 'b', 'c', 'a']))

// I'm stuck at this point. I want to return only the most and least frequent elements.
