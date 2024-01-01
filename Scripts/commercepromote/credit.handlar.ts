/// <reference path="../../scripts/reference.ts" />

module CreditWebClient {

    export class CreditWebClientHandler {
        private CreditApp: ng.IModule;
        private ContentElement: JQuery;

        constructor(token: string) {
            this.Initialize(token);
        }


        public Initialize(token: string): void {
            try {
                this.CreditApp = angular.module('CreditApp', [])
                    .directive('uploadFiles', directives.credit.UploadFiles.Factory())
                    .directive('dateFormat', directives.credit.DateFormat.Factory())
                    .service('CreditService', services.credit.CreditService)
                    .controller('CreditIndex', controllers.credit.CreditIndexController);


                //this location provider helps to read query string
                this.CreditApp.config(['$locationProvider', function ($locationProvider) {
                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                    });
                }]);

                this.CreditApp.config(function ($httpProvider: ng.IHttpProvider) {
                    $httpProvider.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                });
            }
            catch (exception) {
                console.log(exception);
            }
        }
    }
}