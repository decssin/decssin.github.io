date = {
    capt : '2021 / 02',
    init : 1,
    fini : 28,
    get last() {
        return parseInt(this.fini) + parseInt(this.init) - 1
    }
};

data = [
    {week : 3, day : '토', len : 4}
];