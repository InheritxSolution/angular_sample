import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatRadioModule,
    MatSlideToggleModule

} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatTableModule,
        MatRadioModule,
        CdkTableModule,
        MatSortModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        CommonModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        NgxSpinnerModule,
        ToastrModule.forRoot({
            preventDuplicates: true,
            maxOpened: 1
        }),

    ],
    exports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatTableModule,
        CdkTableModule,
        MatSortModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        CommonModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        NgxSpinnerModule

    ],
    entryComponents: [],

})

export class SharedModule { }
