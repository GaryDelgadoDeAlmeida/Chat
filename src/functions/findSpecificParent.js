/**
 * Get a specific parent by the class name
 * 
 * @param {*} element 
 * @param {*} target 
 * @returns 
 */
export default function findSpecificParent(element, target) {
    var els = "";
    
    while (element) {
        if( [null, undefined].indexOf(element.className) === -1 ) {
            if(element.className === target) {
                els = element;
                break;
            }
        }

        element = element.parentNode;
    }

    return els;
}