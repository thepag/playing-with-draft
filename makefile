SHELL:=/bin/bash --login

BUILD_ASSETS = $(wildcard ./build/*.*)

NODE_VERSION=6.2.2

export NVM_BIN=$(HOME)/.nvm/versions/node/v$(NODE_VERSION)/bin
export NVM_DIR=$(HOME)/.nvm
export NVM_PATH=$(HOME)/.nvm/versions/node/v$(NODE_VERSION)/lib/node
export PATH:=$(NVM_BIN):$(PATH)

default: dev

$(NVM_BIN):
	source $(NVM_DIR)/nvm.sh; $(NVM_DIR)/nvm install $(NODE_VERSION)

node_modules: package.json
	$(NVM_BIN)/npm --cache-min 86400 --cache-max 432000 install

init: node_modules

reinit: package.json
	$(NVM_BIN)/npm cache clean && rm -rf node_modules && $(NVM_BIN)/npm --cache-min 86400 --cache-max 432000 install

dev: node_modules
	GIT_DESCRIBE=`git describe --long --tags --dirty --always` \
	$(NVM_BIN)/node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.dev.config.js

build: node_modules
	printenv
  #	cp ./public/favicon.ico ./build/
	cp ./public/index.html ./build/
	GIT_DESCRIBE=`git describe --long --tags --always` \
	$(NVM_BIN)/node ./node_modules/webpack/bin/webpack.js -b --optimize-minimize --bail --config webpack.build.config.js

clean:
	@rm -fR $(BUILD_ASSETS)

.PHONY: build
