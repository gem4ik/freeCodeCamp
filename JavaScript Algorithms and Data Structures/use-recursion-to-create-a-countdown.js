// Only change code below this line
function countdown(n) {
  if ( n < 1) {
    return [];
} else {
  const newArray = countdown(n - 1)
  newArray.unshift(n)
  return newArray
 }
}
// Only change code above this line