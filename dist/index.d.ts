/**
 * KSend response
 */
export declare type KSend<T = any> = KSendSuccess<T> | KSendFail<T> | KSendError<T>;
/**
 * All went well, and (usually) some data was returned.
 */
export interface KSendSuccess<T = any> {
    status: "success";
    data?: T;
}
/**
 * There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied
 */
export interface KSendFail<T = any> {
    status: "fail";
    message: string;
    code: string;
    data?: T;
}
/**
 * An error occurred in processing the request, i.e. an exception was thrown
 */
export interface KSendError<T = any> {
    status: "error";
    message: string;
    code: string;
    data?: T;
}
/**
 * Success data of a list of entities
 */
export interface KSendList<T> {
    currentCount: number;
    totalCount: number;
    isTotalCountAccurate: boolean;
    items: Array<T>;
}
/**
 * Returns true, if the response is a success
 */
export declare const isKSendSuccess: (response: KSend) => response is KSendSuccess<any>;
/**
 * Returns true, if the response is a fail
 */
export declare const isKSendFail: (response: KSend) => response is KSendFail<any>;
/**
 * Returns true, if the response is an error
 */
export declare const isKSendError: (response: KSend) => response is KSendError<any>;
/**
 * Constructs a success-response
 */
export declare const success: <T = any>(data?: T) => KSendSuccess<T>;
/**
 * Constructs a fail-response
 */
export declare const fail: <T = any>(message: string, code: string, data?: T) => KSendFail<T>;
/**
 * Constructs an error-response
 */
export declare const error: <T = any>(message: string, code: string, data?: T) => KSendError<T>;
/**
 * Constructs response-data for a successful response of multiple items
 */
export declare const list: <T = any>(items: T[], totalCount?: number, isTotalCountAccurate?: boolean) => KSendList<T>;
