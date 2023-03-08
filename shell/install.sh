#!/bin/bash

VERSION=$1
FILEPATH="./_temp.zip"

download(){
  URL="https://github.com/jl917/eslintWatch/archive/refs/tags/v${VERSION}.zip"
  curl --progress-bar --fail -L "$URL" -o "${FILEPATH}"
  unzip -oq "${FILEPATH}"
  rm -rf "${FILEPATH}"
  mv -f ./eslintWatch-${VERSION}/.[!.]* ./
  rm -rf ./eslintWatch-${VERSION}
}

download

# sh ./install.sh 1.0.2