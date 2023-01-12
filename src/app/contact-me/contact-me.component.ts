import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SendMailService } from '../services/send-mail.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],

})
export class ContactMeComponent implements OnInit {
  public mailSent = false;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  text = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Please enter your Name';
    }
    if (this.email.hasError('required')) {
      return 'Please enter a email address';
    }
    if (this.text.hasError('required')) {
      return 'Please enter a message';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private sendMail: SendMailService) { }

  ngOnInit(): void {
  }
  
  submitForm(formResult) {
    console.log(formResult);
    this.sendMail.send(formResult)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => {
          console.info('send post complete');
          this.mailSent = true;
        }
      });
  }

  
  resetForm() {
    this.mailSent = false;
  }
}
