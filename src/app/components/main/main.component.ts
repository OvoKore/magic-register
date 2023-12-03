import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit() {
    const magicRegisterString = localStorage.getItem('magic-register');
    if (!magicRegisterString) {
      localStorage.setItem('magic-register', JSON.stringify([]));
    }
  }
}
