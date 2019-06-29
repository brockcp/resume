-ACCESS-
  -$ ng serve (localhost:4200)
  -https://brockcp.github.io/resume/

-BUILD-
 -$ npm install http-server
 -configuration in angular.json
 -$ npm run build   //builds prod folder
 -$ http-server docs/   //docs is designated output folder in angular.json

$ ng build --prod --output-path docs --base-href /resume/
-FEATURES-

-ISSUES-
  -Resume not downloading
  -Intro fadeIn image handled with jQuery.
  -Footer tooltip styling in footer module.

-NOTES-
  -Built on Angular7
  -Compiles with script
  -latest icon scheme(no safari pinned tab)
