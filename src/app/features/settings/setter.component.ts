import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../core/settings.service';

@Component({
  selector: 'app-setter',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <form>
      <fieldset>
        <legend class="display-4">Settings Editor</legend>
    <div class="form-group mb-3">
      <label for="title">Title</label>
      <input type="text" #title class="form-control" id="title" placeholder="Angular App"
      [value]="settingService.title()"
      (input)="settingService.setProperty('title',title.value)">
    </div>
    <div class="form-group mb-3">
      <label for="color">Color</label>
      <input type="color" #color class="form-control" id="color"
      [value]="settingService.color()"
      (input)="settingService.setProperty('color',color.value)">
    </div>
    <div class="form-group mb-3">
      <label for="enableShop">Abilita Shop</label>
      <br>
      <input type="checkbox" id="enableShop" #enable
      [checked]="settingService.enableShop()"
      (change)="settingService.setProperty('enableShop',enable.checked)">
    </div>
    <div class="form-group mb-3">
      <label for="nothing">Nothing</label>
      <input type="text" class="form-control" id="nothing"
      (input)="doNothing()">
    </div>
      </fieldset>
    </form>
    {{render()}}
  `,
  styles: `
  input[type='checkbox']{
    min-width: 2rem;
    min-height: 2rem;
    margin-left: 1rem;
  }
  `
})
export class SetterComponent {
  settingService = inject(SettingsService);
  render(){console.log('render setter')}
  doNothing(){

  }
}
