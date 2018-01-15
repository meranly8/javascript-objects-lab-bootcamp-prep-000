var recipes = { }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
var obj = {prop: 1}
updateObjectWithKeyAndValue(recipes, 'prop2', 2)
recipes