import { Injectable } from '@angular/core';
import {CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs';


export  const INTRO_KEY = 'intro-seen';

import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class Intro3Guard implements CanLoad {
  constructor(private router: Router) {}

  async canLoad(): Promise<boolean>  {
    const hasSeenIntro = await Preferences.get({key: INTRO_KEY});
    if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
      return true;
    }
    else {
      await this.router.navigateByUrl('/intro', {replaceUrl: true});
      return true;
    }
  }
}
