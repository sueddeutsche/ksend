/**
 * KSend response
 */
export type KSend<T = any> = KSendSuccess<T> | KSendFail<T> | KSendError<T>;

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
export const isKSendSuccess = (response: KSend): response is KSendSuccess => response?.status === "success";

/**
 * Returns true, if the response is a fail
 */
export const isKSendFail = (response: KSend): response is KSendFail => response?.status === "fail";

/**
 * Returns true, if the response is an error
 */
export const isKSendError = (response: KSend): response is KSendError => response?.status === "error";

/**
 * Constructs a success-response
 */
export const success = <T = any>(data?: T): KSendSuccess<T> => ({
    status: "success",
    data
});

/**
 * Constructs a fail-response
 */
export const fail = <T = any>(message: string, code: string, data?: T): KSendFail<T> => ({
    status: "fail",
    message,
    code,
    ...data != null && { data }
});

/**
 * Constructs an error-response
 */
export const error = <T = any>(message: string, code: string, data?: T): KSendError<T> => ({
    status: "error",
    message,
    code,
    ...data != null && { data }
});

/**
 * Constructs response-data for a successful response of multiple items
 */
export const list = <T>(items: Array<T>, totalCount?: number, isTotalCountAccurate = true): KSendList<T> => ({
    currentCount: items.length,
    totalCount: totalCount || items.length,
    isTotalCountAccurate,
    items
});
