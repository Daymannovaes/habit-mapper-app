import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habit } from '@habit-mapper-app/entities';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  constructor(private http: HttpClient) {}

  async create(habit: Habit): Promise<Habit> {
    return this.http.post<Habit>('/api/habits', habit).toPromise();
  }

  findAll() {
    return this.http.get<Habit[]>(`/api/habits`).toPromise();
  }

  findOne(id: string) {
    return this.http.get<Habit>(`/api/habits/${id}`).toPromise();
  }

  update(id: number, habit: Habit) {
    return this.http.patch<Habit>(`/api/habits/${id}`, Habit).toPromise();
  }

  remove(id: string) {
    return this.http.delete<boolean>(`/api/habits/${id}`).toPromise();
  }
}
