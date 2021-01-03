export interface UserInterface {
  //id: number
  nombres: string
  apellidos: string
  password: string
  correo: { dirCorreo: string},
  direccion: string,
  fechaNacimiento: string,
  genero: string,
  rol: string[]
}

export interface LoginInterface {
  password: string
  email: string
}

export interface RecoverInterface {
  email: string
}

export interface ResetPasswordInterface {
  password: string
  password_confirmation: string
  email: string
  token: string
}