document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
    {code: '&#127470;&#127475;', decimal: '127470 127475' }, 
    {code: '&#127758;', decimal: '127758' }, 
    { code: '&#128187;', decimal: '128187' }, 
    { code: '&#128161;', decimal: '128161' }, 
    {  code: '&#127821;', decimal: '127821' }, 
    { code: '&#9917;', decimal: '9917' },
    {code: '&#128526;', decimal: '128526' }, 
    {  code: '&#128521;', decimal: '128521' },
    { code: '&#129300;', decimal: '129300' },
        { code: '&#9940;', decimal: '9940' },
        { code: '&#9962;', decimal: '9962' },
        { code: '&#9970;', decimal: '9970' },
        { code: '&#9971;', decimal: '9971' },
    { code: '&#128059;', decimal: '128059' },
    {  code: '&#128059;&#8205;&#10052;&#65039;', decimal: '128059 8205 10052 65039' },
    { code: '&#128040;', decimal: '128040' },
    {  code: '&#128060;', decimal: '128060' },
    {  code: '&#128054;', decimal: '128054' },
    {  code: '&#128049;', decimal: '128049' },
    { code: '&#128045;', decimal: '128045' },
    {  code: '&#128057;', decimal: '128057' },
    {  code: '&#128048;', decimal: '128048' },
    {  code: '&#8986;', decimal: '8986' },
    {  code: '&#8987;', decimal: '8987' },
    {code: '&#10084;&#65039;', decimal: '10084 65039' },
    {  code: '&#128155;', decimal: '128155' },
    {  code: '&#128154;', decimal: '128154' },
    { code: '&#128153;', decimal: '128153' },
    {  code: '&#128156;', decimal: '128156' },
    {  code: '&#128420;', decimal: '128420' },
    {  code: '&#129293;', decimal: '129293' },
    { code: '&#129294;', decimal: '129294' },
    {  code: '&#128148;', decimal: '128148' },
    {  code: '&#10083;&#65039;', decimal: '10083 65039' },
    { code: '&#128149;', decimal: '128149' },
    {  code: '&#128158;', decimal: '128158' },
    {code: '&#128046;', decimal: '128046' }, 
    {code: '&#128512;', decimal: '128512' }, 
    { code: '&#128077;', decimal: '128077' }, 
    { code: '&#128293;', decimal: '128293' }, 
    { code: '&#128640;', decimal: '128640' }, 
    { code: '&#11088;', decimal: '11088' }, 
    {  code: '&#128525;', decimal: '128525' }, 
    {  code: '&#128079;', decimal: '128079' }, 
    {  code: '&#127881;', decimal: '127881' }, 
    {  code: '&#128081;', decimal: '128081' }, 
    { code: '&#129412;', decimal: '129412' }, 
    { code: '&#128125;', decimal: '128125' }, 
    { code: '&#127752;', decimal: '127752' },
    {  code: '&#127464;&#127462;', decimal: '127464 127462' }
];

    const emojiGallery = document.getElementById('emoji-gallery');

    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.innerHTML = `
            <span>${emoji.code}</span>
            <code>${emoji.decimal}</code>
        `;
        emojiGallery.appendChild(emojiItem);
    });
});