export const ADD_EVENT = "ADD_EVENT";
export const LOAD_ALL_EVENTS = "LOAD_ALL_EVENTS";
export const REMOVE_ALL_EVENTS = "REMOVE_ALL_EVENTS";

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

export const LOAD_ALL_CERTIFICATES = "LOAD_ALL_CERTIFICATES";
export const REMOVE_ALL_CERTIFICATES = "REMOVE_ALL_CERTIFICATES";
export const VERIFY_CERTIFICATE = "VERIFY_CERTIFICATE";
export const SELECT_SIGNER_CERTIFICATE = "SELECT_SIGNER_CERTIFICATE";

export const LOAD_ALL_CONTAINERS = "LOAD_ALL_CONTAINERS";
export const REMOVE_ALL_CONTAINERS = "REMOVE_ALL_CONTAINERS";
export const GET_CERTIFICATE_FROM_CONTAINER = "GET_CERTIFICATE_FROM_CONTAINER";
export const ACTIVE_CONTAINER = "ACTIVE_CONTAINER";

export const VERIFY_SIGNATURE = "VERIFY_SIGNATURE";
export const CHANGE_SIGNATURE_ENCODING = "CHANGE_SIGNATURE_ENCODING";
export const CHANGE_SIGNATURE_DETACHED = "CHANGE_SIGNATURE_DETACHED";
export const CHANGE_SIGNATURE_TIMESTAMP = "CHANGE_SIGNATURE_TIMESTAMP";
export const CHANGE_SIGNATURE_OUTFOLDER = "CHANGE_SIGNATURE_OUTFOLDER";
export const PACKAGE_SIGN = "PACKAGE_SIGN";
export const PACKAGE_VERIFY = "PACKAGE_VERIFY";
export const PACKAGE_ENCRYPT = "PACKAGE_ENCRYPT";
export const PACKAGE_DECRYPT = "PACKAGE_DECRYPT";

export const ADD_RECIPIENT_CERTIFICATE = "ADD_RECIPIENT_CERTIFICATE";
export const DELETE_RECIPIENT_CERTIFICATE = "DELETE_RECIPIENT_CERTIFICATE";
export const CHANGE_ECRYPT_ENCODING = "CHANGE_ECRYPT_ENCODING";
export const CHANGE_DELETE_FILES_AFTER_ENCRYPT = "CHANGE_DELETE_FILES_AFTER_ENCRYPT";
export const CHANGE_ARCHIVE_FILES_BEFORE_ENCRYPT = "CHANGE_ARCHIVE_FILES_BEFORE_ENCRYPT";
export const CHANGE_ENCRYPT_OUTFOLDER = "CHANGE_ENCRYPT_OUTFOLDER";

export const PACKAGE_SELECT_FILE = "PACKAGE_SELECT_FILE";
export const PACKAGE_DELETE_FILE = "PACKAGE_DELETE_FILE";
export const SELECT_FILE = "SELECT_FILE";
export const ACTIVE_FILE = "ACTIVE_FILE";
export const DELETE_FILE = "DELETE_FILE";
export const REMOVE_ALL_FILES = "REMOVE_ALL_FILES";

export const ADD_REMOTE_FILE = "ADD_REMOTE_FILE";
export const REMOVE_ALL_REMOTE_FILES = "REMOVE_ALL_REMOTE_FILES";
export const DOWNLOAD_REMOTE_FILE = "DOWNLOAD_REMOTE_FILE";
export const UPLOAD_FILE = "UPLOAD_FILE";
export const SET_REMOTE_FILES_PARAMS = "SET_REMOTE_FILES_PARAMS";

export const LOAD_LICENSE = "LOAD_LICENSE";
export const VERIFY_LICENSE = "VERIFY_LICENSE";

export const SUCCESS = "_SUCCESS";
export const FAIL = "_FAIL";
export const START = "_START";

export const DER = "DER";
export const BASE64 = "BASE-64";

