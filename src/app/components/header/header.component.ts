import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Magic register';

  @ViewChild('headerRef') headerRef!: ElementRef;

  private colors: string[] = ['#ff0000', '#00ff00', '#0000ff'];
  private currentIndex: number = 0;

  ngAfterViewInit() {
    setInterval(() => {
      this.changeHeaderColor();
    }, 1000);
  }

  private changeHeaderColor() {
    const frequency = 0.1;
    const red = Math.sin(frequency * this.currentIndex + 0) * 127 + 128;
    const green = Math.sin(frequency * this.currentIndex + (2 * Math.PI) / 3) * 127 + 128;
    const blue = Math.sin(frequency * this.currentIndex + (4 * Math.PI) / 3) * 127 + 128;
    this.headerRef.nativeElement.style.color = `rgb(${red}, ${green}, ${blue})`;
    this.currentIndex = (this.currentIndex + 1) % 360;
  }
}
