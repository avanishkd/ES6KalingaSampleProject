export default class Track {
    
    constructor( name, description) {
        this.name = name;
        this.description = description;
    }
    
    get trackDetails() {
       
        let name = this.name;
        let description = this.description;
        return {name, description};
    }
    
    
}