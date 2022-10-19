import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DeliveryNoteCreationComponent } from './components/delivery-note-creation/delivery-note-creation.component';
import { MeasuringEquipmentInstallationComponent } from './components/measuring-equipment-installation/measuring-equipment-installation.component';
import { TestEquipmentMonitoringComponent } from './components/test-equipment-monitoring/test-equipment-monitoring.component';
import { CalibrationCertificateDownloadComponent } from './components/calibration-certificate-download/calibration-certificate-download.component';
import { CalibrationCertificateHistoryComponent } from './components/calibration-certificate-history/calibration-certificate-history.component';


//Providers
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import { DeshboardComponent } from './components/deshboard/deshboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DeliveryNoteCreationComponent,
    MeasuringEquipmentInstallationComponent,
    TestEquipmentMonitoringComponent,
    CalibrationCertificateDownloadComponent,
    CalibrationCertificateHistoryComponent,
    DeshboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
