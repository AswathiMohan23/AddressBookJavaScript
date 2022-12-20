class AddressBook{
    
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNo=params[6];
        this.email=params[7];
    }
    get getFirstName(){
        return this.firstName;
    }
    /**
     * @param {string} name
     */
    set setFirstName(name){
        let nameRegex=RegExp("[A-Z]{1}[a-z]{3,}$")
        if(nameRegex.test(name)){
            this.name=name;
        }else
            throw "Name '"+name+"' is invalid";
    }
    /**
     * @param {string} address
     */
    set setAddress(address){
        let addressRegex=RegExp("[A-Za-z]{4,}$")
        if(addressRegex.test(address)){
            this.address=address;
        }else
            throw "address '"+address+"' is invalid";
    }

    /**
     * @param {string} city
     */
    set setCity(city){
        let cityRegex=RegExp("[A-Za-z]{4,}$")
        if(cityRegex.test(city)){
            this.city=city;
        }else
            throw "city '"+city+"' is invalid";
    }
    /**
     * @param {string} state
     */
    set setState(state){
        let stateRegex=RegExp("[A-Za-z]{3,}$")
        if(stateRegex.test(state)){
            this.state=state;
        }else
            throw "state '"+state+"' is invalid";
    }
    
    /**
     * @param {string} phn
     */
    set setPhoneNo(phn){
        let phnRegex=RegExp("[91]+() +[789][0-9]{9}")
        if(phnRegex.test(phn)){
            this.phn=phn;
        }else
            throw "phoneNo '"+phn+"' is invalid";
    }
    set setEmail(email){
        let emailRegex=RegExp("^[a-z0-9+_.-]+@+[a-z]+.+[a-z]{2,}$")
        if(emailRegex.test(email)){
            this.email=email;
        }else
            throw "Email '"+email+"' is invalid";
    }
    set setZip(zip){
        let zipRegex=RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$")
        if(zipRegex.test(zip)){
            this.zip=zip;
        }else
            throw "Zip '"+zip+"' is invalid";
    }
    

    toString(){
        return "firstName = "+this.firstName+" , secondName = "+this.lastName+" ,address = "+this.address+" ,city = "+this.city
                    +" , state = "+this.state+" , zip = "+this.zip+" ,phoneNo = "+this.phoneNo+" , email = "+this.email;
    } 
}
let addressBook =new AddressBook("Kiran","Nair","hij villa")
console.log(addressBook.toString());
let addressBook1 =new AddressBook("Tom","John","abc villa","Bangalore","Karnataka","456789","942357891","tom@gmail.com");
console.log(addressBook1.toString());
let addressBook2 =new AddressBook("Anna","Maria","pqr apartment","Mysore","Karnataka","766789","942357123","annmaria@gmail.com");
console.log(addressBook2.toString());
try{
    addressBook1.setFirstName="daisy" // throws error because name should start with capital letter
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setAddress="efg" //throws error because address should have min 4 letters
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setCity="aaa" //throws error because city should have min 4 letters
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}

try{
    addressBook1.setState="ab" //throws error because state should have min 3 letters
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setPhoneNo="91 94951" //throws error because phone no should have 10 digits
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setEmail="abc()*@gmail.com" 
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setZip="400088A" //throws error because zip should not contain alphabets
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}

let addressBookArray1=new Array();
let addressBookArray2=new Array();
let addressBookArray3=new Array();
let addressBookArray4=new Array();
let addressBookArray5=new Array();

let addressBookMap=new Map();
let mapByCity=new Map();
let mapByState=new Map();

