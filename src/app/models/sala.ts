export class Sala {
    constructor(id = '', name = '', description = '', state = true){
        this._id = id;
        this.name = name;
        this.description = description;
        this.state = state;
    }

// tslint:disable-next-line: variable-name
    _id: string;
    name: string;
    description: string;
    state: boolean;
}
