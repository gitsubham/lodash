"use strict";
/**
 * This function is used to check if an object is defined for properties
 * passed as an array in same order.
 * Example: obj = {x:'1'}, path =['x', 'y'], function checks for obj.x.y to be defined
 * @param {Object} obj: Object on which defined check to be performed.
 * @param {Array<string>}: path in order to be checked.
 * @return {boolean}: true, when object and properties are defined otherwise false.
 */
function isDefinedIn(obj, path) {
    if (path === void 0) { path = []; }
    if (obj === null || obj === void 0) {
        return false;
    }
    var objRef = obj;
    for (var i = 0; i < path.length; i++) {
        if (objRef[path[i]] === null || objRef[path[i]] === void 0) {
            return false;
        }
        objRef = objRef[path[i]];
    }
    return true;
}
