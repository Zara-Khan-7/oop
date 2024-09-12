"use strict";
class fruit {
    constructor(name, color, season) {
        this.name = name;
        this.color = color;
        this.season = season;
    }
}
let f1 = new fruit("Banana", "Yellow", "All");
let f2 = new fruit("Mango", "Yellow", "Summer");
let f3 = new fruit("Strawberry", "Red", "Winter");
f2.name = "APple";
console.log(f2);
