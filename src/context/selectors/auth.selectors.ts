import {AuthContext} from '../auth.context';

export const getAuth = (state: AuthContext) => state.permitted;