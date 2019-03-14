
export const brokenLinks = (arrObj) => arrObj.filter(obj => 
  obj.statusText !== 'OK').length;
  
export const totalLinks = (arrObj) => arrObj.length;
  
export const uniqueLinks = (arrObj) => [...new Set(arrObj.map(obj => obj.href))].length;
  
export const stats = (arrObj) => {
  const valObj = {
    total: totalLinks(arrObj), 
    unique: uniqueLinks(arrObj),
    broken: brokenLinks(arrObj)
  };
  return valObj;
};
  
  