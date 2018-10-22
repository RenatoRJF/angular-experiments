import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/repository';
import repositories from 'src/app/repository-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly ENTER_CODE: number = 13;
  title: string = 'Favorite Repositories';
  inputValue: string = '';
  repos: Repository[] = [];

  ngOnInit() {
    this.repos = repositories;
  }

  onEnterEvent(value: string, event: KeyboardEvent) {
    if (event.keyCode === this.ENTER_CODE) {
      console.log(value);
      this.inputValue = '';
    }
  }
}
