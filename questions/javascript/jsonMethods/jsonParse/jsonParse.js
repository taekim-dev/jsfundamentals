function jsonParse(jsonString) {
    jsonString = jsonString.trim();
    
    if (jsonString === 'null') return null;
    if (jsonString === 'true') return true;
    if (jsonString === 'false') return false;

    if (jsonString.startsWith('"') && jsonString.endsWith('"')) {
        return jsonString.slice(1, -1);
    }

    if (!isNaN(jsonString)) {
        return Number(jsonString);
    }

    if (jsonString.startsWith('[') && jsonString.endsWith(']')) {
        const arrayString = jsonString.slice(1, -1);
        const elements = arrayString.split(',').map(jsonParse);
        return elements;
    }

    if (jsonString.startsWith('{') && jsonString.endsWith('}')) {
        const objectString = jsonString.slice(1, -1);
        const keyValuePairs = objectString.split(',').map(pair => pair.split(':'));
        const obj = {};
        keyValuePairs.forEach(([key, value]) => {
            obj[jsonParse(key)] = jsonParse(value);
        })
        return obj;
    }

    throw new Error('Invalid JSON');
}

module.exports = jsonParse;

