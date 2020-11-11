import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AdminRouting } from './admin-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import { ListingComponent } from './list/listing.component';


@NgModule({
    declarations: [
        AdminComponent,
    
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
     ListingComponent,
   
     
        
    ],
    imports: [
        AdminRouting,
        CommonModule,
        SharedModule,
        MatRadioModule
    ],
    providers: [],
    entryComponents: [AdminComponent, SidebarComponent, HeaderComponent, FooterComponent]
})
export class AdminModule {

    constructor() { }

}
