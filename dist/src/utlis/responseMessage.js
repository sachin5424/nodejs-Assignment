"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._infoMessaage = exports.resObj = void 0;
const _httpStatus_1 = require("./_httpStatus");
;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.resObj = {
    success: (value, data) => {
        let resObj = {
            status: _httpStatus_1._httpStatusService.status.OK,
            message: `${value}  list successfully !`,
            data: data
        };
        return resObj;
    },
    create: (value, data) => {
        let resObj = {
            status: _httpStatus_1._httpStatusService.status.OK,
            message: `${value} create successfully !`,
            data: data
        };
        return resObj;
    },
    loginObj: (data, id) => {
        let resObj = {
            status: _httpStatus_1._httpStatusService.status.OK,
            message: `Successfully login`,
            data: data,
            userId: id
        };
        return resObj;
    },
    error: (value) => {
        let resObj = {
            status: _httpStatus_1._httpStatusService.status.serverError,
            message: `${value.message}` || 'Server error !',
        };
        return resObj;
    },
    list: (value, data) => {
        let resObj = {
            status: _httpStatus_1._httpStatusService.status.success,
            message: `${value} list successfully !`,
            data
        };
        return resObj;
    },
    deleteObj: (data) => {
        let resObj = {
            status: _httpStatus_1._httpStatusService.status.success,
            message: `delete successfully !`,
            data
        };
        return resObj;
    }
};
exports._infoMessaage = {
    required: (value) => {
        return `This field is required`;
    },
    unique: (value) => {
        return `${value} already exists`;
    },
    minLength: (min) => {
        return `minimum ${min} characters`;
    },
    Invalid: (value) => {
        return `${value} is invalid`;
    },
    emailNotRegex: (value) => {
        return `${value} is not exist`;
    },
    passwordMatch: "Invalid user credentials",
    lowercase: 'one latter must be lowercase',
    uppercase: 'one latter must be uppercase',
    number: 'one latter must be number',
    alphanumeric: 'one latter must be alphanumeric',
    confirmPassword: 'Password and confirmPassword not match',
    invalidId: (value) => {
        return "Please enter a valid " + value;
    }
};
// class MessageService {
//     created(value:string){
//      return `${value} successfully created`;
//     }
//     updated(value:string) {
//         return `${value} successfully updated`;
//     }
// }
//# sourceMappingURL=responseMessage.js.map