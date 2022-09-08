#!/usr/bin/env sh

# abort on errors
set -e

echo *********Initiating GIT and pushing to remote...
git init
git add .
git commit -m 'deploy'
git remote add origin http://github.com/appdevcanada/react-vite.git
git branch -M main
git push -u origin main

echo *********Building app
npm run build

echo *********Adding Dist folder
git add dist -f
git commit -m "added dist"

echo *********Pushing to GH Pages...
git subtree push --prefix dist origin gh-pages

echo *********Process Finished!