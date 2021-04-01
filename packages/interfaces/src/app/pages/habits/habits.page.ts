import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Habit } from '@habit-mapper-app/entities';
import { HabitsService } from '../../domain-modules/habits/habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],
})
export class HabitsPage implements OnInit {
  constructor(private router: Router, private habitService: HabitsService) {}

  habits: Habit[] = [];

  async ngOnInit() {
    this.habits = await this.habitService.findAll();
    this.router.events.subscribe(async (val) => {
      // @todo use observable filters
      if (val instanceof NavigationEnd) {
        const { state } = this.router.getCurrentNavigation().extras;

        if (state && state.newHabit) {
          this.habits = await this.habitService.findAll();
        }
      }
    });
  }
}
