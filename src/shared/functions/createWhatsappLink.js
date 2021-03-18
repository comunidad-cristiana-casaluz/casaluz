function createWhatsappLink(number,message) {
    let text = "https://api.whatsapp.com/send?phone=51" + number.toString(10) + "&text=" + message.replace(" ","%20")
    return text;
}

export default createWhatsappLink;