/**
 * Load Module Dependencies.
 */
const objPath    = require('get-object-path');
const buildPaths = require('build-object-paths');
const _         = require('lodash');

/**
 * Construct query from an object
 *
 * @param {Object} obj Object to construct query from
 *
 * @return {Object} constructed query
 */
module.exports = function buildQuery(obj){
  const paths = buildPaths(obj);
  const query = {};
  const uniqQuery = {};

  paths.forEach(function iterate(path){
    query[path] = objPath(obj, path);
  });

  for(var prop in query){
    if(!_.isPlainObject(query[prop])) {
      uniqQuery[prop] = query[prop];
    }
  }


  return uniqQuery;
};
