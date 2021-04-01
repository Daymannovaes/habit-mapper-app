import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Habit } from '@habit-mapper-app/entities';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],
})
export class HabitsPage implements OnInit {
  constructor(private router: Router) {}

  habits: Habit[] = [];

  ngOnInit() {
    this.router.events.subscribe((val) => {
      // @todo use observable filters
      if (val instanceof NavigationEnd) {
        const { state } = this.router.getCurrentNavigation().extras;

        if (state && state.newHabit) {
          this.habits.push(state.newHabit);
        }
      }
    });
  }
}
