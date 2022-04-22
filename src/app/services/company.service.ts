import { Injectable } from '@angular/core';
import { Company } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[] = [
    {
      id: 1,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 2,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 3,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 4,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 5,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 6,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 7,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 9,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 10,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 11,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    },
    {
      id: 13,
      name: 'OnlyFans Content Creator',
      logoUrl: 'assets/photos/onlyjohns.png'
    }
  ];

  constructor() {}

  getCompanies(): Company[] {
    return this.companies;
  }

  getCompany(id: number): Company | undefined {
    return this.companies.find(company => company.id === id);
  }
}
