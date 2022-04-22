import { Injectable } from '@angular/core';
import { Sponsor, SponsorTier } from '../types';

const LOREM_IPSUM = 'Details coming soon.';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Platinum',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 2,
      name: 'OpenForge',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 3,
      name: 'auth0',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 4,
      name: 'Nrwl',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 5,
      name: 'CouchBase',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 6,
      name: 'LaunchPad Lab',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 7,
      name: 'strapi',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 8,
      name: 'Vue Mastery',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Bronze,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 9,
      name: 'Briebug',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 10,
      name: 'jnesis',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 11,
      name: 'Hybrid Mob',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
    {
      id: 12,
      name: 'beNovelty',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://gfy.com/"
    },
  ];

  constructor() {}

  getSponsors(): Sponsor[] {
    return this.sponsors;
  }

  getSponsor(id: number): Sponsor | undefined {
    return this.sponsors.find(sponsor => sponsor.id === id);
  }
}
