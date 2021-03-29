import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  constructor(private route: ActivatedRoute) {}

  habitId: string;

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      if (data.type === 'edit') {
        this.habitId = this.route.snapshot.paramMap.get('id');
      }
    });
  }
}
