import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {

  transform(credits: number | null): string {

    if (credits === null || credits === 0) {
      return 'No Credits';
    }

    if (credits === 1) {
      return '1 Credit';
    }

    return credits + ' Credits';
  }

}
