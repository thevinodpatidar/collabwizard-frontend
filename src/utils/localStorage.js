

export  function getToken(key){

    localStorage.getItem(key)
    
}

export function setToken(key,value){

    localStorage.setItem(key,value);

}

export function removeToken(key){

    localStorage.removeItem(key);

}

