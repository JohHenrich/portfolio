import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private url = 'https://johannes-henrich.developerakademie.net/send_mail/send_mail.php';

  constructor(private https: HttpClient) {
  }

  send(contact) {
    return this.https
      .post(this.url, JSON.stringify(contact));
  }
}