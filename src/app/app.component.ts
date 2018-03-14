import { Component } from '@angular/core';

@Component({
  selector: 'art-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = '';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
