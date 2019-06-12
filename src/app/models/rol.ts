export class Rol {
    constructor(id = '', name = '', state = true){
        this._id = id;
        this.name = name;
        this.state = state;
    }
// tslint:disable-next-line: variable-name
    _id: string;
    name: string;
    state: boolean;
}
