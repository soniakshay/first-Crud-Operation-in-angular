import { Users } from '../User';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[];
  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.getData();

  }
  getData(): void {
    this.usersservice.getData().subscribe((data) => {
        this.users = data;
        console.log(data);
    });
  }
  removedata(id: string): void {
    console.log(id);
    this.usersservice.removeData(id).subscribe(() => {
      this.getData();
    });

  }
}
