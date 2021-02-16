date = {
    capt : '2021 / 09',
    init : 3,
    fini : 30,
    get last() {
        return parseInt(this.fini) + parseInt(this.init) - 1
    }
};

data = [
    {week : 3, day : '토', len : 4}
];