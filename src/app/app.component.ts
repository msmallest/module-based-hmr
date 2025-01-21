import { Component } from '@angular/core';
import { AuthorizedUsersComponent } from './authorized-users/authorized-users.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [AuthorizedUsersComponent]
})
export class AppComponent {
  title = 'module-based-hmr';
}
