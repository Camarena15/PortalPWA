import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalibrationCertificateDownloadComponent } from './components/calibration-certificate-download/calibration-certificate-download.component';
import { CalibrationCertificateHistoryComponent } from './components/calibration-certificate-history/calibration-certificate-history.component';
import { DeliveryNoteCreationComponent } from './components/delivery-note-creation/delivery-note-creation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MeasuringEquipmentInstallationComponent } from './components/measuring-equipment-installation/measuring-equipment-installation.component';
import { TestEquipmentMonitoringComponent } from './components/test-equipment-monitoring/test-equipment-monitoring.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent , },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'certificate-download', component: CalibrationCertificateDownloadComponent , canActivate: [AuthGuard] },
  { path: 'certificate-history', component: CalibrationCertificateHistoryComponent , canActivate: [AuthGuard] },
  { path: 'delivery-note', component: DeliveryNoteCreationComponent , canActivate: [AuthGuard] },
  { path: 'equipment-installation', component: MeasuringEquipmentInstallationComponent , canActivate: [AuthGuard] },
  { path: 'test-equipment', component: TestEquipmentMonitoringComponent , canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
