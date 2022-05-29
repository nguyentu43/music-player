export function timeToString(value){
    value = parseInt(value);
    const hours = parseInt(value / 3600).toString();
    const minutes = parseInt((value % 3600) / 60).toString().padStart(2, '0');
    const seconds = ((value % 3600) % 60).toString().padStart(2, '0');

    if(value < 3600){
        return `${minutes}:${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
}