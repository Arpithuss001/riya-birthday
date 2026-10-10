# Riya's birthday website

Plain HTML, CSS and JavaScript. No install, no build step.

## Run locally
Double-click `index.html`, or from this folder run: `npx serve .` and open the URL it prints.

## Add your photos
Put your pictures in the `photos/` folder named exactly `photo1.jpg` to `photo4.jpg` (portrait or square works best; compress large phone photos to under ~500 KB each).
If you have PNGs, change the extension inside `index.html` (e.g. `photos/photo1.png`).
To add a fourth photo, copy one whole `<button class="polaroid"> ... </button>` block in `index.html`.

## Edit captions and the letter
Everything lives in `index.html`: captions are inside `<span class="cap">`, the letter is inside `<article class="letter">`, and the closing note is in `<section class="closing">`. To add your name, edit the "With love" line.

## Put it on GitHub
1. Create a new empty repo on github.com (e.g. `riya-birthday`).
2. In this folder:
   git init
   git add .
   git commit -m "Birthday website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/riya-birthday.git
   git push -u origin main

## Deploy on Vercel
1. Go to vercel.com, sign in with GitHub, click Add New > Project.
2. Import the repo. Framework Preset: Other. Leave build command and output directory empty. Click Deploy.
3. Share the URL (you can rename it under Settings > Domains). Pushing changes to GitHub redeploys automatically.
