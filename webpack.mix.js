const mix = require('laravel-mix');
const fs = require("fs");

const CSS_DIR = "src/css/";

mix
   .ts('src/js/app.ts', '/src/out')
   .postCss(CSS_DIR+"rwd/rwd.css",'/src/out')
   .options({
    processCssUrls: false
});

fs.readdirSync(CSS_DIR + "themes").forEach(
    (file)=>{
        console.log("loading theme: " + file);
        mix.postCss(CSS_DIR + "themes/" + file,"/src/out/themes");
});


   