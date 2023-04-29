import { Component } from '@angular/core';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(private router: Router) {
  }

  userProfile: UserProfile = {
    id: 69420,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890'
  };

  goBackToStore() {
    // Navigate back to the store page
    this.router.navigate(['/store']);
  }
}
