function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubled = customMap(numbers, function(num) {
    return num * 2;
  });
  console.log(doubled); 
  