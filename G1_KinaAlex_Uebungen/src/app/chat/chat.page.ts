import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('messageInput', {static: false}) messageInput;
  @ViewChild('scrollMe', {static: false}) private myScrollContainer: ElementRef;

  chat: any;
  message: string;
  showSpinnerIcon = false;
  showDates = false;
  chatList: Observable<ChatMessage[]>;
  chatListRef: AngularFireList<ChatMessage>;
  groupNumber = 'G1'; // Bsp. G1
  currentUser = 'A swarm of bees disguised as a person 🔫🐝'; // Bsp. Ralph

  constructor(private alertCtrl: AlertController, afDb: AngularFireDatabase) {
    this.chatListRef = afDb.list('/chats/' + this.groupNumber);
    this.chatList = this.chatListRef.valueChanges();
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

  swipeEvent(swipe) {
    // 2  = Right to left swipe
    // 4  = Left to right swipe
    if (swipe.direction === 2 || swipe.direction === 4) {
      this.showDates = !this.showDates;
    }
  }

  async sendMessage(e) {
    if (this.message !== '') {
      this.showSpinnerIcon = true;
      let formattedDate = new Date().toLocaleString();
      console.log({username: this.currentUser, text: this.message, date: formattedDate})
      await this.chatListRef.push({username: this.currentUser, text: this.message, date: formattedDate});

      this.message = ''
      this.showSpinnerIcon = false;
    }
  }
}

interface ChatMessage {
  username: string;
  text: string;
  date: any;
}
