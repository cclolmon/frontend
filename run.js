const fs = require('fs');
const request = require('request');
const path = require('path');

var urls = new Array(
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/16-es2015.948344f82b5ca465f9dd.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/18-es5.fe2bfbf9b763774775fd.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/18-es2015.fe2bfbf9b763774775fd.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/20-es2015.b92f6883e6dc176b19ae.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/16-es5.948344f82b5ca465f9dd.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/1-es5.393d7f92bb25877e2e27.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/21-es2015.29161942623b6937fc19.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/1-es2015.393d7f92bb25877e2e27.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/21-es5.29161942623b6937fc19.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/20-es5.b92f6883e6dc176b19ae.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/15-es5.51ea379a656f32c51403.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/15-es2015.51ea379a656f32c51403.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/17-es2015.e06afa5ee8d4b75a8149.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/17-es5.e06afa5ee8d4b75a8149.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/19-es2015.725cfc553798d446fa98.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/19-es5.725cfc553798d446fa98.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/14-es5.92e699e4297069feb05c.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/14-es2015.92e699e4297069feb05c.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/5-es2015.1cc139a7bb12d626a1f0.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/13-es2015.4af7922be34e0c2031a1.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/5-es5.1cc139a7bb12d626a1f0.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/4-es2015.6d234b5d5cd8ee32390e.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/4-es5.6d234b5d5cd8ee32390e.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/common-es2015.f57fd384954ed83d3dd8.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/common-es5.f57fd384954ed83d3dd8.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/6-es5.a31955d566974d996a06.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/6-es2015.a31955d566974d996a06.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/7-es2015.015649ff144dc6a3d094.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/7-es5.015649ff144dc6a3d094.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/polyfills-es2015.c4e87a2bd0c4db11e179.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/8-es5.540894c44b38cd274c87.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/runtime-es2015.ae38d89cea0912bf91af.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/runtime-es5.ae38d89cea0912bf91af.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/8-es2015.540894c44b38cd274c87.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/3-es5.b3f0914e06d44ce90788.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/3-es2015.b3f0914e06d44ce90788.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/polyfills-es5.1590ac644085a4cc6208.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/styles.7e1e10b58b0eba3da30e.css",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/main-es5.153090de6f9b413f48c4.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/main-es2015.153090de6f9b413f48c4.js",
  "https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/angular/13-es5.4af7922be34e0c2031a1.js"
);


/** Read file txt */
// const data = fs.readFileSync('list.txt', 'UTF-8');
// const lines = data.split(/\r?\n/);
// lines.forEach((line) => {
//     urls.push(line);
// });
// console.log(urls);

var count_downloaded = 0;

function scrape(url, file) {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var stream = fs.createWriteStream(file);
            stream.once('open', function (fd) {
                stream.write(body);
                stream.end();
                count_downloaded++;
                if (count_downloaded === urls.length) {
                    console.log("Done download source with");
                }
            });
        }
    });
}

// delete all file
const directory = 'angular';
fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file_item of files) {
        fs.unlink(path.join(directory, file_item), err => {
            if (err) throw err;
        });
    }
});

for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    var file = url.replace("https://wewiin.nyc3.cdn.digitaloceanspaces.com/storage_public/azota_assets/", "");
    scrape(url, file);
}