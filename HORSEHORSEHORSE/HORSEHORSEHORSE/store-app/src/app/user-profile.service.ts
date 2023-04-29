import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private readonly baseUrl = 'http://localhost:4200'; // replace with your server URL

  constructor(private http: HttpClient) { }

  getUserProfile(id: number): Observable<UserProfile> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get<UserProfile>(url);
  }

  updateUserProfile(profile: UserProfile): Observable<UserProfile> {
    const url = `${this.baseUrl}/users/${profile.id}`;
    return this.http.put<UserProfile>(url, profile);
  }
}
