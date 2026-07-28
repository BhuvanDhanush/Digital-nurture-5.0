import { ElementRef } from '@angular/core';

import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {
    const directive = new Highlight(
      new ElementRef(document.createElement('div'))
    );

    expect(directive).toBeTruthy();
  });
});
