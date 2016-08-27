interface Gun{
    bullets:number;
    type:string;
}

class Robot {
    greeting: string;
    constructor(greet:string) {
        this.greeting = greet;
    }

    public say() {
        console.log(this.greeting);
    }
    public shoot(gun:Gun) {
        console.log("pew");
    }
} 
class RobotGun {
    //public bullets:number;
    //public type:"auto"|"semi-auto";
    constructor(public bullets:number,public type:string){}
}

var popo = new Robot("popopopopopo");
popo.say();
popo.shoot(new RobotGun(50,'auto'));