import { Dispatch } from '../../node_modules/react';
import { State } from '../models/state';
import { Actions } from '../models/actions';
export declare const reducer: (state: State, action: Actions) => State;
export declare const createReducer: () => (state: State, action: Actions) => State;
export declare const getTimelineContext: () => import('../../node_modules/react').Context<[State, Dispatch<Actions>]>;
export declare const useCollapsibleTimeline: () => [State, Dispatch<Actions>];
