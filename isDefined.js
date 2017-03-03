"use strict";
/**
 * This function is used to check if an object is defined for properties
 * passed as an array in same order.
 * Example: obj = {x:'1'}, properties =['x', 'y'], function checks for obj.x.y to be defined
 * @param {Object} obj: Object on which defined check to be performed.
 * @param {Array<string>}: Propertied in order to be checked.
 * @return {boolean}: true, when object and properties are defined otherwise false.
 */
function isDefined(obj, properties) {
    if (properties === void 0) { properties = []; }
    if (isNull(obj) || isUndefined(obj)) {
        return false;
    }
    var objRef = obj;
    for (var i = 0; i < properties.length; i++) {
        if (isNull(objRef[properties[i]]) || isUndefined(objRef[properties[i]])) {
            return false;
        }
        objRef = objRef[properties[i]];
    }
    return true;
}
