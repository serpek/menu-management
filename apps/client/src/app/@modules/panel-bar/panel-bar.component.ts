import {Component} from '@angular/core';

@Component({
  selector: 'app-panel-bar',
  templateUrl: './panel-bar.component.html',
  styleUrls: ['./panel-bar.component.scss']
})
export class PanelBarComponent {

  baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';

  public imageUrl(imageName: string) {
    return this.baseImageUrl + imageName + '.jpg';
  }
}
