import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { ProductCardComponent } from './components/mini/productcard.component';
import { SavingComponent } from './components/saving/saving.component';
import { LoadButtonComponent } from './components/load-button/load-button.component';
import { GithubButtonComponent } from './components/github-button/github-button.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';


import { CartService } from './services/cart.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductCardComponent,
        SavingComponent,
        LoadButtonComponent,
        GithubButtonComponent,
        NavMenuComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        CartService
    ]
})
export class AppModuleShared {
}
