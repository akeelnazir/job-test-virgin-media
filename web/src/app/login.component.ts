import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <a href="/api/login">Twitter login</a>
  `
})

export class LoginComponent implements OnInit {
  constructor () {
  }

  ngOnInit () {
  }
}
