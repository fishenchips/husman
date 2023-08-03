import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  testForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.testForm);
    console.log('hej');
  }

  private initForm() {
    let description = '';
    let no = '';

    this.testForm = new FormGroup({
      text: new FormControl(description),
      number: new FormControl(no),
    });
  }
}
