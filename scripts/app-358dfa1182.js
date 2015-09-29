(function(){angular.module("wut",["ngAnimate","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}).call(this),function(){angular.module("wut").controller("HomeCtrl",["$scope","$timeout","bootstrap",function(t,e,n){var o;return this.questionsLeft=[],t.bootstrap=n,o=function(e){return function(){return 0===e.questionsLeft.length&&(e.questionsLeft=_.shuffle(n.questions)),t.currentQuestion=e.questionsLeft.pop(),t.state="PROMPT"}}(this),t.submit=function(s){return function(i){return s.selected=i,t.state=i===t.currentQuestion.answer?"RIGHT":"WRONG",s.timeout=e(o,n.timeout||2e3)}}(this),t.choiceClass=function(e){return function(n){if(e.selected===n){if("RIGHT"===t.state)return"btn-success";if("WRONG"===t.state)return"btn-danger"}}}(this),t.backgroundStyle=function(){return{backgroundImage:"url("+n.background+")"}},o()}])}.call(this),function(){angular.module("wut").config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";return e.otherwise("/"),t.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeCtrl",resolve:{bootstrap:["$http",function(t){return t.get("assets/data/bootstrap.json").then(function(t){return t.data})}]}}),t.state("about",{url:"/about",templateUrl:"views/about.html"})}])}.call(this),function(){angular.module("wut").constant("moment",moment)}.call(this),function(){angular.module("wut").config(["$logProvider","toastrConfig",function(t,e){"ngInject";return t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}])}.call(this),angular.module("wut").run(["$templateCache",function(t){t.put("app/home/home.html",'<div class="home" ng-class="{\'home--right\': state == \'RIGHT\', \'home--wrong\': state == \'WRONG\'}"><div class="home__background" ng-if="bootstrap.background" ng-style="backgroundStyle()"></div><div class="home__question"><h3>{{bootstrap.title}}</h3><p class="text-muted" ng-bind-html="bootstrap.description"></p><div><div class="home__question__label" ng-bind-html="currentQuestion.label"></div><div class="home__question__choices"><fieldset class="row" ng-disabled="state != \'PROMPT\'"><div class="col-sm-6" ng-repeat="choice in bootstrap.choices"><button class="btn btn-lg btn-block btn-primary home__question__choices__single" ng-class="choiceClass($index)" ng-click="submit($index)" ng-bind-html="choice.label || choice"></button></div></fieldset></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-358dfa1182.js.map