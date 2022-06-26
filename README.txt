Data update instructions:

Step 1 
Use the "user-persona.xlsx" template, modify the content as you want. 
Please notice that for column "painpoints" and "products", please use ";" as the segmentation

Step 2
Upload your new user-persona.xlsx to the website, click "confirm"
You will get four .js files

Step 3
Do NOT change the file names, replace the four files in the "./src/components/js/data" into the new ones you get

Step 4
If you want to preview the website, double click "preview.bat" in the "user-persona" folder
Wait and see the command prompt window will show which link you should put in the browser. Usually it's "http://localhost:8080/"
After you confirm to change the website, double click the "build.bat" in the "user-persona" folder

Step 5
NOT SURE yet, if use ftp folder in Shure's website, it should be copy the new dist folder to the ftp folder
If use heroku to deploy, a command line of "git push heroku master" should be added. Then the website is permanantly changed