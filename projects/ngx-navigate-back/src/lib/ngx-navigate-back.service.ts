import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NgxNavigateBackService {

  private history: string[] = []

  constructor(private router: Router, private location: Location) { }

  public recordUrlHistory():void{
    this.router.events.subscribe((event:any) => {
        if (event instanceof NavigationEnd) {
          this.history.push(event.urlAfterRedirects)
        }
      })
  }

  public getHistory(): string[] {
    return this.history;
  }

  public navigateBack(): void {
    this.history.pop();
 
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl("/")
    }
  }

}
