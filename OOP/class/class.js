function House(bedRooms, bathRooms, numSqft) {
    this.bathRooms = bathRooms;
    this.bedRooms = bedRooms;
    this.numSqft = numSqft;
}

var house_1 =  House(2, 2, 10);
console.log(house_1);   //This will give undefine

/*Fix this problem*/ 
var house_2 =  new House(2, 2, 10);
console.log(`Number of bath rooms = ${house_2.bathRooms}`); 
console.log(`Number of bed rooms  = ${house_2.bedRooms}`); 
console.log(`Number of sqears     = ${house_2.numSqft}`); 
