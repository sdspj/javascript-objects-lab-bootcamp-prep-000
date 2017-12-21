var recipes = new Object({ eggs: 'cheese' });

function updateObjectWithKeyAndValue(object, key, value) {
  console.log(Object.assign(object, { key: value }))
}


updateObjectWithKeyAndValue(recipes, 'cheese', 'eggs')
