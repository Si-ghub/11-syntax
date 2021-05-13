import { pirmaRaide } from './pirmaRaide.js';
import { vidurineRaide } from './vidurineRaide.js';
import { paskutineRaide } from './paskutineRaide.js';



function vientisasTekstas(textList) {
    let answer = '';
    
    for (let i=0; i < textList.length; i++) {
        const text = textList[i];
        answer += pirmaRaide(text);
        answer += vidurineRaide(text);
        answer += paskutineRaide(text);
    }
    
    return answer;
}

export { vientisasTekstas }