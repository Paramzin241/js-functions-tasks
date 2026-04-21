// BEGIN
const partitionBy = (collection, property) => {
    const map = new Map();
    
    for (const item of collection) {
        const propValue = item[property];
        
        if (!map.has(propValue)) {
            map.set(propValue, []);
        }
        
        map.get(propValue).push(item);
    }
    
    return Object.fromEntries(map);
}

export default partitionBy;
// END