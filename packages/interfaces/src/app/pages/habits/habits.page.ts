import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Habit } from '@habit-mapper-app/entities';
import { filter } from 'rxjs/operators';
import { HabitsService } from '../../domain-modules/habits/habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],
})
export class HabitsPage implements OnInit {
  constructor(private router: Router, private habitService: HabitsService) {}

  habits: Habit[] = [];

  filteredHabits: Habit[] = [];

  async ngOnInit() {
    await this.fetchHabits();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(async () => {
        const { state } = this.router.getCurrentNavigation().extras;

        if (state && state.newHabit) {
          await this.fetchHabits();
        }
      });
  }

  async fetchHabits(): Promise<void> {
    this.habits = await this.habitService.findAll();
    this.filteredHabits = this.habits;
  }

  filterHabit(search: string): void {
    this.filteredHabits = this.habits.filter(
      (habit) =>
        habit.trigger.match(search) ||
        habit.behavior.match(search) ||
        habit.reward.match(search)
    );
  }
}
