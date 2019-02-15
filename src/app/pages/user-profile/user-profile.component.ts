import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../structures/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	// let user: User;
	user: User = {
		id: 0,
		first_name: "",
		last_name: "",
		avatar: ""
	};

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getUser("4").subscribe(
  		resp => {
  			this.user = resp["data"]
  			console.log("user: ", resp);
  		},
  		err => {

  		}
		);
  }

}
