const Capitalize = (input) => {
  // To use with fetched data, use a condition to make sure that the input string is not undefined.
  // capitalize first letter of each word
  let temp = input[0].toUpperCase();
  if (input.length > 1) {
    temp += input.slice(1, input.length);
  }
  if (temp.length > 1) {
    for (let i = 1; i < temp.length; i++) {
      if (temp[i - 1] === " " || (temp > 1 && temp.slice(i - 2, i) === ", ")) {
        temp =
          temp.slice(0, i) +
          temp[i].toUpperCase() +
          temp.slice(i + 1, temp.length);
      }
    }
  }

  return temp;
};

// Uppercase all beginning letters of sentence and add period if a paragraph is missing period
const formatPara = (para) => {
  if (para[para.length - 1] !== ".") {
    return para.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase()) + ".";
  } else {
    return para.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase());
  }
};

export { Capitalize, formatPara };
