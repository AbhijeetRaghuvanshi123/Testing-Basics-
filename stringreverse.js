const stringReverse = (string) => {
    string = string.split("");
    string = string.reverse();
    string = string.join("");

    return string;
}

export default stringReverse;