addressBookArray1.push("Geetha","Rani","xyz villa","Pala","Kottayam","Kerala","456262","91 6872837890","geetha@gmail.com")
addressBookArray2.push("Gouri","Menon","rty apartment","Kochi","Ernakulam","Kerala","786262","91 9572837890","gour@gmail.com")
addressBookArray3.push("Ravi","Varma","tvm palace","Neyyatinkara","Trivandrum","Kerala","656262","91 9072837890","ravi@gmail.com")
addressBookArray5.push("George","Davis","tyu house","Pala","Kottayam","Kerala","796262","91 8002837890","george@gmail.com")
addressBookMap.set("Geetha",addressBookArray1)
addressBookMap.set("Gouri",addressBookArray2)
addressBookMap.set("Ravi",addressBookArray3)
addressBookMap.set("George",addressBookArray5)
mapByCity.set("pala",addressBookArray1)
mapByCity.set("vytla",addressBookArray2)
mapByCity.set("neyyatinkara",addressBookArray3)
mapByCity.set("Pala",addressBookArray5)

mapByState.set("Kottayam",addressBook1)
mapByState.set("Kochi",addressBookArray2)
mapByState.set("Trivandrum",addressBookArray3)
mapByState.set("Kottayam",addressBookArray5)




console.log("AddressBookMap : ")

console.log(addressBookMap)
console.log("AddressBookArray : "+addressBookArray2)
searchByName("Ravi");
getCountByCity("Pala");
deleteByName("Geetha");
getCount();
searchByCity("Pala");
sort(addressBookMap,"name"); // sort by name in alphabetical order
sort(mapByCity,"city"); // sort by city in alphabetical order
sort(mapByState,"state"); // sort by state in alphabetical order





function searchByName(name){
    if(addressBookMap.has(name))
        console.log("\n=========================>>>The searched name is "+name+" and the details of that person is given below\n\n"+addressBookMap.get(name))

}
function searchByCity(city){
    if(mapByCity.has(city)==city)
        console.log("\n=========================>>>The searched city is "+city+" and the details of the person from that city is given below\n\n"+mapByCity.get(city))
}
 
function deleteByName(name){
    if(addressBookMap.has(name)==name){
        addressBookMap.delete(name)
        console.log("\n===========================================>>> The remaining list after deletion of details of "+name+" :\n ")

        displayMap(addressBookMap)
    }
}
function displayMap(addressBookMap){
    for (var entry of addressBookMap.entries()) {
        var key = entry[0],
            value = entry[1];
        console.log(key + " = " + value);
    }
}
function getCount(){
    let count=0;
    for (var entry of addressBookMap.entries()) {
        var key = entry[0],
            value = entry[1];
        count++    
    }
    console.log("\n=======================>>>>>>>>>>> Number of contacts present in the addressBook = "+count)

}
function getCountByCity(city) {
    let storeArray=new Array()
    if(mapByCity.has(city)){
        for(i=0;i<mapByCity.size;i++){
            storeArray.push(city)
        }
        console.log("\n=========================>>>The searched city is "+city+" and no of people from that city is : "+storeArray.length)

    }
    
}  

function sort(mapToBeSorted,property){
    var sortedMap = new Map([...mapToBeSorted.entries()].sort());
    console.log("\n ========================================================== sorted order based on "+property+" ===============================================\n");
    console.log(displayMap(sortedMap))

}

    var readline = require('readline');
    let addressBookArray6=new Array()
    let rl = readline.createInterface(
         process.stdin, process.stdout);
    rl.question('Enter the firstName ', (firstName) => {
            console.log( firstName);
        if(addressBookMap.has(firstName)==firstName)
            console.log(`the contact ${firstName} is already present in the addressBook`);
        else if(addressBookMap.has(firstName)!=firstName){
            console.log("firstName is : "+firstName);

            rl.question('Enter the lastName ', (lastName) => {
                console.log( lastName);
            rl.question('Enter the address ', (address) => {
                console.log( address);
            rl.question('Enter the city ', (city) => {
                console.log( city);
            rl.question('Enter the state ', (state) => {
                console.log( state);
        
        addressBookArray6.push(firstName,lastName,address,city,state)
        console.log("The new contact is :  "+addressBookArray6)
        console.log("\n=======================>>> The addressBookMap after adding new contact is :  ")
        addressBookMap.set(firstName,addressBookArray6)
        displayMap(addressBookMap)
        rl.close()
        
        })})})})}})  
    
 

    