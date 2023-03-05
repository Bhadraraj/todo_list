import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TO-DO List';
  taskList: String[] = []
  ngOnInit(): void {
    let storageItems: any = localStorage.getItem('my-task');
    if (storageItems) {
      this.taskList = JSON.parse(storageItems);
    }
  }
}