import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { CoreLibModule, Image64Service } from 'core-lib';
import { CommonModule } from '@angular/common';
// import { AdminServicesModule } from './services/services.module';
import { FormsModule } from '@angular/forms';
import { StrAuthLibModule } from 'str-auth-lib';
import { PagesModule } from './demos/demos.module';
import { UserModule } from './user/user.module';
import { DatosAuthLocalService } from './services/datos-auth-local.service';
import { UseCaseContextService } from './services/usecase-context.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Mis links
import { AdministracionComponent } from './administracion/administracion.component';
import { PlanillaComponent } from './planilla/planilla/planilla.component';
 import { IncorporacionComponent } from './incorporaciones/incorporacion/incorporacion.component';

@NgModule({
  declarations: [
    AppComponent,
    // RadioButtonComponent,
    AdministracionComponent,
    PlanillaComponent,
    IncorporacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Adionar este import para la version: 1.2.48
    AppRoutingModule,
    FormsModule,
    CommonModule,
    CoreLibModule,
    // AdminServicesModule,
    AdminModule,
    PagesModule,
    UserModule,
    // StrAuthLibModule //Esta linea se debe comentar para iniciar la aplicacion en modo PRODUCCION
  ],
  providers: [
    Image64Service,
    DatosAuthLocalService,
    UseCaseContextService
  ],
  exports: [
    //RadioButtonComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
