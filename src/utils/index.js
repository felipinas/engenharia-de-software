export const formatPhoneNumber = phoneNumber => {
    const formatedPhoneNumber = phoneNumber
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll(' ', '')
        .replaceAll('_', '')
        .replaceAll('-', '')

    return formatedPhoneNumber;
}

export const isEmailFromUFPE = email => {
    const regex = /.+@ufpe.br$/i;
    return regex.test(email);
}