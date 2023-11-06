import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  profileFormNested = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  profileFormBuilder = this.fb.group({
    firstName: ['', Validators.required],
    lastName: '',
    address: this.fb.group({
      street: '',
      city: '',
      state: '',
      zip: '',
    }),
  });

  profileFormDynamic = this.fb.group({
    firstName: ['', Validators.required],
    lastName: '',
    address: this.fb.group({
      street: '',
      city: '',
      state: '',
      zip: '',
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}
  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfileNested() {
    this.profileFormNested.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  get aliases() {
    return this.profileFormDynamic.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
