import { AbstractControl, ValidationErrors } from "@angular/forms";

// creamos una validacion propia para chequear si las contrasenas coinciden

export class CustomValidators {

    // creamos un metodo estatico que utiliza un parametro del tipo AbstractControl, y deolvemos un error de Validacion
    // usando la clase ValidationError
    // tambien podemos devolver null si las contrasenas coinciden
    static passwordMatching(control: AbstractControl): ValidationErrors | null {
        // obtenemos los valores del control
        const password          = control.get('password')?.value; 
        const passwordConfirm   = control.get('passwordConfirm')?.value

        // creamos la condicion para verificar coincidencia y dependiendo devolvemos lo que corresponda
        if((password === passwordConfirm) && (password !== null && passwordConfirm !== null)) {
            return null
        }
        else {
            return {passwordNotMatch: true}
        }
    }
}