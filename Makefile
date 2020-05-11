all: clean webpack compile
clean:
	lein clean
webpack:
    npx webpack
compile:
	lein with-profile prod