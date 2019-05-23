import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()

    usuario.nome = "Hugo Lyra";
    usuario.email = "hugo.lyra@olah.social";

    return usuario
  }

  public listaUsuario(): Usuario[]{
    return [
        {
          nome:"Hugo Lyra",
          email:"hugo.lyra@gmail.com"
        },
        {
          nome:"Gibran",
          email:"gibran@gmail.com"
        },
        {
          nome:"Manuel",
          email:"manuel@gmail.com"
        },
    ]
  }
}
