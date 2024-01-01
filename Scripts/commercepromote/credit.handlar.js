/// <reference path="../../scripts/reference.ts" />
var CreditWebClient;
(function (CreditWebClient) {
    var CreditWebClientHandler = /** @class */ (function () {
        function CreditWebClientHandler(token) {
            this.Initialize(token);
        }
        CreditWebClientHandler.prototype.Initialize = function (token) {
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
                this.CreditApp.config(function ($httpProvider) {
                    $httpProvider.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                });
            }
            catch (exception) {
                console.log(exception);
            }
        };
        return CreditWebClientHandler;
    }());
    CreditWebClient.CreditWebClientHandler = CreditWebClientHandler;
})(CreditWebClient || (CreditWebClient = {}));
//# sourceMappingURL=credit.handlar.js.map