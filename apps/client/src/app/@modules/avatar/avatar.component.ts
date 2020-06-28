import {Component, OnInit} from '@angular/core';
import {ApiService, ContactEntity} from "../../@core/services/api.service";
import {isEmpty} from "ramda";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  contacts!: ContactEntity[];

  constructor(private apiService: ApiService) {
  }

  async ngOnInit() {
    const response = await this.apiService.getContacts().toPromise();
    if (!isEmpty(response)){
      this.contacts = response;
    }
  }

}
