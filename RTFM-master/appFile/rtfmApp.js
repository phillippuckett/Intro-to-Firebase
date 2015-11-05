var rtfmApp = angular.module('rtfm-master', ['firebase', ui,router])
/*Step 1: Create Project*/
// 1 //
/*Create the basic structure of your Angular application naming your app 'rtfmApp'.*/

/*STEP 2: Configure Module*/
// 1 //
/*In your rtfmApp.js file include firebase and ui.router to your module's dependencies.
Add a .config function and include $stateProvider and $urlRouterProvider to your injections.
Create a router and add /threads and /threads/:threadId as the URLS.
Use .$urlRouterProvider.otherwise to redirect any other url to /threads.
In your index.html file, include your ui-view attribute/element in order to tie in your router. Should look like this below.*/

	/*<div class="container" ui-view></div>*/
	
// code here
	
myAppModule.('greet', function() {

  };
});
