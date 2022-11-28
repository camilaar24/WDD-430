import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageChangedEvent = new EventEmitter<Message[]>();
  private messagesUrl =
  'http://localhost:3000/messages';
  private messages: Message[] = [];
  

  constructor(private http: HttpClient) {}

  getMessages() {
    this.http
      .get<{ message: string; messageObjs: Message[] }>(this.messagesUrl)
      .subscribe({
        next: (res) => {
          console.log(res.message);
          console.log(res.messageObjs);
          this.messages = res.messageObjs;
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

 
  getMaxId(): number {
    let maxId = 0;
    this.messages.forEach((m) => {
      if (+m.id > maxId) maxId = +m.id;
    });
    return maxId;
  }

  getMessage(id: string): Message {
    return this.messages.find((m) => m.id === id);
    }
    
    addMessage(newMsg: Message) {
      if (!newMsg) return;
      newMsg.id = '';
      this.http
        .post<{ message: string; messageObj: Message }>(
          this.messagesUrl,
          newMsg,
          { headers: new HttpHeaders().set('Content-Type', 'application/json') }
        )
        .subscribe({
          next: (res) => {
            console.log(res.message);
            this.messages.push(res.messageObj);
            this.sortAndSend();
          },
          error: (err) => {
            console.error(err.message);
            console.error(err.error);
          },
        });
    }
  sortAndSend() {
    this.messages.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    this.messageChangedEvent.next(this.messages.slice());
  }
}