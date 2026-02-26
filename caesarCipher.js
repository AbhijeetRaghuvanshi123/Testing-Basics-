const caesarCipher = (string , shiftby) => {
    string = string.split("");

    string = string.map((char) => {
        if(char.charCodeAt(0) < 65 || char.charCodeAt(0) > 122){
            return char;
        }
        char = char.charCodeAt(0);
        if((char + shiftby) >= 122){
            char = (char + shiftby - 122 + 96);
            return String.fromCharCode(char);
        }
        return String.fromCharCode(char + shiftby);
    })

    string = string.join("");

    return string;
}

caesarCipher("abc", 3);

export default caesarCipher;