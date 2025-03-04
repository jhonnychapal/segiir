import { Usuario } from './usuario.model';
import { Actividad } from './actividad.models'

export class Proyecto {
    constructor(
        public nombre: string,
        public descripcion: string,
        public director: Usuario,
        public met: Usuario[],
        public actividades: Actividad[],
        // tslint:disable-next-line: variable-name
        public _id?: string
    ){}
}
