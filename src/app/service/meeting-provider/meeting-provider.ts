import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { Meeting } from '../../model/meeting';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class MeetingProvider {
    meetings = signal<Meeting[]>([]);
    platformId = inject(PLATFORM_ID);

    toastr = inject(ToastrService);

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const meetings = localStorage.getItem('meetings');
            if (meetings) {
                try {
                    this.meetings.set(JSON.parse(meetings));
                } catch (e) {
                    console.error('Failed to parse meetings from localStorage', e);
                    this.meetings.set([]); 
                }
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
        if(this.meetings().length === 0){
            this.toastr.info('No meetings found');
            localStorage.removeItem('meetings');
        }

    }

    private startMeetingCheck() {

        setInterval(() => {
            this.checkUpcomingMeetings();
        }, 6000);
    }

    private checkUpcomingMeetings() {
        const now = new Date().getTime();

        const nextMeeting = this.meetings()
            .map(m => ({ ...m, time: new Date(m.date).getTime() }))
            .filter(m => m.time > now)
            .sort((a, b) => a.time - b.time)[0];

        if (nextMeeting) {
            const minutesUntil = Math.round((nextMeeting.time - now) / 60000);

            if (minutesUntil <= 15 && minutesUntil > 0) {
                this.toastr.info(
                    `Upcoming: ${nextMeeting.subject} in ${minutesUntil} mins`,
                    'Meeting Alert'
                );
            }
        }
    }
}
