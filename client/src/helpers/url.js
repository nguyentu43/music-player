export function urlToSegments(pathname){
    return pathname.split('/').filter(v => v !== '');
}