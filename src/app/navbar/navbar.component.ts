import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = JSON.parse(window.localStorage.getItem('user_info') || '{}');

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
  }

  signout(e) {
    e.preventDefault();
    this.http.delete('http://106.15.206.216:3000/session')
      .toPromise()
      .then(data => {
        window.localStorage.removeItem('auth_token');
        this.router.navigate(['/signin']);
      })
      .catch(err => {
        window.alert('退出失败，请稍后重试');
      });
  }

}
