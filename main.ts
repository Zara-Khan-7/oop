class fruit {
    name:string;
    color: string;
    season :string;
    constructor(name:string,color:string,season:string){
        this.name = name
        this.color = color
        this.season = season
    }
}
 let f1 = new fruit("Banana","Yellow","All");
 let f2 = new fruit("Mango","Yellow","Summer");
 let f3 = new fruit("Strawberry","Red","Winter");

 f2.name = "Plum"

 console.log(f2);

