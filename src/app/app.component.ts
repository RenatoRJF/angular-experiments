import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/repository';
import { RepositoryService } from './repository.service';

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

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit() {
    // this.repos = this.repositoryService.getAllRepositories();;
  }

  onEnterEvent(value: string, event: KeyboardEvent) {
    if (event.keyCode === this.ENTER_CODE) {
      this.inputValue = '';
      this.repositoryService
        .getRepository(value)
        .subscribe(data => this.repos.push(data));
    }
  }
}
