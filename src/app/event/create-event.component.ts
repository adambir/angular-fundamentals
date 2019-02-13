import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  template: `
  <h1>Nouvel évènement :</h1>
  <hr>
  <div class="col-md-6">
    <h3>Fomrulaire de création d'évènement</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary">Enregister</button>
    <button type="button" class="btn btn-default" (click)="cancel()">Annuler</button>
  </div>
  `
})

export class CreateEventComponent {
constructor(private location: Location) {

}

  cancel() {
  this.location.back();
}
}
