import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-acount-setting',
  templateUrl: './acount-setting.component.html',
  styleUrls: ['./acount-setting.component.css']
})
export class AcountSettingComponent implements  OnInit {
  
  constructor(private settingService: SettingsService){}  


  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.settingService.changeTheme(theme);
  }


  
}
