import { useLocation } from 'react-router-dom';

export function useToken() {
    const getFromStorage = () => {
        const token = useStorage('token').get();
        return token;
    };

    const set = (token: string) => {
        useStorage('token').set(token)
    };

    const get = () => {
        let token = getFromStorage();
        if (token && token !== '') {
            return token;
        } else {
            const location = useLocation().search;
            const queryParams = new URLSearchParams(location);
            token = queryParams.get('token');
            
            if(token) {
                set(token);
                return token;
            }
    
            throw new Error('Token not found.');
        }
    };

    const getUser = (): object => {
        const token = get();
        const user = extractToken(token);

        return user;
    };
    
    return { get, getUser };
}

export function useStorage(key: string) {
    const set = (value: string) => {
        sessionStorage.setItem(key, value);
    }

    const get = (): string | null => {
        return sessionStorage.getItem(key);
    }

    return { get, set };
}

function extractToken(_token: string): object {
    return { userName: 'abhishek' }
}

