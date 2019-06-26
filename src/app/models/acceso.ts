export class Acceso {
    constructor(id = '', date = '', hour = '', user = '', sala = '', typeAccess = ''){
        this._id = id;
        this.date = date;
        this.hour = hour;
        this.user = user;
        this.sala = sala;
        this.typeAccess = typeAccess;
    }

    _id: string;
    date: string;
    hour: string;
    user: string;
    sala: string;
    typeAccess: string;
}
