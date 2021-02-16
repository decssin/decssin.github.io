date = {
    capt : '2021 / 10',
    init : 5,
    fini : 31,
    get last() {
        return parseInt(this.fini) + parseInt(this.init) - 1
    }
};

data = [
    {week : 3, day : '토', len : 4}
];