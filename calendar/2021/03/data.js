date = {
    capt : '2021 / 03',
    init : 1,
    fini : 31,
    get last() {
        return parseInt(this.fini) + parseInt(this.init) - 1
    }
};

data = [
    {week : 3, day : '토', len : 4}
];