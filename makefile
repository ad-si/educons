.PHONY: help
help: makefile
	@tail -n +4 makefile | grep ".PHONY"


.PHONY: build
build:
	bunx svgscript make ./deployment.yaml
	mv ./src/*.svg ./icons
