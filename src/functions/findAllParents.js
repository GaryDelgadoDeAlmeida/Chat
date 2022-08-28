/**
 * Get all parents by the element
 * 
 * @param {*} element
 * @returns 
 */
export default function findAllParents(element) {
    var els = [];
    
    while (element) {
        els.unshift(element);
        element = element.parentNode;
    }

    return els;
}