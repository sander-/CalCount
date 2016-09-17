var CalorieCount = (function () {
    function CalorieCount() {
        var _this = this;
        document.getElementById("calculate").onclick = function () {
            var weight = document.getElementById("weight").value;
            var gender = document.querySelector('input[name="gender"]:checked').value;
            var runkm = document.getElementById("runkm").value;
            _this.Calculate(parseFloat(weight), parseFloat(gender), parseFloat(runkm));
            document.getElementById("result").innerHTML = _this.RunningNumber.toString();
        };
    }
    CalorieCount.prototype.Calculate = function (weight, gender, runkm) {
        this.BaseValue = weight * 24.2;
        if (gender == 2)
            this.BaseValue = weight * 22;
        this.DailyValue = this.BaseValue * 1.3;
        var extraCalorie = runkm * 62.5;
        this.RunningNumber = this.DailyValue + extraCalorie;
    };
    return CalorieCount;
}());
var calcount = new CalorieCount();
