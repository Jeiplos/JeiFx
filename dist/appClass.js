var Friends = /** @class */ (function () {
    function Friends(name) {
        this._name = name !== null && name !== void 0 ? name : 'no name';
    }
    Object.defineProperty(Friends.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Friends;
}());
var mile = new Friends('Mile');
console.log(mile.name);
