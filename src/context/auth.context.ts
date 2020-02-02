import createState from 'react-copy-write';

export type Permission = true | false;
export interface AuthContext {
    permitted: Permission;
}

const initializeAuthhorization = () => {
    //check browser storage for 'auth' token.
    const permission = sessionStorage.getItem('auth') || localStorage.getItem('auth');
    let auth: AuthContext = {
      permitted: false,
    };
    if (permission === "PERMITTED") {
      //update context if storage token found
        auth = {
          permitted: true,
        };
    }

    return auth;
};
//when context is initialized, the user object is set according to token validation results.
//presumably, if no user exists ('{}'), one can be set at login using a context.consumer mutator to update the statue 'user' object.
const { Provider, Consumer, mutate } = createState<AuthContext>(initializeAuthhorization());

export { Provider, Consumer, mutate };
