import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../core/services/authen.service';
import { UserModel } from '../../core/domain/user.model';
import { SystemConstants } from '../../core/common/system.constants';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  public user: UserModel;
  public baseFolder: string = SystemConstants.BASE_API;
  constructor(private _authenService: AuthenService) {
    this.user = this._authenService.getLoggedInUser();
  }

  ngOnInit() {
  }

}
