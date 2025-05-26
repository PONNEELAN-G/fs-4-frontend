import { Routes } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PnfComponent } from './pnf/pnf.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { TdfComponent } from './tdf/tdf.component';
import { RfComponent } from './rf/rf.component';

export const routes: Routes = [
    {path:'',component:NgIfComponent},
    {path:'ngIf',component:NgIfComponent},
    {path:'ngFor',component:NgForComponent},
    {path:'ngSwitch',component:NgSwitchComponent},
    {path:'ad',component:AttributeDirectiveComponent},
    {path:'tdf',component:TdfComponent},
    {path:'rf',component:RfComponent},
    {path:'**',component:PnfComponent}
];
