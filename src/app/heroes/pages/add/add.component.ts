import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
    img
    {
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class AddComponent implements OnInit 
{
  publishers = [
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:''
  }

  constructor( private heroesService: HeroesService, 
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private router: Router,
              private dialog:MatDialog ) { }

  ngOnInit() 
  {
    if ( !this.router.url.includes('edit') ) 
    {
      return;
    }

    this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.heroesService.getHeroeById( id ) )
        )
        .subscribe( res => this.heroe = res,
                    err => console.log(err) );

  }
  saveHeroe()
  {
    if ( !this.heroe.superhero.trim() ) 
    {
      return; 
    }

    if ( this.heroe.id ) 
    {
      //actualizar
      this.heroesService.updateHeroe( this.heroe )
        .subscribe( res => this.showSanckBar('Registro actualizado'),
                    err => console.log(err) );
    }
    else
    {      
      this.heroesService.addHeroe( this.heroe )
          .subscribe( res => 
                      { 
                        console.log("heroe creado", res);
                        this.router.navigate(['/heroes/edit', res.id ]);
                        this.showSanckBar('Registro creado');
                      },
                      err => console.log(err) );
    }

  }
  deleteHeroe()
  {

    const dialog = this.dialog.open( ConfirmDialogComponent, { width: '250px', data: this.heroe } );

    dialog.afterClosed().subscribe(
      (result) =>
      {
        if (result) 
        {
          this.heroesService.deleteHeroe( this.heroe.id! )
              .subscribe( res => 
                          {
                            this.router.navigate(['/heroes/list']);
                            this.showSanckBar('Registro eliminado');
                          },
                          err => console.log(err) );  
        }
      }
    );
   /* llamada al evenmto de close del dialog en caso de que el result  sea true 
      que es el dato que devuleve el dialog, pues se procede al borrado sino na nai*/
  }

  showSanckBar( message: string )
  {
    this.snackBar.open( message , 'ok!' , { duration: 2500 } );
  }

}
