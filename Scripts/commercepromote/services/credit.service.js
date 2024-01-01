var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var services;
(function (services) {
    var credit;
    (function (credit) {
        'use strict';
        var CreditService = /** @class */ (function (_super) {
            __extends(CreditService, _super);
            function CreditService($http) {
                var _this = _super.call(this, $http) || this;
                _this.executeQueryServiceUrl = 'api/credit/';
                return _this;
            }
            CreditService.prototype.CreateCreditUpdateLog = function (request) {
                return this.ServiceFileRequest('/api/credit/CreateCreditUpdateLog', request);
            };
            CreditService.prototype.GetAllCreditUpdateLog = function (request) {
                return this.ServiceRequest('/api/credit/GetAllCreditUpdateLog', request);
            };
            CreditService.prototype.DeleteCreditUpdateLog = function (request) {
                return this.ServiceRequest('/api/credit/DeleteCreditUpdateLog', request);
            };
            CreditService.prototype.UpdateCredit = function (request) {
                return this.ServiceFileRequest('/api/credit/UpdateCredit', request);
            };
            CreditService.prototype.GetAllCreditCurrency = function () {
                return this.ServiceRequest('/api/credit/GetAllCreditCurrency', null);
            };
            CreditService.prototype.GetBankListByCountryCode = function (request) {
                return this.ServiceRequest('/api/credit/GetBanksDetailsByCountryCode', request);
            };
            CreditService.$inject = ['$http'];
            return CreditService;
        }(services.BaseService));
        credit.CreditService = CreditService;
    })(credit = services.credit || (services.credit = {}));
})(services || (services = {}));
//# sourceMappingURL=credit.service.js.map