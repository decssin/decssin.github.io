date = {
    capt : '2021 / 01',
    init : 5,
    fini : 31,
    get last() {
        return parseInt(this.fini) + parseInt(this.init) - 1
    }
};

data = [
    {week : 1, day : '금', len : 1},
    {week : 2, day : '월', len : 3}
];