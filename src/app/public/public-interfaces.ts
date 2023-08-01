// interfaz de User para manejar solicitud / respuesta al/del servidor
export interface UserI {
    id?       : number,
    email?    : string,
    username? : string,
    password? : string,  
  }

// interfaz de Login para manejar respuesta del servidor
export interface LoginResponseI {
access_token    : string,
token_type      : string,
expires_in      : number,
}

