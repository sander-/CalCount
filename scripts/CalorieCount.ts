class CalorieCount
{

    public BaseValue: number;
    public DailyValue:number;
    public RunningNumber:number;

    private Calculate(weight: number, gender: number, runkm: number)
    {
        this.BaseValue = weight * 24.2;
        if(gender == 2) this.BaseValue = weight * 22;

        this.DailyValue = this.BaseValue * 1.3;

        var extraCalorie = runkm * 62.5;

        this.RunningNumber = this.DailyValue + extraCalorie;
    }

    constructor()
    {
        document.getElementById("calculate").onclick = ()=> {
            var weight = document.getElementById("weight").nodeValue;
            var gender = document.getElementById("gender").nodeValue;
            var runkm = document.getElementById("runkm").nodeValue;
            this.Calculate(parseFloat(weight), parseFloat(gender), parseFloat(runkm));

            document.getElementById("result").innerHTML = this.RunningNumber.toString();
        }
    }
}
var calcount = new CalorieCount();