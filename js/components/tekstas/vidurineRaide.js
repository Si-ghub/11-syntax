function vidurineRaide(text) {
    if (text === '') {
        return '';
    }
    const index = Math.ceil(text.length / 2 - 1);
    return text[index];
}

export { vidurineRaide }


/*
labas -> b (index: 2)
^(5/2-1) -> 2
mano -> a (index: 1)
^(4/2-1) -> 1
*/