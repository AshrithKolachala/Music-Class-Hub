import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { Announcement, Class, CreateAnnouncementRequest, CreateClassRequest, CreateStudentRequest, ErrorResponse, HealthStatus, LoginRequest, LoginResponse, Student, SuccessResponse, UpdateClassRequest, UserInfo } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Login for teacher or student
 */
export declare const getLoginUrl: () => string;
export declare const login: (loginRequest: LoginRequest, options?: RequestInit) => Promise<LoginResponse>;
export declare const getLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginRequest>;
export type LoginMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Login for teacher or student
 */
export declare const useLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
/**
 * @summary Get current user
 */
export declare const getGetMeUrl: () => string;
export declare const getMe: (options?: RequestInit) => Promise<UserInfo>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Logout
 */
export declare const getLogoutUrl: () => string;
export declare const logout: (options?: RequestInit) => Promise<SuccessResponse>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
 * @summary Logout
 */
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
/**
 * @summary List all students (teacher only)
 */
export declare const getListStudentsUrl: () => string;
export declare const listStudents: (options?: RequestInit) => Promise<Student[]>;
export declare const getListStudentsQueryKey: () => readonly ["/api/students"];
export declare const getListStudentsQueryOptions: <TData = Awaited<ReturnType<typeof listStudents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listStudents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listStudents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListStudentsQueryResult = NonNullable<Awaited<ReturnType<typeof listStudents>>>;
export type ListStudentsQueryError = ErrorType<unknown>;
/**
 * @summary List all students (teacher only)
 */
export declare function useListStudents<TData = Awaited<ReturnType<typeof listStudents>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listStudents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a student (teacher only)
 */
