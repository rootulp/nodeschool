function getDependencies(tree) {
  return getDependenciesRecursive(tree, []);
}

function getDependenciesRecursive(tree, result) {
  'use strict';
  var deps = tree && tree.dependencies || [];

  Object.keys(deps).forEach(function(dep) {
    var curr = dep + '@' + tree.dependencies[dep].version;
    if (result.indexOf(curr) === -1){
      result.push(curr);
    }
    getDependenciesRecursive(tree.dependencies[dep], result);
  });

  return result.sort();
}

module.exports = getDependencies
