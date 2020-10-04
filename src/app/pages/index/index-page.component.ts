import { Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html'
})
export class IndexPageComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollTo(id: string) {
    const el: HTMLElement = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
