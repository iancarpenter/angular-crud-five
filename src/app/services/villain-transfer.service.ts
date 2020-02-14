import { Injectable } from '@angular/core';
import { Villain } from '../classes/villain';

@Injectable({
  providedIn: 'root'
})
export class VillainTransferService {

  private villain: Villain;

  constructor() { }

  setVillain(villain: Villain) {
    this.villain = villain;
  }

  getVillain() {
    const tempVillain = this.villain;
    this.clearVillain();
    return tempVillain;
  }

  clearVillain() {
    this.villain = undefined;
  }
}
