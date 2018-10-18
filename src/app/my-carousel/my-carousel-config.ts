import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MyCarouselConfig {
    interval = 5000;
    wrap = true;
    keyboard = true;
    pauseOnHover = true;
    showNavigationArrows = true;
    showNavigationIndicators = true;
}
