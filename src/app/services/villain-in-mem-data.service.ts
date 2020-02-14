import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Villain } from '../classes/villain';

@Injectable({
  providedIn: 'root'
})
export class VillainInMemDataService implements InMemoryDbService {
  createDb() {
    let villains: Villain[] = [
      { id: 1, name: 'Dr Ray Flemming', episode: "Prescription Murder" },
      { id: 2, name: 'Dale Kingston' , episode: "Suitable for Framing" },
      { id: 3, name: 'Beth Chadwick' , episode: "Lady in Waiting"},
      { id: 4, name: 'Emmett Clayton' , episode: "The Most Dangerous Match"},
      { id: 5, name: 'Viveca Scott' , episode: "Lovely but Lethal"},
      { id: 6, name: 'Dr Bart Keppel' , episode: "Double Exposure"},
      { id: 7, name: 'Milo Janus' , episode: "An Exercise in Fatality"},
      { id: 8, name: 'Harold Van Wick' , episode: "Playback"},
      { id: 9, name: 'Adrian Carsini' , episode: "Any Old Port in a Storm"},
      { id: 10, name: 'Abigail Mitchell', episode: "Try and Catch Me" },
    ];  
    return {villains};   
  }  
}
