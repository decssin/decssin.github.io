date = {
    capt : '2021 / 07',
    init : 4,
    fini : 31,
    get last() {
        return parseInt(this.fini) + parseInt(this.init) - 1
    }
};

data = [
    {week : 3, day : '토', len : 4}
];