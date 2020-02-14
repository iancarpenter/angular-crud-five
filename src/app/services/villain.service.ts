import { Villain } from '../classes/villain';
import { Observable } from 'rxjs';

export abstract class VillainsService {
  villainsUrl = 'api/villains';

  abstract getVillains(): Observable<Villain[]>;
  abstract getVillain(id: number): Observable<Villain>;
  abstract addVillain(id: number, name: string, episode: string): Observable<Villain>;
  abstract deleteVillain(villain: Villain | number): Observable<Villain>;
  abstract searchVillain(term: string): Observable<Villain[]>;
  abstract updateVillain(villain: Villain): Observable<Villain>;

}
