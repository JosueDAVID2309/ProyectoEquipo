const BASE_URL = "http://localhost:8080/instructor";

export interface ApiResponse<T = any> {
  success: boolean;
  data: T | null;
  message: string;
}

export const authApi = {
  login: async (correo: string, clave: string): Promise<ApiResponse> => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correo, clave }),
    });
    return response.json();
  },

  editarPerfil: async (datos: {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    correoPersonal: string;
    especialidad: string;
    imageurl: string;
  }): Promise<ApiResponse> => {
    const response = await fetch(`${BASE_URL}/editar`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    return response.json();
  },

  cambiarClave: async (id: number, clave: string): Promise<ApiResponse> => {
    const response = await fetch(`${BASE_URL}/cambiar-clave`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, clave }),
    });
    return response.json();
  },
};