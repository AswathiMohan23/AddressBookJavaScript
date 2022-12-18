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
            throw "Name '"+name+"' is incorrect";
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
    addressBook1.setName="daisy" //throws an error because id must be a non-zero number
    console.log(addressBook1.toString())
}catch(e){
    console.error(e);
}
