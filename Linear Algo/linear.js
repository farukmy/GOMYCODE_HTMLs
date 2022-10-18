function diff(arr1, arr2) {
  var holdArray = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      holdArray.push(arr1[i]);
    }
  }

  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      holdArray.push(arr2[j]);
    }
  }
  return holdArray;
}

console.log(diff([1, 3, 4, 1, 6], [5, 2, 1, 3, 2]));
