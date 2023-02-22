enum Status {
    Success = 'success',
    Failed = 'failed',
}

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

// Not good solution
// interface IResponse {
//     status: Status
//     data: IPaymentDataSuccess | IPaymentDataFailed;
// }

interface IResponseSuccess {
    status: Status.Success;
    data: IPaymentDataSuccess;
}

interface IResponseFailed {
    status: Status.Failed;
    data: IPaymentDataFailed;
}
