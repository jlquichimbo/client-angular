export class Permiso {
    constructor(id = '', day = '', start_time = '', end_time = '', rol = '', state = true){
        this._id = id;
        this.day = day;
        this.start_time = start_time;
        this.end_time = end_time;
        this.rol = rol;
        this.state = state;

    }
    _id: string;
    day: string;
    start_time: string;
    end_time: string;
    rol: string;
    state: boolean;

}
