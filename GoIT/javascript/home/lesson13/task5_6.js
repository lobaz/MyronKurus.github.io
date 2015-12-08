function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var timerId;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        console.log('Кава готова!');
    }

//task 5
    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кавоварка вимкнена");
        }
        timerId = setTimeout(onReady, 1000);
    };
    
//task 6
    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    };

}





var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();