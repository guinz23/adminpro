import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SiderbarComponent,
        BreadcrumbsComponent,
    ]
    ,
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SiderbarComponent,
        BreadcrumbsComponent,
    ]
})

export class SharedModule { }