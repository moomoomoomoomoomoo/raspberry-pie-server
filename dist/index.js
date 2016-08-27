class Robot {
    constructor(greet) {
        this.greeting = greet;
    }
    say() {
        console.log(this.greeting);
    }
    shoot(gun) {
        console.log("pew");
    }
}
class RobotGun {
    //public bullets:number;
    //public type:"auto"|"semi-auto";
    constructor(bullets, type) {
        this.bullets = bullets;
        this.type = type;
    }
}
var popo = new Robot("popopopopopo");
popo.say();
popo.shoot(new RobotGun(50, 'auto'));
