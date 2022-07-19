module.exports = function reverse (n) {
    return Number([...n.toString().replace("-", "")].reverse().join(""));
}
