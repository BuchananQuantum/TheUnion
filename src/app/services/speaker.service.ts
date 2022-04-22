import { Injectable } from '@angular/core';
import { Speaker } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private speakers: Speaker[] = [
    {
      id: 1,
      username: '@hoefosho',
      location: 'Philadelphia, PA',
      role: 'Seeker',
      companyId: 1,
      photoUrl: 'https://i.redd.it/q50qtrquewu81.jpg',
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
      biography: `Short Biography for user.`
    },
    { id: 5,
      username: '@Stancicumming',
      location: 'Fort Wayne, IN',
      role: 'Seeker',
      companyId: 5,
      photoUrl: 'https://i.redd.it/2zs3xxvcsvu81.jpg',
      linkedin: "https://www.linkedin.com/",
      biography: `Stanci Soderstrom 
`
    },
    {
      id: 11,
      username: '@JedidiaJohnson',
      location: 'Sexington, VA',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/5i0amsn72wu81.jpg',
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 12,
      username: '@PaulinaPits',
      location: 'Gallo, TX',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/q75271hojvu81.jpg',
      twitter: "https://twitter.com/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 15,
      username: '@Ferna',
      location: 'LittleDick, PA',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/thew9gjk9vu81.png',
      twitter: "https://twitter.com/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 16,
      username: '@María',
      location: 'Toronto, CA',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/6bmnmp9uuru81.jpg',
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 2,
      username: '@Tequila',
      location: 'Ingoglia, WA',
      role: 'Seeker',
      companyId: 2,
      photoUrl: 'https://i.redd.it/5z6vr60olvu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 3,
      username: '@Tori',
      location: 'Jankowski, FL',
      role: 'Seeker',
      companyId: 3,
      photoUrl: 'https://i.redd.it/eixaf4no9wu81.jpg',
      twitter: "https://twitter.com/ux_wob",
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 27,
      username: 'Jan',
      location: 'Vornkahl, RI',
      role: 'Seeker',
      companyId: 3,
      photoUrl: 'https://i.redd.it/kw410x1ufvu81.jpg',
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 28,
      username: 'Johannes',
      location: 'Bosch, GA',
      role: 'Seeker',
      companyId: 3,
      photoUrl: 'https://i.redd.it/ds48uq998vu81.jpg',
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 24,
      username: 'Matthias',
      location: 'Fritsch, NUTZ',
      role: 'Seeker',
      companyId: 13,
      photoUrl: 'https://i.redd.it/r6qrtnrydwu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 4,
      username: 'Michela',
      location: 'Tobon, DEZ',
      role: 'Seeker',
      companyId: 4,
      photoUrl: 'https://i.redd.it/bmr00feetuu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/micheltobon",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 6,
      username: 'Erica',
      location: 'Seeker',
      role: 'Learning Solutions Architect',
      companyId: 5,
      photoUrl: 'https://i.redd.it/voisyxpuvvu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 7,
      username: 'Branda',
      location: 'Bakke, MI',
      role: 'Seeker',
      companyId: 6,
      photoUrl: 'https://i.redd.it/rln3s17sovu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 8,
      username: 'Daniella',
      location: 'Rodriguez, CA',
      role: 'Seeker',
      companyId: 7,
      photoUrl: 'https://i.redd.it/bgbed25lmuu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 9,
      username: 'Roba',
      location: 'Gore, WA',
      role: 'Seeker',
      companyId: 7,
      photoUrl: 'https://i.redd.it/60e77op2iwu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 13,
      username: 'Roberta',
      location: 'Flagstaff, AZ',
      role: 'Seeker',
      companyId: 10,
      photoUrl: 'https://i.redd.it/m50pkjcd6wu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 14,
      username: 'Ralpha',
      location: 'Borges, NUTS',
      role: 'Seekerr',
      companyId: 11,
      photoUrl: 'https://i.redd.it/wxlp4hva9xu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 26,
      username: 'Sesha',
      location: 'Sai, DEZ',
      role: 'Seeker',
      companyId: 11,
      photoUrl: 'https://i.redd.it/tht6dii1evu81.png',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 19,
      username: 'Dallas',
      location: 'James, TX',
      role: 'Seeker',
      companyId: 1,
      photoUrl: 'https://i.redd.it/h9tjjv7esvu81.jpg',
      linkedin: "https://www.linkedin.com/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 20,
      username: 'Matta',
      location: 'Netkow, FAG',
      role: 'Seeker',
      companyId: 1,
      photoUrl: 'https://i.redd.it/x76nafynlzt81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 21,
      username: 'Mattie',
      location: 'Kremer, FU',
      role: 'Seeker',
      companyId: 1,
      photoUrl: 'https://i.redd.it/l76gmkli4wu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 22,
      username: 'Eriac',
      location: 'Horodyski, MA',
      role: 'Seeker',
      companyId: 1,
      photoUrl: 'https://i.redd.it/qnyfdzcjovu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      biography: `OnlyJohns Content Creator.`
    },
    {
      id: 25,
      username: 'Jamie',
      location: 'DeBeasi, PA',
      role: 'Seeker',
      companyId: 1,
      photoUrl: 'https://i.redd.it/wf3fn3wk0xu81.jpg',
      linkedin: "https://www.linkedin.com/in/",
      twitter: 'https://twitter.com/',
      biography: `OnlyJohns Content Creator.`
    },
  ];

  constructor() {}

  getSpeakers(ids?: number[]): Speaker[] {
    if (ids === undefined) { return this.speakers; }

    return this.speakers.filter(speaker => ids.includes(speaker.id));
  }

  getSpeaker(id: number): Speaker | undefined {
    return this.speakers.find(speaker => speaker.id === id);
  }
}
