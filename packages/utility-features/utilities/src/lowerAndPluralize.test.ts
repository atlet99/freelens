/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { lowerAndPluralize } from "./lowerAndPluralize";

// ...existing code...

describe("lowerAndPluralize tests", () => {
  const cases: Array<[string, string]> = [
    ["APIService", "apiservices"],
    ["Binding", "bindings"],
    ["Bucket", "buckets"],
    ["CertificateRequest", "certificaterequests"],
    ["Certificate", "certificates"],
    ["CertificateSigningRequest", "certificatesigningrequests"],
    ["Challenge", "challenges"],
    ["ClusterIssuer", "clusterissuers"],
    ["ClusterRoleBinding", "clusterrolebindings"],
    ["ClusterRole", "clusterroles"],
    ["CniNode", "cninodes"],
    ["ComponentStatus", "componentstatuses"],
    ["ConfigMap", "configmaps"],
    ["ControllerRevision", "controllerrevisions"],
    ["CronJob", "cronjobs"],
    ["CSIDriver", "csidrivers"],
    ["CSINode", "csinodes"],
    ["CSIStorageCapacity", "csistoragecapacities"],
    ["CustomResourceDefinition", "customresourcedefinitions"],
    ["DaemonSet", "daemonsets"],
    ["Deployment", "deployments"],
    ["DeviceClass", "deviceclasses"],
    ["DNSEndpoint", "dnsendpoints"],
    ["Endpoint", "endpoints"],
    ["EndpointSlice", "endpointslices"],
    ["Event", "events"],
    ["FlowSchema", "flowschemas"],
    ["FluxInstance", "fluxinstances"],
    ["FluxReport", "fluxreports"],
    ["GitRepository", "gitrepositories"],
    ["HelmChart", "helmcharts"],
    ["HelmRelease", "helmreleases"],
    ["HelmRepository", "helmrepositories"],
    ["HorizontalPodAutoscaler", "horizontalpodautoscalers"],
    ["IngressClass", "ingressclasses"],
    ["IngressClassParam", "ingressclassparams"],
    ["Ingress", "ingresses"],
    ["IPAddress", "ipaddresses"],
    ["Issuer", "issuers"],
    ["Job", "jobs"],
    ["Kustomization", "kustomizations"],
    ["Lease", "leases"],
    ["LimitRange", "limitranges"],
    ["LocalSubjectAccessReview", "localsubjectaccessreviews"],
    ["MutatingWebhookConfiguration", "mutatingwebhookconfigurations"],
    ["Namespace", "namespaces"],
    ["NetworkPolicy", "networkpolicies"],
    ["NodeClaim", "nodeclaims"],
    ["NodeClass", "nodeclasses"],
    ["NodeDiagnostic", "nodediagnostics"],
    ["NodePool", "nodepools"],
    ["Node", "nodes"],
    ["OCIRepository", "ocirepositories"],
    ["Order", "orders"],
    ["PersistentVolumeClaim", "persistentvolumeclaims"],
    ["PersistentVolume", "persistentvolumes"],
    ["PodDisruptionBudget", "poddisruptionbudgets"],
    ["Pod", "pods"],
    ["PodTemplate", "podtemplates"],
    ["PolicyEndpoint", "policyendpoints"],
    ["PriorityClass", "priorityclasses"],
    ["PriorityLevelConfiguration", "prioritylevelconfigurations"],
    ["ReplicaSet", "replicasets"],
    ["ReplicationController", "replicationcontrollers"],
    ["ResourceClaim", "resourceclaims"],
    ["ResourceClaimTemplate", "resourceclaimtemplates"],
    ["ResourceQuota", "resourcequotas"],
    ["ResourceSetInputProvider", "resourcesetinputproviders"],
    ["ResourceSet", "resourcesets"],
    ["ResourceSlice", "resourceslices"],
    ["RoleBinding", "rolebindings"],
    ["Role", "roles"],
    ["RuntimeClass", "runtimeclasses"],
    ["Secret", "secrets"],
    ["SecurityGroupPolicy", "securitygrouppolicies"],
    ["SelfSubjectAccessReview", "selfsubjectaccessreviews"],
    ["SelfSubjectReview", "selfsubjectreviews"],
    ["SelfSubjectRulesReview", "selfsubjectrulesreviews"],
    ["ServiceAccount", "serviceaccounts"],
    ["ServiceCIDR", "servicecidrs"],
    ["Service", "services"],
    ["StatefulSet", "statefulsets"],
    ["StorageClass", "storageclasses"],
    ["SubjectAccessReview", "subjectaccessreviews"],
    ["TargetGroupBinding", "targetgroupbindings"],
    ["TokenReview", "tokenreviews"],
    ["ValidatingAdmissionPolicy", "validatingadmissionpolicies"],
    ["ValidatingAdmissionPolicyBinding", "validatingadmissionpolicybindings"],
    ["ValidatingWebhookConfiguration", "validatingwebhookconfigurations"],
    ["VolumeAttachment", "volumeattachments"],
    ["VolumeAttributesClass", "volumeattributesclasses"],
  ];

  test.each(cases)("should convert %s to %s", (canonical, expected) => {
    expect(lowerAndPluralize(canonical)).toBe(expected);
  });
});
