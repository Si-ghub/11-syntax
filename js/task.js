/*
duodamas "array of strings"
gauti vientisa "string", kuris sudarytas is:
- zodzio pirmos raides
- zodzio vidurines raides
- zodzio paskutines raides
*/

TESTAI:
vientisasTekstas(['labas', 'rytas']) -> 'lbsrts'
vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']) -> 'maonmsyragts'
vientisasTekstas(['as', 'i', 'ten']) -> 'aasiiiten'

REIKIAMOS FUNKCIJOS:
function vientisasTekstas - sujungia array i vientisa string
function pirmaRaide('labas') -> 'l'
function vidurineRaide('labas') -> 'b'
function paskutineRaide('labas') -> 's'

const s1 = vientisasTekstas(['labas', 'rytas']);

console.log(s1, '->', 'lbsrts');

const s2 = vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']);
console.log(s2, '->', 'maonmsyragts');

const s3 = vientisasTekstas(['as', 'i', 'ten']);
console.log(s3, '->', 'aasiiiten');