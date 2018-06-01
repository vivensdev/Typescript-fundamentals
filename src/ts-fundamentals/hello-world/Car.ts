class Car {
    engine: string
    
    constructor(engine: string) {
        this.engine = engine;
    }

    start() {
        alert(this.engine + " starting...");
    }

    stop() {
        alert(this.engine + " stopping!!!");
    }
}

window.onload = function() {
    const car = new Car("V8");
    car.start();
    car.stop();
};