import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { ColorAddPayload, ColorAddMetaData } from './color.model';

export const ColorActions = {
    LOAD_COLORS: 'LOAD_COLORS',
    ADD_COLORS: 'ADD_COLORS',
    REMOVE_LAST_COLOR: 'REMOVE_LAST_COLOR'
}
