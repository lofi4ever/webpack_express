const gulp = require("gulp");
const { src, dest, watch, parallel, series } = gulp;
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
const sourcemaps = require("gulp-sourcemaps");
const notify = require("gulp-notify");
const concat = require("gulp-concat");

const paths = {
  sass: "./frontend/public/css/src/**/*.scss"
};

function style(cb) {
  src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", notify.onError()))
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(sourcemaps.write("./"))
    .pipe(dest("./frontend/public/css"));
  cb();
}

function concatCss() {
  return src("./libs/**/*.css")
    .pipe(concat("libs.css"))
    .pipe(dest("./public/css/"));
}

exports.default = function() {
  concatCss();
  watch(paths.sass, style);
}