export declare const getCreateStudentUrl: () => string;
export declare const createStudent: (createStudentRequest: CreateStudentRequest, options?: RequestInit) => Promise<Student>;
export declare const getCreateStudentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, {
        data: BodyType<CreateStudentRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, {
    data: BodyType<CreateStudentRequest>;
}, TContext>;
export type CreateStudentMutationResult = NonNullable<Awaited<ReturnType<typeof createStudent>>>;
export type CreateStudentMutationBody = BodyType<CreateStudentRequest>;
export type CreateStudentMutationError = ErrorType<unknown>;
/**
 * @summary Create a student (teacher only)
 */
export declare const useCreateStudent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, {
        data: BodyType<CreateStudentRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createStudent>>, TError, {
    data: BodyType<CreateStudentRequest>;
}, TContext>;
/**
 * @summary Delete a student (teacher only)
 */
export declare const getDeleteStudentUrl: (studentId: number) => string;
export declare const deleteStudent: (studentId: number, options?: RequestInit) => Promise<SuccessResponse>;
export declare const getDeleteStudentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, {
        studentId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, {
    studentId: number;
}, TContext>;
export type DeleteStudentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteStudent>>>;
export type DeleteStudentMutationError = ErrorType<unknown>;
/**
 * @summary Delete a student (teacher only)
 */
export declare const useDeleteStudent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, {
        studentId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteStudent>>, TError, {
    studentId: number;
}, TContext>;
/**
 * @summary List classes
 */
export declare const getListClassesUrl: () => string;
export declare const listClasses: (options?: RequestInit) => Promise<Class[]>;
export declare const getListClassesQueryKey: () => readonly ["/api/classes"];
export declare const getListClassesQueryOptions: <TData = Awaited<ReturnType<typeof listClasses>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listClasses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listClasses>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListClassesQueryResult = NonNullable<Awaited<ReturnType<typeof listClasses>>>;
export type ListClassesQueryError = ErrorType<unknown>;
/**
 * @summary List classes
 */
export declare function useListClasses<TData = Awaited<ReturnType<typeof listClasses>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listClasses>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Schedule a class (teacher only)
 */
export declare const getCreateClassUrl: () => string;
export declare const createClass: (createClassRequest: CreateClassRequest, options?: RequestInit) => Promise<Class>;
export declare const getCreateClassMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createClass>>, TError, {
        data: BodyType<CreateClassRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createClass>>, TError, {
    data: BodyType<CreateClassRequest>;
}, TContext>;
export type CreateClassMutationResult = NonNullable<Awaited<ReturnType<typeof createClass>>>;
export type CreateClassMutationBody = BodyType<CreateClassRequest>;
export type CreateClassMutationError = ErrorType<unknown>;
/**
 * @summary Schedule a class (teacher only)
 */
export declare const useCreateClass: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createClass>>, TError, {
        data: BodyType<CreateClassRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createClass>>, TError, {
    data: BodyType<CreateClassRequest>;
}, TContext>;
/**
 * @summary Update/reschedule a class (teacher only)
 */
export declare const getUpdateClassUrl: (classId: number) => string;
export declare const updateClass: (classId: number, updateClassRequest: UpdateClassRequest, options?: RequestInit) => Promise<Class>;
export declare const getUpdateClassMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateClass>>, TError, {
        classId: number;
        data: BodyType<UpdateClassRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateClass>>, TError, {
    classId: number;
    data: BodyType<UpdateClassRequest>;
}, TContext>;
export type UpdateClassMutationResult = NonNullable<Awaited<ReturnType<typeof updateClass>>>;
export type UpdateClassMutationBody = BodyType<UpdateClassRequest>;
export type UpdateClassMutationError = ErrorType<unknown>;
/**
 * @summary Update/reschedule a class (teacher only)
 */
export declare const useUpdateClass: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateClass>>, TError, {
        classId: number;
        data: BodyType<UpdateClassRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateClass>>, TError, {
    classId: number;
    data: BodyType<UpdateClassRequest>;
}, TContext>;
/**
 * @summary Delete a class (teacher only)
 */
export declare const getDeleteClassUrl: (classId: number) => string;
export declare const deleteClass: (classId: number, options?: RequestInit) => Promise<SuccessResponse>;
export declare const getDeleteClassMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteClass>>, TError, {
        classId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteClass>>, TError, {
    classId: number;
}, TContext>;
export type DeleteClassMutationResult = NonNullable<Awaited<ReturnType<typeof deleteClass>>>;
export type DeleteClassMutationError = ErrorType<unknown>;
/**
 * @summary Delete a class (teacher only)
 */
export declare const useDeleteClass: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteClass>>, TError, {
        classId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteClass>>, TError, {
    classId: number;
}, TContext>;
/**
 * @summary List announcements
 */
export declare const getListAnnouncementsUrl: () => string;
export declare const listAnnouncements: (options?: RequestInit) => Promise<Announcement[]>;
export declare const getListAnnouncementsQueryKey: () => readonly ["/api/announcements"];
export declare const getListAnnouncementsQueryOptions: <TData = Awaited<ReturnType<typeof listAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnnouncements>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAnnouncements>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAnnouncementsQueryResult = NonNullable<Awaited<ReturnType<typeof listAnnouncements>>>;
export type ListAnnouncementsQueryError = ErrorType<unknown>;
/**
 * @summary List announcements
 */
export declare function useListAnnouncements<TData = Awaited<ReturnType<typeof listAnnouncements>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAnnouncements>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create announcement (teacher only)
 */
export declare const getCreateAnnouncementUrl: () => string;
export declare const createAnnouncement: (createAnnouncementRequest: CreateAnnouncementRequest, options?: RequestInit) => Promise<Announcement>;
export declare const getCreateAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
        data: BodyType<CreateAnnouncementRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
    data: BodyType<CreateAnnouncementRequest>;
}, TContext>;
export type CreateAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof createAnnouncement>>>;
export type CreateAnnouncementMutationBody = BodyType<CreateAnnouncementRequest>;
export type CreateAnnouncementMutationError = ErrorType<unknown>;
/**
 * @summary Create announcement (teacher only)
 */
export declare const useCreateAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
        data: BodyType<CreateAnnouncementRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAnnouncement>>, TError, {
    data: BodyType<CreateAnnouncementRequest>;
}, TContext>;
/**
 * @summary Delete announcement (teacher only)
 */
export declare const getDeleteAnnouncementUrl: (announcementId: number) => string;
export declare const deleteAnnouncement: (announcementId: number, options?: RequestInit) => Promise<SuccessResponse>;
export declare const getDeleteAnnouncementMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
        announcementId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
    announcementId: number;
}, TContext>;
export type DeleteAnnouncementMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAnnouncement>>>;
export type DeleteAnnouncementMutationError = ErrorType<unknown>;
/**
 * @summary Delete announcement (teacher only)
 */
export declare const useDeleteAnnouncement: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
        announcementId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAnnouncement>>, TError, {
    announcementId: number;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map