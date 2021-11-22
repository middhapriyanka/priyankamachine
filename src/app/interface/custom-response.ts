import { Server } from "./server";

export interface CustomResponse{
    timestsamp: Date;
	message: string;
	reason: string;
	statusCode: number;
    status: String;
    developerMessage: string;
    data: {servers?: Server[], server?: Server};
}