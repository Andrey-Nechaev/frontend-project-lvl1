install:
	npm install
start:
	npx babel-node src/bin/brain-game.js
publish:
	npm publish --dry-run
lint:
	npx eslint ./src
