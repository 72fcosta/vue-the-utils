const translateUsToBr = messageUs => {
   const dictionary = {
      'invalid-argument': 'Argumento inválido',
      'auth/user-not-found': 'E-mail incorreto',
      'auth/weak-password': 'A senha muito fraca',
      'auth/email-already-in-use': 'Este e-mail já está registrado',
      'auth/wrong-password': 'Senha incorreta',
      'auth/invalid-email': 'E-mail ou senha incorreta',
      'permission-denied': 'Permissão negada'
   }

   return dictionary[messageUs] || messageUs
}

export default translateUsToBr
