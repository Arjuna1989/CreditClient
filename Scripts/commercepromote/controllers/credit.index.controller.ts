module controllers.credit {
    'use strict';

    export interface ICreditIndexScope {


        Files: Array<any>;
        $on(eventName: string, func: Function): void;
        CountryCode: string;
        Service: any;
        Init(AgentId: number,CountryCode:string): void;

        AgentID: number;
        IsSaveClicked: boolean;
        IsSuccessfullyUpdated: boolean;
        IsSuccessfullySaved: boolean;
        IsError: boolean;
        IsSuccessfullyDeleted: boolean;

        CreditUpdateLog: model.credit.ICreateCreditUpdateLogRequest;
        CreateCreditUpdateLog(arg: model.credit.ICreateCreditUpdateLogRequest);
        UpdateCreditCurrency(arg: model.credit.ICreateCreditUpdateLogRequest);
        UpdateCredit(arg: model.credit.IUpdateCreditRequest);
        GetAllCreditCurrency(): void;
        GetAllCreditUpdateLog(agentId: number);
        DeleteCreditUpdateLog(Id: number);
        CreditMap(arg: model.credit.IGetAllCreditCurrencyResponse);
        CreditMapUpdate(arg: model.credit.IGetAllCreditCurrencyResponse);
        CreditMaperUpdate: model.credit.IGetAllCreditCurrencyResponse;
        AllLogs: services.IResponseArray<model.credit.IGetAllCreditUpdateLogResponse>;
        CreditUpdate: model.credit.IUpdateCreditRequest;
        CreditCurrency: services.IResponseArray<model.credit.IGetAllCreditCurrencyResponse>;
        BankList: services.IResponseArray<model.credit.IGetBankListResponse>;

        CloseAlert(): void;
    }

    export class CreditIndexController {
        static $inject = ['$scope', '$timeout', 'CreditService'];

        constructor(private $scope: ICreditIndexScope, private $timeout: ng.ITimeoutService, private creditService: services.credit.CreditService) {
            $('#loader').show();
            this.$scope.Init = this.InitializeCommands;

            this.$scope.CreditUpdateLog = <model.credit.ICreateCreditUpdateLogRequest>{};
            this.$scope.AllLogs = <services.IResponseArray<model.credit.IGetAllCreditUpdateLogResponse>>{};
            this.$scope.CreditUpdate = <model.credit.IUpdateCreditRequest>{};
            this.$scope.CreditCurrency = <services.IResponseArray<model.credit.IGetAllCreditCurrencyResponse>>{};
            this.$scope.CreditMaperUpdate = <model.credit.IGetAllCreditCurrencyResponse>{};
            this.$scope.BankList = <services.IResponseArray<model.credit.IGetBankListResponse>>{};
            this.$scope.IsSaveClicked = false;
            this.$scope.IsSuccessfullyUpdated = false;
            this.$scope.IsSuccessfullySaved = false;
            this.$scope.IsError = false;
            this.$scope.IsSuccessfullyDeleted = false;

            this.$scope.$on("seletedFile", function (event, args) {
                $scope.Files = args.file;
            });

        }

        private InitializeCommands = (AgentId: number,CountryCode:string): void => {
      
            this.$scope.AgentID = AgentId;
            this.$scope.CountryCode = CountryCode;
            this.$scope.CreateCreditUpdateLog = this.CreateCreditUpdateLog;
            this.$scope.DeleteCreditUpdateLog = this.DeleteCreditUpdateLog;
            this.$scope.UpdateCreditCurrency = this.UpdateCreditCurrency;
            this.$scope.GetAllCreditCurrency = this.GetAllCreditCurrency;
            this.$scope.CloseAlert = this.CloseAlert;
            this.$scope.UpdateCredit = this.UpdateCredit;
            this.$scope.CreditMapUpdate = this.CreditMapUpdate;
            this.$scope.CreditMap = this.CreditMap;
            this.GetAllCreditUpdateLog(this.$scope.AgentID);
            this.GetAllCreditCurrency();
            this.GetBankList();
        }

        private CreateCreditUpdateLog = (arg: model.credit.ICreateCreditUpdateLogRequest): void => {
            this.$scope.IsSaveClicked = true;
            arg.AgentID = this.$scope.AgentID;
            arg.Date = new Date();
            var request = <services.IFileUploadRequest>{};
            request.file = this.$scope.Files;
            request.model = arg;



            this.creditService.CreateCreditUpdateLog(request).then((result: model.credit.ICreateCreditUpdateLogResponse) => {

                if (!result) {
                    this.$scope.IsError = true;
                }
                else {
                    this.$scope.IsSuccessfullySaved = true;
                    this.$scope.CreditUpdateLog = <model.credit.ICreateCreditUpdateLogRequest>{};
                    this.$scope.IsSaveClicked = false;
                    this.GetAllCreditUpdateLog(this.$scope.AgentID);
                    //$('#crCurrency').empty();
                    this.GetAllCreditCurrency();
                }
            });

        }

        private GetAllCreditUpdateLog = (agentId: number): void => {

            var request = <model.credit.IGetAllCreditUpdateLogRequest>{};
            request.AgentID = agentId;

            this.creditService.GetAllCreditUpdateLog(request).then((result: services.IResponseArray<model.credit.IGetAllCreditUpdateLogResponse>) => {
                if (!result) {
                }
                else {
                    this.$scope.AllLogs = result;
                   
                }
                $('#loader').hide();
                
            });

        }
        private DeleteCreditUpdateLog = (Id: number): void => {
            var request = <model.credit.IDeleteCreditUpdateLogRequest>{}
            request.Id = Id;
            if (window.confirm("Do you really want to Delete?")) {
                this.creditService.DeleteCreditUpdateLog(request).then((result: model.credit.IDeleteCreditUpdateLogResponse) => {
                    this.$scope.IsSuccessfullyDeleted = true;
                    this.GetAllCreditUpdateLog(this.$scope.AgentID);
                });
            }
        }

        private UpdateCreditCurrency = (arg: model.credit.ICreateCreditUpdateLogRequest): void => {

            this.$scope.CreditUpdate = arg as model.credit.IUpdateCreditRequest;
            this.$scope.CreditMaperUpdate = <model.credit.IGetAllCreditCurrencyResponse>{};
            $('#CreditCurrencyUpdate').modal('show');

        }

        private UpdateCredit = (arg: model.credit.IUpdateCreditRequest): void => {

            arg.Date = new Date();
            var request = <services.IFileUploadRequest>{};
            request.file = this.$scope.Files;
            request.model = arg;

            this.creditService.UpdateCredit(request).then((result: model.credit.IUpdateCreditResponse) => {
                if (!result) {
                    this.$scope.IsError = true;
                }
                else {
                    this.$scope.IsSuccessfullyUpdated = true;
                    this.$scope.CreditMaperUpdate = <model.credit.IGetAllCreditCurrencyResponse>{};
                    this.GetAllCreditUpdateLog(this.$scope.AgentID);
                    $('#CreditCurrencyUpdate').modal('hide');
                }

            });
        }

        private GetAllCreditCurrency = (): void => {

            this.creditService.GetAllCreditCurrency().then((result: services.IResponseArray<model.credit.IGetAllCreditCurrencyResponse>) => {
                this.$scope.CreditCurrency = result;
              
            });
        }

        private CreditMap = (arg: model.credit.IGetAllCreditCurrencyResponse): void => {

            if (!arg) {

            }
            else {
                this.$scope.CreditUpdateLog.Credit = arg.Credit * this.$scope.CreditUpdateLog.Cash;
                this.$scope.CreditUpdateLog.CreditCurrencyId = arg.Id;
            }

        }

        private CreditMapUpdate = (arg: model.credit.IGetAllCreditCurrencyResponse): void => {


            this.$scope.CreditUpdate.Credit = arg.Credit * this.$scope.CreditUpdate.Cash;
            this.$scope.CreditUpdate.CreditCurrencyId = arg.Id;
            this.$scope.CreditUpdate.Currency = arg.Currency;
            this.$scope.CreditMaperUpdate = arg;
        }

        private CloseAlert = (): void => {

            this.$scope.IsSuccessfullyUpdated = false;
            this.$scope.IsSuccessfullySaved = false;
            this.$scope.IsError = false;
            this.$scope.IsSuccessfullyDeleted = false;
        }

        private GetBankList = (): void => {
            var request = <model.credit.IGetBankListRequest>{};
            request.CountryCode = this.$scope.CountryCode;
            this.creditService.GetBankListByCountryCode(request).then((result: services.IResponseArray<model.credit.IGetBankListResponse>) => {
                this.$scope.BankList = result;
            });
        }
    }
}