import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  values = '';
  onKey(event: KeyboardEvent) {
    // with type info
    console.log((<HTMLInputElement>event.target).value);
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  onBlur(event: FocusEvent) {
    console.log(event.type);
  }
  onFoucs(event: FocusEvent) {
    console.log(event.type);
  }
}
