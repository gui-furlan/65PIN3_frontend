const BASE_URL = 'http://127.0.0.1:8080/api';

export const api = {
  login: async (username, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log(response.body);

    if (!response.ok) {
      throw new Error('Erro ao fazer login. Verifique suas credenciais.');
    }
  
    // Verifica se a resposta é um JWT direto (string) ou JSON
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data.token; // Retorna o token extraído do JSON
    } else {
      return await response.text(); // Retorna o JWT diretamente como string
    }
  },

  // Método para registrar estudante
  registerStudent: async (studentData) => {
    const response = await fetch(`${BASE_URL}/students/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar estudante.');
    }

    return response; // Retorna a resposta para verificação
  },

  getCursos: async () => {
    const response = await fetch(`${BASE_URL}/cursos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar cursos.');
    }

    return await response.json();
  },

  // Adicione outros métodos de API conforme necessário
  // exemplo:
  // getUserData: async (token) => {
  //   const response = await fetch(`${BASE_URL}/user`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   if (!response.ok) {
  //     throw new Error('Erro ao buscar dados do usuário.');
  //   }
  //   return await response.json();
  // },
};
