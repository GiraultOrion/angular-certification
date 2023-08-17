import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'resultBackgroundByCountPipe' })
export class ResultBackgroundByCountPipe implements PipeTransform {
  transform(count: number): string {
    if (count < 2) {
        return "red";
    } else if (count < 4) {
        return "yellow";
    } else {
        return "green";
    }
  }
}