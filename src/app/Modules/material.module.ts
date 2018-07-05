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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SliderModule } from 'angular-image-slider';
import { CovalentSearchModule } from '@covalent/core';


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
    MatToolbarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    SliderModule,
    CovalentSearchModule

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
    MatToolbarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    SliderModule,
    CovalentSearchModule

  ]
})
export class MaterialModule { }
