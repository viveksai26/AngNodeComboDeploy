// Template component

import { Component } from '@angular/core';

// Use block-ui-template class to center div if desired
@Component({
  template: `
    <div class="block-ui-template d-flex justify-content-center vertical-align">
    Loading......................
    </div>
  `
})
export class BlockTemplateCmp {
  image = './assets/loader2.gif';
}
