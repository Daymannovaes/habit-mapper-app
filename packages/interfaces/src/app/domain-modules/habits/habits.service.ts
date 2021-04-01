import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habit } from '@habit-mapper-app/entities';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  constructor(private http: HttpClient) {}

  async create(habit: Habit): Promise<Habit> {
    await this.http.get('http://localhost:3001');
    return habit;
  }
}