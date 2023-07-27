/* tslint:disable */
/* eslint-disable */
/**
 * Kubevela api doc
 * Kubevela api doc
 *
 * The version of the OpenAPI document: v1beta1
 * Contact: feedback@mail.kubevela.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 * @export
 * @interface V1ObjectReference
 */
export interface V1ObjectReference {
    /**
     * API version of the referent.
     * @type {string}
     * @memberof V1ObjectReference
     */
    apiVersion?: string;
    /**
     * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
     * @type {string}
     * @memberof V1ObjectReference
     */
    fieldPath?: string;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ObjectReference
     */
    kind?: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1ObjectReference
     */
    name?: string;
    /**
     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
     * @type {string}
     * @memberof V1ObjectReference
     */
    namespace?: string;
    /**
     * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     * @type {string}
     * @memberof V1ObjectReference
     */
    resourceVersion?: string;
    /**
     * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
     * @type {string}
     * @memberof V1ObjectReference
     */
    uid?: string;
}

/**
 * Check if a given object implements the V1ObjectReference interface.
 */
export function instanceOfV1ObjectReference(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ObjectReferenceFromJSON(json: any): V1ObjectReference {
    return V1ObjectReferenceFromJSONTyped(json, false);
}

export function V1ObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ObjectReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'fieldPath': !exists(json, 'fieldPath') ? undefined : json['fieldPath'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'resourceVersion': !exists(json, 'resourceVersion') ? undefined : json['resourceVersion'],
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
    };
}

export function V1ObjectReferenceToJSON(value?: V1ObjectReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'fieldPath': value.fieldPath,
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
        'resourceVersion': value.resourceVersion,
        'uid': value.uid,
    };
}

