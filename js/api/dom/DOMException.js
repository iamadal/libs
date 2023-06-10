/*
 *
 * Constructor: DOMException()
 *
 *
 *
 */

 /*
   The DOMException interface represents an abnormal event (called an exception) that occurs as a result of calling a method or accessing a property of a web API. This is basically how error conditions are described in web APIs.
   Each exception has a name, which is a short "PascalCase"-style string identifying the error or abnormal condition.

 */


 // Properties 

DOMException.code //  Read only Returns a short that contains one of the error code constants, or 0 if none match. This field is used for historical reasons. New DOM exceptions don't use this anymore: they put this info in the DOMException.name attribute.
DOMException.message // Read only Returns a DOMString representing a message or description associated with the given error name.
DOMException.name // Read only Returns a DOMString that contains one of the strings associated with an error name.


// Errors

IndexSizeError // The index is not in the allowed range. For example, this can be thrown by the Range object. (Legacy code value: 1 and legacy constant name: INDEX_SIZE_ERR)
HierarchyRequestError //The node tree hierarchy is not correct. (Legacy code value: 3 and legacy constant name: HIERARCHY_REQUEST_ERR)
WrongDocumentError // The object is in the wrong Document. (Legacy code value: 4 and legacy constant name: WRONG_DOCUMENT_ERR)
InvalidCharacterError // The string contains invalid characters. (Legacy code value: 5 and legacy constant name: INVALID_CHARACTER_ERR)
NoModificationAllowedError // The object cannot be modified. (Legacy code value: 7 and legacy constant name: NO_MODIFICATION_ALLOWED_ERR)
NotFoundError //The object cannot be found here. (Legacy code value: 8 and legacy constant name: NOT_FOUND_ERR)
NotSupportedError //The operation is not supported. (Legacy code value: 9 and legacy constant name: NOT_SUPPORTED_ERR)
InvalidStateError //The object is in an invalid state. (Legacy code value: 11 and legacy constant name: INVALID_STATE_ERR)
InUseAttributeError //The attribute is in use. (Legacy code value: 10 and legacy constant name: INUSE_ATTRIBUTE_ERR) SyntaxError The string did not match the expected pattern. (Legacy code value: 12 and legacy constant name: SYNTAX_ERR)
InvalidModificationError // The object cannot be modified in this way. (Legacy code value: 13 and legacy constant name: INVALID_MODIFICATION_ERR)
NamespaceError // The operation is not allowed by Namespaces in XML. (Legacy code value: 14 and legacy constant name: NAMESPACE_ERR)
InvalidAccessError // The object does not support the operation or argument. (Legacy code value: 15 and legacy constant name: INVALID_ACCESS_ERR)
TypeMismatchError // The type of the object does not match the expected type. (Legacy code value: 17 and legacy constant name: TYPE_MISMATCH_ERR) This value is deprecated; the JavaScript TypeError exception is now raised instead of a DOMException with this value.
SecurityError //The operation is insecure. (Legacy code value: 18 and legacy constant name: SECURITY_ERR)
NetworkError  // A network error occurred. (Legacy code value: 19 and legacy constant name: NETWORK_ERR)
AbortError // The operation was aborted. (Legacy code value: 20 and legacy constant name: ABORT_ERR)
URLMismatchError //The given URL does not match another URL. (Legacy code value: 21 and legacy constant name: URL_MISMATCH_ERR)
QuotaExceededError //The quota has been exceeded. (Legacy code value: 22 and legacy constant name: QUOTA_EXCEEDED_ERR)
TimeoutError //The operation timed out. (Legacy code value: 23 and legacy constant name: TIMEOUT_ERR)
InvalidNodeTypeError //The node is incorrect or has an incorrect ancestor for this operation. (Legacy code value: 24 and legacy constant name: INVALID_NODE_TYPE_ERR)
DataCloneError //The object can not be cloned. (Legacy code value: 25 and legacy constant name: DATA_CLONE_ERR)
EncodingError //The encoding or decoding operation failed (No legacy code value and constant name).
NotReadableError //The input/output read operation failed (No legacy code value and constant name).
UnknownError //The operation failed for an unknown transient reason (e.g. out of memory) (No legacy code value and constant name).
ConstraintError //A mutation operation in a transaction failed because a constraint was not satisfied (No legacy code value and constant name).
DataError //Provided data is inadequate (No legacy code value and constant name).
TransactionInactiveError //A request was placed against a transaction that is currently not active or is finished (No legacy code value and constant name).
ReadOnlyError //The mutating operation was attempted in a "readonly" transaction (No legacy code value and constant name).
VersionError //An attempt was made to open a database using a lower version than the existing version (No legacy code value and constant name).
OperationError //The operation failed for an operation-specific reason (No legacy code value and constant name).
NotAllowedError //The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission (No legacy code value and constant name).
