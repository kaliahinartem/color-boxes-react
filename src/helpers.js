const getRandomColorsArr = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        let c = '';
        while (c.length < 6) {
            c += (Math.random()).toString(16).substr(-6).substr(-1);
        }
        arr.push('#'+c);
    }

    return arr;
};

const choice = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

export { getRandomColorsArr, choice };