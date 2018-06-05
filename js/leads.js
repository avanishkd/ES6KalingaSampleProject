export default class Lead {
    
    constructor(MID, name, description) {
        this.MID = MID;
        this.name = name;
        this.description = description;
    }
    
    get leadDetails() {
        let MID= this.MID;
        let name = this.name;
        let description = this.description;
        return {MID, name, description};
    }
    
    
}