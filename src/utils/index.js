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

export const formatWhatsappApiLink = phoneNumber => {
    const message = "Olá, como vai? Vi sua carona no CInbora e queria saber mais."
    return `https://api.whatsapp.com/send?phone=+55${phoneNumber}&text=${message}`
}