export const CHANGE_LOCALE = "CHANGE_LOCALE";
export const RU = "RU";
export const EN = "EN";

export const MY = "MY";
export const ADDRESS_BOOK = "AddressBook";
export const ROOT = "ROOT";
export const TRUST = "TRUST";
export const CA = "CA";
export const REQUEST = "Request";

export const PROVIDER_SYSTEM = "PROVIDER_SYSTEM";
export const PROVIDER_MICROSOFT = "PROVIDER_MICROSOFT";
export const PROVIDER_CRYPTOPRO = "PROVIDER_CRYPTOPRO";

export const DEFAULT_PATH: string = window.DEFAULT_PATH;
export const DEFAULT_CERTSTORE_PATH: string = window.DEFAULT_CERTSTORE_PATH;
export const HOME_DIR: string = window.HOME_DIR;
export const RESOURCES_PATH: string = window.RESOURCES_PATH;
export const PLATFORM: string = window.PLATFORM;
export const TMP_DIR: string = window.TMP_DIR;
export const LICENSE_PATH = window.LICENSE_PATH;
export const SETTINGS_JSON = window.SETTINGS_JSON;
export const TRUSTED_CRYPTO_LOG = window.TRUSTED_CRYPTO_LOG;
export const APP_LOG_FILE = window.APP_LOG_FILE;
export const APP_ERRORS_LOG_FILE = window.APP_ERRORS_LOG_FILE;
export const USER_NAME = window.USER_NAME;

export const SIGNWITHDIGEST_GOST3410_12_256 = "GOST R 34.10-2012 with 34.11-2012 256-bit";
export const SIGNWITHDIGEST_GOST3410_12_512 = "GOST R 34.10-2012 with 34.11-2012 512-bit";
export const GOSTR3411_94_WITH_GOSTR3410_2001 = "GOST R 34.11-94 with GOST R 34.10-2001";
export const GOSR3411_94_WITH_GOSTR3410_94 = "GOST R 34.11-94 with GOST R 34.10-94";
export const GOST3410_12_256 = "GOST R 34.10-2012 with 256-bit key";
export const GOST3410_12_512 = "GOST R 34.10-2012 with 512-bit key";
export const MD_GOST94 = "GOST R 34.11-94";
export const MD_GOST12_256 = "GOST R 34.11-2012 256-bit length";
export const MD_GOST12_512 = "GOST R 34.11-2012 512-bit length";
export const GOST2001 = "GOST R 34.10-2001";
export const GOST94 = "GOST R 34.10-94";
export const GOST89 = "GOST 28147-89";

export const ALG_RSA = "RSA";
export const ALG_GOST2001 = "gost2001";
export const ALG_GOST12_256 = "gost2012-256";
export const ALG_GOST12_512 = "gost2012-512";

export const ADD_CONNECTION = "ADD_CONNECTION";
export const REMOVE_CONNECTION = "REMOVE_CONNECTION";
export const SET_CONNECTED = "SET_CONNECTED";
export const SET_DISCONNECTED = "SET_DISCONNECTED";

export const LOCATION_SIGN = "/sign";
export const LOCATION_ENCRYPT = "/encrypt";
export const LOCATION_CERTIFICATES = "/certificate";
export const LOCATION_CONTAINERS = "/containers";
export const LOCATION_ABOUT = "/about";
export const LOCATION_LICENSE = "/license";
export const LOCATION_HELP = "/help";
export const LOCATION_EVENTS = "/events";

export const KEY_USAGE_SIGN = "sign";
export const KEY_USAGE_ENCIPHERMENT  = "encipherment";
export const KEY_USAGE_SIGN_AND_ENCIPHERMENT  = "signAndEncipherment";

export const REQUEST_TEMPLATE_DEFAULT = "default";
export const REQUEST_TEMPLATE_KEP_IP = "kepIp";
export const REQUEST_TEMPLATE_KEP_FIZ = "kepFiz";
export const REQUEST_TEMPLATE_ADDITIONAL = "additional";
