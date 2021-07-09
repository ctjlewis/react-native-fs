/**
 * React Native FS
 * @flow
 */
declare var RNFSManager: any;
declare var NativeEventEmitter: any;
declare var RNFS_NativeEventEmitter: any;
declare var base64: any;
declare var utf8: any;
declare var isIOS: boolean;
declare var RNFSFileTypeRegular: any;
declare var RNFSFileTypeDirectory: any;
declare var jobId: number;
declare var getJobId: () => number;
declare var normalizeFilePath: (path: string) => string;
declare type MkdirOptions = {
    NSURLIsExcludedFromBackupKey?: boolean;
    NSFileProtectionKey?: string;
};
declare type FileOptions = {
    NSFileProtectionKey?: string;
};
declare type ReadDirItem = {
    ctime?: Date;
    mtime?: Date;
    name: string;
    path: string;
    size: string;
    isFile: () => boolean;
    isDirectory: () => boolean;
};
declare type StatResult = {
    name?: string;
    path: string;
    size: string;
    mode: number;
    ctime: number;
    mtime: number;
    originalFilepath: string;
    isFile: () => boolean;
    isDirectory: () => boolean;
};
declare type Headers = {
    [name: string]: string;
};
declare type Fields = {
    [name: string]: string;
};
declare type DownloadFileOptions = {
    fromUrl: string;
    toFile: string;
    headers?: Headers;
    background?: boolean;
    discretionary?: boolean;
    cacheable?: boolean;
    progressInterval?: number;
    progressDivider?: number;
    begin?: (res: DownloadBeginCallbackResult) => void;
    progress?: (res: DownloadProgressCallbackResult) => void;
    resumable?: () => void;
    connectionTimeout?: number;
    readTimeout?: number;
    backgroundTimeout?: number;
};
declare type DownloadBeginCallbackResult = {
    jobId: number;
    statusCode: number;
    contentLength: number;
    headers: Headers;
};
declare type DownloadProgressCallbackResult = {
    jobId: number;
    contentLength: number;
    bytesWritten: number;
};
declare type DownloadResult = {
    jobId: number;
    statusCode: number;
    bytesWritten: number;
};
declare type UploadFileOptions = {
    toUrl: string;
    binaryStreamOnly?: boolean;
    files: UploadFileItem[];
    headers?: Headers;
    fields?: Fields;
    method?: string;
    beginCallback?: (res: UploadBeginCallbackResult) => void;
    progressCallback?: (res: UploadProgressCallbackResult) => void;
    begin?: (res: UploadBeginCallbackResult) => void;
    progress?: (res: UploadProgressCallbackResult) => void;
};
declare type UploadFileItem = {
    name: string;
    filename: string;
    filepath: string;
    filetype: string;
};
declare type UploadBeginCallbackResult = {
    jobId: number;
};
declare type UploadProgressCallbackResult = {
    jobId: number;
    totalBytesExpectedToSend: number;
    totalBytesSent: number;
};
declare type UploadResult = {
    jobId: number;
    statusCode: number;
    headers: Headers;
    body: string;
};
declare type FSInfoResult = {
    totalSpace: number;
    freeSpace: number;
};
/**
 * Generic function used by readFile and readFileAssets
 */
declare function readFileGeneric(filepath: string, command: Function, encodingOrOptions?: string): any;
/**
 * Generic function used by readDir and readDirAssets
 */
declare function readDirGeneric(dirpath: string, command: Function): any;
declare var RNFS: {
    mkdir(filepath: string, options?: MkdirOptions): Promise<void>;
    moveFile(filepath: string, destPath: string, options?: FileOptions): Promise<void>;
    copyFile(filepath: string, destPath: string, options?: FileOptions): Promise<void>;
    pathForBundle(bundleNamed: string): Promise<string>;
    pathForGroup(groupName: string): Promise<string>;
    getFSInfo(): Promise<FSInfoResult>;
    getAllExternalFilesDirs(): Promise<string>;
    unlink(filepath: string): Promise<void>;
    exists(filepath: string): Promise<boolean>;
    stopDownload(jobId: number): void;
    resumeDownload(jobId: number): void;
    isResumable(jobId: number): Promise<boolean>;
    stopUpload(jobId: number): void;
    completeHandlerIOS(jobId: number): void;
    readDir(dirpath: string): Promise<ReadDirItem[]>;
    readDirAssets(dirpath: string): Promise<ReadDirItem[]>;
    existsAssets(filepath: string): any;
    existsRes(filename: string): any;
    readdir(dirpath: string): Promise<string[]>;
    setReadable(filepath: string, readable: boolean, ownerOnly: boolean): Promise<boolean>;
    stat(filepath: string): Promise<StatResult>;
    readFile(filepath: string, encodingOrOptions?: any): Promise<string>;
    read(filepath: string, length?: number, position?: number, encodingOrOptions?: any): Promise<string>;
    readFileAssets(filepath: string, encodingOrOptions?: any): Promise<string>;
    readFileRes(filename: string, encodingOrOptions?: any): Promise<string>;
    hash(filepath: string, algorithm: string): Promise<string>;
    copyFileAssets(filepath: string, destPath: string): any;
    copyFileRes(filename: string, destPath: string): any;
    copyAssetsFileIOS(imageUri: string, destPath: string, width: number, height: number, scale?: number, compression?: number, resizeMode?: string): Promise<string>;
    copyAssetsVideoIOS(imageUri: string, destPath: string): Promise<string>;
    writeFile(filepath: string, contents: string, encodingOrOptions?: any): Promise<void>;
    appendFile(filepath: string, contents: string, encodingOrOptions?: any): Promise<void>;
    write(filepath: string, contents: string, position?: number, encodingOrOptions?: any): Promise<void>;
    downloadFile(options: DownloadFileOptions): {
        jobId: number;
        promise: Promise<DownloadResult>;
    };
    uploadFiles(options: UploadFileOptions): {
        jobId: number;
        promise: Promise<UploadResult>;
    };
    touch(filepath: string, mtime?: Date, ctime?: Date): Promise<void>;
    scanFile(path: string): Promise<ReadDirItem[]>;
    MainBundlePath: any;
    CachesDirectoryPath: any;
    ExternalCachesDirectoryPath: any;
    DocumentDirectoryPath: any;
    DownloadDirectoryPath: any;
    ExternalDirectoryPath: any;
    ExternalStorageDirectoryPath: any;
    TemporaryDirectoryPath: any;
    LibraryDirectoryPath: any;
    PicturesDirectoryPath: any;
    FileProtectionKeys: any;
};
