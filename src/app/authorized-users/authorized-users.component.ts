import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-authorized-users',
  templateUrl: './authorized-users.component.html',
  styleUrl: './authorized-users.component.css',
  // template: `
  //   <p>Error with ngFor</p>
  //   <p>Error with async pipe</p>
  // `,
  // styles: `
  //   p {
  //     color: red
  //   }
  // `,
})
export class AuthorizedUsersComponent {
  options$ = of([1, 2, 3]);
  options = [1, 2, 3];
}
