import {Component} from '@angular/core';

@Component({
  selector: 'app-panel-bar',
  templateUrl: './panel-bar.component.html',
  styleUrls: ['./panel-bar.component.scss']
})
export class PanelBarComponent {

  private baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';

  constructor() {
  }

  private imageUrl(imageName: string) {
    return this.baseImageUrl + imageName + '.jpg';
  }

}
