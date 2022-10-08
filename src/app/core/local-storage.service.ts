import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private keys: Set<string> = new Set([]);

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return JSON.parse(value || "null");
  }

}
