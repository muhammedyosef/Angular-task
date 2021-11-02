import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_modules/user.model';
import { AuthService } from 'src/app/_services/authService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user?:User;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onRegister(form: User){
    console.log(form);

this.authService.register(form).subscribe(
  (res)=>{
    console.log(res);
  }
)
  }

}
