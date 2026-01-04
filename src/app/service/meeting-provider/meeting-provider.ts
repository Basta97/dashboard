import { Injectable, signal, inject } from '@angular/core';
import { Meeting } from '../../model/meeting';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class MeetingProvider {
    meetings = signal<Meeting[]>([]);

    toastr = inject(ToastrService);

    constructor() {
        if (localStorage.getItem('meetings')) {
            this.meetings.set(JSON.parse(localStorage.getItem('meetings')!));
        } else {
            this.meetings.set([

                {
                    id: 1,
                    subject: 'Weekly Sync',
                    goal: 'Discuss project progress',
                    date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), 
                },

            ]);
        }
        this.startMeetingCheck();
    }

    addMeeting(meeting: Meeting) {
        this.meetings.update((meetings) => [...meetings, meeting]);
        this.toastr.success('Meeting added successfully');
        localStorage.setItem('meetings', JSON.stringify(this.meetings()));
    }

    deleteMeeting(id: number) {
        this.meetings.update((meetings) => meetings.filter((m) => m.id !== id));
        this.toastr.info('Meeting deleted');
        localStorage.setItem('meetings', JSON.stringify(this.meetings()));
    }

    private startMeetingCheck() {
        setInterval(() => {
            this.checkUpcomingMeetings();
        }, 60000); 
    }

    private checkUpcomingMeetings() {
        const now = new Date();
        this.meetings().forEach((meeting) => {
            const meetingDate = new Date(meeting.date);
            const timeDiff = meetingDate.getTime() - now.getTime();
            const minutesDiff = timeDiff / (1000 * 60);

           

            if (meetingDate > now) { }
        });

        const upcoming = this.meetings()
            .filter(m => new Date(m.date) > now)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        if (upcoming.length > 0) {
            const nextMeeting = upcoming[0];
            const meetingDate = new Date(nextMeeting.date);
            const timeDiff = meetingDate.getTime() - now.getTime();
            const minutesUntil = Math.round(timeDiff / (1000 * 60));

            this.toastr.info(`Upcoming: ${nextMeeting.subject} in ${minutesUntil} mins`, 'Meeting Alert');
        }
    }
}
