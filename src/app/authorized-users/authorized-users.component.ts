import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-authorized-users',
  standalone: false,

  templateUrl: './authorized-users.component.html',
  styleUrl: './authorized-users.component.css'
})
export class AuthorizedUsersComponent {
  options$ = of([1, 2, 3])
  options = [1,2,3]
}
