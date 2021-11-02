import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_modules/user.model';
import { AuthService } from 'src/app/_services/authService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onLogin(user:User){
    this.authService.login(user).subscribe(
      (res)=>{
        sessionStorage.setItem('token', res.token)
        console.log(res);

      }
    )
  }

}
