const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");

return gulp
    .src([
        "./css/General/general.css",
        "./css/General/typography.css",
        "./css/General/z-index.css",
        "./css/Background/background.css",
        "./css/Burger/burger.css",
        "./css/Header/header.css",
        "./css/Input/squares.css",
        "./css/Animations/animations.css",
        "./css/MenuCard/card.css",
        "./css/MenuCard/menu.css",
        "./css/MenuCard/navigation.css",
        "./css/MenuCard/section.css",
        "./css/Neon//neon.css",
    ])
    .pipe(concat("bundle.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./public/css"));
