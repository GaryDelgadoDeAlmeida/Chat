/**
 * Get all parents by the element
 * 
 * @param {*} element
 * @returns 
 */
export const findAllParents = (element) => {
    var els = [];
    
    while (element) {
        els.unshift(element);
        element = element.parentNode;
    }

    return els;
}

/**
 * Get a specific parent by the class name
 * 
 * @param {*} element 
 * @param {*} target
 * @param {boolean} strict 
 * @returns 
 */
export const findSpecificParent = (element, target, strict = false) => {
    var els = "";
    
    while (element) {
        if( [null, undefined].indexOf(element.className) === -1 ) {
            if(strict === true) {
                if(element.className === target) {
                    els = element;
                    break;
                }
            } else {
                if(element.className.includes(target)) { 
                    els = element;
                    break;
                }
            }
        }

        element = element.parentNode;
    }

    return els;
}

/**
 * Check if a value/string is a valid URL (also, "https://" is needed to return a positive response)
 * 
 * @param {*} urlString 
 * @returns 
 */
export const isLink = (urlString) => {
    var urlPattern = new RegExp(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/);
    return !!urlPattern.test(urlString);
}

export const isEmail = (emailString) => {
    var emailPattern = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    return !!emailPattern.test(emailString);
}