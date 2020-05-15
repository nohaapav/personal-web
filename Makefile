all: clean webpack compile
clean:
	lein clean
webpack-dev:
	npx webpack --mode=development
webpack:
	npx webpack
compile:
	lein with-profile prod
