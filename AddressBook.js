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
    
    /**
     * @param {string} name
     */
    set setName(name){
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
    addressBook1.setName="daisy" // thorws error because name should start with capital letter
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setAddress="efg" //thorws error because address should have min 4 letters
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setCity="aaa" //thorws error because city should have min 4 letters
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}

try{
    addressBook1.setState="ab" //thorws error because state should have min 3 letters
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
try{
    addressBook1.setPhoneNo="91 94951" //thorws error because phone no should have 10 digits
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}

