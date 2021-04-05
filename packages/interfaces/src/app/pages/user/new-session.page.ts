import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Hub } from 'aws-amplify';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.page.html',
  styleUrls: ['./new-session.page.scss'],
})
export class NewSessionPage implements OnInit {
  constructor(private router: Router) {}

  returnUrl = '';

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(async () => {
        const { state } = this.router.getCurrentNavigation().extras;

        if (state && state.returlUrl) {
          this.returnUrl = state.returlUrl;
        }
      });

    const authListener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
          // case 'signUp':
          this.router.navigate([this.returnUrl || '/']);
          break;
        default:
          console.log(data.payload.event);
      }
    };

    Hub.listen('auth', authListener);
  }
}
