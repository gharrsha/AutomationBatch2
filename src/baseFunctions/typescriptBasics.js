var typescriptBasic = /** @class */ (function () {
    function typescriptBasic() {
    }
    typescriptBasic.prototype.greet = function () {
        console.log("Welcome to Typescript");
    };
    return typescriptBasic;
}());
var ts = new typescriptBasic();
console.log(ts.greet());
