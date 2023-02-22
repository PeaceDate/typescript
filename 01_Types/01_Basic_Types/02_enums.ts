// Enums
// Example

enum StatusCode {
    SUCCESS = 1,
    PENDING = 2,
    FAILED = 3,
}

const res = {
    message: "Success",
    status: StatusCode.SUCCESS,
}

// 1 - Success
// 2 - Pending
// 3 - Failed

// Geterogeneous enums

enum StatusCodeGeterogeneous {
    SUCCESS_CODE = 1,
    PENDING_CODE = 2,
    FAILED_CODE = 3,
    ERROR = "ERROR",
}

function action(status: StatusCodeGeterogeneous) {

}

action(StatusCodeGeterogeneous.SUCCESS_CODE);
action(3)
action("ERROR") // Fail cause enum introduce itself as a numeric enum


// Const enums

const enum StatusCodeConst {
    SUCCESS = 1,
    PENDING = 2,
    FAILED = 3
}
