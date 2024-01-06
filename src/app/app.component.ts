import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('NOK - Linktree');
  }

  redirect(url: string) {
    window.open(url, '_blank');
  }
}
