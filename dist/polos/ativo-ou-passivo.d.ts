export { Contratado } from '../partes/contratado';
export { Contratante } from '../partes/contratante';
export { ContribuintePrincipal } from '../partes/contribuinte-principal';
export { Inventariante } from '../partes/inventariante';
export { Litisconsorte } from '../partes/litisconsorte';
export { Depositante } from '../partes/depositante';
export { Procurador } from '../partes/procurador';
export { Titular } from '../partes/titular';
export { Noticiado } from '../partes/noticiado';
export { Noticiante } from '../partes/noticiante';
export { Notificado } from '../partes/notificado';
export { Notificante } from '../partes/notificante';
export { Oposto } from '../partes/oposto';
export { Outros } from '../partes/outros';
export { OutrosNomes } from '../partes/outros-nomes';
export { RecorrenteRecorrido } from '../partes/recorrente-recorrido';
export { RecorridoRecorrente } from '../partes/recorrido-recorrente';
export { RecdoRecte } from '../partes/recdo-recte';
export { RecteRecdo } from '../partes/recte-recdo';
export { Remetente } from '../partes/remetente';
export { Representado } from '../partes/representado';
export { Responsavel } from '../partes/responsavel';
import { Contratado } from '../partes/contratado';
import { Contratante } from '../partes/contratante';
import { ContribuintePrincipal } from '../partes/contribuinte-principal';
import { Inventariante } from '../partes/inventariante';
import { Litisconsorte } from '../partes/litisconsorte';
import { Depositante } from '../partes/depositante';
import { Procurador } from '../partes/procurador';
import { Titular } from '../partes/titular';
import { Noticiado } from '../partes/noticiado';
import { Noticiante } from '../partes/noticiante';
import { Notificado } from '../partes/notificado';
import { Notificante } from '../partes/notificante';
import { Oposto } from '../partes/oposto';
import { Outros } from '../partes/outros';
import { OutrosNomes } from '../partes/outros-nomes';
import { RecorrenteRecorrido } from '../partes/recorrente-recorrido';
import { RecorridoRecorrente } from '../partes/recorrido-recorrente';
import { RecdoRecte } from '../partes/recdo-recte';
import { RecteRecdo } from '../partes/recte-recdo';
import { Remetente } from '../partes/remetente';
import { Representado } from '../partes/representado';
import { Responsavel } from '../partes/responsavel';
import { Polo } from '.';
export declare type TypeAtivoOuPassivo = Contratado | Contratante | ContribuintePrincipal | Inventariante | Litisconsorte | Depositante | Procurador | Titular | Noticiado | Noticiante | Notificado | Notificante | Oposto | Outros | OutrosNomes | RecorrenteRecorrido | RecorridoRecorrente | RecdoRecte | RecteRecdo | Remetente | Representado | Responsavel;
export interface DictAtivoOuPassivo {
    [name: string]: TypeAtivoOuPassivo;
}
export declare const ObjectAtivoOuPassivo: DictAtivoOuPassivo;
declare const _default: Polo.AtivoOuPassivo;
export default _default;
