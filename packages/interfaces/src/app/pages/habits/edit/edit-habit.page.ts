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
    private habitService: HabitsService
  ) {
    // this.habit = new Habit(); // no working??
  }

  habitId: string;

  @Input() habit: Habit;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      trigger: new FormControl('', Validators.required),
      behavior: new FormControl('', Validators.required),
      reward: new FormControl('', Validators.required),
    });

    this.route.data.subscribe((data) => {
      if (data.type === 'edit') {
        this.habitId = this.route.snapshot.paramMap.get('id');
      }
    });
  }

  async onFormSubmit() {
    if (this.form.valid) {
      const habit: Habit = await this.habitService.create(this.form.value);

      await this.router.navigate(['/habits'], { state: { newHabit: habit } });
    }
  }
}
