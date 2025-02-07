
export default function(obj, path, def) {
    if(obj === undefined) return def;

    var fullPath = path
        .replace(/\[/g, '.')
        .replace(/]/g, '')
        .split('.')
        .filter(Boolean);

    return fullPath.every(everyFunc) ? obj : def;

    function everyFunc(step) {
        return !(step && (obj = obj[step]) === undefined);
    }
};
