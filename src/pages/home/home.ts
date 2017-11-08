import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';

import { ColorListState } from '../../app/color/color.model';
import { INITIAL_STATE, ColorReducer } from '../../app/color/color.reducer';
import { ColorActions } from '../../app/color/color.action';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';

declare var require;

var reduxLogger = require('redux-logger');
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    colorList$: any;
    constructor(private store: Store<ColorListState>) {
        this.colorList$ = this.store.select('colorReducer');
        this.store.dispatch({
          type: ColorActions.LOAD_COLORS
        });
    }

    addColors() {
        this.store.dispatch({
          type: ColorActions.ADD_COLORS,
          payload: ['purple', 'yellow']
        });
    }

    removeLastColor() {
        this.store.dispatch({
          type: ColorActions.REMOVE_LAST_COLOR
        });
    }

}
