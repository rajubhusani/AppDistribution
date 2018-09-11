import { Component, NgModule } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './addnew.html'
})
export class AddNewComponent {
  fileSelectMsg: string = 'No file selected yet.';
  fileUploadMsg: string = 'No file uploaded yet.';
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
  }

  uploadEvent(file: File): void {
    this.fileUploadMsg = file.name;
  }

  cancelEvent(): void {
    this.fileSelectMsg = 'No file selected yet.';
    this.fileUploadMsg = 'No file uploaded yet.';
  }
}