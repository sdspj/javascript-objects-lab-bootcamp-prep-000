var recipes = new Object({ eggs: 'cheese' });

function updateObjectWithKeyAndValue(object, key, value) {
  var chap = { key: value }
  console.log(Object.assign(object, chap))
}


updateObjectWithKeyAndValue(recipes, 'cheese', 'eggs')
