import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentChipsModule } from '@covalent/core/chips';
import {HttpClientModule} from '@angular/common/http';
import {CovalentExpansionPanelModule} from '@covalent/core';
import {MatToolbarModule} from '@angular/material';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CovalentStepsModule,
    CovalentChipsModule,
    CovalentLayoutModule,
    HttpClientModule,
    CovalentExpansionPanelModule,
    MatToolbarModule
  ],
  declarations: [],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CovalentStepsModule,
    CovalentChipsModule,
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
