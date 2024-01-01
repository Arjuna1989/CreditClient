module model.credit {


    export interface ICreateCreditUpdateLogRequest extends services.IRequestBase {

        Id: number;
        AgentID: number;
        ImgName: string;
        ReciptPath: string;
        Description: string;
        Credit: number;
        Cash: number;
        Status: boolean;
        CreditCurrencyId: number;
        BankName: string;
        RefNumber: string;
        Date: Date;
    };

    export interface ICreateCreditUpdateLogResponse extends services.IResponseBase {
        IsCreated: boolean;
    };

    export interface IUpdateCreditRequest extends services.IRequestBase {
        Id: number;
        AgentID: number;
        ImgName: string;
        ReciptPath: string;
        Description: string;
        Credit: number;
        Cash: number;
        Currency: string;
        Status: boolean;
        CreditCurrencyId: number;
        BankName: string;
        RefNumber: string;
        Date: Date;
    };

    export interface IUpdateCreditResponse extends services.IResponseBase {
        IsCreated: boolean;
    };

    export interface IGetAllCreditUpdateLogRequest extends services.IRequestBase {
        AgentID: number;
    };

    export interface IGetAllCreditUpdateLogResponse extends services.IResponseBase {
        Id: number;
        AgentID: number;
        ImgName: string;
        ReciptPath: string;
        Description: string;
        Credit: number;
        Cash: number;
        Status: boolean;
        CreditCurrencyId: number;
        BankName: string;
        RefNumber: string;
        Date: string;
        CreditPerCuurency: number;
        Currency: string;
    };

    export interface IDeleteCreditUpdateLogRequest extends services.IRequestBase {
        Id: number;
    };

    export interface IDeleteCreditUpdateLogResponse extends services.IResponseBase {
        IsDeleted: boolean;
    };

    export interface IUpdateCreditLogRequest extends services.IRequestBase {

        Id: number;
        AgentID: number;
        ImgName: string;
        ReciptPath: string;
        Description: string;
        Credit: number;
        Status: boolean;
        CreditCurrencyId: number;
        BankName: string;
        Date: Date;
    };

    export interface IUpdateCreditLogResponse extends services.IResponseBase {

        IsUpdated: boolean;
    };

    export interface IGetAllCreditCurrencyRequest extends services.IRequestBase {

    };

    export interface IGetAllCreditCurrencyResponse extends services.IRequestBase {

        Id: number;
        Credit: number;
        Currency: string;
        CountryCode: string;
        CountryName: string;
    };

    export interface IGetBankListResponse extends services.IResponseBase {
        ID: number;
        BankName: string;
        CountryCode: string;
    }

    export interface IGetBankListRequest extends services.IRequestBase {
        CountryCode: string;
    }

}