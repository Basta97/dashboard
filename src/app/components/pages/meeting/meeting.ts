import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MeetingProvider } from '../../../service/meeting-provider/meeting-provider';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './meeting.html',
  styleUrl: './meeting.scss'
})
export class MeetingComponent {
  meetingProvider = inject(MeetingProvider);
  fb = inject(FormBuilder);
  meetingForm: FormGroup;

  currentDate = new Date().toISOString().slice(0, 16);

  constructor() {
    this.meetingForm = this.fb.group({
      subject: ['', Validators.required],
      goal: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addMeeting() {
    if (this.meetingForm.valid) {
      this.meetingProvider.addMeeting({
        id: Date.now(),
        ...this.meetingForm.value
      });
      this.meetingForm.reset();
    }
  }

  deleteMeeting(id: number) {
    this.meetingProvider.deleteMeeting(id);
  }

  isLate(date: string): boolean {
    const meetingTime = new Date(date).getTime();
    const currentTime = new Date().getTime();
    const diffInMinutes = (currentTime - meetingTime) / (1000 * 60);
    return diffInMinutes > 10;
  }
}
