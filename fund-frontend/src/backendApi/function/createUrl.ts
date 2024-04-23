import { UploadFundraisal } from "../services/FundRaisalUpload";
import { PendingFundRaisers } from "../services/PendingFundraiser";

const baseUri = "http://localhost:8080";
export const urlFunctions = {
  signinUrl: () => `${baseUri}/auth/signin`,
  signupUri: () => `${baseUri}/auth/signup`,
  VerifyUserUri: () => `${baseUri}/verifyuser`,
  UploadFundraisal: (id: number) => `${baseUri}/api/fundraisers/${id}`,
  GetFundraisers: () => `${baseUri}/fundraisers`,
  GetFundraiserdata: (id: any) => `${baseUri}/api/fundraisers/${id}`,
  GetFilteredFundraisers: (
    category: string,
    pagesize: number,
    pagenumber: number,
    city: string,
    country: string
  ) =>
    `${baseUri}/fundraisers/filter?country=${country}&city=${city}&category=${category}&pageSize=${pagesize}&pageNumber=${pagenumber}`,
  GetUserDataUrl: () => `${baseUri}/auth/token`,
  EditProfileUrl:(Id:number)=>`${baseUri}/api/user/update/${Id}`,
  UpdateFudnraiser:(Id:string)=>`${baseUri}/status/${Id}`,
  GetUpdates:(Id:string)=>`${baseUri}/status/fundraiser/${Id}`,
  ApproveFundRaiser:(FundRaiserId:number,Status:number)=>`${baseUri}/admin/fundraisers/${FundRaiserId}/${Status}`,
  PendingFundRaisers:()=>`${baseUri}/admin/pending`,
  PaymentUrl:(Id:string)=>`${baseUri}/payment/create/${Id}`,

};
