import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SettingProvider } from '../../../service/settingProvider/setting-provider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-setting',
  imports: [ReactiveFormsModule],
  templateUrl: './setting.html',
  styleUrl: './setting.scss',
})
export class Setting {
  settingProvider = inject(SettingProvider);
  toastr = inject(ToastrService);

  settingForm = new FormGroup({
    dashboardTitle: new FormControl(this.settingProvider.dashboardTitle()),
    overviewCardLimit: new FormControl(this.settingProvider.overviewCardLimit()),
  });

  onSave() {
    this.settingProvider.dashboardTitle.set(this.settingForm.value.dashboardTitle || 'Dashboard');
    this.settingProvider.overviewCardLimit.set(this.settingForm.value.overviewCardLimit || 10);
    this.toastr.success('Settings saved successfully!');
  }
}
