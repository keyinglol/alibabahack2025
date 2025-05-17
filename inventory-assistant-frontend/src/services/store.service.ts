import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // Dummy data for demonstration
  private stores: Store[] = [
    {
      id: '1',
      name: 'New York Store',
      lat: 40.7128,
      lng: -74.0060,
      address: '123 Broadway, New York, NY',
      phone: '+1 (212) 555-1234',
      revenue: 1250000,
      employees: 45
    },
    {
      id: '2',
      name: 'London Store',
      lat: 51.5074,
      lng: -0.1278,
      address: '456 Oxford St, London, UK',
      phone: '+44 20 7123 4567',
      revenue: 980000,
      employees: 32
    },
    {
      id: '3',
      name: 'Tokyo Store',
      lat: 35.6762,
      lng: 139.6503,
      address: '789 Shibuya, Tokyo, Japan',
      phone: '+81 3 1234 5678',
      revenue: 1450000,
      employees: 52
    },
    {
      id: '4',
      name: 'Sydney Store',
      lat: -33.8688,
      lng: 151.2093,
      address: '101 George St, Sydney, Australia',
      phone: '+61 2 9876 5432',
      revenue: 875000,
      employees: 29
    },
    {
      id: '5',
      name: 'Rio de Janeiro Store',
      lat: -22.9068,
      lng: -43.1729,
      address: '202 Copacabana, Rio de Janeiro, Brazil',
      phone: '+55 21 2345 6789',
      revenue: 720000,
      employees: 24
    }
  ];

  getStores(): Observable<Store[]> {
    return of(this.stores);
  }

  getStoreById(id: string): Observable<Store | undefined> {
    return of(this.stores.find(store => store.id === id));
  }
}
