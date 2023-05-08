import { Component, OnInit} from '@angular/core';
import { SendMailService } from '../services/send-mail.service';



@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],

})
export class ContactMeComponent implements OnInit {


  public mailSent = false;

 

  constructor(private sendMail: SendMailService) {

  }

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
