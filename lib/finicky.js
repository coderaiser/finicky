'use strict';

const empty = (obj) => !Object.keys(obj).length;

module.exports = (selector, divider, obj) => {
    if (!obj) {
        obj = divider;
        divider = '.';
    }
    
    check(selector, obj);
    
    if (empty(obj))
        return {};
    
    let value = Object.assign({}, obj);
    const root = value;
    const selects = selector.split(divider);
    
    selects
        .some((name, i) => {
            const nestedName = selects.slice(i).join(divider);
            
            if (typeof value[nestedName] !== 'undefined') {
                delete value[nestedName];
                return true;
            }
            
            if (!value[name]) {
                return true;
            }
            
            value = value[name];
            
            return !value;
        });
    
    return root;
};

function check(selector, obj) {
    if (typeof selector !== 'string')
        throw Error('selector should be string!');
    
    if (typeof obj !== 'object')
        throw Error('obj should be object!');
}

