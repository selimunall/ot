import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

interface Image {
  name: string;
  url: SafeResourceUrl;
}

@Pipe({
  standalone: true,
  name: 'getImage'
})
export class GetImagePipe implements PipeTransform {
  transform(images: Image[], prop: string): SafeResourceUrl | undefined {
    return images.find((m) => m.name === prop)?.url;
  }
}
