import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Habit } from '@habit-mapper-app/entities';
import { HabitsService } from '../../../domain-modules/habits/habits.service';
@Component({
  selector: 'app-edit-habit',
  templateUrl: './edit-habit.page.html',
  styleUrls: ['./edit-habit.page.scss'],
})
export class EditHabitPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private habitService: HabitsService,
  ) {
    // this.habit = new Habit(); // no working??
  }

  habitId: string;

  @Input() habit: Habit;

  form: FormGroup;

  async ngOnInit(): Promise<void> {
    this.fillForm();

    this.route.data.subscribe(async (data) => {
      this.habitId = '';
      if (data.type === 'edit') {
        this.habitId = this.route.snapshot.paramMap.get('id');
        const habit = await this.habitService.findOne(this.habitId);
        this.fillForm(habit);
      }
    });
  }

  fillForm(
    habit: Partial<Habit> = {
      trigger: '',
      behavior: '',
      reward: '',
    },
  ): void {
    this.form = new FormGroup({
      trigger: new FormControl(habit.trigger || '', Validators.required),
      behavior: new FormControl(habit.behavior || '', Validators.required),
      reward: new FormControl(habit.reward || '', Validators.required),
    });
  }

  async onFormSubmit(): Promise<void> {
    if (this.form.valid) {
      await this.createOrUpdateHabit(this.form.value);
      this.form.reset();

      await this.router.navigate(['/habits'], { state: { newHabit: true } });
    }
  }

  private async createOrUpdateHabit(habit) {
    return this.habitId
      ? this.habitService.update(this.habitId, habit)
      : this.habitService.create(habit);
  }
}
