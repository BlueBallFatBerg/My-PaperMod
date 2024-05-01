const fs = require('fs')
var text = fs.readFileSync('./words', 'utf8')
// console.log(text)

var Fontmin = require('fontmin');

var fontmin = new Fontmin()
	.src(['./fonts_to_process/Songti*.ttf'])
	.dest('../../fonts')
	.use(Fontmin.glyph({
		text: text,
		hinting: false,
	}))
	.use(Fontmin.ttf2woff2());

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }
    console.log(files[0]);
});