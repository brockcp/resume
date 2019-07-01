-ACCESS-
  -$ ng serve (localhost:4200)
  -https://brockcp.github.io/resume/

-BUILD-
  -configuration in angular.json -> currently set to docs folder. default setting -> "outputPath":"dist/<appName>"
  -LOCAL BUILD & SERVE(doesnt work on github pages)
    -$ npm run build
    -$ serve -s docs    //localhost:5000

  -WORKING METHOD FOR DEPLOYING TO GHPAGES(cannot run locally)
    -$ ng build --prod --output-path docs --base-href /resume/


-FEATURES-

-ISSUES-

-NOTES-
  -Built on Angular7
  -Intro fadeIn image handled with jQuery.
  -Footer tooltip styling in footer module.
  -latest icon scheme(no safari pinned tab)
