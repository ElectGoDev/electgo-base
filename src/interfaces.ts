import mongoose, { Document, SchemaTypes, Types } from "mongoose";

export interface AddressInterface {
    type: string; //guest, registered
    customer_group: string;
    id?: Types.ObjectId;
    fullname?: string;
    email?: string;
    phone?: string;
    company_id?: Types.ObjectId;
    company_name?: string;
}
