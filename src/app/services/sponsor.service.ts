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
      homepage: "https://onlyfans.com/"
    },
    {
      id: 2,
      name: 'OpenForge',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://openforge.io/"
    },
    {
      id: 3,
      name: 'auth0',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://auth0.com/"
    },
    {
      id: 4,
      name: 'Nrwl',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://nrwl.io/"
    },
    {
      id: 5,
      name: 'CouchBase',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://couchbase.com/"
    },
    {
      id: 6,
      name: 'LaunchPad Lab',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://launchpadlab.com/"
    },
    {
      id: 7,
      name: 'strapi',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://strapi.io/"
    },
    {
      id: 8,
      name: 'Vue Mastery',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Bronze,
      biography: LOREM_IPSUM,
      homepage: "https://vuemastery.com/"
    },
    {
      id: 9,
      name: 'Briebug',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://briebug.com/"
    },
    {
      id: 10,
      name: 'jnesis',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://jnesis.com/"
    },
    {
      id: 11,
      name: 'Hybrid Mob',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://hybridmob.com/"
    },
    {
      id: 12,
      name: 'beNovelty',
      logoUrl: 'assets/photos/onlyjohns-thumb.png',
      accentColor: '#000000',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://benovelty.com/"
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
