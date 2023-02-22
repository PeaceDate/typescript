interface IPayment {
    sum: number;
    from: string;
    to: string;
}

interface IPaymentRequest extends IPayment {}

interface IPaymentDataSuccess extends IPayment {
    databaseId: number;
}

interface IPaymentDataFailed {
    errorMessages: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: Status.Success;
    data: IPaymentDataSuccess;
}

interface IResponseFailed {
    status: Status.Failed;
    data: IPaymentDataFailed;
}

type Res = IResponseSuccess | IResponseFailed;

function isResponseSuccess(response: Res): response is IResponseSuccess {
    return response.status === Status.Success;
}

function result(data: Res): number {
    if (isResponseSuccess(data)) {
        return data.data.databaseId;
    } else {
       throw new Error(data.data.errorMessages);
    }
}