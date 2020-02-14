import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Villain } from 'src/app/classes/villain';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { VillainTransferService } from 'src/app/services/villain-transfer.service';

@Component({
  selector: 'app-list-villains',
  templateUrl: './list-villains.component.html',
  styleUrls: ['./list-villains.component.css']
})
export class ListVillainsComponent implements OnInit, OnDestroy {

  villains: Villain[] = [];
  villainSubscription: Subscription;

  constructor(private villainService: HttpClientVillainService,
              private router: Router,
              private villainTransferService: VillainTransferService) { }

  ngOnInit() {
    this.getVillains();
  }

  ngOnDestroy(): void {
    this.villainSubscription.unsubscribe();
  }

  getVillains() {
    this.villainSubscription = this.villainService.getVillains().subscribe(data => { 
      this.villains = data;
    });    
  }

  toCreateVillain() {
    this.router.navigateByUrl("/createvillain");
  }

  toUpdateVillain(id: string, name: string, episode: string ) {
   
    const villain = { id: +id, name: name, episode: episode };

    this.villainTransferService.setVillain(villain);

    this.router.navigateByUrl("/updatevillain");
  }

  
  deleteVillain(id: string, name: string, episode: string ) {   
    if(confirm("Do you wish to delete " + name)) {
      const villain = { id: +id, name: name, episode: episode };
      this.villainService.deleteVillain(villain).subscribe();  
      this.getVillains();
    }    
  }
}
