const {format_date, format_plural}  = require('../utils/helpers');

test('format_date() returns a date string', ()=> {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns plural', () => {
    const word1 = format_plural('beaver', 1);
    const word2 = format_plural('dog', 2);

    expect(word1).toBe('beaver');
    expect(word2).toBe('dogs');
});
