import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  //pure: flase, para disparar los cambios en cada evento y actualñizarlos, con imagenes podria ser util pero consume muchos recursos inecesarios
  pure: true 
})
export class ImagePipe implements PipeTransform 
{


  transform(heroe: Heroe): String 
  {
    if ( !heroe.id && !heroe.alt_img ) 
    {
      return "assets/no-image.png";  
    }
    else if( heroe.alt_img )
    {
      return heroe.alt_img;
    }

    return `assets/heroes/${ heroe.id }.jpg`;
  }

}
