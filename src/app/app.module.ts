import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { ColorActions } from './color/color.action';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StoreModule } from "@ngrx/store";
import { ColorReducer } from "./color/color.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        StoreModule.provideStore({ colorReducer: ColorReducer }),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
