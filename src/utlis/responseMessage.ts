import { _httpStatusService } from "./_httpStatus";

interface Success{
    created: string
    updated: Object
    deleted: string
    modified:string

};
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
export const resObj = {
    success:(value:string,data:any) =>{
        let resObj = {
            status:_httpStatusService.status.OK,
            message:`${value}  list successfully !`,
            data:data
        } 
      return  resObj
    },
    create:(value:string,data:Object) =>{
        let resObj = {
            status:_httpStatusService.status.OK,
            message:`${value} create successfully !`,
            data:data
        } 
      return  resObj
    },
    loginObj:(data:Object,id:string) =>{
        let resObj = {
            status:_httpStatusService.status.OK,
            message:`Successfully login`,
            data:data,
            userId:id
        } 
      return  resObj
    },
    error:(value:any)=>{
        let resObj = {
            status:_httpStatusService.status.serverError,
            message:`${value.message}` || 'Server error !',
        }
        return resObj
    },

    list:(value:string,data?:any) =>{
        let resObj = {
            status:_httpStatusService.status.success,
            message:`${value} list successfully !`,
            data
        }
        return resObj
    },
    deleteObj:(data?:any) =>{
        let resObj = {
            status:_httpStatusService.status.success,
            message:`delete successfully !`,
            data
        }
        return resObj
    }
}

export const _infoMessaage  = {
   required:(value?:string)=>{
    return  `This field is required`
    },
   unique:(value?:string)=>{
       return `${value} already exists`
   },
   minLength:(min:Number)=>{
       return `minimum ${min} characters`
   },
   Invalid:(value:string)=>{
       return `${value} is invalid`
   },
   emailNotRegex:(value:string)=>{
     return `${value} is not exist`
   },
   passwordMatch:"Invalid user credentials",
   lowercase:'one latter must be lowercase',
   uppercase:'one latter must be uppercase',
   number:'one latter must be number',
   alphanumeric:'one latter must be alphanumeric',
   confirmPassword:'Password and confirmPassword not match',
   invalidId:(value:string)=>{
    return "Please enter a valid "+value
   }

}

// class MessageService {

//     created(value:string){
//      return `${value} successfully created`;
//     }
//     updated(value:string) {
//         return `${value} successfully updated`;
//     }

   
// }