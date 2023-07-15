import { Pipe, PipeTransform } from '@angular/core';

export type CityFormat = 'long' | 'short';

@Pipe({
  name: 'city',
  standalone: true,
  pure: true,
})
export class CityPipe implements PipeTransform {
  transform(value: string, fmt?: CityFormat): string {
    let short, long;

    switch (value) {
      case 'Paris':
        short = 'CDG';
        long = 'Charles de Gaulle Airport';
        break;
      case 'London':
        short = 'LCY';
        long = 'London City Airport';
        break;
      case 'Berlin':
        short = 'BER';
        long = 'Flughafen Berlin Brandenburg - Willy Brandt';
        break;
      default:
        short = long = value;
    }

    if (fmt == 'short') return short;
    return long;
  }
}
