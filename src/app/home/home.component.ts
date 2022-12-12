import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onLoadServers() {
    // complex code that connects to a backend
   
    // navigation to Servers page
    this.router.navigate(['/servers'])
  }
}
