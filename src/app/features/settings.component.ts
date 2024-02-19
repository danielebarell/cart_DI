import { Component } from '@angular/core';
import { SetterComponent } from './settings/setter.component';
import { PreviewComponent } from './settings/preview.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SetterComponent,PreviewComponent],
  template: `
    <section class="d-flex justify-content-evenly mt-3">
      <app-setter/>
      <app-preview/>
    </section>
  `,
  styles: ``
})
export default class SettingsComponent {

}
