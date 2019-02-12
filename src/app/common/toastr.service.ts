import {Injectable} from '@angular/core';


declare let toastr;
@Injectable()
export class ToastrService {
 success(message: string, name?: string) {
   toastr.success(message, name);
 }

}
