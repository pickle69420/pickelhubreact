import { xor } from './codec';

export function proxifyUrl(query) {
    let url

    if (/^https?:\/\/[^\s]+(\.[^\s]+)+$/.test(query)) {
        url = query;
    } else if (/^[^\s]+(\.[^\s]+)+$/.test(query)) {
        url = `https://${query}`;
    } else {
        url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }

    return xor.encode(url);
}