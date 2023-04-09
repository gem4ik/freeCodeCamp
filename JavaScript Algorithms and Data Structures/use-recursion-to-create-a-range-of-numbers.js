function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
  return [];
  } else {
    const a = rangeOfNumbers(startNum, endNum - 1)
    a.push(endNum)
    console.log(a)
    return a
  }
};