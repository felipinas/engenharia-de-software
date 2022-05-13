const errors = {
    'Firebase: Error (auth/email-already-in-use).': 'Já existe uma conta com esse email.',
    'Firebase: Error (auth/wrong-password).': 'Senha incorreta.'
};

export const errorTranslator = error => errors[error.message] || "Ocorreu um erro";