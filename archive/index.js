const example = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({
        name,
        age,
    }),
    getName: (callback) => {
        const name = 'Char1ey';

        setTimeout(() => {
            callback(name);
            // throw new Error('서버 에러');
        }, 3000);
    },

    getAge: () => {
        const age = 31;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
            }, 3000);
        });
    },
};

module.exports = example;
