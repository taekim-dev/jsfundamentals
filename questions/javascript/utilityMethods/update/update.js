function update(data, command) {
    if (typeof command !== 'object' || command === null) {
      throw new Error('Command must be an object');
    }
  
    let result = Array.isArray(data) ? [...data] : { ...data };
  
    for (const key in command) {
      if (command.hasOwnProperty(key)) {
        if (key === '$push') {
          if (!Array.isArray(result)) {
            throw new Error('$push can only be applied to arrays');
          }
          result.push(...command[key]);
        } else if (key === '$set') {
          if (Array.isArray(result)) {
            result[Number(key)] = command[key];
          } else {
            result = command[key];
          }
        } else if (key === '$merge') {
          if (typeof result !== 'object' || result === null) {
            throw new Error('$merge can only be applied to objects');
          }
          Object.assign(result, command[key]);
        } else if (key === '$apply') {
            if (typeof command[key] !== 'function') {
                throw new Error('$apply must be a function');
              }
              if (Array.isArray(data)) {
                result[Number(key)] = command[key](data[Number(key)]);
              } else {
                return command[key](data);
              }
        }
        else {
          result[key] = update(result[key], command[key]);
        }
      }
    }
  
    return result;
  }
  
  module.exports = update;
  