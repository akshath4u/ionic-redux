import { ColorActions } from './color.action';
import { ColorListState } from './color.model';
import { Action, ActionReducer } from '@ngrx/store';

export const INITIAL_STATE: ColorListState = {
    colorList: []
};

export const ColorReducer: ActionReducer<ColorListState> = (state: ColorListState = INITIAL_STATE, action: Action) => {

    switch (action.type) {
        case ColorActions.LOAD_COLORS:
            return {
                colorList: ['red', 'green']
            };

        case ColorActions.ADD_COLORS:

            return {
                colorList: [...state.colorList, ...action.payload]
            };

        case ColorActions.REMOVE_LAST_COLOR:
            return {
                colorList: state.colorList.slice(0, state.colorList.length - 1)
            };
    }

    return state;
}
