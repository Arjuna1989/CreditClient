module services.credit {

    'use strict';
    export interface ICreditService {
        

        CreateCreditUpdateLog(request: services.IFileUploadRequest): ng.IPromise<void | model.credit.ICreateCreditUpdateLogResponse>;
        GetAllCreditUpdateLog(request: model.credit.IGetAllCreditUpdateLogRequest): ng.IPromise<void | services.IResponseArray<model.credit.IGetAllCreditUpdateLogResponse>>;
        DeleteCreditUpdateLog(request: model.credit.IDeleteCreditUpdateLogRequest): ng.IPromise<void | model.credit.IDeleteCreditUpdateLogResponse>;
        UpdateCredit(request: IFileUploadRequest): ng.IPromise<void | model.credit.IUpdateCreditResponse>;
        GetAllCreditCurrency(): ng.IPromise<void | services.IResponseArray<model.credit.IGetAllCreditCurrencyResponse>>;
        GetBankListByCountryCode(request: model.credit.IGetBankListRequest): ng.IPromise<void | IResponseArray<model.credit.IGetBankListResponse>>;
    }

    export class CreditService extends services.BaseService implements ICreditService {

      
       
        static $inject = ['$http'];

        constructor($http: ng.IHttpService) {
            super($http);
            this.executeQueryServiceUrl = 'api/credit/';
        }

        CreateCreditUpdateLog(request: IFileUploadRequest): angular.IPromise<void | model.credit.ICreateCreditUpdateLogResponse> {
            return this.ServiceFileRequest<services.IFileUploadRequest, model.credit.ICreateCreditUpdateLogResponse>('/api/credit/CreateCreditUpdateLog', request);
        }

        GetAllCreditUpdateLog(request: model.credit.IGetAllCreditUpdateLogRequest): angular.IPromise<void | IResponseArray<model.credit.IGetAllCreditUpdateLogResponse>> {
            return this.ServiceRequest<model.credit.IGetAllCreditUpdateLogRequest, IResponseArray<model.credit.IGetAllCreditUpdateLogResponse>>('/api/credit/GetAllCreditUpdateLog', request);
        }

        DeleteCreditUpdateLog(request: model.credit.IDeleteCreditUpdateLogRequest): angular.IPromise<void | model.credit.IDeleteCreditUpdateLogResponse> {
            return this.ServiceRequest<model.credit.IDeleteCreditUpdateLogRequest, model.credit.IDeleteCreditUpdateLogResponse>('/api/credit/DeleteCreditUpdateLog', request);
        }

        UpdateCredit(request: IFileUploadRequest): angular.IPromise<void | model.credit.IUpdateCreditResponse> {
            return this.ServiceFileRequest<services.IFileUploadRequest, model.credit.ICreateCreditUpdateLogResponse>('/api/credit/UpdateCredit', request);

        }

        GetAllCreditCurrency(): angular.IPromise<void | IResponseArray<model.credit.IGetAllCreditCurrencyResponse>> {
            return this.ServiceRequest<null, IResponseArray<model.credit.IGetAllCreditCurrencyResponse>>('/api/credit/GetAllCreditCurrency', null);

        }

        GetBankListByCountryCode(request: model.credit.IGetBankListRequest): ng.IPromise<void | IResponseArray<model.credit.IGetBankListResponse>> {
            return this.ServiceRequest<model.credit.IGetBankListRequest, IResponseArray<model.credit.IGetBankListResponse>>('/api/credit/GetBanksDetailsByCountryCode', request);
        }
    }
}