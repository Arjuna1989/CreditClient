var controllers;
(function (controllers) {
    var credit;
    (function (credit) {
        'use strict';
        var CreditIndexController = /** @class */ (function () {
            function CreditIndexController($scope, $timeout, creditService) {
                var _this = this;
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.creditService = creditService;
                this.InitializeCommands = function (AgentId, CountryCode) {
                    _this.$scope.AgentID = AgentId;
                    _this.$scope.CountryCode = CountryCode;
                    _this.$scope.CreateCreditUpdateLog = _this.CreateCreditUpdateLog;
                    _this.$scope.DeleteCreditUpdateLog = _this.DeleteCreditUpdateLog;
                    _this.$scope.UpdateCreditCurrency = _this.UpdateCreditCurrency;
                    _this.$scope.GetAllCreditCurrency = _this.GetAllCreditCurrency;
                    _this.$scope.CloseAlert = _this.CloseAlert;
                    _this.$scope.UpdateCredit = _this.UpdateCredit;
                    _this.$scope.CreditMapUpdate = _this.CreditMapUpdate;
                    _this.$scope.CreditMap = _this.CreditMap;
                    _this.GetAllCreditUpdateLog(_this.$scope.AgentID);
                    _this.GetAllCreditCurrency();
                    _this.GetBankList();
                };
                this.CreateCreditUpdateLog = function (arg) {
                    _this.$scope.IsSaveClicked = true;
                    arg.AgentID = _this.$scope.AgentID;
                    arg.Date = new Date();
                    var request = {};
                    request.file = _this.$scope.Files;
                    request.model = arg;
                    _this.creditService.CreateCreditUpdateLog(request).then(function (result) {
                        if (!result) {
                            _this.$scope.IsError = true;
                        }
                        else {
                            _this.$scope.IsSuccessfullySaved = true;
                            _this.$scope.CreditUpdateLog = {};
                            _this.$scope.IsSaveClicked = false;
                            _this.GetAllCreditUpdateLog(_this.$scope.AgentID);
                            //$('#crCurrency').empty();
                            _this.GetAllCreditCurrency();
                        }
                    });
                };
                this.GetAllCreditUpdateLog = function (agentId) {
                    var request = {};
                    request.AgentID = agentId;
                    _this.creditService.GetAllCreditUpdateLog(request).then(function (result) {
                        if (!result) {
                        }
                        else {
                            _this.$scope.AllLogs = result;
                        }
                        $('#loader').hide();
                    });
                };
                this.DeleteCreditUpdateLog = function (Id) {
                    var request = {};
                    request.Id = Id;
                    if (window.confirm("Do you really want to Delete?")) {
                        _this.creditService.DeleteCreditUpdateLog(request).then(function (result) {
                            _this.$scope.IsSuccessfullyDeleted = true;
                            _this.GetAllCreditUpdateLog(_this.$scope.AgentID);
                        });
                    }
                };
                this.UpdateCreditCurrency = function (arg) {
                    _this.$scope.CreditUpdate = arg;
                    _this.$scope.CreditMaperUpdate = {};
                    $('#CreditCurrencyUpdate').modal('show');
                };
                this.UpdateCredit = function (arg) {
                    arg.Date = new Date();
                    var request = {};
                    request.file = _this.$scope.Files;
                    request.model = arg;
                    _this.creditService.UpdateCredit(request).then(function (result) {
                        if (!result) {
                            _this.$scope.IsError = true;
                        }
                        else {
                            _this.$scope.IsSuccessfullyUpdated = true;
                            _this.$scope.CreditMaperUpdate = {};
                            _this.GetAllCreditUpdateLog(_this.$scope.AgentID);
                            $('#CreditCurrencyUpdate').modal('hide');
                        }
                    });
                };
                this.GetAllCreditCurrency = function () {
                    _this.creditService.GetAllCreditCurrency().then(function (result) {
                        _this.$scope.CreditCurrency = result;
                    });
                };
                this.CreditMap = function (arg) {
                    if (!arg) {
                    }
                    else {
                        _this.$scope.CreditUpdateLog.Credit = arg.Credit * _this.$scope.CreditUpdateLog.Cash;
                        _this.$scope.CreditUpdateLog.CreditCurrencyId = arg.Id;
                    }
                };
                this.CreditMapUpdate = function (arg) {
                    _this.$scope.CreditUpdate.Credit = arg.Credit * _this.$scope.CreditUpdate.Cash;
                    _this.$scope.CreditUpdate.CreditCurrencyId = arg.Id;
                    _this.$scope.CreditUpdate.Currency = arg.Currency;
                    _this.$scope.CreditMaperUpdate = arg;
                };
                this.CloseAlert = function () {
                    _this.$scope.IsSuccessfullyUpdated = false;
                    _this.$scope.IsSuccessfullySaved = false;
                    _this.$scope.IsError = false;
                    _this.$scope.IsSuccessfullyDeleted = false;
                };
                this.GetBankList = function () {
                    var request = {};
                    request.CountryCode = _this.$scope.CountryCode;
                    _this.creditService.GetBankListByCountryCode(request).then(function (result) {
                        _this.$scope.BankList = result;
                    });
                };
                $('#loader').show();
                this.$scope.Init = this.InitializeCommands;
                this.$scope.CreditUpdateLog = {};
                this.$scope.AllLogs = {};
                this.$scope.CreditUpdate = {};
                this.$scope.CreditCurrency = {};
                this.$scope.CreditMaperUpdate = {};
                this.$scope.BankList = {};
                this.$scope.IsSaveClicked = false;
                this.$scope.IsSuccessfullyUpdated = false;
                this.$scope.IsSuccessfullySaved = false;
                this.$scope.IsError = false;
                this.$scope.IsSuccessfullyDeleted = false;
                this.$scope.$on("seletedFile", function (event, args) {
                    $scope.Files = args.file;
                });
            }
            CreditIndexController.$inject = ['$scope', '$timeout', 'CreditService'];
            return CreditIndexController;
        }());
        credit.CreditIndexController = CreditIndexController;
    })(credit = controllers.credit || (controllers.credit = {}));
})(controllers || (controllers = {}));
//# sourceMappingURL=credit.index.controller.js.map