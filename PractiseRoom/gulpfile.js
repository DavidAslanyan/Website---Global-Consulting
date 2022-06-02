import gulp from "gulp";
import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js";
import { scss } from "./gulp/tasks/scss.js"

global.app = {
	path: path,
	gulp: gulp,
    plugins: plugins
}

import { html } from "./gulp/tasks/html.js";
import { clean } from "./gulp/tasks/clean.js";
import { server } from "./gulp/tasks/server.js";

function watcher() {
    gulp.watch(path.watch.files, html);
    gulp.watch(path.watch.scss, scss);
}

const mainTasks = gulp.parallel(html, scss)
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev);
