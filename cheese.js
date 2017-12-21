var recipes = new Object({ eggs: 'cheese' });

function updateObjectWithKeyAndValue(object, key, value) {
  console.log(object[key] = value)
}


updateObjectWithKeyAndValue(recipes, 'cheese', 'eggs')
