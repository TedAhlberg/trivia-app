import categories from "../data/categories.js"

function getCategories() {
  var tempArray = [],
    keys = Object.keys(categories)

  while (tempArray.length < 4) {
    var x = Math.floor(Math.random() * keys.length);
    if (!tempArray.includes(keys[x]))
      tempArray.push(keys[x])
  }
  for (var i = 0; i < tempArray.length; i++)
    tempArray[i] = categories[tempArray[i]];

  return tempArray;
}

export default getCategories
