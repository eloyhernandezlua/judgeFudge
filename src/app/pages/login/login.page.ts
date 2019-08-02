import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pwd;
  correo;
  

  constructor(private router: Router, private afa:AngularFireAuth) { }

  ngOnInit() {
  }

  login(correo, pwd){
    console.log(correo);
    this.afa.auth.signInWithEmailAndPassword(correo,pwd);
    this.router.navigateByUrl('/tabs/tab1');
  }

}
