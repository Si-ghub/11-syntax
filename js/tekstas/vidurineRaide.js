/**
 * 
 * @param {string} text Tekstas is kurio rasim vidurine raide
 * @returns 
 */
 const vidurineRaide = text => text === '' ? '' : text[Math.ceil(text.length / 2 - 1)];

 export { vidurineRaide }
 
 
 /*
 labas -> b (index: 2)
 ^(5/2-1) -> 2
 mano -> a (index: 1)
 ^(4/2-1) -> 1
 */