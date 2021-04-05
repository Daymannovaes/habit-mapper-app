#!/bin/bash

# @todo this file shouldn't exist. We should be able to rely completely on Dockerfile

# ensure all packages installed and also builded
npx lerna bootstrap


# construct the dist/ folder
cd packages/interfaces
ng build --prod --output-path docs --base-href /your_project_name

cd ../../
rm -rf docs/

mv packages/interfaces/www docs/

git add docs/
git commit -m "interfaces: update gh-pages"

git push
