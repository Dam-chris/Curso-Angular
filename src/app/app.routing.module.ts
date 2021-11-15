import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

const routes: Routes = [
    {
        path:'',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component: ByRegionComponent,
        pathMatch: 'full'
    },    
    {
        path:'capital',
        component: ByCapitalComponent,
        pathMatch: 'full'
    },
    {
        /*exite la posibilidad de crar rutas dinamicas /:*/
        path:'country/:code',
        component: SeeCountryComponent,
        pathMatch: 'full'
    },
    {
        /*para manjar las exepciones y 
        que redirija a una ruta por effecto si el path puesto es */
        path:'**',
        redirectTo:''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule
{

}