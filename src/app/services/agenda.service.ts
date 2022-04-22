import { Injectable } from '@angular/core';
import { AgendaItem } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: AgendaItem[] = [
    {
      id: 1,
      title: 'Person Listing Title',
      speakerIds: [1],
      startTime: '08:00 AM',
      endTime: '09:00 AM',
      description: 'Description of requested listing</p>'
    },
    {
      id: 2,
      title: 'Person Listing Title',
      speakerIds: [2],
      startTime: '09:00 AM',
      endTime: '10:00 AM',
      description: 'Description about interaction</p>'
    },
    {
      id: 3,
      title: 'Person Listing Title',
      speakerIds: [3],
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      description: 'Description about interaction</p>'
    },
    {
      id: 4,
      title: 'Person Listing Title',
      speakerIds: [4],
      startTime: '11:00 AM',
      endTime: '11:30 AM',
      description: 'Description about interaction</p>'
    },
    {
      id: 5,
      title: 'Person Listing Title',
      speakerIds: [5],
      startTime: '11:30 AM',
      endTime: '12:00 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 6,
      title: 'Person Listing Title',
      speakerIds: [7],
      startTime: '12:00 PM',
      endTime: '12:30 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 7,
      title: 'Person Listing Title',
      speakerIds: [11],
      startTime: '12:30 PM',
      endTime: '13:15 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 14,
      title: 'Person Listing Title',
      speakerIds: [20],
      startTime: '13:15 PM',
      endTime: '13:30 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 8,
      title: 'Person Listing Title',
      speakerIds: [25],
      startTime: '13:30 PM',
      endTime: '14:30 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 9,
      title: 'Person Listing Title',
      speakerIds: [8],
      startTime: '14:30 PM',
      endTime: '15:00 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 10,
      title: 'Person Listing Title',
      speakerIds: [1],
      startTime: '15:00 PM',
      endTime: '15:30 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 11,
      title: 'Person Listing Title',
      speakerIds: [14],
      startTime: '15:30 PM',
      endTime: '16:00 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 12,
      title: 'Person Listing Title',
      speakerIds: [20],
      startTime: '16:00 PM',
      endTime: '16:30 PM',
      description: 'Description about interaction</p>'
    },
    {
      id: 13,
      title: 'Person Listing Title',
      speakerIds: [21],
      startTime: '16:30 PM',
      endTime: '17:00 PM',
      description: 'Description about interaction</p>'
    },
  ];

  constructor() {}

  getAgenda(): AgendaItem[] {
    return this.agenda;
  }

  getAgendaItem(id: number): AgendaItem | undefined {
    return this.agenda.find(agenda => agenda.id === id);
  }

  public formatTalkTime(agendaItem: AgendaItem) {
    return `${this.convertToTwelveHourFormat(agendaItem.startTime)} - ${this.convertToTwelveHourFormat(agendaItem.endTime)} CT`;
  }

  // Talk times are stored in military time to make it easier to work with 
  // local notifications. Convert to 12 hour clock format.
  // Likely better ways to do this with Date object.

  // time: 08:00 AM, 12:30 PM, 14:00 PM etc.
  private convertToTwelveHourFormat(time: string) {
    let hour = parseInt(time.substring(0,2));

    if (hour > 12) {
      hour = hour - 12;
    }

    return hour + time.slice(2);
  }
}
