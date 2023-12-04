import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anoFormat'
})
export class AnoFormatPipe implements PipeTransform {
  transform(value: string): string {
    const currentYear = new Date().getFullYear();
    const parts = value.split(currentYear.toString());

    if (parts.length > 1) {
      return `${parts[0]}${currentYear} - ${parts[1]}`;
    } else {
      return value;
    }
  }
}
