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

export const success = <T>(data?: T): KSendSuccess<T> => ({
    status: "success",
    data
});

export const fail = <T = any>(message: string, code: string, data?: T): KSendFail<T> => ({
    status: "fail",
    message,
    code,
    ...data != null && { data }
});

export const error = <T = any>(message: string, code: string, data?: T): KSendError<T> => ({
    status: "error",
    message,
    code,
    ...data != null && { data }
});

export const list = <T>(items: Array<T>, totalCount?: number, isTotalCountAccurate = true): KSendList<T> => ({
    currentCount: items.length,
    totalCount: totalCount || items.length,
    isTotalCountAccurate,
    items
});