import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
	build: {
        files: `${buildFolder}/`,
        css: `${buildFolder}/css/`
    },
	src: {
        files: `${srcFolder}/files/*.html`,
        scss: `${srcFolder}/scss/style.scss`
    },
	watch: {
        files: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`
    },
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder
}