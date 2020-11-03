export interface KSendSuccess<T = any> {
    status: "success";
    data?: T;
}
export interface KSendFail<T = any> {
    status: "fail";
    message: string;
    code: string;
    data?: T;
}
export interface KSendError<T = any> {
    status: "error";
    message: string;
    code: string;
    data?: T;
}
export interface KSendList<T> {
    currentCount: number;
    totalCount: number;
    isTotalCountAccurate: boolean;
    items: Array<T>;
}
export declare const success: <T>(data?: T) => KSendSuccess<T>;
export declare const fail: <T = any>(message: string, code: string, data?: T) => KSendFail<T>;
export declare const error: <T = any>(message: string, code: string, data?: T) => KSendError<T>;
export declare const list: <T>(items: T[], totalCount?: number, isTotalCountAccurate?: boolean) => KSendList<T>;
