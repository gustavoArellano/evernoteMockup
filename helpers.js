// DEBOUNCE, TO MAKE CALLS FOR UPDATE ON DATABASE AFTER A CERTAIN TIME PAUSE, RATHER THAN COUNTINUOUSLY MAKE CALLS AT EVERY KEY INPUT
export default function debounce(a, b, c) {
    var d, e;
    return function() {
        function h() {
            d = null;
            c||(e = a.apply(f, g));
        }
        var f = this, g = arguments;
        return (clearTimeout(d), d = setTimeout(h, b), c&&!d&&(e = a.apply(f,g)), e)
    }
}

// BELOW IS FOR PREVIEW OF NOTE ON SIDE BAR
export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
};