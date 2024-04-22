import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  showMessageConfirmation: boolean = false;
  submittedMessages: { _id: string, name: string, email: string, message: string }[] = [];
  editMode: boolean = false;
  editedIndex: number = -1;

  private apiUrl = 'http://localhost:5038/api/contact';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchSubmittedMessages();
  }

  fetchSubmittedMessages() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (response) => {
        this.submittedMessages = response;
      },
      (error) => {
        console.error('Error fetching submitted messages:', error);
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
        const messageId = this.submittedMessages[this.editedIndex]._id;
        this.http.put(`${this.apiUrl}/${messageId}`, { name: this.name, email: this.email, message: this.message }).subscribe(
        () => {
          this.fetchSubmittedMessages();
          this.showMessageConfirmation = true;
          this.editMode = false;
          this.editedIndex = -1;
          this.name = '';
          this.email = '';
          this.message = '';
        },
        (error) => {
          console.error('Error updating message:', error);
        }
      );
    } else {
      this.http.post(this.apiUrl, { name: this.name, email: this.email, message: this.message }).subscribe(
        () => {
          this.fetchSubmittedMessages();
          this.showMessageConfirmation = true;
          this.name = '';
          this.email = '';
          this.message = '';
        },
        (error) => {
          console.error('Error submitting message:', error);
        }
      );
    }
  }

  deleteMessage(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      () => {
        this.fetchSubmittedMessages();
      },
      (error) => {
        console.error('Error deleting message:', error);
      }
    );
  }

  editMessage(index: number) {
    this.name = this.submittedMessages[index].name;
    this.email = this.submittedMessages[index].email;
    this.message = this.submittedMessages[index].message;
    this.editMode = true;
    this.editedIndex = index;
  }
}
