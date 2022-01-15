import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AcceptEnterpriseAdministratorInvitationPayloadKeySpecifier = ('clientMutationId' | 'invitation' | 'message' | AcceptEnterpriseAdministratorInvitationPayloadKeySpecifier)[];
export type AcceptEnterpriseAdministratorInvitationPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	invitation?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AcceptTopicSuggestionPayloadKeySpecifier = ('clientMutationId' | 'topic' | AcceptTopicSuggestionPayloadKeySpecifier)[];
export type AcceptTopicSuggestionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActorKeySpecifier = ('avatarUrl' | 'login' | 'resourcePath' | 'url' | ActorKeySpecifier)[];
export type ActorFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActorLocationKeySpecifier = ('city' | 'country' | 'countryCode' | 'region' | 'regionCode' | ActorLocationKeySpecifier)[];
export type ActorLocationFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	regionCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddAssigneesToAssignablePayloadKeySpecifier = ('assignable' | 'clientMutationId' | AddAssigneesToAssignablePayloadKeySpecifier)[];
export type AddAssigneesToAssignablePayloadFieldPolicy = {
	assignable?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddCommentPayloadKeySpecifier = ('clientMutationId' | 'commentEdge' | 'subject' | 'timelineEdge' | AddCommentPayloadKeySpecifier)[];
export type AddCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	commentEdge?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	timelineEdge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddDiscussionCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | AddDiscussionCommentPayloadKeySpecifier)[];
export type AddDiscussionCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddEnterpriseSupportEntitlementPayloadKeySpecifier = ('clientMutationId' | 'message' | AddEnterpriseSupportEntitlementPayloadKeySpecifier)[];
export type AddEnterpriseSupportEntitlementPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddLabelsToLabelablePayloadKeySpecifier = ('clientMutationId' | 'labelable' | AddLabelsToLabelablePayloadKeySpecifier)[];
export type AddLabelsToLabelablePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	labelable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddProjectCardPayloadKeySpecifier = ('cardEdge' | 'clientMutationId' | 'projectColumn' | AddProjectCardPayloadKeySpecifier)[];
export type AddProjectCardPayloadFieldPolicy = {
	cardEdge?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	projectColumn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddProjectColumnPayloadKeySpecifier = ('clientMutationId' | 'columnEdge' | 'project' | AddProjectColumnPayloadKeySpecifier)[];
export type AddProjectColumnPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	columnEdge?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddProjectNextItemPayloadKeySpecifier = ('clientMutationId' | 'projectNextItem' | AddProjectNextItemPayloadKeySpecifier)[];
export type AddProjectNextItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	projectNextItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddPullRequestReviewCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | 'commentEdge' | AddPullRequestReviewCommentPayloadKeySpecifier)[];
export type AddPullRequestReviewCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	commentEdge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddPullRequestReviewPayloadKeySpecifier = ('clientMutationId' | 'pullRequestReview' | 'reviewEdge' | AddPullRequestReviewPayloadKeySpecifier)[];
export type AddPullRequestReviewPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewEdge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddPullRequestReviewThreadPayloadKeySpecifier = ('clientMutationId' | 'thread' | AddPullRequestReviewThreadPayloadKeySpecifier)[];
export type AddPullRequestReviewThreadPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddReactionPayloadKeySpecifier = ('clientMutationId' | 'reaction' | 'subject' | AddReactionPayloadKeySpecifier)[];
export type AddReactionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddStarPayloadKeySpecifier = ('clientMutationId' | 'starrable' | AddStarPayloadKeySpecifier)[];
export type AddStarPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	starrable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddUpvotePayloadKeySpecifier = ('clientMutationId' | 'subject' | AddUpvotePayloadKeySpecifier)[];
export type AddUpvotePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddVerifiableDomainPayloadKeySpecifier = ('clientMutationId' | 'domain' | AddVerifiableDomainPayloadKeySpecifier)[];
export type AddVerifiableDomainPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddedToProjectEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'id' | 'project' | 'projectCard' | 'projectColumnName' | AddedToProjectEventKeySpecifier)[];
export type AddedToProjectEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectCard?: FieldPolicy<any> | FieldReadFunction<any>,
	projectColumnName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppKeySpecifier = ('createdAt' | 'databaseId' | 'description' | 'id' | 'ipAllowListEntries' | 'logoBackgroundColor' | 'logoUrl' | 'name' | 'slug' | 'updatedAt' | 'url' | AppKeySpecifier)[];
export type AppFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEntries?: FieldPolicy<any> | FieldReadFunction<any>,
	logoBackgroundColor?: FieldPolicy<any> | FieldReadFunction<any>,
	logoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApproveDeploymentsPayloadKeySpecifier = ('clientMutationId' | 'deployments' | ApproveDeploymentsPayloadKeySpecifier)[];
export type ApproveDeploymentsPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deployments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApproveVerifiableDomainPayloadKeySpecifier = ('clientMutationId' | 'domain' | ApproveVerifiableDomainPayloadKeySpecifier)[];
export type ApproveVerifiableDomainPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArchiveRepositoryPayloadKeySpecifier = ('clientMutationId' | 'repository' | ArchiveRepositoryPayloadKeySpecifier)[];
export type ArchiveRepositoryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignableKeySpecifier = ('assignees' | AssignableKeySpecifier)[];
export type AssignableFieldPolicy = {
	assignees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignedEventKeySpecifier = ('actor' | 'assignable' | 'assignee' | 'createdAt' | 'id' | 'user' | AssignedEventKeySpecifier)[];
export type AssignedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	assignable?: FieldPolicy<any> | FieldReadFunction<any>,
	assignee?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'operationType' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | AuditEntryKeySpecifier)[];
export type AuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutoMergeDisabledEventKeySpecifier = ('actor' | 'createdAt' | 'disabler' | 'id' | 'pullRequest' | 'reason' | 'reasonCode' | AutoMergeDisabledEventKeySpecifier)[];
export type AutoMergeDisabledEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	disabler?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	reasonCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutoMergeEnabledEventKeySpecifier = ('actor' | 'createdAt' | 'enabler' | 'id' | 'pullRequest' | AutoMergeEnabledEventKeySpecifier)[];
export type AutoMergeEnabledEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabler?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutoMergeRequestKeySpecifier = ('authorEmail' | 'commitBody' | 'commitHeadline' | 'enabledAt' | 'enabledBy' | 'mergeMethod' | 'pullRequest' | AutoMergeRequestKeySpecifier)[];
export type AutoMergeRequestFieldPolicy = {
	authorEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	commitBody?: FieldPolicy<any> | FieldReadFunction<any>,
	commitHeadline?: FieldPolicy<any> | FieldReadFunction<any>,
	enabledAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabledBy?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutoRebaseEnabledEventKeySpecifier = ('actor' | 'createdAt' | 'enabler' | 'id' | 'pullRequest' | AutoRebaseEnabledEventKeySpecifier)[];
export type AutoRebaseEnabledEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabler?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutoSquashEnabledEventKeySpecifier = ('actor' | 'createdAt' | 'enabler' | 'id' | 'pullRequest' | AutoSquashEnabledEventKeySpecifier)[];
export type AutoSquashEnabledEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabler?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutomaticBaseChangeFailedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'newBase' | 'oldBase' | 'pullRequest' | AutomaticBaseChangeFailedEventKeySpecifier)[];
export type AutomaticBaseChangeFailedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	newBase?: FieldPolicy<any> | FieldReadFunction<any>,
	oldBase?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AutomaticBaseChangeSucceededEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'newBase' | 'oldBase' | 'pullRequest' | AutomaticBaseChangeSucceededEventKeySpecifier)[];
export type AutomaticBaseChangeSucceededEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	newBase?: FieldPolicy<any> | FieldReadFunction<any>,
	oldBase?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BaseRefChangedEventKeySpecifier = ('actor' | 'createdAt' | 'currentRefName' | 'databaseId' | 'id' | 'previousRefName' | 'pullRequest' | BaseRefChangedEventKeySpecifier)[];
export type BaseRefChangedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentRefName?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	previousRefName?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BaseRefDeletedEventKeySpecifier = ('actor' | 'baseRefName' | 'createdAt' | 'id' | 'pullRequest' | BaseRefDeletedEventKeySpecifier)[];
export type BaseRefDeletedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRefName?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BaseRefForcePushedEventKeySpecifier = ('actor' | 'afterCommit' | 'beforeCommit' | 'createdAt' | 'id' | 'pullRequest' | 'ref' | BaseRefForcePushedEventKeySpecifier)[];
export type BaseRefForcePushedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	afterCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	beforeCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlameKeySpecifier = ('ranges' | BlameKeySpecifier)[];
export type BlameFieldPolicy = {
	ranges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlameRangeKeySpecifier = ('age' | 'commit' | 'endingLine' | 'startingLine' | BlameRangeKeySpecifier)[];
export type BlameRangeFieldPolicy = {
	age?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	endingLine?: FieldPolicy<any> | FieldReadFunction<any>,
	startingLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlobKeySpecifier = ('abbreviatedOid' | 'byteSize' | 'commitResourcePath' | 'commitUrl' | 'id' | 'isBinary' | 'isTruncated' | 'oid' | 'repository' | 'text' | BlobKeySpecifier)[];
export type BlobFieldPolicy = {
	abbreviatedOid?: FieldPolicy<any> | FieldReadFunction<any>,
	byteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	commitResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	commitUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBinary?: FieldPolicy<any> | FieldReadFunction<any>,
	isTruncated?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotKeySpecifier = ('avatarUrl' | 'createdAt' | 'databaseId' | 'id' | 'login' | 'resourcePath' | 'updatedAt' | 'url' | BotKeySpecifier)[];
export type BotFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BranchProtectionRuleKeySpecifier = ('allowsDeletions' | 'allowsForcePushes' | 'branchProtectionRuleConflicts' | 'bypassForcePushAllowances' | 'bypassPullRequestAllowances' | 'creator' | 'databaseId' | 'dismissesStaleReviews' | 'id' | 'isAdminEnforced' | 'matchingRefs' | 'pattern' | 'pushAllowances' | 'repository' | 'requiredApprovingReviewCount' | 'requiredStatusCheckContexts' | 'requiredStatusChecks' | 'requiresApprovingReviews' | 'requiresCodeOwnerReviews' | 'requiresCommitSignatures' | 'requiresConversationResolution' | 'requiresLinearHistory' | 'requiresStatusChecks' | 'requiresStrictStatusChecks' | 'restrictsPushes' | 'restrictsReviewDismissals' | 'reviewDismissalAllowances' | BranchProtectionRuleKeySpecifier)[];
export type BranchProtectionRuleFieldPolicy = {
	allowsDeletions?: FieldPolicy<any> | FieldReadFunction<any>,
	allowsForcePushes?: FieldPolicy<any> | FieldReadFunction<any>,
	branchProtectionRuleConflicts?: FieldPolicy<any> | FieldReadFunction<any>,
	bypassForcePushAllowances?: FieldPolicy<any> | FieldReadFunction<any>,
	bypassPullRequestAllowances?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	dismissesStaleReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdminEnforced?: FieldPolicy<any> | FieldReadFunction<any>,
	matchingRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	pushAllowances?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredApprovingReviewCount?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredStatusCheckContexts?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredStatusChecks?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresApprovingReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresCodeOwnerReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresCommitSignatures?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresConversationResolution?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresLinearHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresStatusChecks?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresStrictStatusChecks?: FieldPolicy<any> | FieldReadFunction<any>,
	restrictsPushes?: FieldPolicy<any> | FieldReadFunction<any>,
	restrictsReviewDismissals?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewDismissalAllowances?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BranchProtectionRuleConflictKeySpecifier = ('branchProtectionRule' | 'conflictingBranchProtectionRule' | 'ref' | BranchProtectionRuleConflictKeySpecifier)[];
export type BranchProtectionRuleConflictFieldPolicy = {
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	conflictingBranchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BranchProtectionRuleConflictConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | BranchProtectionRuleConflictConnectionKeySpecifier)[];
export type BranchProtectionRuleConflictConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BranchProtectionRuleConflictEdgeKeySpecifier = ('cursor' | 'node' | BranchProtectionRuleConflictEdgeKeySpecifier)[];
export type BranchProtectionRuleConflictEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BranchProtectionRuleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | BranchProtectionRuleConnectionKeySpecifier)[];
export type BranchProtectionRuleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BranchProtectionRuleEdgeKeySpecifier = ('cursor' | 'node' | BranchProtectionRuleEdgeKeySpecifier)[];
export type BranchProtectionRuleEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BypassForcePushAllowanceKeySpecifier = ('actor' | 'branchProtectionRule' | 'id' | BypassForcePushAllowanceKeySpecifier)[];
export type BypassForcePushAllowanceFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BypassForcePushAllowanceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | BypassForcePushAllowanceConnectionKeySpecifier)[];
export type BypassForcePushAllowanceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BypassForcePushAllowanceEdgeKeySpecifier = ('cursor' | 'node' | BypassForcePushAllowanceEdgeKeySpecifier)[];
export type BypassForcePushAllowanceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BypassPullRequestAllowanceKeySpecifier = ('actor' | 'branchProtectionRule' | 'id' | BypassPullRequestAllowanceKeySpecifier)[];
export type BypassPullRequestAllowanceFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BypassPullRequestAllowanceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | BypassPullRequestAllowanceConnectionKeySpecifier)[];
export type BypassPullRequestAllowanceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BypassPullRequestAllowanceEdgeKeySpecifier = ('cursor' | 'node' | BypassPullRequestAllowanceEdgeKeySpecifier)[];
export type BypassPullRequestAllowanceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CVSSKeySpecifier = ('score' | 'vectorString' | CVSSKeySpecifier)[];
export type CVSSFieldPolicy = {
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	vectorString?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CWEKeySpecifier = ('cweId' | 'description' | 'id' | 'name' | CWEKeySpecifier)[];
export type CWEFieldPolicy = {
	cweId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CWEConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CWEConnectionKeySpecifier)[];
export type CWEConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CWEEdgeKeySpecifier = ('cursor' | 'node' | CWEEdgeKeySpecifier)[];
export type CWEEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CancelEnterpriseAdminInvitationPayloadKeySpecifier = ('clientMutationId' | 'invitation' | 'message' | CancelEnterpriseAdminInvitationPayloadKeySpecifier)[];
export type CancelEnterpriseAdminInvitationPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	invitation?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CancelSponsorshipPayloadKeySpecifier = ('clientMutationId' | 'sponsorsTier' | CancelSponsorshipPayloadKeySpecifier)[];
export type CancelSponsorshipPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsTier?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangeUserStatusPayloadKeySpecifier = ('clientMutationId' | 'status' | ChangeUserStatusPayloadKeySpecifier)[];
export type ChangeUserStatusPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckAnnotationKeySpecifier = ('annotationLevel' | 'blobUrl' | 'databaseId' | 'location' | 'message' | 'path' | 'rawDetails' | 'title' | CheckAnnotationKeySpecifier)[];
export type CheckAnnotationFieldPolicy = {
	annotationLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	blobUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	rawDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckAnnotationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CheckAnnotationConnectionKeySpecifier)[];
export type CheckAnnotationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckAnnotationEdgeKeySpecifier = ('cursor' | 'node' | CheckAnnotationEdgeKeySpecifier)[];
export type CheckAnnotationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckAnnotationPositionKeySpecifier = ('column' | 'line' | CheckAnnotationPositionKeySpecifier)[];
export type CheckAnnotationPositionFieldPolicy = {
	column?: FieldPolicy<any> | FieldReadFunction<any>,
	line?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckAnnotationSpanKeySpecifier = ('end' | 'start' | CheckAnnotationSpanKeySpecifier)[];
export type CheckAnnotationSpanFieldPolicy = {
	end?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckRunKeySpecifier = ('annotations' | 'checkSuite' | 'completedAt' | 'conclusion' | 'databaseId' | 'deployment' | 'detailsUrl' | 'externalId' | 'id' | 'isRequired' | 'name' | 'pendingDeploymentRequest' | 'permalink' | 'repository' | 'resourcePath' | 'startedAt' | 'status' | 'steps' | 'summary' | 'text' | 'title' | 'url' | CheckRunKeySpecifier)[];
export type CheckRunFieldPolicy = {
	annotations?: FieldPolicy<any> | FieldReadFunction<any>,
	checkSuite?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	conclusion?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	deployment?: FieldPolicy<any> | FieldReadFunction<any>,
	detailsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingDeploymentRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	permalink?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	steps?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckRunConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CheckRunConnectionKeySpecifier)[];
export type CheckRunConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckRunEdgeKeySpecifier = ('cursor' | 'node' | CheckRunEdgeKeySpecifier)[];
export type CheckRunEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckStepKeySpecifier = ('completedAt' | 'conclusion' | 'externalId' | 'name' | 'number' | 'secondsToCompletion' | 'startedAt' | 'status' | CheckStepKeySpecifier)[];
export type CheckStepFieldPolicy = {
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	conclusion?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	secondsToCompletion?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckStepConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CheckStepConnectionKeySpecifier)[];
export type CheckStepConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckStepEdgeKeySpecifier = ('cursor' | 'node' | CheckStepEdgeKeySpecifier)[];
export type CheckStepEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckSuiteKeySpecifier = ('app' | 'branch' | 'checkRuns' | 'commit' | 'conclusion' | 'createdAt' | 'creator' | 'databaseId' | 'id' | 'matchingPullRequests' | 'push' | 'repository' | 'resourcePath' | 'status' | 'updatedAt' | 'url' | 'workflowRun' | CheckSuiteKeySpecifier)[];
export type CheckSuiteFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	branch?: FieldPolicy<any> | FieldReadFunction<any>,
	checkRuns?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	conclusion?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	matchingPullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	push?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowRun?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckSuiteConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CheckSuiteConnectionKeySpecifier)[];
export type CheckSuiteConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckSuiteEdgeKeySpecifier = ('cursor' | 'node' | CheckSuiteEdgeKeySpecifier)[];
export type CheckSuiteEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClearLabelsFromLabelablePayloadKeySpecifier = ('clientMutationId' | 'labelable' | ClearLabelsFromLabelablePayloadKeySpecifier)[];
export type ClearLabelsFromLabelablePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	labelable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloneProjectPayloadKeySpecifier = ('clientMutationId' | 'jobStatusId' | 'project' | CloneProjectPayloadKeySpecifier)[];
export type CloneProjectPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	jobStatusId?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloneTemplateRepositoryPayloadKeySpecifier = ('clientMutationId' | 'repository' | CloneTemplateRepositoryPayloadKeySpecifier)[];
export type CloneTemplateRepositoryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClosableKeySpecifier = ('closed' | 'closedAt' | ClosableKeySpecifier)[];
export type ClosableFieldPolicy = {
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	closedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloseIssuePayloadKeySpecifier = ('clientMutationId' | 'issue' | CloseIssuePayloadKeySpecifier)[];
export type CloseIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClosePullRequestPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | ClosePullRequestPayloadKeySpecifier)[];
export type ClosePullRequestPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClosedEventKeySpecifier = ('actor' | 'closable' | 'closer' | 'createdAt' | 'id' | 'resourcePath' | 'url' | ClosedEventKeySpecifier)[];
export type ClosedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	closable?: FieldPolicy<any> | FieldReadFunction<any>,
	closer?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeOfConductKeySpecifier = ('body' | 'id' | 'key' | 'name' | 'resourcePath' | 'url' | CodeOfConductKeySpecifier)[];
export type CodeOfConductFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'createdAt' | 'createdViaEmail' | 'editor' | 'id' | 'includesCreatedEdit' | 'lastEditedAt' | 'publishedAt' | 'updatedAt' | 'userContentEdits' | 'viewerDidAuthor' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentDeletedEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'deletedCommentAuthor' | 'id' | CommentDeletedEventKeySpecifier)[];
export type CommentDeletedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedCommentAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitKeySpecifier = ('abbreviatedOid' | 'additions' | 'associatedPullRequests' | 'author' | 'authoredByCommitter' | 'authoredDate' | 'authors' | 'blame' | 'changedFiles' | 'checkSuites' | 'comments' | 'commitResourcePath' | 'commitUrl' | 'committedDate' | 'committedViaWeb' | 'committer' | 'deletions' | 'deployments' | 'file' | 'history' | 'id' | 'message' | 'messageBody' | 'messageBodyHTML' | 'messageHeadline' | 'messageHeadlineHTML' | 'oid' | 'onBehalfOf' | 'parents' | 'pushedDate' | 'repository' | 'resourcePath' | 'signature' | 'status' | 'statusCheckRollup' | 'submodules' | 'tarballUrl' | 'tree' | 'treeResourcePath' | 'treeUrl' | 'url' | 'viewerCanSubscribe' | 'viewerSubscription' | 'zipballUrl' | CommitKeySpecifier)[];
export type CommitFieldPolicy = {
	abbreviatedOid?: FieldPolicy<any> | FieldReadFunction<any>,
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	associatedPullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authoredByCommitter?: FieldPolicy<any> | FieldReadFunction<any>,
	authoredDate?: FieldPolicy<any> | FieldReadFunction<any>,
	authors?: FieldPolicy<any> | FieldReadFunction<any>,
	blame?: FieldPolicy<any> | FieldReadFunction<any>,
	changedFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	checkSuites?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commitResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	commitUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	committedDate?: FieldPolicy<any> | FieldReadFunction<any>,
	committedViaWeb?: FieldPolicy<any> | FieldReadFunction<any>,
	committer?: FieldPolicy<any> | FieldReadFunction<any>,
	deletions?: FieldPolicy<any> | FieldReadFunction<any>,
	deployments?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	messageBody?: FieldPolicy<any> | FieldReadFunction<any>,
	messageBodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	messageHeadline?: FieldPolicy<any> | FieldReadFunction<any>,
	messageHeadlineHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	onBehalfOf?: FieldPolicy<any> | FieldReadFunction<any>,
	parents?: FieldPolicy<any> | FieldReadFunction<any>,
	pushedDate?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCheckRollup?: FieldPolicy<any> | FieldReadFunction<any>,
	submodules?: FieldPolicy<any> | FieldReadFunction<any>,
	tarballUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	tree?: FieldPolicy<any> | FieldReadFunction<any>,
	treeResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	treeUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	zipballUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitCommentKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'commit' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'editor' | 'id' | 'includesCreatedEdit' | 'isMinimized' | 'lastEditedAt' | 'minimizedReason' | 'path' | 'position' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'repository' | 'resourcePath' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanMinimize' | 'viewerCanReact' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | CommitCommentKeySpecifier)[];
export type CommitCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isMinimized?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizedReason?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanMinimize?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CommitCommentConnectionKeySpecifier)[];
export type CommitCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitCommentEdgeKeySpecifier = ('cursor' | 'node' | CommitCommentEdgeKeySpecifier)[];
export type CommitCommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitCommentThreadKeySpecifier = ('comments' | 'commit' | 'id' | 'path' | 'position' | 'repository' | CommitCommentThreadKeySpecifier)[];
export type CommitCommentThreadFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CommitConnectionKeySpecifier)[];
export type CommitConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitContributionsByRepositoryKeySpecifier = ('contributions' | 'repository' | 'resourcePath' | 'url' | CommitContributionsByRepositoryKeySpecifier)[];
export type CommitContributionsByRepositoryFieldPolicy = {
	contributions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitEdgeKeySpecifier = ('cursor' | 'node' | CommitEdgeKeySpecifier)[];
export type CommitEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommitHistoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CommitHistoryConnectionKeySpecifier)[];
export type CommitHistoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'isCrossRepository' | 'source' | 'subject' | ConnectedEventKeySpecifier)[];
export type ConnectedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCrossRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionKeySpecifier = ('isRestricted' | 'occurredAt' | 'resourcePath' | 'url' | 'user' | ContributionKeySpecifier)[];
export type ContributionFieldPolicy = {
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionCalendarKeySpecifier = ('colors' | 'isHalloween' | 'months' | 'totalContributions' | 'weeks' | ContributionCalendarKeySpecifier)[];
export type ContributionCalendarFieldPolicy = {
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	isHalloween?: FieldPolicy<any> | FieldReadFunction<any>,
	months?: FieldPolicy<any> | FieldReadFunction<any>,
	totalContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	weeks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionCalendarDayKeySpecifier = ('color' | 'contributionCount' | 'contributionLevel' | 'date' | 'weekday' | ContributionCalendarDayKeySpecifier)[];
export type ContributionCalendarDayFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	contributionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	contributionLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	weekday?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionCalendarMonthKeySpecifier = ('firstDay' | 'name' | 'totalWeeks' | 'year' | ContributionCalendarMonthKeySpecifier)[];
export type ContributionCalendarMonthFieldPolicy = {
	firstDay?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	totalWeeks?: FieldPolicy<any> | FieldReadFunction<any>,
	year?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionCalendarWeekKeySpecifier = ('contributionDays' | 'firstDay' | ContributionCalendarWeekKeySpecifier)[];
export type ContributionCalendarWeekFieldPolicy = {
	contributionDays?: FieldPolicy<any> | FieldReadFunction<any>,
	firstDay?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionsCollectionKeySpecifier = ('commitContributionsByRepository' | 'contributionCalendar' | 'contributionYears' | 'doesEndInCurrentMonth' | 'earliestRestrictedContributionDate' | 'endedAt' | 'firstIssueContribution' | 'firstPullRequestContribution' | 'firstRepositoryContribution' | 'hasActivityInThePast' | 'hasAnyContributions' | 'hasAnyRestrictedContributions' | 'isSingleDay' | 'issueContributions' | 'issueContributionsByRepository' | 'joinedGitHubContribution' | 'latestRestrictedContributionDate' | 'mostRecentCollectionWithActivity' | 'mostRecentCollectionWithoutActivity' | 'popularIssueContribution' | 'popularPullRequestContribution' | 'pullRequestContributions' | 'pullRequestContributionsByRepository' | 'pullRequestReviewContributions' | 'pullRequestReviewContributionsByRepository' | 'repositoryContributions' | 'restrictedContributionsCount' | 'startedAt' | 'totalCommitContributions' | 'totalIssueContributions' | 'totalPullRequestContributions' | 'totalPullRequestReviewContributions' | 'totalRepositoriesWithContributedCommits' | 'totalRepositoriesWithContributedIssues' | 'totalRepositoriesWithContributedPullRequestReviews' | 'totalRepositoriesWithContributedPullRequests' | 'totalRepositoryContributions' | 'user' | ContributionsCollectionKeySpecifier)[];
export type ContributionsCollectionFieldPolicy = {
	commitContributionsByRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	contributionCalendar?: FieldPolicy<any> | FieldReadFunction<any>,
	contributionYears?: FieldPolicy<any> | FieldReadFunction<any>,
	doesEndInCurrentMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	earliestRestrictedContributionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	firstIssueContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	firstPullRequestContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	firstRepositoryContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	hasActivityInThePast?: FieldPolicy<any> | FieldReadFunction<any>,
	hasAnyContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	hasAnyRestrictedContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	isSingleDay?: FieldPolicy<any> | FieldReadFunction<any>,
	issueContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	issueContributionsByRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	joinedGitHubContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	latestRestrictedContributionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentCollectionWithActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentCollectionWithoutActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	popularIssueContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	popularPullRequestContribution?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestContributionsByRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReviewContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReviewContributionsByRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	restrictedContributionsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCommitContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	totalIssueContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPullRequestContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPullRequestReviewContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRepositoriesWithContributedCommits?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRepositoriesWithContributedIssues?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRepositoriesWithContributedPullRequestReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRepositoriesWithContributedPullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRepositoryContributions?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConvertProjectCardNoteToIssuePayloadKeySpecifier = ('clientMutationId' | 'projectCard' | ConvertProjectCardNoteToIssuePayloadKeySpecifier)[];
export type ConvertProjectCardNoteToIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	projectCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConvertPullRequestToDraftPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | ConvertPullRequestToDraftPayloadKeySpecifier)[];
export type ConvertPullRequestToDraftPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConvertToDraftEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'pullRequest' | 'resourcePath' | 'url' | ConvertToDraftEventKeySpecifier)[];
export type ConvertToDraftEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConvertedNoteToIssueEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'id' | 'project' | 'projectCard' | 'projectColumnName' | ConvertedNoteToIssueEventKeySpecifier)[];
export type ConvertedNoteToIssueEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectCard?: FieldPolicy<any> | FieldReadFunction<any>,
	projectColumnName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConvertedToDiscussionEventKeySpecifier = ('actor' | 'createdAt' | 'discussion' | 'id' | ConvertedToDiscussionEventKeySpecifier)[];
export type ConvertedToDiscussionEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBranchProtectionRulePayloadKeySpecifier = ('branchProtectionRule' | 'clientMutationId' | CreateBranchProtectionRulePayloadKeySpecifier)[];
export type CreateBranchProtectionRulePayloadFieldPolicy = {
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCheckRunPayloadKeySpecifier = ('checkRun' | 'clientMutationId' | CreateCheckRunPayloadKeySpecifier)[];
export type CreateCheckRunPayloadFieldPolicy = {
	checkRun?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCheckSuitePayloadKeySpecifier = ('checkSuite' | 'clientMutationId' | CreateCheckSuitePayloadKeySpecifier)[];
export type CreateCheckSuitePayloadFieldPolicy = {
	checkSuite?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCommitOnBranchPayloadKeySpecifier = ('clientMutationId' | 'commit' | 'ref' | CreateCommitOnBranchPayloadKeySpecifier)[];
export type CreateCommitOnBranchPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateDeploymentPayloadKeySpecifier = ('autoMerged' | 'clientMutationId' | 'deployment' | CreateDeploymentPayloadKeySpecifier)[];
export type CreateDeploymentPayloadFieldPolicy = {
	autoMerged?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deployment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateDeploymentStatusPayloadKeySpecifier = ('clientMutationId' | 'deploymentStatus' | CreateDeploymentStatusPayloadKeySpecifier)[];
export type CreateDeploymentStatusPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deploymentStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateDiscussionPayloadKeySpecifier = ('clientMutationId' | 'discussion' | CreateDiscussionPayloadKeySpecifier)[];
export type CreateDiscussionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEnterpriseOrganizationPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'organization' | CreateEnterpriseOrganizationPayloadKeySpecifier)[];
export type CreateEnterpriseOrganizationPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEnvironmentPayloadKeySpecifier = ('clientMutationId' | 'environment' | CreateEnvironmentPayloadKeySpecifier)[];
export type CreateEnvironmentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateIpAllowListEntryPayloadKeySpecifier = ('clientMutationId' | 'ipAllowListEntry' | CreateIpAllowListEntryPayloadKeySpecifier)[];
export type CreateIpAllowListEntryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEntry?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateIssuePayloadKeySpecifier = ('clientMutationId' | 'issue' | CreateIssuePayloadKeySpecifier)[];
export type CreateIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateLabelPayloadKeySpecifier = ('clientMutationId' | 'label' | CreateLabelPayloadKeySpecifier)[];
export type CreateLabelPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateProjectPayloadKeySpecifier = ('clientMutationId' | 'project' | CreateProjectPayloadKeySpecifier)[];
export type CreateProjectPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePullRequestPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | CreatePullRequestPayloadKeySpecifier)[];
export type CreatePullRequestPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateRefPayloadKeySpecifier = ('clientMutationId' | 'ref' | CreateRefPayloadKeySpecifier)[];
export type CreateRefPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateRepositoryPayloadKeySpecifier = ('clientMutationId' | 'repository' | CreateRepositoryPayloadKeySpecifier)[];
export type CreateRepositoryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSponsorshipPayloadKeySpecifier = ('clientMutationId' | 'sponsorship' | CreateSponsorshipPayloadKeySpecifier)[];
export type CreateSponsorshipPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorship?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTeamDiscussionCommentPayloadKeySpecifier = ('clientMutationId' | 'teamDiscussionComment' | CreateTeamDiscussionCommentPayloadKeySpecifier)[];
export type CreateTeamDiscussionCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTeamDiscussionPayloadKeySpecifier = ('clientMutationId' | 'teamDiscussion' | CreateTeamDiscussionPayloadKeySpecifier)[];
export type CreateTeamDiscussionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDiscussion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedCommitContributionKeySpecifier = ('commitCount' | 'isRestricted' | 'occurredAt' | 'repository' | 'resourcePath' | 'url' | 'user' | CreatedCommitContributionKeySpecifier)[];
export type CreatedCommitContributionFieldPolicy = {
	commitCount?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedCommitContributionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CreatedCommitContributionConnectionKeySpecifier)[];
export type CreatedCommitContributionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedCommitContributionEdgeKeySpecifier = ('cursor' | 'node' | CreatedCommitContributionEdgeKeySpecifier)[];
export type CreatedCommitContributionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedIssueContributionKeySpecifier = ('isRestricted' | 'issue' | 'occurredAt' | 'resourcePath' | 'url' | 'user' | CreatedIssueContributionKeySpecifier)[];
export type CreatedIssueContributionFieldPolicy = {
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedIssueContributionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CreatedIssueContributionConnectionKeySpecifier)[];
export type CreatedIssueContributionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedIssueContributionEdgeKeySpecifier = ('cursor' | 'node' | CreatedIssueContributionEdgeKeySpecifier)[];
export type CreatedIssueContributionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedPullRequestContributionKeySpecifier = ('isRestricted' | 'occurredAt' | 'pullRequest' | 'resourcePath' | 'url' | 'user' | CreatedPullRequestContributionKeySpecifier)[];
export type CreatedPullRequestContributionFieldPolicy = {
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedPullRequestContributionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CreatedPullRequestContributionConnectionKeySpecifier)[];
export type CreatedPullRequestContributionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedPullRequestContributionEdgeKeySpecifier = ('cursor' | 'node' | CreatedPullRequestContributionEdgeKeySpecifier)[];
export type CreatedPullRequestContributionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedPullRequestReviewContributionKeySpecifier = ('isRestricted' | 'occurredAt' | 'pullRequest' | 'pullRequestReview' | 'repository' | 'resourcePath' | 'url' | 'user' | CreatedPullRequestReviewContributionKeySpecifier)[];
export type CreatedPullRequestReviewContributionFieldPolicy = {
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedPullRequestReviewContributionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CreatedPullRequestReviewContributionConnectionKeySpecifier)[];
export type CreatedPullRequestReviewContributionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedPullRequestReviewContributionEdgeKeySpecifier = ('cursor' | 'node' | CreatedPullRequestReviewContributionEdgeKeySpecifier)[];
export type CreatedPullRequestReviewContributionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedRepositoryContributionKeySpecifier = ('isRestricted' | 'occurredAt' | 'repository' | 'resourcePath' | 'url' | 'user' | CreatedRepositoryContributionKeySpecifier)[];
export type CreatedRepositoryContributionFieldPolicy = {
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedRepositoryContributionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CreatedRepositoryContributionConnectionKeySpecifier)[];
export type CreatedRepositoryContributionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatedRepositoryContributionEdgeKeySpecifier = ('cursor' | 'node' | CreatedRepositoryContributionEdgeKeySpecifier)[];
export type CreatedRepositoryContributionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrossReferencedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'isCrossRepository' | 'referencedAt' | 'resourcePath' | 'source' | 'target' | 'url' | 'willCloseTarget' | CrossReferencedEventKeySpecifier)[];
export type CrossReferencedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCrossRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	referencedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	willCloseTarget?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeclineTopicSuggestionPayloadKeySpecifier = ('clientMutationId' | 'topic' | DeclineTopicSuggestionPayloadKeySpecifier)[];
export type DeclineTopicSuggestionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletableKeySpecifier = ('viewerCanDelete' | DeletableKeySpecifier)[];
export type DeletableFieldPolicy = {
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteBranchProtectionRulePayloadKeySpecifier = ('clientMutationId' | DeleteBranchProtectionRulePayloadKeySpecifier)[];
export type DeleteBranchProtectionRulePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteDeploymentPayloadKeySpecifier = ('clientMutationId' | DeleteDeploymentPayloadKeySpecifier)[];
export type DeleteDeploymentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteDiscussionCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | DeleteDiscussionCommentPayloadKeySpecifier)[];
export type DeleteDiscussionCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteDiscussionPayloadKeySpecifier = ('clientMutationId' | 'discussion' | DeleteDiscussionPayloadKeySpecifier)[];
export type DeleteDiscussionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteEnvironmentPayloadKeySpecifier = ('clientMutationId' | DeleteEnvironmentPayloadKeySpecifier)[];
export type DeleteEnvironmentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteIpAllowListEntryPayloadKeySpecifier = ('clientMutationId' | 'ipAllowListEntry' | DeleteIpAllowListEntryPayloadKeySpecifier)[];
export type DeleteIpAllowListEntryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEntry?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteIssueCommentPayloadKeySpecifier = ('clientMutationId' | DeleteIssueCommentPayloadKeySpecifier)[];
export type DeleteIssueCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteIssuePayloadKeySpecifier = ('clientMutationId' | 'repository' | DeleteIssuePayloadKeySpecifier)[];
export type DeleteIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteLabelPayloadKeySpecifier = ('clientMutationId' | DeleteLabelPayloadKeySpecifier)[];
export type DeleteLabelPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePackageVersionPayloadKeySpecifier = ('clientMutationId' | 'success' | DeletePackageVersionPayloadKeySpecifier)[];
export type DeletePackageVersionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteProjectCardPayloadKeySpecifier = ('clientMutationId' | 'column' | 'deletedCardId' | DeleteProjectCardPayloadKeySpecifier)[];
export type DeleteProjectCardPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	column?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedCardId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteProjectColumnPayloadKeySpecifier = ('clientMutationId' | 'deletedColumnId' | 'project' | DeleteProjectColumnPayloadKeySpecifier)[];
export type DeleteProjectColumnPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedColumnId?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteProjectNextItemPayloadKeySpecifier = ('clientMutationId' | 'deletedItemId' | DeleteProjectNextItemPayloadKeySpecifier)[];
export type DeleteProjectNextItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedItemId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteProjectPayloadKeySpecifier = ('clientMutationId' | 'owner' | DeleteProjectPayloadKeySpecifier)[];
export type DeleteProjectPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePullRequestReviewCommentPayloadKeySpecifier = ('clientMutationId' | 'pullRequestReview' | DeletePullRequestReviewCommentPayloadKeySpecifier)[];
export type DeletePullRequestReviewCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePullRequestReviewPayloadKeySpecifier = ('clientMutationId' | 'pullRequestReview' | DeletePullRequestReviewPayloadKeySpecifier)[];
export type DeletePullRequestReviewPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteRefPayloadKeySpecifier = ('clientMutationId' | DeleteRefPayloadKeySpecifier)[];
export type DeleteRefPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteTeamDiscussionCommentPayloadKeySpecifier = ('clientMutationId' | DeleteTeamDiscussionCommentPayloadKeySpecifier)[];
export type DeleteTeamDiscussionCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteTeamDiscussionPayloadKeySpecifier = ('clientMutationId' | DeleteTeamDiscussionPayloadKeySpecifier)[];
export type DeleteTeamDiscussionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteVerifiableDomainPayloadKeySpecifier = ('clientMutationId' | 'owner' | DeleteVerifiableDomainPayloadKeySpecifier)[];
export type DeleteVerifiableDomainPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DemilestonedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'milestoneTitle' | 'subject' | DemilestonedEventKeySpecifier)[];
export type DemilestonedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	milestoneTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DependencyGraphDependencyKeySpecifier = ('hasDependencies' | 'packageLabel' | 'packageManager' | 'packageName' | 'repository' | 'requirements' | DependencyGraphDependencyKeySpecifier)[];
export type DependencyGraphDependencyFieldPolicy = {
	hasDependencies?: FieldPolicy<any> | FieldReadFunction<any>,
	packageLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	packageManager?: FieldPolicy<any> | FieldReadFunction<any>,
	packageName?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	requirements?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DependencyGraphDependencyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DependencyGraphDependencyConnectionKeySpecifier)[];
export type DependencyGraphDependencyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DependencyGraphDependencyEdgeKeySpecifier = ('cursor' | 'node' | DependencyGraphDependencyEdgeKeySpecifier)[];
export type DependencyGraphDependencyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DependencyGraphManifestKeySpecifier = ('blobPath' | 'dependencies' | 'dependenciesCount' | 'exceedsMaxSize' | 'filename' | 'id' | 'parseable' | 'repository' | DependencyGraphManifestKeySpecifier)[];
export type DependencyGraphManifestFieldPolicy = {
	blobPath?: FieldPolicy<any> | FieldReadFunction<any>,
	dependencies?: FieldPolicy<any> | FieldReadFunction<any>,
	dependenciesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	exceedsMaxSize?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parseable?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DependencyGraphManifestConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DependencyGraphManifestConnectionKeySpecifier)[];
export type DependencyGraphManifestConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DependencyGraphManifestEdgeKeySpecifier = ('cursor' | 'node' | DependencyGraphManifestEdgeKeySpecifier)[];
export type DependencyGraphManifestEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeployKeyKeySpecifier = ('createdAt' | 'id' | 'key' | 'readOnly' | 'title' | 'verified' | DeployKeyKeySpecifier)[];
export type DeployKeyFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	readOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeployKeyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DeployKeyConnectionKeySpecifier)[];
export type DeployKeyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeployKeyEdgeKeySpecifier = ('cursor' | 'node' | DeployKeyEdgeKeySpecifier)[];
export type DeployKeyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeployedEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'deployment' | 'id' | 'pullRequest' | 'ref' | DeployedEventKeySpecifier)[];
export type DeployedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	deployment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentKeySpecifier = ('commit' | 'commitOid' | 'createdAt' | 'creator' | 'databaseId' | 'description' | 'environment' | 'id' | 'latestEnvironment' | 'latestStatus' | 'originalEnvironment' | 'payload' | 'ref' | 'repository' | 'state' | 'statuses' | 'task' | 'updatedAt' | DeploymentKeySpecifier)[];
export type DeploymentFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	commitOid?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latestEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	latestStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	originalEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	statuses?: FieldPolicy<any> | FieldReadFunction<any>,
	task?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DeploymentConnectionKeySpecifier)[];
export type DeploymentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentEdgeKeySpecifier = ('cursor' | 'node' | DeploymentEdgeKeySpecifier)[];
export type DeploymentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentEnvironmentChangedEventKeySpecifier = ('actor' | 'createdAt' | 'deploymentStatus' | 'id' | 'pullRequest' | DeploymentEnvironmentChangedEventKeySpecifier)[];
export type DeploymentEnvironmentChangedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deploymentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentProtectionRuleKeySpecifier = ('databaseId' | 'reviewers' | 'timeout' | 'type' | DeploymentProtectionRuleKeySpecifier)[];
export type DeploymentProtectionRuleFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewers?: FieldPolicy<any> | FieldReadFunction<any>,
	timeout?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentProtectionRuleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DeploymentProtectionRuleConnectionKeySpecifier)[];
export type DeploymentProtectionRuleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentProtectionRuleEdgeKeySpecifier = ('cursor' | 'node' | DeploymentProtectionRuleEdgeKeySpecifier)[];
export type DeploymentProtectionRuleEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentRequestKeySpecifier = ('currentUserCanApprove' | 'environment' | 'reviewers' | 'waitTimer' | 'waitTimerStartedAt' | DeploymentRequestKeySpecifier)[];
export type DeploymentRequestFieldPolicy = {
	currentUserCanApprove?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewers?: FieldPolicy<any> | FieldReadFunction<any>,
	waitTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	waitTimerStartedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentRequestConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DeploymentRequestConnectionKeySpecifier)[];
export type DeploymentRequestConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentRequestEdgeKeySpecifier = ('cursor' | 'node' | DeploymentRequestEdgeKeySpecifier)[];
export type DeploymentRequestEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentReviewKeySpecifier = ('comment' | 'databaseId' | 'environments' | 'id' | 'state' | 'user' | DeploymentReviewKeySpecifier)[];
export type DeploymentReviewFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	environments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentReviewConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DeploymentReviewConnectionKeySpecifier)[];
export type DeploymentReviewConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentReviewEdgeKeySpecifier = ('cursor' | 'node' | DeploymentReviewEdgeKeySpecifier)[];
export type DeploymentReviewEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentReviewerConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DeploymentReviewerConnectionKeySpecifier)[];
export type DeploymentReviewerConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentReviewerEdgeKeySpecifier = ('cursor' | 'node' | DeploymentReviewerEdgeKeySpecifier)[];
export type DeploymentReviewerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentStatusKeySpecifier = ('createdAt' | 'creator' | 'deployment' | 'description' | 'environment' | 'environmentUrl' | 'id' | 'logUrl' | 'state' | 'updatedAt' | DeploymentStatusKeySpecifier)[];
export type DeploymentStatusFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	deployment?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	environmentUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentStatusConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DeploymentStatusConnectionKeySpecifier)[];
export type DeploymentStatusConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeploymentStatusEdgeKeySpecifier = ('cursor' | 'node' | DeploymentStatusEdgeKeySpecifier)[];
export type DeploymentStatusEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DisablePullRequestAutoMergePayloadKeySpecifier = ('actor' | 'clientMutationId' | 'pullRequest' | DisablePullRequestAutoMergePayloadKeySpecifier)[];
export type DisablePullRequestAutoMergePayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DisconnectedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'isCrossRepository' | 'source' | 'subject' | DisconnectedEventKeySpecifier)[];
export type DisconnectedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCrossRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionKeySpecifier = ('activeLockReason' | 'answer' | 'answerChosenAt' | 'answerChosenBy' | 'author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'category' | 'comments' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'editor' | 'id' | 'includesCreatedEdit' | 'labels' | 'lastEditedAt' | 'locked' | 'number' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'repository' | 'resourcePath' | 'title' | 'updatedAt' | 'upvoteCount' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanReact' | 'viewerCanSubscribe' | 'viewerCanUpdate' | 'viewerCanUpvote' | 'viewerDidAuthor' | 'viewerHasUpvoted' | 'viewerSubscription' | DiscussionKeySpecifier)[];
export type DiscussionFieldPolicy = {
	activeLockReason?: FieldPolicy<any> | FieldReadFunction<any>,
	answer?: FieldPolicy<any> | FieldReadFunction<any>,
	answerChosenAt?: FieldPolicy<any> | FieldReadFunction<any>,
	answerChosenBy?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	upvoteCount?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpvote?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasUpvoted?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionCategoryKeySpecifier = ('createdAt' | 'description' | 'emoji' | 'emojiHTML' | 'id' | 'isAnswerable' | 'name' | 'repository' | 'updatedAt' | DiscussionCategoryKeySpecifier)[];
export type DiscussionCategoryFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	emoji?: FieldPolicy<any> | FieldReadFunction<any>,
	emojiHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAnswerable?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionCategoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DiscussionCategoryConnectionKeySpecifier)[];
export type DiscussionCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionCategoryEdgeKeySpecifier = ('cursor' | 'node' | DiscussionCategoryEdgeKeySpecifier)[];
export type DiscussionCategoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionCommentKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'deletedAt' | 'discussion' | 'editor' | 'id' | 'includesCreatedEdit' | 'isAnswer' | 'isMinimized' | 'lastEditedAt' | 'minimizedReason' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'replies' | 'replyTo' | 'resourcePath' | 'updatedAt' | 'upvoteCount' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanMarkAsAnswer' | 'viewerCanMinimize' | 'viewerCanReact' | 'viewerCanUnmarkAsAnswer' | 'viewerCanUpdate' | 'viewerCanUpvote' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | 'viewerHasUpvoted' | DiscussionCommentKeySpecifier)[];
export type DiscussionCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isAnswer?: FieldPolicy<any> | FieldReadFunction<any>,
	isMinimized?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizedReason?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	replyTo?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	upvoteCount?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanMarkAsAnswer?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanMinimize?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUnmarkAsAnswer?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpvote?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasUpvoted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DiscussionCommentConnectionKeySpecifier)[];
export type DiscussionCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionCommentEdgeKeySpecifier = ('cursor' | 'node' | DiscussionCommentEdgeKeySpecifier)[];
export type DiscussionCommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | DiscussionConnectionKeySpecifier)[];
export type DiscussionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionEdgeKeySpecifier = ('cursor' | 'node' | DiscussionEdgeKeySpecifier)[];
export type DiscussionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DismissPullRequestReviewPayloadKeySpecifier = ('clientMutationId' | 'pullRequestReview' | DismissPullRequestReviewPayloadKeySpecifier)[];
export type DismissPullRequestReviewPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DismissRepositoryVulnerabilityAlertPayloadKeySpecifier = ('clientMutationId' | 'repositoryVulnerabilityAlert' | DismissRepositoryVulnerabilityAlertPayloadKeySpecifier)[];
export type DismissRepositoryVulnerabilityAlertPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryVulnerabilityAlert?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnablePullRequestAutoMergePayloadKeySpecifier = ('actor' | 'clientMutationId' | 'pullRequest' | EnablePullRequestAutoMergePayloadKeySpecifier)[];
export type EnablePullRequestAutoMergePayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseKeySpecifier = ('avatarUrl' | 'billingInfo' | 'createdAt' | 'databaseId' | 'description' | 'descriptionHTML' | 'id' | 'location' | 'members' | 'name' | 'organizations' | 'ownerInfo' | 'resourcePath' | 'slug' | 'url' | 'userAccounts' | 'viewerIsAdmin' | 'websiteUrl' | EnterpriseKeySpecifier)[];
export type EnterpriseFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	billingInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseAdministratorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseAdministratorConnectionKeySpecifier)[];
export type EnterpriseAdministratorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseAdministratorEdgeKeySpecifier = ('cursor' | 'node' | 'role' | EnterpriseAdministratorEdgeKeySpecifier)[];
export type EnterpriseAdministratorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseAdministratorInvitationKeySpecifier = ('createdAt' | 'email' | 'enterprise' | 'id' | 'invitee' | 'inviter' | 'role' | EnterpriseAdministratorInvitationKeySpecifier)[];
export type EnterpriseAdministratorInvitationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitee?: FieldPolicy<any> | FieldReadFunction<any>,
	inviter?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseAdministratorInvitationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseAdministratorInvitationConnectionKeySpecifier)[];
export type EnterpriseAdministratorInvitationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseAdministratorInvitationEdgeKeySpecifier = ('cursor' | 'node' | EnterpriseAdministratorInvitationEdgeKeySpecifier)[];
export type EnterpriseAdministratorInvitationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseAuditEntryDataKeySpecifier = ('enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | EnterpriseAuditEntryDataKeySpecifier)[];
export type EnterpriseAuditEntryDataFieldPolicy = {
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseBillingInfoKeySpecifier = ('allLicensableUsersCount' | 'assetPacks' | 'availableSeats' | 'bandwidthQuota' | 'bandwidthUsage' | 'bandwidthUsagePercentage' | 'seats' | 'storageQuota' | 'storageUsage' | 'storageUsagePercentage' | 'totalAvailableLicenses' | 'totalLicenses' | EnterpriseBillingInfoKeySpecifier)[];
export type EnterpriseBillingInfoFieldPolicy = {
	allLicensableUsersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	assetPacks?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSeats?: FieldPolicy<any> | FieldReadFunction<any>,
	bandwidthQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	bandwidthUsage?: FieldPolicy<any> | FieldReadFunction<any>,
	bandwidthUsagePercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	seats?: FieldPolicy<any> | FieldReadFunction<any>,
	storageQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	storageUsage?: FieldPolicy<any> | FieldReadFunction<any>,
	storageUsagePercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAvailableLicenses?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLicenses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseIdentityProviderKeySpecifier = ('digestMethod' | 'enterprise' | 'externalIdentities' | 'id' | 'idpCertificate' | 'issuer' | 'recoveryCodes' | 'signatureMethod' | 'ssoUrl' | EnterpriseIdentityProviderKeySpecifier)[];
export type EnterpriseIdentityProviderFieldPolicy = {
	digestMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	externalIdentities?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	idpCertificate?: FieldPolicy<any> | FieldReadFunction<any>,
	issuer?: FieldPolicy<any> | FieldReadFunction<any>,
	recoveryCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	signatureMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	ssoUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseMemberConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseMemberConnectionKeySpecifier)[];
export type EnterpriseMemberConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseMemberEdgeKeySpecifier = ('cursor' | 'isUnlicensed' | 'node' | EnterpriseMemberEdgeKeySpecifier)[];
export type EnterpriseMemberEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnlicensed?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseOrganizationMembershipConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseOrganizationMembershipConnectionKeySpecifier)[];
export type EnterpriseOrganizationMembershipConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseOrganizationMembershipEdgeKeySpecifier = ('cursor' | 'node' | 'role' | EnterpriseOrganizationMembershipEdgeKeySpecifier)[];
export type EnterpriseOrganizationMembershipEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseOutsideCollaboratorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseOutsideCollaboratorConnectionKeySpecifier)[];
export type EnterpriseOutsideCollaboratorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseOutsideCollaboratorEdgeKeySpecifier = ('cursor' | 'isUnlicensed' | 'node' | 'repositories' | EnterpriseOutsideCollaboratorEdgeKeySpecifier)[];
export type EnterpriseOutsideCollaboratorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnlicensed?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseOwnerInfoKeySpecifier = ('admins' | 'affiliatedUsersWithTwoFactorDisabled' | 'affiliatedUsersWithTwoFactorDisabledExist' | 'allowPrivateRepositoryForkingSetting' | 'allowPrivateRepositoryForkingSettingOrganizations' | 'defaultRepositoryPermissionSetting' | 'defaultRepositoryPermissionSettingOrganizations' | 'domains' | 'enterpriseServerInstallations' | 'ipAllowListEnabledSetting' | 'ipAllowListEntries' | 'ipAllowListForInstalledAppsEnabledSetting' | 'isUpdatingDefaultRepositoryPermission' | 'isUpdatingTwoFactorRequirement' | 'membersCanChangeRepositoryVisibilitySetting' | 'membersCanChangeRepositoryVisibilitySettingOrganizations' | 'membersCanCreateInternalRepositoriesSetting' | 'membersCanCreatePrivateRepositoriesSetting' | 'membersCanCreatePublicRepositoriesSetting' | 'membersCanCreateRepositoriesSetting' | 'membersCanCreateRepositoriesSettingOrganizations' | 'membersCanDeleteIssuesSetting' | 'membersCanDeleteIssuesSettingOrganizations' | 'membersCanDeleteRepositoriesSetting' | 'membersCanDeleteRepositoriesSettingOrganizations' | 'membersCanInviteCollaboratorsSetting' | 'membersCanInviteCollaboratorsSettingOrganizations' | 'membersCanMakePurchasesSetting' | 'membersCanUpdateProtectedBranchesSetting' | 'membersCanUpdateProtectedBranchesSettingOrganizations' | 'membersCanViewDependencyInsightsSetting' | 'membersCanViewDependencyInsightsSettingOrganizations' | 'notificationDeliveryRestrictionEnabledSetting' | 'oidcProvider' | 'organizationProjectsSetting' | 'organizationProjectsSettingOrganizations' | 'outsideCollaborators' | 'pendingAdminInvitations' | 'pendingCollaboratorInvitations' | 'pendingCollaborators' | 'pendingMemberInvitations' | 'repositoryProjectsSetting' | 'repositoryProjectsSettingOrganizations' | 'samlIdentityProvider' | 'samlIdentityProviderSettingOrganizations' | 'supportEntitlements' | 'teamDiscussionsSetting' | 'teamDiscussionsSettingOrganizations' | 'twoFactorRequiredSetting' | 'twoFactorRequiredSettingOrganizations' | EnterpriseOwnerInfoKeySpecifier)[];
export type EnterpriseOwnerInfoFieldPolicy = {
	admins?: FieldPolicy<any> | FieldReadFunction<any>,
	affiliatedUsersWithTwoFactorDisabled?: FieldPolicy<any> | FieldReadFunction<any>,
	affiliatedUsersWithTwoFactorDisabledExist?: FieldPolicy<any> | FieldReadFunction<any>,
	allowPrivateRepositoryForkingSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	allowPrivateRepositoryForkingSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultRepositoryPermissionSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultRepositoryPermissionSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	domains?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseServerInstallations?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEntries?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListForInstalledAppsEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	isUpdatingDefaultRepositoryPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	isUpdatingTwoFactorRequirement?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanChangeRepositoryVisibilitySetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanChangeRepositoryVisibilitySettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanCreateInternalRepositoriesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanCreatePrivateRepositoriesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanCreatePublicRepositoriesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanCreateRepositoriesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanCreateRepositoriesSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanDeleteIssuesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanDeleteIssuesSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanDeleteRepositoriesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanDeleteRepositoriesSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanInviteCollaboratorsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanInviteCollaboratorsSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanMakePurchasesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanUpdateProtectedBranchesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanUpdateProtectedBranchesSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanViewDependencyInsightsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanViewDependencyInsightsSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationDeliveryRestrictionEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	oidcProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationProjectsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationProjectsSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	outsideCollaborators?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingAdminInvitations?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingCollaboratorInvitations?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingCollaborators?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingMemberInvitations?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryProjectsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryProjectsSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	samlIdentityProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	samlIdentityProviderSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	supportEntitlements?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDiscussionsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDiscussionsSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	twoFactorRequiredSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	twoFactorRequiredSettingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterprisePendingCollaboratorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterprisePendingCollaboratorConnectionKeySpecifier)[];
export type EnterprisePendingCollaboratorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterprisePendingCollaboratorEdgeKeySpecifier = ('cursor' | 'isUnlicensed' | 'node' | 'repositories' | EnterprisePendingCollaboratorEdgeKeySpecifier)[];
export type EnterprisePendingCollaboratorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnlicensed?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterprisePendingMemberInvitationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | 'totalUniqueUserCount' | EnterprisePendingMemberInvitationConnectionKeySpecifier)[];
export type EnterprisePendingMemberInvitationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalUniqueUserCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterprisePendingMemberInvitationEdgeKeySpecifier = ('cursor' | 'isUnlicensed' | 'node' | EnterprisePendingMemberInvitationEdgeKeySpecifier)[];
export type EnterprisePendingMemberInvitationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnlicensed?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseRepositoryInfoKeySpecifier = ('id' | 'isPrivate' | 'name' | 'nameWithOwner' | EnterpriseRepositoryInfoKeySpecifier)[];
export type EnterpriseRepositoryInfoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nameWithOwner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseRepositoryInfoConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseRepositoryInfoConnectionKeySpecifier)[];
export type EnterpriseRepositoryInfoConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseRepositoryInfoEdgeKeySpecifier = ('cursor' | 'node' | EnterpriseRepositoryInfoEdgeKeySpecifier)[];
export type EnterpriseRepositoryInfoEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerInstallationKeySpecifier = ('createdAt' | 'customerName' | 'hostName' | 'id' | 'isConnected' | 'updatedAt' | 'userAccounts' | 'userAccountsUploads' | EnterpriseServerInstallationKeySpecifier)[];
export type EnterpriseServerInstallationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	customerName?: FieldPolicy<any> | FieldReadFunction<any>,
	hostName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isConnected?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	userAccountsUploads?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerInstallationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseServerInstallationConnectionKeySpecifier)[];
export type EnterpriseServerInstallationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerInstallationEdgeKeySpecifier = ('cursor' | 'node' | EnterpriseServerInstallationEdgeKeySpecifier)[];
export type EnterpriseServerInstallationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountKeySpecifier = ('createdAt' | 'emails' | 'enterpriseServerInstallation' | 'id' | 'isSiteAdmin' | 'login' | 'profileName' | 'remoteCreatedAt' | 'remoteUserId' | 'updatedAt' | EnterpriseServerUserAccountKeySpecifier)[];
export type EnterpriseServerUserAccountFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	emails?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseServerInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isSiteAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	profileName?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteCreatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseServerUserAccountConnectionKeySpecifier)[];
export type EnterpriseServerUserAccountConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountEdgeKeySpecifier = ('cursor' | 'node' | EnterpriseServerUserAccountEdgeKeySpecifier)[];
export type EnterpriseServerUserAccountEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountEmailKeySpecifier = ('createdAt' | 'email' | 'id' | 'isPrimary' | 'updatedAt' | 'userAccount' | EnterpriseServerUserAccountEmailKeySpecifier)[];
export type EnterpriseServerUserAccountEmailFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountEmailConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseServerUserAccountEmailConnectionKeySpecifier)[];
export type EnterpriseServerUserAccountEmailConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountEmailEdgeKeySpecifier = ('cursor' | 'node' | EnterpriseServerUserAccountEmailEdgeKeySpecifier)[];
export type EnterpriseServerUserAccountEmailEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountsUploadKeySpecifier = ('createdAt' | 'enterprise' | 'enterpriseServerInstallation' | 'id' | 'name' | 'syncState' | 'updatedAt' | EnterpriseServerUserAccountsUploadKeySpecifier)[];
export type EnterpriseServerUserAccountsUploadFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseServerInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	syncState?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountsUploadConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseServerUserAccountsUploadConnectionKeySpecifier)[];
export type EnterpriseServerUserAccountsUploadConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseServerUserAccountsUploadEdgeKeySpecifier = ('cursor' | 'node' | EnterpriseServerUserAccountsUploadEdgeKeySpecifier)[];
export type EnterpriseServerUserAccountsUploadEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseUserAccountKeySpecifier = ('avatarUrl' | 'createdAt' | 'enterprise' | 'id' | 'login' | 'name' | 'organizations' | 'resourcePath' | 'updatedAt' | 'url' | 'user' | EnterpriseUserAccountKeySpecifier)[];
export type EnterpriseUserAccountFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseUserAccountConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnterpriseUserAccountConnectionKeySpecifier)[];
export type EnterpriseUserAccountConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnterpriseUserAccountEdgeKeySpecifier = ('cursor' | 'node' | EnterpriseUserAccountEdgeKeySpecifier)[];
export type EnterpriseUserAccountEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnvironmentKeySpecifier = ('databaseId' | 'id' | 'name' | 'protectionRules' | EnvironmentKeySpecifier)[];
export type EnvironmentFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	protectionRules?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnvironmentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | EnvironmentConnectionKeySpecifier)[];
export type EnvironmentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnvironmentEdgeKeySpecifier = ('cursor' | 'node' | EnvironmentEdgeKeySpecifier)[];
export type EnvironmentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalIdentityKeySpecifier = ('guid' | 'id' | 'organizationInvitation' | 'samlIdentity' | 'scimIdentity' | 'user' | ExternalIdentityKeySpecifier)[];
export type ExternalIdentityFieldPolicy = {
	guid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	samlIdentity?: FieldPolicy<any> | FieldReadFunction<any>,
	scimIdentity?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalIdentityConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ExternalIdentityConnectionKeySpecifier)[];
export type ExternalIdentityConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalIdentityEdgeKeySpecifier = ('cursor' | 'node' | ExternalIdentityEdgeKeySpecifier)[];
export type ExternalIdentityEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalIdentitySamlAttributesKeySpecifier = ('emails' | 'familyName' | 'givenName' | 'groups' | 'nameId' | 'username' | ExternalIdentitySamlAttributesKeySpecifier)[];
export type ExternalIdentitySamlAttributesFieldPolicy = {
	emails?: FieldPolicy<any> | FieldReadFunction<any>,
	familyName?: FieldPolicy<any> | FieldReadFunction<any>,
	givenName?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	nameId?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExternalIdentityScimAttributesKeySpecifier = ('emails' | 'familyName' | 'givenName' | 'groups' | 'username' | ExternalIdentityScimAttributesKeySpecifier)[];
export type ExternalIdentityScimAttributesFieldPolicy = {
	emails?: FieldPolicy<any> | FieldReadFunction<any>,
	familyName?: FieldPolicy<any> | FieldReadFunction<any>,
	givenName?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowUserPayloadKeySpecifier = ('clientMutationId' | 'user' | FollowUserPayloadKeySpecifier)[];
export type FollowUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowerConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | FollowerConnectionKeySpecifier)[];
export type FollowerConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowingConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | FollowingConnectionKeySpecifier)[];
export type FollowingConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FundingLinkKeySpecifier = ('platform' | 'url' | FundingLinkKeySpecifier)[];
export type FundingLinkFieldPolicy = {
	platform?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericHovercardContextKeySpecifier = ('message' | 'octicon' | GenericHovercardContextKeySpecifier)[];
export type GenericHovercardContextFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	octicon?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GistKeySpecifier = ('comments' | 'createdAt' | 'description' | 'files' | 'forks' | 'id' | 'isFork' | 'isPublic' | 'name' | 'owner' | 'pushedAt' | 'resourcePath' | 'stargazerCount' | 'stargazers' | 'updatedAt' | 'url' | 'viewerHasStarred' | GistKeySpecifier)[];
export type GistFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	forks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isFork?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	pushedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazers?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasStarred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GistCommentKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'editor' | 'gist' | 'id' | 'includesCreatedEdit' | 'isMinimized' | 'lastEditedAt' | 'minimizedReason' | 'publishedAt' | 'updatedAt' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanMinimize' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | GistCommentKeySpecifier)[];
export type GistCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	gist?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isMinimized?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizedReason?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanMinimize?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GistCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | GistCommentConnectionKeySpecifier)[];
export type GistCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GistCommentEdgeKeySpecifier = ('cursor' | 'node' | GistCommentEdgeKeySpecifier)[];
export type GistCommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GistConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | GistConnectionKeySpecifier)[];
export type GistConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GistEdgeKeySpecifier = ('cursor' | 'node' | GistEdgeKeySpecifier)[];
export type GistEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GistFileKeySpecifier = ('encodedName' | 'encoding' | 'extension' | 'isImage' | 'isTruncated' | 'language' | 'name' | 'size' | 'text' | GistFileKeySpecifier)[];
export type GistFileFieldPolicy = {
	encodedName?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	extension?: FieldPolicy<any> | FieldReadFunction<any>,
	isImage?: FieldPolicy<any> | FieldReadFunction<any>,
	isTruncated?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitActorKeySpecifier = ('avatarUrl' | 'date' | 'email' | 'name' | 'user' | GitActorKeySpecifier)[];
export type GitActorFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitActorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | GitActorConnectionKeySpecifier)[];
export type GitActorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitActorEdgeKeySpecifier = ('cursor' | 'node' | GitActorEdgeKeySpecifier)[];
export type GitActorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitHubMetadataKeySpecifier = ('gitHubServicesSha' | 'gitIpAddresses' | 'hookIpAddresses' | 'importerIpAddresses' | 'isPasswordAuthenticationVerifiable' | 'pagesIpAddresses' | GitHubMetadataKeySpecifier)[];
export type GitHubMetadataFieldPolicy = {
	gitHubServicesSha?: FieldPolicy<any> | FieldReadFunction<any>,
	gitIpAddresses?: FieldPolicy<any> | FieldReadFunction<any>,
	hookIpAddresses?: FieldPolicy<any> | FieldReadFunction<any>,
	importerIpAddresses?: FieldPolicy<any> | FieldReadFunction<any>,
	isPasswordAuthenticationVerifiable?: FieldPolicy<any> | FieldReadFunction<any>,
	pagesIpAddresses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitObjectKeySpecifier = ('abbreviatedOid' | 'commitResourcePath' | 'commitUrl' | 'id' | 'oid' | 'repository' | GitObjectKeySpecifier)[];
export type GitObjectFieldPolicy = {
	abbreviatedOid?: FieldPolicy<any> | FieldReadFunction<any>,
	commitResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	commitUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GitSignatureKeySpecifier = ('email' | 'isValid' | 'payload' | 'signature' | 'signer' | 'state' | 'wasSignedByGitHub' | GitSignatureKeySpecifier)[];
export type GitSignatureFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	signer?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	wasSignedByGitHub?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GpgSignatureKeySpecifier = ('email' | 'isValid' | 'keyId' | 'payload' | 'signature' | 'signer' | 'state' | 'wasSignedByGitHub' | GpgSignatureKeySpecifier)[];
export type GpgSignatureFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	keyId?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	signer?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	wasSignedByGitHub?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HeadRefDeletedEventKeySpecifier = ('actor' | 'createdAt' | 'headRef' | 'headRefName' | 'id' | 'pullRequest' | HeadRefDeletedEventKeySpecifier)[];
export type HeadRefDeletedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	headRef?: FieldPolicy<any> | FieldReadFunction<any>,
	headRefName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HeadRefForcePushedEventKeySpecifier = ('actor' | 'afterCommit' | 'beforeCommit' | 'createdAt' | 'id' | 'pullRequest' | 'ref' | HeadRefForcePushedEventKeySpecifier)[];
export type HeadRefForcePushedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	afterCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	beforeCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HeadRefRestoredEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'pullRequest' | HeadRefRestoredEventKeySpecifier)[];
export type HeadRefRestoredEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HovercardKeySpecifier = ('contexts' | HovercardKeySpecifier)[];
export type HovercardFieldPolicy = {
	contexts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HovercardContextKeySpecifier = ('message' | 'octicon' | HovercardContextKeySpecifier)[];
export type HovercardContextFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	octicon?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImportProjectPayloadKeySpecifier = ('clientMutationId' | 'project' | ImportProjectPayloadKeySpecifier)[];
export type ImportProjectPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InviteEnterpriseAdminPayloadKeySpecifier = ('clientMutationId' | 'invitation' | InviteEnterpriseAdminPayloadKeySpecifier)[];
export type InviteEnterpriseAdminPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	invitation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IpAllowListEntryKeySpecifier = ('allowListValue' | 'createdAt' | 'id' | 'isActive' | 'name' | 'owner' | 'updatedAt' | IpAllowListEntryKeySpecifier)[];
export type IpAllowListEntryFieldPolicy = {
	allowListValue?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IpAllowListEntryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | IpAllowListEntryConnectionKeySpecifier)[];
export type IpAllowListEntryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IpAllowListEntryEdgeKeySpecifier = ('cursor' | 'node' | IpAllowListEntryEdgeKeySpecifier)[];
export type IpAllowListEntryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueKeySpecifier = ('activeLockReason' | 'assignees' | 'author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyResourcePath' | 'bodyText' | 'bodyUrl' | 'closed' | 'closedAt' | 'comments' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'editor' | 'hovercard' | 'id' | 'includesCreatedEdit' | 'isPinned' | 'isReadByViewer' | 'labels' | 'lastEditedAt' | 'locked' | 'milestone' | 'number' | 'participants' | 'projectCards' | 'projectNext' | 'projectsNext' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'repository' | 'resourcePath' | 'state' | 'timeline' | 'timelineItems' | 'title' | 'titleHTML' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanReact' | 'viewerCanSubscribe' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | 'viewerSubscription' | IssueKeySpecifier)[];
export type IssueFieldPolicy = {
	activeLockReason?: FieldPolicy<any> | FieldReadFunction<any>,
	assignees?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	closedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	hovercard?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isPinned?: FieldPolicy<any> | FieldReadFunction<any>,
	isReadByViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	milestone?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	participants?: FieldPolicy<any> | FieldReadFunction<any>,
	projectCards?: FieldPolicy<any> | FieldReadFunction<any>,
	projectNext?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsNext?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	timeline?: FieldPolicy<any> | FieldReadFunction<any>,
	timelineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueCommentKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'editor' | 'id' | 'includesCreatedEdit' | 'isMinimized' | 'issue' | 'lastEditedAt' | 'minimizedReason' | 'publishedAt' | 'pullRequest' | 'reactionGroups' | 'reactions' | 'repository' | 'resourcePath' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanMinimize' | 'viewerCanReact' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | IssueCommentKeySpecifier)[];
export type IssueCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isMinimized?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizedReason?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanMinimize?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | IssueCommentConnectionKeySpecifier)[];
export type IssueCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueCommentEdgeKeySpecifier = ('cursor' | 'node' | IssueCommentEdgeKeySpecifier)[];
export type IssueCommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | IssueConnectionKeySpecifier)[];
export type IssueConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueContributionsByRepositoryKeySpecifier = ('contributions' | 'repository' | IssueContributionsByRepositoryKeySpecifier)[];
export type IssueContributionsByRepositoryFieldPolicy = {
	contributions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueEdgeKeySpecifier = ('cursor' | 'node' | IssueEdgeKeySpecifier)[];
export type IssueEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueTemplateKeySpecifier = ('about' | 'body' | 'name' | 'title' | IssueTemplateKeySpecifier)[];
export type IssueTemplateFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueTimelineConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | IssueTimelineConnectionKeySpecifier)[];
export type IssueTimelineConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueTimelineItemEdgeKeySpecifier = ('cursor' | 'node' | IssueTimelineItemEdgeKeySpecifier)[];
export type IssueTimelineItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueTimelineItemsConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | 'updatedAt' | IssueTimelineItemsConnectionKeySpecifier)[];
export type IssueTimelineItemsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssueTimelineItemsEdgeKeySpecifier = ('cursor' | 'node' | IssueTimelineItemsEdgeKeySpecifier)[];
export type IssueTimelineItemsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JoinedGitHubContributionKeySpecifier = ('isRestricted' | 'occurredAt' | 'resourcePath' | 'url' | 'user' | JoinedGitHubContributionKeySpecifier)[];
export type JoinedGitHubContributionFieldPolicy = {
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabelKeySpecifier = ('color' | 'createdAt' | 'description' | 'id' | 'isDefault' | 'issues' | 'name' | 'pullRequests' | 'repository' | 'resourcePath' | 'updatedAt' | 'url' | LabelKeySpecifier)[];
export type LabelFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	issues?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabelConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | LabelConnectionKeySpecifier)[];
export type LabelConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabelEdgeKeySpecifier = ('cursor' | 'node' | LabelEdgeKeySpecifier)[];
export type LabelEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabelableKeySpecifier = ('labels' | LabelableKeySpecifier)[];
export type LabelableFieldPolicy = {
	labels?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LabeledEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'label' | 'labelable' | LabeledEventKeySpecifier)[];
export type LabeledEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	labelable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageKeySpecifier = ('color' | 'id' | 'name' | LanguageKeySpecifier)[];
export type LanguageFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | 'totalSize' | LanguageConnectionKeySpecifier)[];
export type LanguageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSize?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageEdgeKeySpecifier = ('cursor' | 'node' | 'size' | LanguageEdgeKeySpecifier)[];
export type LanguageEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LicenseKeySpecifier = ('body' | 'conditions' | 'description' | 'featured' | 'hidden' | 'id' | 'implementation' | 'key' | 'limitations' | 'name' | 'nickname' | 'permissions' | 'pseudoLicense' | 'spdxId' | 'url' | LicenseKeySpecifier)[];
export type LicenseFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	conditions?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	featured?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	implementation?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	limitations?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	pseudoLicense?: FieldPolicy<any> | FieldReadFunction<any>,
	spdxId?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LicenseRuleKeySpecifier = ('description' | 'key' | 'label' | LicenseRuleKeySpecifier)[];
export type LicenseRuleFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkRepositoryToProjectPayloadKeySpecifier = ('clientMutationId' | 'project' | 'repository' | LinkRepositoryToProjectPayloadKeySpecifier)[];
export type LinkRepositoryToProjectPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockLockablePayloadKeySpecifier = ('actor' | 'clientMutationId' | 'lockedRecord' | LockLockablePayloadKeySpecifier)[];
export type LockLockablePayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	lockedRecord?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockableKeySpecifier = ('activeLockReason' | 'locked' | LockableKeySpecifier)[];
export type LockableFieldPolicy = {
	activeLockReason?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'lockReason' | 'lockable' | LockedEventKeySpecifier)[];
export type LockedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lockReason?: FieldPolicy<any> | FieldReadFunction<any>,
	lockable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MannequinKeySpecifier = ('avatarUrl' | 'claimant' | 'createdAt' | 'databaseId' | 'email' | 'id' | 'login' | 'resourcePath' | 'updatedAt' | 'url' | MannequinKeySpecifier)[];
export type MannequinFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	claimant?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarkDiscussionCommentAsAnswerPayloadKeySpecifier = ('clientMutationId' | 'discussion' | MarkDiscussionCommentAsAnswerPayloadKeySpecifier)[];
export type MarkDiscussionCommentAsAnswerPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarkFileAsViewedPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | MarkFileAsViewedPayloadKeySpecifier)[];
export type MarkFileAsViewedPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarkPullRequestReadyForReviewPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | MarkPullRequestReadyForReviewPayloadKeySpecifier)[];
export type MarkPullRequestReadyForReviewPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarkedAsDuplicateEventKeySpecifier = ('actor' | 'canonical' | 'createdAt' | 'duplicate' | 'id' | 'isCrossRepository' | MarkedAsDuplicateEventKeySpecifier)[];
export type MarkedAsDuplicateEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCrossRepository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketplaceCategoryKeySpecifier = ('description' | 'howItWorks' | 'id' | 'name' | 'primaryListingCount' | 'resourcePath' | 'secondaryListingCount' | 'slug' | 'url' | MarketplaceCategoryKeySpecifier)[];
export type MarketplaceCategoryFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	howItWorks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryListingCount?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	secondaryListingCount?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketplaceListingKeySpecifier = ('app' | 'companyUrl' | 'configurationResourcePath' | 'configurationUrl' | 'documentationUrl' | 'extendedDescription' | 'extendedDescriptionHTML' | 'fullDescription' | 'fullDescriptionHTML' | 'hasPublishedFreeTrialPlans' | 'hasTermsOfService' | 'hasVerifiedOwner' | 'howItWorks' | 'howItWorksHTML' | 'id' | 'installationUrl' | 'installedForViewer' | 'isArchived' | 'isDraft' | 'isPaid' | 'isPublic' | 'isRejected' | 'isUnverified' | 'isUnverifiedPending' | 'isVerificationPendingFromDraft' | 'isVerificationPendingFromUnverified' | 'isVerified' | 'logoBackgroundColor' | 'logoUrl' | 'name' | 'normalizedShortDescription' | 'pricingUrl' | 'primaryCategory' | 'privacyPolicyUrl' | 'resourcePath' | 'screenshotUrls' | 'secondaryCategory' | 'shortDescription' | 'slug' | 'statusUrl' | 'supportEmail' | 'supportUrl' | 'termsOfServiceUrl' | 'url' | 'viewerCanAddPlans' | 'viewerCanApprove' | 'viewerCanDelist' | 'viewerCanEdit' | 'viewerCanEditCategories' | 'viewerCanEditPlans' | 'viewerCanRedraft' | 'viewerCanReject' | 'viewerCanRequestApproval' | 'viewerHasPurchased' | 'viewerHasPurchasedForAllOrganizations' | 'viewerIsListingAdmin' | MarketplaceListingKeySpecifier)[];
export type MarketplaceListingFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	companyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	documentationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	extendedDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	extendedDescriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	fullDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	fullDescriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPublishedFreeTrialPlans?: FieldPolicy<any> | FieldReadFunction<any>,
	hasTermsOfService?: FieldPolicy<any> | FieldReadFunction<any>,
	hasVerifiedOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	howItWorks?: FieldPolicy<any> | FieldReadFunction<any>,
	howItWorksHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	installationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	installedForViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	isDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	isPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	isRejected?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnverified?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnverifiedPending?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerificationPendingFromDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerificationPendingFromUnverified?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	logoBackgroundColor?: FieldPolicy<any> | FieldReadFunction<any>,
	logoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	normalizedShortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	pricingUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	privacyPolicyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	screenshotUrls?: FieldPolicy<any> | FieldReadFunction<any>,
	secondaryCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	statusUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	supportEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	supportUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	termsOfServiceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAddPlans?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanApprove?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelist?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanEditCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanEditPlans?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanRedraft?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReject?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanRequestApproval?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasPurchased?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasPurchasedForAllOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsListingAdmin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketplaceListingConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | MarketplaceListingConnectionKeySpecifier)[];
export type MarketplaceListingConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketplaceListingEdgeKeySpecifier = ('cursor' | 'node' | MarketplaceListingEdgeKeySpecifier)[];
export type MarketplaceListingEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberStatusableKeySpecifier = ('memberStatuses' | MemberStatusableKeySpecifier)[];
export type MemberStatusableFieldPolicy = {
	memberStatuses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembersCanDeleteReposClearAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | MembersCanDeleteReposClearAuditEntryKeySpecifier)[];
export type MembersCanDeleteReposClearAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembersCanDeleteReposDisableAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | MembersCanDeleteReposDisableAuditEntryKeySpecifier)[];
export type MembersCanDeleteReposDisableAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembersCanDeleteReposEnableAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | MembersCanDeleteReposEnableAuditEntryKeySpecifier)[];
export type MembersCanDeleteReposEnableAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MentionedEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'id' | MentionedEventKeySpecifier)[];
export type MentionedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MergeBranchPayloadKeySpecifier = ('clientMutationId' | 'mergeCommit' | MergeBranchPayloadKeySpecifier)[];
export type MergeBranchPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeCommit?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MergePullRequestPayloadKeySpecifier = ('actor' | 'clientMutationId' | 'pullRequest' | MergePullRequestPayloadKeySpecifier)[];
export type MergePullRequestPayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MergedEventKeySpecifier = ('actor' | 'commit' | 'createdAt' | 'id' | 'mergeRef' | 'mergeRefName' | 'pullRequest' | 'resourcePath' | 'url' | MergedEventKeySpecifier)[];
export type MergedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeRef?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeRefName?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MilestoneKeySpecifier = ('closed' | 'closedAt' | 'createdAt' | 'creator' | 'description' | 'dueOn' | 'id' | 'issues' | 'number' | 'progressPercentage' | 'pullRequests' | 'repository' | 'resourcePath' | 'state' | 'title' | 'updatedAt' | 'url' | MilestoneKeySpecifier)[];
export type MilestoneFieldPolicy = {
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	closedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dueOn?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issues?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	progressPercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MilestoneConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | MilestoneConnectionKeySpecifier)[];
export type MilestoneConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MilestoneEdgeKeySpecifier = ('cursor' | 'node' | MilestoneEdgeKeySpecifier)[];
export type MilestoneEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MilestonedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'milestoneTitle' | 'subject' | MilestonedEventKeySpecifier)[];
export type MilestonedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	milestoneTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MinimizableKeySpecifier = ('isMinimized' | 'minimizedReason' | 'viewerCanMinimize' | MinimizableKeySpecifier)[];
export type MinimizableFieldPolicy = {
	isMinimized?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizedReason?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanMinimize?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MinimizeCommentPayloadKeySpecifier = ('clientMutationId' | 'minimizedComment' | MinimizeCommentPayloadKeySpecifier)[];
export type MinimizeCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizedComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoveProjectCardPayloadKeySpecifier = ('cardEdge' | 'clientMutationId' | MoveProjectCardPayloadKeySpecifier)[];
export type MoveProjectCardPayloadFieldPolicy = {
	cardEdge?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoveProjectColumnPayloadKeySpecifier = ('clientMutationId' | 'columnEdge' | MoveProjectColumnPayloadKeySpecifier)[];
export type MoveProjectColumnPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	columnEdge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovedColumnsInProjectEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'id' | 'previousProjectColumnName' | 'project' | 'projectCard' | 'projectColumnName' | MovedColumnsInProjectEventKeySpecifier)[];
export type MovedColumnsInProjectEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	previousProjectColumnName?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectCard?: FieldPolicy<any> | FieldReadFunction<any>,
	projectColumnName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('acceptEnterpriseAdministratorInvitation' | 'acceptTopicSuggestion' | 'addAssigneesToAssignable' | 'addComment' | 'addDiscussionComment' | 'addEnterpriseSupportEntitlement' | 'addLabelsToLabelable' | 'addProjectCard' | 'addProjectColumn' | 'addProjectNextItem' | 'addPullRequestReview' | 'addPullRequestReviewComment' | 'addPullRequestReviewThread' | 'addReaction' | 'addStar' | 'addUpvote' | 'addVerifiableDomain' | 'approveDeployments' | 'approveVerifiableDomain' | 'archiveRepository' | 'cancelEnterpriseAdminInvitation' | 'cancelSponsorship' | 'changeUserStatus' | 'clearLabelsFromLabelable' | 'cloneProject' | 'cloneTemplateRepository' | 'closeIssue' | 'closePullRequest' | 'convertProjectCardNoteToIssue' | 'convertPullRequestToDraft' | 'createBranchProtectionRule' | 'createCheckRun' | 'createCheckSuite' | 'createCommitOnBranch' | 'createDeployment' | 'createDeploymentStatus' | 'createDiscussion' | 'createEnterpriseOrganization' | 'createEnvironment' | 'createIpAllowListEntry' | 'createIssue' | 'createLabel' | 'createProject' | 'createPullRequest' | 'createRef' | 'createRepository' | 'createSponsorship' | 'createTeamDiscussion' | 'createTeamDiscussionComment' | 'declineTopicSuggestion' | 'deleteBranchProtectionRule' | 'deleteDeployment' | 'deleteDiscussion' | 'deleteDiscussionComment' | 'deleteEnvironment' | 'deleteIpAllowListEntry' | 'deleteIssue' | 'deleteIssueComment' | 'deleteLabel' | 'deletePackageVersion' | 'deleteProject' | 'deleteProjectCard' | 'deleteProjectColumn' | 'deleteProjectNextItem' | 'deletePullRequestReview' | 'deletePullRequestReviewComment' | 'deleteRef' | 'deleteTeamDiscussion' | 'deleteTeamDiscussionComment' | 'deleteVerifiableDomain' | 'disablePullRequestAutoMerge' | 'dismissPullRequestReview' | 'dismissRepositoryVulnerabilityAlert' | 'enablePullRequestAutoMerge' | 'followUser' | 'importProject' | 'inviteEnterpriseAdmin' | 'linkRepositoryToProject' | 'lockLockable' | 'markDiscussionCommentAsAnswer' | 'markFileAsViewed' | 'markPullRequestReadyForReview' | 'mergeBranch' | 'mergePullRequest' | 'minimizeComment' | 'moveProjectCard' | 'moveProjectColumn' | 'pinIssue' | 'regenerateEnterpriseIdentityProviderRecoveryCodes' | 'regenerateVerifiableDomainToken' | 'rejectDeployments' | 'removeAssigneesFromAssignable' | 'removeEnterpriseAdmin' | 'removeEnterpriseIdentityProvider' | 'removeEnterpriseOrganization' | 'removeEnterpriseSupportEntitlement' | 'removeLabelsFromLabelable' | 'removeOutsideCollaborator' | 'removeReaction' | 'removeStar' | 'removeUpvote' | 'reopenIssue' | 'reopenPullRequest' | 'requestReviews' | 'rerequestCheckSuite' | 'resolveReviewThread' | 'setEnterpriseIdentityProvider' | 'setOrganizationInteractionLimit' | 'setRepositoryInteractionLimit' | 'setUserInteractionLimit' | 'submitPullRequestReview' | 'transferIssue' | 'unarchiveRepository' | 'unfollowUser' | 'unlinkRepositoryFromProject' | 'unlockLockable' | 'unmarkDiscussionCommentAsAnswer' | 'unmarkFileAsViewed' | 'unmarkIssueAsDuplicate' | 'unminimizeComment' | 'unpinIssue' | 'unresolveReviewThread' | 'updateBranchProtectionRule' | 'updateCheckRun' | 'updateCheckSuitePreferences' | 'updateDiscussion' | 'updateDiscussionComment' | 'updateEnterpriseAdministratorRole' | 'updateEnterpriseAllowPrivateRepositoryForkingSetting' | 'updateEnterpriseDefaultRepositoryPermissionSetting' | 'updateEnterpriseMembersCanChangeRepositoryVisibilitySetting' | 'updateEnterpriseMembersCanCreateRepositoriesSetting' | 'updateEnterpriseMembersCanDeleteIssuesSetting' | 'updateEnterpriseMembersCanDeleteRepositoriesSetting' | 'updateEnterpriseMembersCanInviteCollaboratorsSetting' | 'updateEnterpriseMembersCanMakePurchasesSetting' | 'updateEnterpriseMembersCanUpdateProtectedBranchesSetting' | 'updateEnterpriseMembersCanViewDependencyInsightsSetting' | 'updateEnterpriseOrganizationProjectsSetting' | 'updateEnterpriseProfile' | 'updateEnterpriseRepositoryProjectsSetting' | 'updateEnterpriseTeamDiscussionsSetting' | 'updateEnterpriseTwoFactorAuthenticationRequiredSetting' | 'updateEnvironment' | 'updateIpAllowListEnabledSetting' | 'updateIpAllowListEntry' | 'updateIpAllowListForInstalledAppsEnabledSetting' | 'updateIssue' | 'updateIssueComment' | 'updateLabel' | 'updateNotificationRestrictionSetting' | 'updateOrganizationAllowPrivateRepositoryForkingSetting' | 'updateProject' | 'updateProjectCard' | 'updateProjectColumn' | 'updateProjectNextItemField' | 'updatePullRequest' | 'updatePullRequestBranch' | 'updatePullRequestReview' | 'updatePullRequestReviewComment' | 'updateRef' | 'updateRefs' | 'updateRepository' | 'updateSponsorshipPreferences' | 'updateSubscription' | 'updateTeamDiscussion' | 'updateTeamDiscussionComment' | 'updateTeamReviewAssignment' | 'updateTopics' | 'verifyVerifiableDomain' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	acceptEnterpriseAdministratorInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptTopicSuggestion?: FieldPolicy<any> | FieldReadFunction<any>,
	addAssigneesToAssignable?: FieldPolicy<any> | FieldReadFunction<any>,
	addComment?: FieldPolicy<any> | FieldReadFunction<any>,
	addDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>,
	addEnterpriseSupportEntitlement?: FieldPolicy<any> | FieldReadFunction<any>,
	addLabelsToLabelable?: FieldPolicy<any> | FieldReadFunction<any>,
	addProjectCard?: FieldPolicy<any> | FieldReadFunction<any>,
	addProjectColumn?: FieldPolicy<any> | FieldReadFunction<any>,
	addProjectNextItem?: FieldPolicy<any> | FieldReadFunction<any>,
	addPullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	addPullRequestReviewComment?: FieldPolicy<any> | FieldReadFunction<any>,
	addPullRequestReviewThread?: FieldPolicy<any> | FieldReadFunction<any>,
	addReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	addStar?: FieldPolicy<any> | FieldReadFunction<any>,
	addUpvote?: FieldPolicy<any> | FieldReadFunction<any>,
	addVerifiableDomain?: FieldPolicy<any> | FieldReadFunction<any>,
	approveDeployments?: FieldPolicy<any> | FieldReadFunction<any>,
	approveVerifiableDomain?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelEnterpriseAdminInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelSponsorship?: FieldPolicy<any> | FieldReadFunction<any>,
	changeUserStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	clearLabelsFromLabelable?: FieldPolicy<any> | FieldReadFunction<any>,
	cloneProject?: FieldPolicy<any> | FieldReadFunction<any>,
	cloneTemplateRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	closeIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	closePullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	convertProjectCardNoteToIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	convertPullRequestToDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	createBranchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	createCheckRun?: FieldPolicy<any> | FieldReadFunction<any>,
	createCheckSuite?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommitOnBranch?: FieldPolicy<any> | FieldReadFunction<any>,
	createDeployment?: FieldPolicy<any> | FieldReadFunction<any>,
	createDeploymentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	createDiscussion?: FieldPolicy<any> | FieldReadFunction<any>,
	createEnterpriseOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	createEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	createIpAllowListEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	createIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	createLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	createProject?: FieldPolicy<any> | FieldReadFunction<any>,
	createPullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createRef?: FieldPolicy<any> | FieldReadFunction<any>,
	createRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	createSponsorship?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeamDiscussion?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeamDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>,
	declineTopicSuggestion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBranchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDeployment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDiscussion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIpAllowListEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIssueComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePackageVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProject?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProjectCard?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProjectColumn?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProjectNextItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePullRequestReviewComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRef?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeamDiscussion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeamDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteVerifiableDomain?: FieldPolicy<any> | FieldReadFunction<any>,
	disablePullRequestAutoMerge?: FieldPolicy<any> | FieldReadFunction<any>,
	dismissPullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	dismissRepositoryVulnerabilityAlert?: FieldPolicy<any> | FieldReadFunction<any>,
	enablePullRequestAutoMerge?: FieldPolicy<any> | FieldReadFunction<any>,
	followUser?: FieldPolicy<any> | FieldReadFunction<any>,
	importProject?: FieldPolicy<any> | FieldReadFunction<any>,
	inviteEnterpriseAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	linkRepositoryToProject?: FieldPolicy<any> | FieldReadFunction<any>,
	lockLockable?: FieldPolicy<any> | FieldReadFunction<any>,
	markDiscussionCommentAsAnswer?: FieldPolicy<any> | FieldReadFunction<any>,
	markFileAsViewed?: FieldPolicy<any> | FieldReadFunction<any>,
	markPullRequestReadyForReview?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeBranch?: FieldPolicy<any> | FieldReadFunction<any>,
	mergePullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizeComment?: FieldPolicy<any> | FieldReadFunction<any>,
	moveProjectCard?: FieldPolicy<any> | FieldReadFunction<any>,
	moveProjectColumn?: FieldPolicy<any> | FieldReadFunction<any>,
	pinIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	regenerateEnterpriseIdentityProviderRecoveryCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	regenerateVerifiableDomainToken?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectDeployments?: FieldPolicy<any> | FieldReadFunction<any>,
	removeAssigneesFromAssignable?: FieldPolicy<any> | FieldReadFunction<any>,
	removeEnterpriseAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	removeEnterpriseIdentityProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	removeEnterpriseOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	removeEnterpriseSupportEntitlement?: FieldPolicy<any> | FieldReadFunction<any>,
	removeLabelsFromLabelable?: FieldPolicy<any> | FieldReadFunction<any>,
	removeOutsideCollaborator?: FieldPolicy<any> | FieldReadFunction<any>,
	removeReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	removeStar?: FieldPolicy<any> | FieldReadFunction<any>,
	removeUpvote?: FieldPolicy<any> | FieldReadFunction<any>,
	reopenIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	reopenPullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	requestReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	rerequestCheckSuite?: FieldPolicy<any> | FieldReadFunction<any>,
	resolveReviewThread?: FieldPolicy<any> | FieldReadFunction<any>,
	setEnterpriseIdentityProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	setOrganizationInteractionLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	setRepositoryInteractionLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserInteractionLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	submitPullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	transferIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	unarchiveRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	unfollowUser?: FieldPolicy<any> | FieldReadFunction<any>,
	unlinkRepositoryFromProject?: FieldPolicy<any> | FieldReadFunction<any>,
	unlockLockable?: FieldPolicy<any> | FieldReadFunction<any>,
	unmarkDiscussionCommentAsAnswer?: FieldPolicy<any> | FieldReadFunction<any>,
	unmarkFileAsViewed?: FieldPolicy<any> | FieldReadFunction<any>,
	unmarkIssueAsDuplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	unminimizeComment?: FieldPolicy<any> | FieldReadFunction<any>,
	unpinIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	unresolveReviewThread?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBranchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCheckRun?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCheckSuitePreferences?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDiscussion?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseAdministratorRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseAllowPrivateRepositoryForkingSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseDefaultRepositoryPermissionSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanChangeRepositoryVisibilitySetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanCreateRepositoriesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanDeleteIssuesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanDeleteRepositoriesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanInviteCollaboratorsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanMakePurchasesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanUpdateProtectedBranchesSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseMembersCanViewDependencyInsightsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseOrganizationProjectsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseRepositoryProjectsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseTeamDiscussionsSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnterpriseTwoFactorAuthenticationRequiredSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIpAllowListEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIpAllowListEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIpAllowListForInstalledAppsEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIssue?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIssueComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNotificationRestrictionSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrganizationAllowPrivateRepositoryForkingSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProject?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectCard?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectColumn?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectNextItemField?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePullRequestBranch?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePullRequestReviewComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRef?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSponsorshipPreferences?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeamDiscussion?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeamDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeamReviewAssignment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopics?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyVerifiableDomain?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OIDCProviderKeySpecifier = ('enterprise' | 'externalIdentities' | 'id' | 'providerType' | 'tenantId' | OIDCProviderKeySpecifier)[];
export type OIDCProviderFieldPolicy = {
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	externalIdentities?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	providerType?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OauthApplicationAuditEntryDataKeySpecifier = ('oauthApplicationName' | 'oauthApplicationResourcePath' | 'oauthApplicationUrl' | OauthApplicationAuditEntryDataKeySpecifier)[];
export type OauthApplicationAuditEntryDataFieldPolicy = {
	oauthApplicationName?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OauthApplicationCreateAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'applicationUrl' | 'callbackUrl' | 'createdAt' | 'id' | 'oauthApplicationName' | 'oauthApplicationResourcePath' | 'oauthApplicationUrl' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'rateLimit' | 'state' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OauthApplicationCreateAuditEntryKeySpecifier)[];
export type OauthApplicationCreateAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	applicationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	callbackUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationName?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	rateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgAddBillingManagerAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'invitationEmail' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgAddBillingManagerAuditEntryKeySpecifier)[];
export type OrgAddBillingManagerAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitationEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgAddMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'permission' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgAddMemberAuditEntryKeySpecifier)[];
export type OrgAddMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgBlockUserAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'blockedUser' | 'blockedUserName' | 'blockedUserResourcePath' | 'blockedUserUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgBlockUserAuditEntryKeySpecifier)[];
export type OrgBlockUserAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUser?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUserName?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUserResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUserUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier)[];
export type OrgConfigDisableCollaboratorsOnlyAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier)[];
export type OrgConfigEnableCollaboratorsOnlyAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgCreateAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'billingPlan' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgCreateAuditEntryKeySpecifier)[];
export type OrgCreateAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	billingPlan?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgDisableOauthAppRestrictionsAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgDisableOauthAppRestrictionsAuditEntryKeySpecifier)[];
export type OrgDisableOauthAppRestrictionsAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgDisableSamlAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'digestMethodUrl' | 'id' | 'issuerUrl' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'signatureMethodUrl' | 'singleSignOnUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgDisableSamlAuditEntryKeySpecifier)[];
export type OrgDisableSamlAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	digestMethodUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issuerUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	signatureMethodUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	singleSignOnUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgDisableTwoFactorRequirementAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgDisableTwoFactorRequirementAuditEntryKeySpecifier)[];
export type OrgDisableTwoFactorRequirementAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgEnableOauthAppRestrictionsAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgEnableOauthAppRestrictionsAuditEntryKeySpecifier)[];
export type OrgEnableOauthAppRestrictionsAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgEnableSamlAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'digestMethodUrl' | 'id' | 'issuerUrl' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'signatureMethodUrl' | 'singleSignOnUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgEnableSamlAuditEntryKeySpecifier)[];
export type OrgEnableSamlAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	digestMethodUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issuerUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	signatureMethodUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	singleSignOnUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgEnableTwoFactorRequirementAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgEnableTwoFactorRequirementAuditEntryKeySpecifier)[];
export type OrgEnableTwoFactorRequirementAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgInviteMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'email' | 'id' | 'operationType' | 'organization' | 'organizationInvitation' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgInviteMemberAuditEntryKeySpecifier)[];
export type OrgInviteMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgInviteToBusinessAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgInviteToBusinessAuditEntryKeySpecifier)[];
export type OrgInviteToBusinessAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgOauthAppAccessApprovedAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'oauthApplicationName' | 'oauthApplicationResourcePath' | 'oauthApplicationUrl' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgOauthAppAccessApprovedAuditEntryKeySpecifier)[];
export type OrgOauthAppAccessApprovedAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationName?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgOauthAppAccessDeniedAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'oauthApplicationName' | 'oauthApplicationResourcePath' | 'oauthApplicationUrl' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgOauthAppAccessDeniedAuditEntryKeySpecifier)[];
export type OrgOauthAppAccessDeniedAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationName?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgOauthAppAccessRequestedAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'oauthApplicationName' | 'oauthApplicationResourcePath' | 'oauthApplicationUrl' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgOauthAppAccessRequestedAuditEntryKeySpecifier)[];
export type OrgOauthAppAccessRequestedAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationName?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	oauthApplicationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgRemoveBillingManagerAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'reason' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgRemoveBillingManagerAuditEntryKeySpecifier)[];
export type OrgRemoveBillingManagerAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgRemoveMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'membershipTypes' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'reason' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgRemoveMemberAuditEntryKeySpecifier)[];
export type OrgRemoveMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	membershipTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgRemoveOutsideCollaboratorAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'membershipTypes' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'reason' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgRemoveOutsideCollaboratorAuditEntryKeySpecifier)[];
export type OrgRemoveOutsideCollaboratorAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	membershipTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgRestoreMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'restoredCustomEmailRoutingsCount' | 'restoredIssueAssignmentsCount' | 'restoredMemberships' | 'restoredMembershipsCount' | 'restoredRepositoriesCount' | 'restoredRepositoryStarsCount' | 'restoredRepositoryWatchesCount' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgRestoreMemberAuditEntryKeySpecifier)[];
export type OrgRestoreMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredCustomEmailRoutingsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredIssueAssignmentsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredMemberships?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredMembershipsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredRepositoriesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredRepositoryStarsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredRepositoryWatchesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgRestoreMemberMembershipOrganizationAuditEntryDataKeySpecifier = ('organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | OrgRestoreMemberMembershipOrganizationAuditEntryDataKeySpecifier)[];
export type OrgRestoreMemberMembershipOrganizationAuditEntryDataFieldPolicy = {
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgRestoreMemberMembershipRepositoryAuditEntryDataKeySpecifier = ('repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | OrgRestoreMemberMembershipRepositoryAuditEntryDataKeySpecifier)[];
export type OrgRestoreMemberMembershipRepositoryAuditEntryDataFieldPolicy = {
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgRestoreMemberMembershipTeamAuditEntryDataKeySpecifier = ('team' | 'teamName' | 'teamResourcePath' | 'teamUrl' | OrgRestoreMemberMembershipTeamAuditEntryDataKeySpecifier)[];
export type OrgRestoreMemberMembershipTeamAuditEntryDataFieldPolicy = {
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teamName?: FieldPolicy<any> | FieldReadFunction<any>,
	teamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgUnblockUserAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'blockedUser' | 'blockedUserName' | 'blockedUserResourcePath' | 'blockedUserUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgUnblockUserAuditEntryKeySpecifier)[];
export type OrgUnblockUserAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUser?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUserName?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUserResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	blockedUserUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgUpdateDefaultRepositoryPermissionAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'permission' | 'permissionWas' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgUpdateDefaultRepositoryPermissionAuditEntryKeySpecifier)[];
export type OrgUpdateDefaultRepositoryPermissionAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionWas?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgUpdateMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'permission' | 'permissionWas' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgUpdateMemberAuditEntryKeySpecifier)[];
export type OrgUpdateMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionWas?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'canCreateRepositories' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | 'visibility' | OrgUpdateMemberRepositoryCreationPermissionAuditEntryKeySpecifier)[];
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	canCreateRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'canInviteOutsideCollaboratorsToRepositories' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | OrgUpdateMemberRepositoryInvitationPermissionAuditEntryKeySpecifier)[];
export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	canInviteOutsideCollaboratorsToRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('anyPinnableItems' | 'auditLog' | 'avatarUrl' | 'createdAt' | 'databaseId' | 'description' | 'descriptionHTML' | 'domains' | 'email' | 'estimatedNextSponsorsPayoutInCents' | 'hasSponsorsListing' | 'id' | 'interactionAbility' | 'ipAllowListEnabledSetting' | 'ipAllowListEntries' | 'ipAllowListForInstalledAppsEnabledSetting' | 'isSponsoredBy' | 'isSponsoringViewer' | 'isVerified' | 'itemShowcase' | 'location' | 'login' | 'memberStatuses' | 'membersCanForkPrivateRepositories' | 'membersWithRole' | 'monthlyEstimatedSponsorsIncomeInCents' | 'name' | 'newTeamResourcePath' | 'newTeamUrl' | 'notificationDeliveryRestrictionEnabledSetting' | 'organizationBillingEmail' | 'packages' | 'pendingMembers' | 'pinnableItems' | 'pinnedItems' | 'pinnedItemsRemaining' | 'project' | 'projectNext' | 'projects' | 'projectsNext' | 'projectsResourcePath' | 'projectsUrl' | 'repositories' | 'repository' | 'repositoryDiscussionComments' | 'repositoryDiscussions' | 'requiresTwoFactorAuthentication' | 'resourcePath' | 'samlIdentityProvider' | 'sponsoring' | 'sponsors' | 'sponsorsActivities' | 'sponsorsListing' | 'sponsorshipForViewerAsSponsor' | 'sponsorshipForViewerAsSponsorable' | 'sponsorshipNewsletters' | 'sponsorshipsAsMaintainer' | 'sponsorshipsAsSponsor' | 'team' | 'teams' | 'teamsResourcePath' | 'teamsUrl' | 'twitterUsername' | 'updatedAt' | 'url' | 'viewerCanAdminister' | 'viewerCanChangePinnedItems' | 'viewerCanCreateProjects' | 'viewerCanCreateRepositories' | 'viewerCanCreateTeams' | 'viewerCanSponsor' | 'viewerIsAMember' | 'viewerIsSponsoring' | 'websiteUrl' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	anyPinnableItems?: FieldPolicy<any> | FieldReadFunction<any>,
	auditLog?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	domains?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	estimatedNextSponsorsPayoutInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	hasSponsorsListing?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interactionAbility?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEntries?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListForInstalledAppsEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	isSponsoredBy?: FieldPolicy<any> | FieldReadFunction<any>,
	isSponsoringViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	itemShowcase?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	memberStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	membersCanForkPrivateRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	membersWithRole?: FieldPolicy<any> | FieldReadFunction<any>,
	monthlyEstimatedSponsorsIncomeInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	newTeamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	newTeamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationDeliveryRestrictionEnabledSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationBillingEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	packages?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnableItems?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedItems?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedItemsRemaining?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectNext?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsNext?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryDiscussionComments?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryDiscussions?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresTwoFactorAuthentication?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	samlIdentityProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsoring?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsors?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsListing?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipForViewerAsSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipForViewerAsSponsorable?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipNewsletters?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipsAsMaintainer?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipsAsSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teams?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterUsername?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanChangePinnedItems?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanCreateProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanCreateRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanCreateTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsAMember?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsSponsoring?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationAuditEntryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | OrganizationAuditEntryConnectionKeySpecifier)[];
export type OrganizationAuditEntryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationAuditEntryDataKeySpecifier = ('organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | OrganizationAuditEntryDataKeySpecifier)[];
export type OrganizationAuditEntryDataFieldPolicy = {
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationAuditEntryEdgeKeySpecifier = ('cursor' | 'node' | OrganizationAuditEntryEdgeKeySpecifier)[];
export type OrganizationAuditEntryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | OrganizationConnectionKeySpecifier)[];
export type OrganizationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationEdgeKeySpecifier = ('cursor' | 'node' | OrganizationEdgeKeySpecifier)[];
export type OrganizationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationIdentityProviderKeySpecifier = ('digestMethod' | 'externalIdentities' | 'id' | 'idpCertificate' | 'issuer' | 'organization' | 'signatureMethod' | 'ssoUrl' | OrganizationIdentityProviderKeySpecifier)[];
export type OrganizationIdentityProviderFieldPolicy = {
	digestMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	externalIdentities?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	idpCertificate?: FieldPolicy<any> | FieldReadFunction<any>,
	issuer?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	signatureMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	ssoUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationInvitationKeySpecifier = ('createdAt' | 'email' | 'id' | 'invitationType' | 'invitee' | 'inviter' | 'organization' | 'role' | OrganizationInvitationKeySpecifier)[];
export type OrganizationInvitationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitationType?: FieldPolicy<any> | FieldReadFunction<any>,
	invitee?: FieldPolicy<any> | FieldReadFunction<any>,
	inviter?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationInvitationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | OrganizationInvitationConnectionKeySpecifier)[];
export type OrganizationInvitationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationInvitationEdgeKeySpecifier = ('cursor' | 'node' | OrganizationInvitationEdgeKeySpecifier)[];
export type OrganizationInvitationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMemberConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | OrganizationMemberConnectionKeySpecifier)[];
export type OrganizationMemberConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMemberEdgeKeySpecifier = ('cursor' | 'hasTwoFactorEnabled' | 'node' | 'role' | OrganizationMemberEdgeKeySpecifier)[];
export type OrganizationMemberEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasTwoFactorEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationTeamsHovercardContextKeySpecifier = ('message' | 'octicon' | 'relevantTeams' | 'teamsResourcePath' | 'teamsUrl' | 'totalTeamCount' | OrganizationTeamsHovercardContextKeySpecifier)[];
export type OrganizationTeamsHovercardContextFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	octicon?: FieldPolicy<any> | FieldReadFunction<any>,
	relevantTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTeamCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationsHovercardContextKeySpecifier = ('message' | 'octicon' | 'relevantOrganizations' | 'totalOrganizationCount' | OrganizationsHovercardContextKeySpecifier)[];
export type OrganizationsHovercardContextFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	octicon?: FieldPolicy<any> | FieldReadFunction<any>,
	relevantOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	totalOrganizationCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageKeySpecifier = ('id' | 'latestVersion' | 'name' | 'packageType' | 'repository' | 'statistics' | 'version' | 'versions' | PackageKeySpecifier)[];
export type PackageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latestVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	packageType?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	statistics?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	versions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PackageConnectionKeySpecifier)[];
export type PackageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageEdgeKeySpecifier = ('cursor' | 'node' | PackageEdgeKeySpecifier)[];
export type PackageEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageFileKeySpecifier = ('id' | 'md5' | 'name' | 'packageVersion' | 'sha1' | 'sha256' | 'size' | 'updatedAt' | 'url' | PackageFileKeySpecifier)[];
export type PackageFileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	md5?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	packageVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	sha1?: FieldPolicy<any> | FieldReadFunction<any>,
	sha256?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageFileConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PackageFileConnectionKeySpecifier)[];
export type PackageFileConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageFileEdgeKeySpecifier = ('cursor' | 'node' | PackageFileEdgeKeySpecifier)[];
export type PackageFileEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageOwnerKeySpecifier = ('id' | 'packages' | PackageOwnerKeySpecifier)[];
export type PackageOwnerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	packages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageStatisticsKeySpecifier = ('downloadsTotalCount' | PackageStatisticsKeySpecifier)[];
export type PackageStatisticsFieldPolicy = {
	downloadsTotalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageTagKeySpecifier = ('id' | 'name' | 'version' | PackageTagKeySpecifier)[];
export type PackageTagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageVersionKeySpecifier = ('files' | 'id' | 'package' | 'platform' | 'preRelease' | 'readme' | 'release' | 'statistics' | 'summary' | 'version' | PackageVersionKeySpecifier)[];
export type PackageVersionFieldPolicy = {
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	package?: FieldPolicy<any> | FieldReadFunction<any>,
	platform?: FieldPolicy<any> | FieldReadFunction<any>,
	preRelease?: FieldPolicy<any> | FieldReadFunction<any>,
	readme?: FieldPolicy<any> | FieldReadFunction<any>,
	release?: FieldPolicy<any> | FieldReadFunction<any>,
	statistics?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageVersionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PackageVersionConnectionKeySpecifier)[];
export type PackageVersionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageVersionEdgeKeySpecifier = ('cursor' | 'node' | PackageVersionEdgeKeySpecifier)[];
export type PackageVersionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageVersionStatisticsKeySpecifier = ('downloadsTotalCount' | PackageVersionStatisticsKeySpecifier)[];
export type PackageVersionStatisticsFieldPolicy = {
	downloadsTotalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionSourceKeySpecifier = ('organization' | 'permission' | 'source' | PermissionSourceKeySpecifier)[];
export type PermissionSourceFieldPolicy = {
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinIssuePayloadKeySpecifier = ('clientMutationId' | 'issue' | PinIssuePayloadKeySpecifier)[];
export type PinIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnableItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PinnableItemConnectionKeySpecifier)[];
export type PinnableItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnableItemEdgeKeySpecifier = ('cursor' | 'node' | PinnableItemEdgeKeySpecifier)[];
export type PinnableItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnedDiscussionKeySpecifier = ('createdAt' | 'databaseId' | 'discussion' | 'gradientStopColors' | 'id' | 'pattern' | 'pinnedBy' | 'preconfiguredGradient' | 'repository' | 'updatedAt' | PinnedDiscussionKeySpecifier)[];
export type PinnedDiscussionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>,
	gradientStopColors?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	preconfiguredGradient?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnedDiscussionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PinnedDiscussionConnectionKeySpecifier)[];
export type PinnedDiscussionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnedDiscussionEdgeKeySpecifier = ('cursor' | 'node' | PinnedDiscussionEdgeKeySpecifier)[];
export type PinnedDiscussionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'issue' | PinnedEventKeySpecifier)[];
export type PinnedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnedIssueKeySpecifier = ('databaseId' | 'id' | 'issue' | 'pinnedBy' | 'repository' | PinnedIssueKeySpecifier)[];
export type PinnedIssueFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnedIssueConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PinnedIssueConnectionKeySpecifier)[];
export type PinnedIssueConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PinnedIssueEdgeKeySpecifier = ('cursor' | 'node' | PinnedIssueEdgeKeySpecifier)[];
export type PinnedIssueEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrivateRepositoryForkingDisableAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | PrivateRepositoryForkingDisableAuditEntryKeySpecifier)[];
export type PrivateRepositoryForkingDisableAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrivateRepositoryForkingEnableAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | PrivateRepositoryForkingEnableAuditEntryKeySpecifier)[];
export type PrivateRepositoryForkingEnableAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileItemShowcaseKeySpecifier = ('hasPinnedItems' | 'items' | ProfileItemShowcaseKeySpecifier)[];
export type ProfileItemShowcaseFieldPolicy = {
	hasPinnedItems?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileOwnerKeySpecifier = ('anyPinnableItems' | 'email' | 'id' | 'itemShowcase' | 'location' | 'login' | 'name' | 'pinnableItems' | 'pinnedItems' | 'pinnedItemsRemaining' | 'viewerCanChangePinnedItems' | 'websiteUrl' | ProfileOwnerKeySpecifier)[];
export type ProfileOwnerFieldPolicy = {
	anyPinnableItems?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itemShowcase?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnableItems?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedItems?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedItemsRemaining?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanChangePinnedItems?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('body' | 'bodyHTML' | 'closed' | 'closedAt' | 'columns' | 'createdAt' | 'creator' | 'databaseId' | 'id' | 'name' | 'number' | 'owner' | 'pendingCards' | 'progress' | 'resourcePath' | 'state' | 'updatedAt' | 'url' | 'viewerCanUpdate' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	closedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	columns?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingCards?: FieldPolicy<any> | FieldReadFunction<any>,
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectCardKeySpecifier = ('column' | 'content' | 'createdAt' | 'creator' | 'databaseId' | 'id' | 'isArchived' | 'note' | 'project' | 'resourcePath' | 'state' | 'updatedAt' | 'url' | ProjectCardKeySpecifier)[];
export type ProjectCardFieldPolicy = {
	column?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectCardConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProjectCardConnectionKeySpecifier)[];
export type ProjectCardConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectCardEdgeKeySpecifier = ('cursor' | 'node' | ProjectCardEdgeKeySpecifier)[];
export type ProjectCardEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectColumnKeySpecifier = ('cards' | 'createdAt' | 'databaseId' | 'id' | 'name' | 'project' | 'purpose' | 'resourcePath' | 'updatedAt' | 'url' | ProjectColumnKeySpecifier)[];
export type ProjectColumnFieldPolicy = {
	cards?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	purpose?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectColumnConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProjectColumnConnectionKeySpecifier)[];
export type ProjectColumnConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectColumnEdgeKeySpecifier = ('cursor' | 'node' | ProjectColumnEdgeKeySpecifier)[];
export type ProjectColumnEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProjectConnectionKeySpecifier)[];
export type ProjectConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectEdgeKeySpecifier = ('cursor' | 'node' | ProjectEdgeKeySpecifier)[];
export type ProjectEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextKeySpecifier = ('closed' | 'closedAt' | 'createdAt' | 'creator' | 'databaseId' | 'description' | 'fields' | 'id' | 'items' | 'number' | 'owner' | 'resourcePath' | 'title' | 'updatedAt' | 'url' | 'viewerCanUpdate' | ProjectNextKeySpecifier)[];
export type ProjectNextFieldPolicy = {
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	closedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProjectNextConnectionKeySpecifier)[];
export type ProjectNextConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextEdgeKeySpecifier = ('cursor' | 'node' | ProjectNextEdgeKeySpecifier)[];
export type ProjectNextEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextFieldKeySpecifier = ('createdAt' | 'databaseId' | 'id' | 'name' | 'project' | 'settings' | 'updatedAt' | ProjectNextFieldKeySpecifier)[];
export type ProjectNextFieldFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextFieldConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProjectNextFieldConnectionKeySpecifier)[];
export type ProjectNextFieldConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextFieldEdgeKeySpecifier = ('cursor' | 'node' | ProjectNextFieldEdgeKeySpecifier)[];
export type ProjectNextFieldEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextItemKeySpecifier = ('content' | 'createdAt' | 'creator' | 'databaseId' | 'fieldValues' | 'id' | 'project' | 'title' | 'updatedAt' | ProjectNextItemKeySpecifier)[];
export type ProjectNextItemFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldValues?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProjectNextItemConnectionKeySpecifier)[];
export type ProjectNextItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextItemEdgeKeySpecifier = ('cursor' | 'node' | ProjectNextItemEdgeKeySpecifier)[];
export type ProjectNextItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextItemFieldValueKeySpecifier = ('createdAt' | 'creator' | 'databaseId' | 'id' | 'projectField' | 'projectItem' | 'updatedAt' | 'value' | ProjectNextItemFieldValueKeySpecifier)[];
export type ProjectNextItemFieldValueFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	projectField?: FieldPolicy<any> | FieldReadFunction<any>,
	projectItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextItemFieldValueConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProjectNextItemFieldValueConnectionKeySpecifier)[];
export type ProjectNextItemFieldValueConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextItemFieldValueEdgeKeySpecifier = ('cursor' | 'node' | ProjectNextItemFieldValueEdgeKeySpecifier)[];
export type ProjectNextItemFieldValueEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectNextOwnerKeySpecifier = ('id' | 'projectNext' | 'projectsNext' | ProjectNextOwnerKeySpecifier)[];
export type ProjectNextOwnerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	projectNext?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsNext?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectOwnerKeySpecifier = ('id' | 'project' | 'projects' | 'projectsResourcePath' | 'projectsUrl' | 'viewerCanCreateProjects' | ProjectOwnerKeySpecifier)[];
export type ProjectOwnerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanCreateProjects?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectProgressKeySpecifier = ('doneCount' | 'donePercentage' | 'enabled' | 'inProgressCount' | 'inProgressPercentage' | 'todoCount' | 'todoPercentage' | ProjectProgressKeySpecifier)[];
export type ProjectProgressFieldPolicy = {
	doneCount?: FieldPolicy<any> | FieldReadFunction<any>,
	donePercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	inProgressCount?: FieldPolicy<any> | FieldReadFunction<any>,
	inProgressPercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	todoCount?: FieldPolicy<any> | FieldReadFunction<any>,
	todoPercentage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicKeyKeySpecifier = ('accessedAt' | 'createdAt' | 'fingerprint' | 'id' | 'isReadOnly' | 'key' | 'updatedAt' | PublicKeyKeySpecifier)[];
export type PublicKeyFieldPolicy = {
	accessedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	fingerprint?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isReadOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicKeyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PublicKeyConnectionKeySpecifier)[];
export type PublicKeyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicKeyEdgeKeySpecifier = ('cursor' | 'node' | PublicKeyEdgeKeySpecifier)[];
export type PublicKeyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestKeySpecifier = ('activeLockReason' | 'additions' | 'assignees' | 'author' | 'authorAssociation' | 'autoMergeRequest' | 'baseRef' | 'baseRefName' | 'baseRefOid' | 'baseRepository' | 'body' | 'bodyHTML' | 'bodyText' | 'canBeRebased' | 'changedFiles' | 'checksResourcePath' | 'checksUrl' | 'closed' | 'closedAt' | 'closingIssuesReferences' | 'comments' | 'commits' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'deletions' | 'editor' | 'files' | 'headRef' | 'headRefName' | 'headRefOid' | 'headRepository' | 'headRepositoryOwner' | 'hovercard' | 'id' | 'includesCreatedEdit' | 'isCrossRepository' | 'isDraft' | 'isReadByViewer' | 'labels' | 'lastEditedAt' | 'latestOpinionatedReviews' | 'latestReviews' | 'locked' | 'maintainerCanModify' | 'mergeCommit' | 'mergeStateStatus' | 'mergeable' | 'merged' | 'mergedAt' | 'mergedBy' | 'milestone' | 'number' | 'participants' | 'permalink' | 'potentialMergeCommit' | 'projectCards' | 'projectNext' | 'projectsNext' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'repository' | 'resourcePath' | 'revertResourcePath' | 'revertUrl' | 'reviewDecision' | 'reviewRequests' | 'reviewThreads' | 'reviews' | 'state' | 'suggestedReviewers' | 'timeline' | 'timelineItems' | 'title' | 'titleHTML' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanApplySuggestion' | 'viewerCanDeleteHeadRef' | 'viewerCanDisableAutoMerge' | 'viewerCanEnableAutoMerge' | 'viewerCanReact' | 'viewerCanSubscribe' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | 'viewerLatestReview' | 'viewerLatestReviewRequest' | 'viewerMergeBodyText' | 'viewerMergeHeadlineText' | 'viewerSubscription' | PullRequestKeySpecifier)[];
export type PullRequestFieldPolicy = {
	activeLockReason?: FieldPolicy<any> | FieldReadFunction<any>,
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	assignees?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	autoMergeRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRef?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRefName?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRefOid?: FieldPolicy<any> | FieldReadFunction<any>,
	baseRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	canBeRebased?: FieldPolicy<any> | FieldReadFunction<any>,
	changedFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	checksResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	checksUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	closedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	closingIssuesReferences?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commits?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletions?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	headRef?: FieldPolicy<any> | FieldReadFunction<any>,
	headRefName?: FieldPolicy<any> | FieldReadFunction<any>,
	headRefOid?: FieldPolicy<any> | FieldReadFunction<any>,
	headRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	headRepositoryOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	hovercard?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isCrossRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	isDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	isReadByViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	latestOpinionatedReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	latestReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	maintainerCanModify?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeStateStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeable?: FieldPolicy<any> | FieldReadFunction<any>,
	merged?: FieldPolicy<any> | FieldReadFunction<any>,
	mergedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	mergedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	milestone?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	participants?: FieldPolicy<any> | FieldReadFunction<any>,
	permalink?: FieldPolicy<any> | FieldReadFunction<any>,
	potentialMergeCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	projectCards?: FieldPolicy<any> | FieldReadFunction<any>,
	projectNext?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsNext?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	revertResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	revertUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewDecision?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewThreads?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestedReviewers?: FieldPolicy<any> | FieldReadFunction<any>,
	timeline?: FieldPolicy<any> | FieldReadFunction<any>,
	timelineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanApplySuggestion?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDeleteHeadRef?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDisableAutoMerge?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanEnableAutoMerge?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerLatestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerLatestReviewRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerMergeBodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerMergeHeadlineText?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestChangedFileKeySpecifier = ('additions' | 'deletions' | 'path' | 'viewerViewedState' | PullRequestChangedFileKeySpecifier)[];
export type PullRequestChangedFileFieldPolicy = {
	additions?: FieldPolicy<any> | FieldReadFunction<any>,
	deletions?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerViewedState?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestChangedFileConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PullRequestChangedFileConnectionKeySpecifier)[];
export type PullRequestChangedFileConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestChangedFileEdgeKeySpecifier = ('cursor' | 'node' | PullRequestChangedFileEdgeKeySpecifier)[];
export type PullRequestChangedFileEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestCommitKeySpecifier = ('commit' | 'id' | 'pullRequest' | 'resourcePath' | 'url' | PullRequestCommitKeySpecifier)[];
export type PullRequestCommitFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestCommitCommentThreadKeySpecifier = ('comments' | 'commit' | 'id' | 'path' | 'position' | 'pullRequest' | 'repository' | PullRequestCommitCommentThreadKeySpecifier)[];
export type PullRequestCommitCommentThreadFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestCommitConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PullRequestCommitConnectionKeySpecifier)[];
export type PullRequestCommitConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestCommitEdgeKeySpecifier = ('cursor' | 'node' | PullRequestCommitEdgeKeySpecifier)[];
export type PullRequestCommitEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PullRequestConnectionKeySpecifier)[];
export type PullRequestConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestContributionsByRepositoryKeySpecifier = ('contributions' | 'repository' | PullRequestContributionsByRepositoryKeySpecifier)[];
export type PullRequestContributionsByRepositoryFieldPolicy = {
	contributions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestEdgeKeySpecifier = ('cursor' | 'node' | PullRequestEdgeKeySpecifier)[];
export type PullRequestEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewKeySpecifier = ('author' | 'authorAssociation' | 'authorCanPushToRepository' | 'body' | 'bodyHTML' | 'bodyText' | 'comments' | 'commit' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'editor' | 'id' | 'includesCreatedEdit' | 'lastEditedAt' | 'onBehalfOf' | 'publishedAt' | 'pullRequest' | 'reactionGroups' | 'reactions' | 'repository' | 'resourcePath' | 'state' | 'submittedAt' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanReact' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | PullRequestReviewKeySpecifier)[];
export type PullRequestReviewFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	authorCanPushToRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	onBehalfOf?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	submittedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewCommentKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'commit' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'diffHunk' | 'draftedAt' | 'editor' | 'id' | 'includesCreatedEdit' | 'isMinimized' | 'lastEditedAt' | 'minimizedReason' | 'originalCommit' | 'originalPosition' | 'outdated' | 'path' | 'position' | 'publishedAt' | 'pullRequest' | 'pullRequestReview' | 'reactionGroups' | 'reactions' | 'replyTo' | 'repository' | 'resourcePath' | 'state' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanMinimize' | 'viewerCanReact' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | PullRequestReviewCommentKeySpecifier)[];
export type PullRequestReviewCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	diffHunk?: FieldPolicy<any> | FieldReadFunction<any>,
	draftedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isMinimized?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	minimizedReason?: FieldPolicy<any> | FieldReadFunction<any>,
	originalCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	originalPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	outdated?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	replyTo?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanMinimize?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PullRequestReviewCommentConnectionKeySpecifier)[];
export type PullRequestReviewCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewCommentEdgeKeySpecifier = ('cursor' | 'node' | PullRequestReviewCommentEdgeKeySpecifier)[];
export type PullRequestReviewCommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PullRequestReviewConnectionKeySpecifier)[];
export type PullRequestReviewConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewContributionsByRepositoryKeySpecifier = ('contributions' | 'repository' | PullRequestReviewContributionsByRepositoryKeySpecifier)[];
export type PullRequestReviewContributionsByRepositoryFieldPolicy = {
	contributions?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewEdgeKeySpecifier = ('cursor' | 'node' | PullRequestReviewEdgeKeySpecifier)[];
export type PullRequestReviewEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewThreadKeySpecifier = ('comments' | 'diffSide' | 'id' | 'isCollapsed' | 'isOutdated' | 'isResolved' | 'line' | 'originalLine' | 'originalStartLine' | 'path' | 'pullRequest' | 'repository' | 'resolvedBy' | 'startDiffSide' | 'startLine' | 'viewerCanReply' | 'viewerCanResolve' | 'viewerCanUnresolve' | PullRequestReviewThreadKeySpecifier)[];
export type PullRequestReviewThreadFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	diffSide?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCollapsed?: FieldPolicy<any> | FieldReadFunction<any>,
	isOutdated?: FieldPolicy<any> | FieldReadFunction<any>,
	isResolved?: FieldPolicy<any> | FieldReadFunction<any>,
	line?: FieldPolicy<any> | FieldReadFunction<any>,
	originalLine?: FieldPolicy<any> | FieldReadFunction<any>,
	originalStartLine?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resolvedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	startDiffSide?: FieldPolicy<any> | FieldReadFunction<any>,
	startLine?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReply?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanResolve?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUnresolve?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewThreadConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PullRequestReviewThreadConnectionKeySpecifier)[];
export type PullRequestReviewThreadConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestReviewThreadEdgeKeySpecifier = ('cursor' | 'node' | PullRequestReviewThreadEdgeKeySpecifier)[];
export type PullRequestReviewThreadEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestRevisionMarkerKeySpecifier = ('createdAt' | 'lastSeenCommit' | 'pullRequest' | PullRequestRevisionMarkerKeySpecifier)[];
export type PullRequestRevisionMarkerFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSeenCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestTemplateKeySpecifier = ('body' | 'filename' | 'repository' | PullRequestTemplateKeySpecifier)[];
export type PullRequestTemplateFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestTimelineConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PullRequestTimelineConnectionKeySpecifier)[];
export type PullRequestTimelineConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestTimelineItemEdgeKeySpecifier = ('cursor' | 'node' | PullRequestTimelineItemEdgeKeySpecifier)[];
export type PullRequestTimelineItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestTimelineItemsConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | 'updatedAt' | PullRequestTimelineItemsConnectionKeySpecifier)[];
export type PullRequestTimelineItemsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PullRequestTimelineItemsEdgeKeySpecifier = ('cursor' | 'node' | PullRequestTimelineItemsEdgeKeySpecifier)[];
export type PullRequestTimelineItemsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PushKeySpecifier = ('id' | 'nextSha' | 'permalink' | 'previousSha' | 'pusher' | 'repository' | PushKeySpecifier)[];
export type PushFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nextSha?: FieldPolicy<any> | FieldReadFunction<any>,
	permalink?: FieldPolicy<any> | FieldReadFunction<any>,
	previousSha?: FieldPolicy<any> | FieldReadFunction<any>,
	pusher?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PushAllowanceKeySpecifier = ('actor' | 'branchProtectionRule' | 'id' | PushAllowanceKeySpecifier)[];
export type PushAllowanceFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PushAllowanceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | PushAllowanceConnectionKeySpecifier)[];
export type PushAllowanceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PushAllowanceEdgeKeySpecifier = ('cursor' | 'node' | PushAllowanceEdgeKeySpecifier)[];
export type PushAllowanceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('codeOfConduct' | 'codesOfConduct' | 'enterprise' | 'enterpriseAdministratorInvitation' | 'enterpriseAdministratorInvitationByToken' | 'license' | 'licenses' | 'marketplaceCategories' | 'marketplaceCategory' | 'marketplaceListing' | 'marketplaceListings' | 'meta' | 'node' | 'nodes' | 'organization' | 'rateLimit' | 'relay' | 'repository' | 'repositoryOwner' | 'resource' | 'search' | 'securityAdvisories' | 'securityAdvisory' | 'securityVulnerabilities' | 'sponsorables' | 'topic' | 'user' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	codeOfConduct?: FieldPolicy<any> | FieldReadFunction<any>,
	codesOfConduct?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseAdministratorInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseAdministratorInvitationByToken?: FieldPolicy<any> | FieldReadFunction<any>,
	license?: FieldPolicy<any> | FieldReadFunction<any>,
	licenses?: FieldPolicy<any> | FieldReadFunction<any>,
	marketplaceCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	marketplaceCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	marketplaceListing?: FieldPolicy<any> | FieldReadFunction<any>,
	marketplaceListings?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	rateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	relay?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	securityAdvisories?: FieldPolicy<any> | FieldReadFunction<any>,
	securityAdvisory?: FieldPolicy<any> | FieldReadFunction<any>,
	securityVulnerabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorables?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RateLimitKeySpecifier = ('cost' | 'limit' | 'nodeCount' | 'remaining' | 'resetAt' | 'used' | RateLimitKeySpecifier)[];
export type RateLimitFieldPolicy = {
	cost?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining?: FieldPolicy<any> | FieldReadFunction<any>,
	resetAt?: FieldPolicy<any> | FieldReadFunction<any>,
	used?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactableKeySpecifier = ('databaseId' | 'id' | 'reactionGroups' | 'reactions' | 'viewerCanReact' | ReactableKeySpecifier)[];
export type ReactableFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactingUserConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ReactingUserConnectionKeySpecifier)[];
export type ReactingUserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactingUserEdgeKeySpecifier = ('cursor' | 'node' | 'reactedAt' | ReactingUserEdgeKeySpecifier)[];
export type ReactingUserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	reactedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionKeySpecifier = ('content' | 'createdAt' | 'databaseId' | 'id' | 'reactable' | 'user' | ReactionKeySpecifier)[];
export type ReactionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reactable?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | 'viewerHasReacted' | ReactionConnectionKeySpecifier)[];
export type ReactionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasReacted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionEdgeKeySpecifier = ('cursor' | 'node' | ReactionEdgeKeySpecifier)[];
export type ReactionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionGroupKeySpecifier = ('content' | 'createdAt' | 'reactors' | 'subject' | 'users' | 'viewerHasReacted' | ReactionGroupKeySpecifier)[];
export type ReactionGroupFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactors?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasReacted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ReactorConnectionKeySpecifier)[];
export type ReactorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactorEdgeKeySpecifier = ('cursor' | 'node' | 'reactedAt' | ReactorEdgeKeySpecifier)[];
export type ReactorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	reactedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReadyForReviewEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'pullRequest' | 'resourcePath' | 'url' | ReadyForReviewEventKeySpecifier)[];
export type ReadyForReviewEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefKeySpecifier = ('associatedPullRequests' | 'branchProtectionRule' | 'id' | 'name' | 'prefix' | 'refUpdateRule' | 'repository' | 'target' | RefKeySpecifier)[];
export type RefFieldPolicy = {
	associatedPullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	refUpdateRule?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | RefConnectionKeySpecifier)[];
export type RefConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefEdgeKeySpecifier = ('cursor' | 'node' | RefEdgeKeySpecifier)[];
export type RefEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefUpdateRuleKeySpecifier = ('allowsDeletions' | 'allowsForcePushes' | 'pattern' | 'requiredApprovingReviewCount' | 'requiredStatusCheckContexts' | 'requiresCodeOwnerReviews' | 'requiresConversationResolution' | 'requiresLinearHistory' | 'requiresSignatures' | 'viewerAllowedToDismissReviews' | 'viewerCanPush' | RefUpdateRuleKeySpecifier)[];
export type RefUpdateRuleFieldPolicy = {
	allowsDeletions?: FieldPolicy<any> | FieldReadFunction<any>,
	allowsForcePushes?: FieldPolicy<any> | FieldReadFunction<any>,
	pattern?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredApprovingReviewCount?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredStatusCheckContexts?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresCodeOwnerReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresConversationResolution?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresLinearHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresSignatures?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerAllowedToDismissReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanPush?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReferencedEventKeySpecifier = ('actor' | 'commit' | 'commitRepository' | 'createdAt' | 'id' | 'isCrossRepository' | 'isDirectReference' | 'subject' | ReferencedEventKeySpecifier)[];
export type ReferencedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	commitRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCrossRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	isDirectReference?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayloadKeySpecifier = ('clientMutationId' | 'identityProvider' | RegenerateEnterpriseIdentityProviderRecoveryCodesPayloadKeySpecifier)[];
export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	identityProvider?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegenerateVerifiableDomainTokenPayloadKeySpecifier = ('clientMutationId' | 'verificationToken' | RegenerateVerifiableDomainTokenPayloadKeySpecifier)[];
export type RegenerateVerifiableDomainTokenPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RejectDeploymentsPayloadKeySpecifier = ('clientMutationId' | 'deployments' | RejectDeploymentsPayloadKeySpecifier)[];
export type RejectDeploymentsPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deployments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseKeySpecifier = ('author' | 'createdAt' | 'databaseId' | 'description' | 'descriptionHTML' | 'id' | 'isDraft' | 'isLatest' | 'isPrerelease' | 'mentions' | 'name' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'releaseAssets' | 'repository' | 'resourcePath' | 'shortDescriptionHTML' | 'tag' | 'tagCommit' | 'tagName' | 'updatedAt' | 'url' | 'viewerCanReact' | ReleaseKeySpecifier)[];
export type ReleaseFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	isLatest?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrerelease?: FieldPolicy<any> | FieldReadFunction<any>,
	mentions?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	tagCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	tagName?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseAssetKeySpecifier = ('contentType' | 'createdAt' | 'downloadCount' | 'downloadUrl' | 'id' | 'name' | 'release' | 'size' | 'updatedAt' | 'uploadedBy' | 'url' | ReleaseAssetKeySpecifier)[];
export type ReleaseAssetFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadCount?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	release?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseAssetConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ReleaseAssetConnectionKeySpecifier)[];
export type ReleaseAssetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseAssetEdgeKeySpecifier = ('cursor' | 'node' | ReleaseAssetEdgeKeySpecifier)[];
export type ReleaseAssetEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ReleaseConnectionKeySpecifier)[];
export type ReleaseConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseEdgeKeySpecifier = ('cursor' | 'node' | ReleaseEdgeKeySpecifier)[];
export type ReleaseEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveAssigneesFromAssignablePayloadKeySpecifier = ('assignable' | 'clientMutationId' | RemoveAssigneesFromAssignablePayloadKeySpecifier)[];
export type RemoveAssigneesFromAssignablePayloadFieldPolicy = {
	assignable?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveEnterpriseAdminPayloadKeySpecifier = ('admin' | 'clientMutationId' | 'enterprise' | 'message' | 'viewer' | RemoveEnterpriseAdminPayloadKeySpecifier)[];
export type RemoveEnterpriseAdminPayloadFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveEnterpriseIdentityProviderPayloadKeySpecifier = ('clientMutationId' | 'identityProvider' | RemoveEnterpriseIdentityProviderPayloadKeySpecifier)[];
export type RemoveEnterpriseIdentityProviderPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	identityProvider?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveEnterpriseOrganizationPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'organization' | 'viewer' | RemoveEnterpriseOrganizationPayloadKeySpecifier)[];
export type RemoveEnterpriseOrganizationPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveEnterpriseSupportEntitlementPayloadKeySpecifier = ('clientMutationId' | 'message' | RemoveEnterpriseSupportEntitlementPayloadKeySpecifier)[];
export type RemoveEnterpriseSupportEntitlementPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveLabelsFromLabelablePayloadKeySpecifier = ('clientMutationId' | 'labelable' | RemoveLabelsFromLabelablePayloadKeySpecifier)[];
export type RemoveLabelsFromLabelablePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	labelable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveOutsideCollaboratorPayloadKeySpecifier = ('clientMutationId' | 'removedUser' | RemoveOutsideCollaboratorPayloadKeySpecifier)[];
export type RemoveOutsideCollaboratorPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	removedUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveReactionPayloadKeySpecifier = ('clientMutationId' | 'reaction' | 'subject' | RemoveReactionPayloadKeySpecifier)[];
export type RemoveReactionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	reaction?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveStarPayloadKeySpecifier = ('clientMutationId' | 'starrable' | RemoveStarPayloadKeySpecifier)[];
export type RemoveStarPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	starrable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveUpvotePayloadKeySpecifier = ('clientMutationId' | 'subject' | RemoveUpvotePayloadKeySpecifier)[];
export type RemoveUpvotePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemovedFromProjectEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'id' | 'project' | 'projectColumnName' | RemovedFromProjectEventKeySpecifier)[];
export type RemovedFromProjectEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectColumnName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RenamedTitleEventKeySpecifier = ('actor' | 'createdAt' | 'currentTitle' | 'id' | 'previousTitle' | 'subject' | RenamedTitleEventKeySpecifier)[];
export type RenamedTitleEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	previousTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReopenIssuePayloadKeySpecifier = ('clientMutationId' | 'issue' | ReopenIssuePayloadKeySpecifier)[];
export type ReopenIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReopenPullRequestPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | ReopenPullRequestPayloadKeySpecifier)[];
export type ReopenPullRequestPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReopenedEventKeySpecifier = ('actor' | 'closable' | 'createdAt' | 'id' | ReopenedEventKeySpecifier)[];
export type ReopenedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	closable?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoAccessAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | 'visibility' | RepoAccessAuditEntryKeySpecifier)[];
export type RepoAccessAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoAddMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | 'visibility' | RepoAddMemberAuditEntryKeySpecifier)[];
export type RepoAddMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoAddTopicAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'topic' | 'topicName' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoAddTopicAuditEntryKeySpecifier)[];
export type RepoAddTopicAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	topicName?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoArchivedAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | 'visibility' | RepoArchivedAuditEntryKeySpecifier)[];
export type RepoArchivedAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoChangeMergeSettingAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'isEnabled' | 'mergeType' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoChangeMergeSettingAuditEntryKeySpecifier)[];
export type RepoChangeMergeSettingAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeType?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigDisableAnonymousGitAccessAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigDisableAnonymousGitAccessAuditEntryKeySpecifier)[];
export type RepoConfigDisableAnonymousGitAccessAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier)[];
export type RepoConfigDisableCollaboratorsOnlyAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigDisableContributorsOnlyAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigDisableContributorsOnlyAuditEntryKeySpecifier)[];
export type RepoConfigDisableContributorsOnlyAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigDisableSockpuppetDisallowedAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigDisableSockpuppetDisallowedAuditEntryKeySpecifier)[];
export type RepoConfigDisableSockpuppetDisallowedAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigEnableAnonymousGitAccessAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigEnableAnonymousGitAccessAuditEntryKeySpecifier)[];
export type RepoConfigEnableAnonymousGitAccessAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier)[];
export type RepoConfigEnableCollaboratorsOnlyAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigEnableContributorsOnlyAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigEnableContributorsOnlyAuditEntryKeySpecifier)[];
export type RepoConfigEnableContributorsOnlyAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigEnableSockpuppetDisallowedAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigEnableSockpuppetDisallowedAuditEntryKeySpecifier)[];
export type RepoConfigEnableSockpuppetDisallowedAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigLockAnonymousGitAccessAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigLockAnonymousGitAccessAuditEntryKeySpecifier)[];
export type RepoConfigLockAnonymousGitAccessAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoConfigUnlockAnonymousGitAccessAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoConfigUnlockAnonymousGitAccessAuditEntryKeySpecifier)[];
export type RepoConfigUnlockAnonymousGitAccessAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoCreateAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'forkParentName' | 'forkSourceName' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | 'visibility' | RepoCreateAuditEntryKeySpecifier)[];
export type RepoCreateAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	forkParentName?: FieldPolicy<any> | FieldReadFunction<any>,
	forkSourceName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoDestroyAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | 'visibility' | RepoDestroyAuditEntryKeySpecifier)[];
export type RepoDestroyAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoRemoveMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | 'visibility' | RepoRemoveMemberAuditEntryKeySpecifier)[];
export type RepoRemoveMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepoRemoveTopicAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'topic' | 'topicName' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepoRemoveTopicAuditEntryKeySpecifier)[];
export type RepoRemoveTopicAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	topicName?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryKeySpecifier = ('assignableUsers' | 'autoMergeAllowed' | 'branchProtectionRules' | 'codeOfConduct' | 'collaborators' | 'commitComments' | 'contactLinks' | 'createdAt' | 'databaseId' | 'defaultBranchRef' | 'deleteBranchOnMerge' | 'dependencyGraphManifests' | 'deployKeys' | 'deployments' | 'description' | 'descriptionHTML' | 'discussion' | 'discussionCategories' | 'discussions' | 'diskUsage' | 'environment' | 'environments' | 'forkCount' | 'forkingAllowed' | 'forks' | 'fundingLinks' | 'hasIssuesEnabled' | 'hasProjectsEnabled' | 'hasWikiEnabled' | 'homepageUrl' | 'id' | 'interactionAbility' | 'isArchived' | 'isBlankIssuesEnabled' | 'isDisabled' | 'isEmpty' | 'isFork' | 'isInOrganization' | 'isLocked' | 'isMirror' | 'isPrivate' | 'isSecurityPolicyEnabled' | 'isTemplate' | 'isUserConfigurationRepository' | 'issue' | 'issueOrPullRequest' | 'issueTemplates' | 'issues' | 'label' | 'labels' | 'languages' | 'latestRelease' | 'licenseInfo' | 'lockReason' | 'mentionableUsers' | 'mergeCommitAllowed' | 'milestone' | 'milestones' | 'mirrorUrl' | 'name' | 'nameWithOwner' | 'object' | 'openGraphImageUrl' | 'owner' | 'packages' | 'parent' | 'pinnedDiscussions' | 'pinnedIssues' | 'primaryLanguage' | 'project' | 'projects' | 'projectsResourcePath' | 'projectsUrl' | 'pullRequest' | 'pullRequestTemplates' | 'pullRequests' | 'pushedAt' | 'rebaseMergeAllowed' | 'ref' | 'refs' | 'release' | 'releases' | 'repositoryTopics' | 'resourcePath' | 'securityPolicyUrl' | 'shortDescriptionHTML' | 'squashMergeAllowed' | 'sshUrl' | 'stargazerCount' | 'stargazers' | 'submodules' | 'tempCloneToken' | 'templateRepository' | 'updatedAt' | 'url' | 'usesCustomOpenGraphImage' | 'viewerCanAdminister' | 'viewerCanCreateProjects' | 'viewerCanSubscribe' | 'viewerCanUpdateTopics' | 'viewerDefaultCommitEmail' | 'viewerDefaultMergeMethod' | 'viewerHasStarred' | 'viewerPermission' | 'viewerPossibleCommitEmails' | 'viewerSubscription' | 'visibility' | 'vulnerabilityAlerts' | 'watchers' | RepositoryKeySpecifier)[];
export type RepositoryFieldPolicy = {
	assignableUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	autoMergeAllowed?: FieldPolicy<any> | FieldReadFunction<any>,
	branchProtectionRules?: FieldPolicy<any> | FieldReadFunction<any>,
	codeOfConduct?: FieldPolicy<any> | FieldReadFunction<any>,
	collaborators?: FieldPolicy<any> | FieldReadFunction<any>,
	commitComments?: FieldPolicy<any> | FieldReadFunction<any>,
	contactLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultBranchRef?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBranchOnMerge?: FieldPolicy<any> | FieldReadFunction<any>,
	dependencyGraphManifests?: FieldPolicy<any> | FieldReadFunction<any>,
	deployKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	deployments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>,
	discussionCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	discussions?: FieldPolicy<any> | FieldReadFunction<any>,
	diskUsage?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	environments?: FieldPolicy<any> | FieldReadFunction<any>,
	forkCount?: FieldPolicy<any> | FieldReadFunction<any>,
	forkingAllowed?: FieldPolicy<any> | FieldReadFunction<any>,
	forks?: FieldPolicy<any> | FieldReadFunction<any>,
	fundingLinks?: FieldPolicy<any> | FieldReadFunction<any>,
	hasIssuesEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	hasProjectsEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	hasWikiEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interactionAbility?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	isBlankIssuesEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisabled?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmpty?: FieldPolicy<any> | FieldReadFunction<any>,
	isFork?: FieldPolicy<any> | FieldReadFunction<any>,
	isInOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isMirror?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isSecurityPolicyEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	isTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	isUserConfigurationRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>,
	issueOrPullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	issueTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	issues?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	latestRelease?: FieldPolicy<any> | FieldReadFunction<any>,
	licenseInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	lockReason?: FieldPolicy<any> | FieldReadFunction<any>,
	mentionableUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	mergeCommitAllowed?: FieldPolicy<any> | FieldReadFunction<any>,
	milestone?: FieldPolicy<any> | FieldReadFunction<any>,
	milestones?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nameWithOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>,
	openGraphImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	packages?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedDiscussions?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedIssues?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	pushedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	rebaseMergeAllowed?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>,
	refs?: FieldPolicy<any> | FieldReadFunction<any>,
	release?: FieldPolicy<any> | FieldReadFunction<any>,
	releases?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryTopics?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	securityPolicyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	squashMergeAllowed?: FieldPolicy<any> | FieldReadFunction<any>,
	sshUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazers?: FieldPolicy<any> | FieldReadFunction<any>,
	submodules?: FieldPolicy<any> | FieldReadFunction<any>,
	tempCloneToken?: FieldPolicy<any> | FieldReadFunction<any>,
	templateRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	usesCustomOpenGraphImage?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanCreateProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdateTopics?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDefaultCommitEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDefaultMergeMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasStarred?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPossibleCommitEmails?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>,
	vulnerabilityAlerts?: FieldPolicy<any> | FieldReadFunction<any>,
	watchers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryAuditEntryDataKeySpecifier = ('repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | RepositoryAuditEntryDataKeySpecifier)[];
export type RepositoryAuditEntryDataFieldPolicy = {
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryCollaboratorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | RepositoryCollaboratorConnectionKeySpecifier)[];
export type RepositoryCollaboratorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryCollaboratorEdgeKeySpecifier = ('cursor' | 'node' | 'permission' | 'permissionSources' | RepositoryCollaboratorEdgeKeySpecifier)[];
export type RepositoryCollaboratorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionSources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | 'totalDiskUsage' | RepositoryConnectionKeySpecifier)[];
export type RepositoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDiskUsage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryContactLinkKeySpecifier = ('about' | 'name' | 'url' | RepositoryContactLinkKeySpecifier)[];
export type RepositoryContactLinkFieldPolicy = {
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryDiscussionAuthorKeySpecifier = ('repositoryDiscussions' | RepositoryDiscussionAuthorKeySpecifier)[];
export type RepositoryDiscussionAuthorFieldPolicy = {
	repositoryDiscussions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryDiscussionCommentAuthorKeySpecifier = ('repositoryDiscussionComments' | RepositoryDiscussionCommentAuthorKeySpecifier)[];
export type RepositoryDiscussionCommentAuthorFieldPolicy = {
	repositoryDiscussionComments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryEdgeKeySpecifier = ('cursor' | 'node' | RepositoryEdgeKeySpecifier)[];
export type RepositoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryInfoKeySpecifier = ('createdAt' | 'description' | 'descriptionHTML' | 'forkCount' | 'hasIssuesEnabled' | 'hasProjectsEnabled' | 'hasWikiEnabled' | 'homepageUrl' | 'isArchived' | 'isFork' | 'isInOrganization' | 'isLocked' | 'isMirror' | 'isPrivate' | 'isTemplate' | 'licenseInfo' | 'lockReason' | 'mirrorUrl' | 'name' | 'nameWithOwner' | 'openGraphImageUrl' | 'owner' | 'pushedAt' | 'resourcePath' | 'shortDescriptionHTML' | 'updatedAt' | 'url' | 'usesCustomOpenGraphImage' | 'visibility' | RepositoryInfoKeySpecifier)[];
export type RepositoryInfoFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	forkCount?: FieldPolicy<any> | FieldReadFunction<any>,
	hasIssuesEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	hasProjectsEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	hasWikiEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	isFork?: FieldPolicy<any> | FieldReadFunction<any>,
	isInOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isMirror?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	licenseInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	lockReason?: FieldPolicy<any> | FieldReadFunction<any>,
	mirrorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nameWithOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	openGraphImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	pushedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	usesCustomOpenGraphImage?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryInteractionAbilityKeySpecifier = ('expiresAt' | 'limit' | 'origin' | RepositoryInteractionAbilityKeySpecifier)[];
export type RepositoryInteractionAbilityFieldPolicy = {
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryInvitationKeySpecifier = ('email' | 'id' | 'invitee' | 'inviter' | 'permalink' | 'permission' | 'repository' | RepositoryInvitationKeySpecifier)[];
export type RepositoryInvitationFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitee?: FieldPolicy<any> | FieldReadFunction<any>,
	inviter?: FieldPolicy<any> | FieldReadFunction<any>,
	permalink?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryInvitationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | RepositoryInvitationConnectionKeySpecifier)[];
export type RepositoryInvitationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryInvitationEdgeKeySpecifier = ('cursor' | 'node' | RepositoryInvitationEdgeKeySpecifier)[];
export type RepositoryInvitationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryNodeKeySpecifier = ('repository' | RepositoryNodeKeySpecifier)[];
export type RepositoryNodeFieldPolicy = {
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryOwnerKeySpecifier = ('avatarUrl' | 'id' | 'login' | 'repositories' | 'repository' | 'resourcePath' | 'url' | RepositoryOwnerKeySpecifier)[];
export type RepositoryOwnerFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryTopicKeySpecifier = ('id' | 'resourcePath' | 'topic' | 'url' | RepositoryTopicKeySpecifier)[];
export type RepositoryTopicFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryTopicConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | RepositoryTopicConnectionKeySpecifier)[];
export type RepositoryTopicConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryTopicEdgeKeySpecifier = ('cursor' | 'node' | RepositoryTopicEdgeKeySpecifier)[];
export type RepositoryTopicEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryVisibilityChangeDisableAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepositoryVisibilityChangeDisableAuditEntryKeySpecifier)[];
export type RepositoryVisibilityChangeDisableAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryVisibilityChangeEnableAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'enterpriseResourcePath' | 'enterpriseSlug' | 'enterpriseUrl' | 'id' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | RepositoryVisibilityChangeEnableAuditEntryKeySpecifier)[];
export type RepositoryVisibilityChangeEnableAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	enterpriseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryVulnerabilityAlertKeySpecifier = ('createdAt' | 'dismissReason' | 'dismissedAt' | 'dismisser' | 'id' | 'repository' | 'securityAdvisory' | 'securityVulnerability' | 'vulnerableManifestFilename' | 'vulnerableManifestPath' | 'vulnerableRequirements' | RepositoryVulnerabilityAlertKeySpecifier)[];
export type RepositoryVulnerabilityAlertFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	dismissReason?: FieldPolicy<any> | FieldReadFunction<any>,
	dismissedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	dismisser?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	securityAdvisory?: FieldPolicy<any> | FieldReadFunction<any>,
	securityVulnerability?: FieldPolicy<any> | FieldReadFunction<any>,
	vulnerableManifestFilename?: FieldPolicy<any> | FieldReadFunction<any>,
	vulnerableManifestPath?: FieldPolicy<any> | FieldReadFunction<any>,
	vulnerableRequirements?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryVulnerabilityAlertConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | RepositoryVulnerabilityAlertConnectionKeySpecifier)[];
export type RepositoryVulnerabilityAlertConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RepositoryVulnerabilityAlertEdgeKeySpecifier = ('cursor' | 'node' | RepositoryVulnerabilityAlertEdgeKeySpecifier)[];
export type RepositoryVulnerabilityAlertEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestReviewsPayloadKeySpecifier = ('actor' | 'clientMutationId' | 'pullRequest' | 'requestedReviewersEdge' | RequestReviewsPayloadKeySpecifier)[];
export type RequestReviewsPayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	requestedReviewersEdge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequirableByPullRequestKeySpecifier = ('isRequired' | RequirableByPullRequestKeySpecifier)[];
export type RequirableByPullRequestFieldPolicy = {
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequiredStatusCheckDescriptionKeySpecifier = ('app' | 'context' | RequiredStatusCheckDescriptionKeySpecifier)[];
export type RequiredStatusCheckDescriptionFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RerequestCheckSuitePayloadKeySpecifier = ('checkSuite' | 'clientMutationId' | RerequestCheckSuitePayloadKeySpecifier)[];
export type RerequestCheckSuitePayloadFieldPolicy = {
	checkSuite?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResolveReviewThreadPayloadKeySpecifier = ('clientMutationId' | 'thread' | ResolveReviewThreadPayloadKeySpecifier)[];
export type ResolveReviewThreadPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RestrictedContributionKeySpecifier = ('isRestricted' | 'occurredAt' | 'resourcePath' | 'url' | 'user' | RestrictedContributionKeySpecifier)[];
export type RestrictedContributionFieldPolicy = {
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	occurredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewDismissalAllowanceKeySpecifier = ('actor' | 'branchProtectionRule' | 'id' | ReviewDismissalAllowanceKeySpecifier)[];
export type ReviewDismissalAllowanceFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewDismissalAllowanceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ReviewDismissalAllowanceConnectionKeySpecifier)[];
export type ReviewDismissalAllowanceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewDismissalAllowanceEdgeKeySpecifier = ('cursor' | 'node' | ReviewDismissalAllowanceEdgeKeySpecifier)[];
export type ReviewDismissalAllowanceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewDismissedEventKeySpecifier = ('actor' | 'createdAt' | 'databaseId' | 'dismissalMessage' | 'dismissalMessageHTML' | 'id' | 'previousReviewState' | 'pullRequest' | 'pullRequestCommit' | 'resourcePath' | 'review' | 'url' | ReviewDismissedEventKeySpecifier)[];
export type ReviewDismissedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	dismissalMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	dismissalMessageHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	previousReviewState?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestCommit?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	review?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewRequestKeySpecifier = ('asCodeOwner' | 'databaseId' | 'id' | 'pullRequest' | 'requestedReviewer' | ReviewRequestKeySpecifier)[];
export type ReviewRequestFieldPolicy = {
	asCodeOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	requestedReviewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewRequestConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ReviewRequestConnectionKeySpecifier)[];
export type ReviewRequestConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewRequestEdgeKeySpecifier = ('cursor' | 'node' | ReviewRequestEdgeKeySpecifier)[];
export type ReviewRequestEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewRequestRemovedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'pullRequest' | 'requestedReviewer' | ReviewRequestRemovedEventKeySpecifier)[];
export type ReviewRequestRemovedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	requestedReviewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewRequestedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'pullRequest' | 'requestedReviewer' | ReviewRequestedEventKeySpecifier)[];
export type ReviewRequestedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	requestedReviewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewStatusHovercardContextKeySpecifier = ('message' | 'octicon' | 'reviewDecision' | ReviewStatusHovercardContextKeySpecifier)[];
export type ReviewStatusHovercardContextFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	octicon?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewDecision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SavedReplyKeySpecifier = ('body' | 'bodyHTML' | 'databaseId' | 'id' | 'title' | 'user' | SavedReplyKeySpecifier)[];
export type SavedReplyFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SavedReplyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SavedReplyConnectionKeySpecifier)[];
export type SavedReplyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SavedReplyEdgeKeySpecifier = ('cursor' | 'node' | SavedReplyEdgeKeySpecifier)[];
export type SavedReplyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultItemConnectionKeySpecifier = ('codeCount' | 'discussionCount' | 'edges' | 'issueCount' | 'nodes' | 'pageInfo' | 'repositoryCount' | 'userCount' | 'wikiCount' | SearchResultItemConnectionKeySpecifier)[];
export type SearchResultItemConnectionFieldPolicy = {
	codeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	discussionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	issueCount?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryCount?: FieldPolicy<any> | FieldReadFunction<any>,
	userCount?: FieldPolicy<any> | FieldReadFunction<any>,
	wikiCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultItemEdgeKeySpecifier = ('cursor' | 'node' | 'textMatches' | SearchResultItemEdgeKeySpecifier)[];
export type SearchResultItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	textMatches?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityAdvisoryKeySpecifier = ('cvss' | 'cwes' | 'databaseId' | 'description' | 'ghsaId' | 'id' | 'identifiers' | 'notificationsPermalink' | 'origin' | 'permalink' | 'publishedAt' | 'references' | 'severity' | 'summary' | 'updatedAt' | 'vulnerabilities' | 'withdrawnAt' | SecurityAdvisoryKeySpecifier)[];
export type SecurityAdvisoryFieldPolicy = {
	cvss?: FieldPolicy<any> | FieldReadFunction<any>,
	cwes?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	ghsaId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifiers?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationsPermalink?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	permalink?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	severity?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	vulnerabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawnAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityAdvisoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SecurityAdvisoryConnectionKeySpecifier)[];
export type SecurityAdvisoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityAdvisoryEdgeKeySpecifier = ('cursor' | 'node' | SecurityAdvisoryEdgeKeySpecifier)[];
export type SecurityAdvisoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityAdvisoryIdentifierKeySpecifier = ('type' | 'value' | SecurityAdvisoryIdentifierKeySpecifier)[];
export type SecurityAdvisoryIdentifierFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityAdvisoryPackageKeySpecifier = ('ecosystem' | 'name' | SecurityAdvisoryPackageKeySpecifier)[];
export type SecurityAdvisoryPackageFieldPolicy = {
	ecosystem?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityAdvisoryPackageVersionKeySpecifier = ('identifier' | SecurityAdvisoryPackageVersionKeySpecifier)[];
export type SecurityAdvisoryPackageVersionFieldPolicy = {
	identifier?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityAdvisoryReferenceKeySpecifier = ('url' | SecurityAdvisoryReferenceKeySpecifier)[];
export type SecurityAdvisoryReferenceFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityVulnerabilityKeySpecifier = ('advisory' | 'firstPatchedVersion' | 'package' | 'severity' | 'updatedAt' | 'vulnerableVersionRange' | SecurityVulnerabilityKeySpecifier)[];
export type SecurityVulnerabilityFieldPolicy = {
	advisory?: FieldPolicy<any> | FieldReadFunction<any>,
	firstPatchedVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	package?: FieldPolicy<any> | FieldReadFunction<any>,
	severity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	vulnerableVersionRange?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityVulnerabilityConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SecurityVulnerabilityConnectionKeySpecifier)[];
export type SecurityVulnerabilityConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SecurityVulnerabilityEdgeKeySpecifier = ('cursor' | 'node' | SecurityVulnerabilityEdgeKeySpecifier)[];
export type SecurityVulnerabilityEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetEnterpriseIdentityProviderPayloadKeySpecifier = ('clientMutationId' | 'identityProvider' | SetEnterpriseIdentityProviderPayloadKeySpecifier)[];
export type SetEnterpriseIdentityProviderPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	identityProvider?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetOrganizationInteractionLimitPayloadKeySpecifier = ('clientMutationId' | 'organization' | SetOrganizationInteractionLimitPayloadKeySpecifier)[];
export type SetOrganizationInteractionLimitPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetRepositoryInteractionLimitPayloadKeySpecifier = ('clientMutationId' | 'repository' | SetRepositoryInteractionLimitPayloadKeySpecifier)[];
export type SetRepositoryInteractionLimitPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetUserInteractionLimitPayloadKeySpecifier = ('clientMutationId' | 'user' | SetUserInteractionLimitPayloadKeySpecifier)[];
export type SetUserInteractionLimitPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmimeSignatureKeySpecifier = ('email' | 'isValid' | 'payload' | 'signature' | 'signer' | 'state' | 'wasSignedByGitHub' | SmimeSignatureKeySpecifier)[];
export type SmimeSignatureFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	signer?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	wasSignedByGitHub?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SponsorConnectionKeySpecifier)[];
export type SponsorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorEdgeKeySpecifier = ('cursor' | 'node' | SponsorEdgeKeySpecifier)[];
export type SponsorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorableKeySpecifier = ('estimatedNextSponsorsPayoutInCents' | 'hasSponsorsListing' | 'isSponsoredBy' | 'isSponsoringViewer' | 'monthlyEstimatedSponsorsIncomeInCents' | 'sponsoring' | 'sponsors' | 'sponsorsActivities' | 'sponsorsListing' | 'sponsorshipForViewerAsSponsor' | 'sponsorshipForViewerAsSponsorable' | 'sponsorshipNewsletters' | 'sponsorshipsAsMaintainer' | 'sponsorshipsAsSponsor' | 'viewerCanSponsor' | 'viewerIsSponsoring' | SponsorableKeySpecifier)[];
export type SponsorableFieldPolicy = {
	estimatedNextSponsorsPayoutInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	hasSponsorsListing?: FieldPolicy<any> | FieldReadFunction<any>,
	isSponsoredBy?: FieldPolicy<any> | FieldReadFunction<any>,
	isSponsoringViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	monthlyEstimatedSponsorsIncomeInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsoring?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsors?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsListing?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipForViewerAsSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipForViewerAsSponsorable?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipNewsletters?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipsAsMaintainer?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipsAsSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsSponsoring?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorableItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SponsorableItemConnectionKeySpecifier)[];
export type SponsorableItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorableItemEdgeKeySpecifier = ('cursor' | 'node' | SponsorableItemEdgeKeySpecifier)[];
export type SponsorableItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsActivityKeySpecifier = ('action' | 'id' | 'previousSponsorsTier' | 'sponsor' | 'sponsorable' | 'sponsorsTier' | 'timestamp' | SponsorsActivityKeySpecifier)[];
export type SponsorsActivityFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	previousSponsorsTier?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorable?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsTier?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsActivityConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SponsorsActivityConnectionKeySpecifier)[];
export type SponsorsActivityConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsActivityEdgeKeySpecifier = ('cursor' | 'node' | SponsorsActivityEdgeKeySpecifier)[];
export type SponsorsActivityEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsGoalKeySpecifier = ('description' | 'kind' | 'percentComplete' | 'targetValue' | 'title' | SponsorsGoalKeySpecifier)[];
export type SponsorsGoalFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	percentComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	targetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsListingKeySpecifier = ('activeGoal' | 'createdAt' | 'fullDescription' | 'fullDescriptionHTML' | 'id' | 'isPublic' | 'name' | 'nextPayoutDate' | 'shortDescription' | 'slug' | 'sponsorable' | 'tiers' | SponsorsListingKeySpecifier)[];
export type SponsorsListingFieldPolicy = {
	activeGoal?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	fullDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	fullDescriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nextPayoutDate?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorable?: FieldPolicy<any> | FieldReadFunction<any>,
	tiers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsTierKeySpecifier = ('adminInfo' | 'closestLesserValueTier' | 'createdAt' | 'description' | 'descriptionHTML' | 'id' | 'isCustomAmount' | 'isOneTime' | 'monthlyPriceInCents' | 'monthlyPriceInDollars' | 'name' | 'sponsorsListing' | 'updatedAt' | SponsorsTierKeySpecifier)[];
export type SponsorsTierFieldPolicy = {
	adminInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	closestLesserValueTier?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCustomAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	isOneTime?: FieldPolicy<any> | FieldReadFunction<any>,
	monthlyPriceInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	monthlyPriceInDollars?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsListing?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsTierAdminInfoKeySpecifier = ('sponsorships' | SponsorsTierAdminInfoKeySpecifier)[];
export type SponsorsTierAdminInfoFieldPolicy = {
	sponsorships?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsTierConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SponsorsTierConnectionKeySpecifier)[];
export type SponsorsTierConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorsTierEdgeKeySpecifier = ('cursor' | 'node' | SponsorsTierEdgeKeySpecifier)[];
export type SponsorsTierEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorshipKeySpecifier = ('createdAt' | 'id' | 'isOneTimePayment' | 'isSponsorOptedIntoEmail' | 'maintainer' | 'privacyLevel' | 'sponsor' | 'sponsorEntity' | 'sponsorable' | 'tier' | 'tierSelectedAt' | SponsorshipKeySpecifier)[];
export type SponsorshipFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isOneTimePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	isSponsorOptedIntoEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	maintainer?: FieldPolicy<any> | FieldReadFunction<any>,
	privacyLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorEntity?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorable?: FieldPolicy<any> | FieldReadFunction<any>,
	tier?: FieldPolicy<any> | FieldReadFunction<any>,
	tierSelectedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorshipConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | 'totalRecurringMonthlyPriceInCents' | 'totalRecurringMonthlyPriceInDollars' | SponsorshipConnectionKeySpecifier)[];
export type SponsorshipConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRecurringMonthlyPriceInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRecurringMonthlyPriceInDollars?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorshipEdgeKeySpecifier = ('cursor' | 'node' | SponsorshipEdgeKeySpecifier)[];
export type SponsorshipEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorshipNewsletterKeySpecifier = ('body' | 'createdAt' | 'id' | 'isPublished' | 'sponsorable' | 'subject' | 'updatedAt' | SponsorshipNewsletterKeySpecifier)[];
export type SponsorshipNewsletterFieldPolicy = {
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorable?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorshipNewsletterConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SponsorshipNewsletterConnectionKeySpecifier)[];
export type SponsorshipNewsletterConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SponsorshipNewsletterEdgeKeySpecifier = ('cursor' | 'node' | SponsorshipNewsletterEdgeKeySpecifier)[];
export type SponsorshipNewsletterEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StargazerConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | StargazerConnectionKeySpecifier)[];
export type StargazerConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StargazerEdgeKeySpecifier = ('cursor' | 'node' | 'starredAt' | StargazerEdgeKeySpecifier)[];
export type StargazerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	starredAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StarrableKeySpecifier = ('id' | 'stargazerCount' | 'stargazers' | 'viewerHasStarred' | StarrableKeySpecifier)[];
export type StarrableFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazers?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasStarred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StarredRepositoryConnectionKeySpecifier = ('edges' | 'isOverLimit' | 'nodes' | 'pageInfo' | 'totalCount' | StarredRepositoryConnectionKeySpecifier)[];
export type StarredRepositoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	isOverLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StarredRepositoryEdgeKeySpecifier = ('cursor' | 'node' | 'starredAt' | StarredRepositoryEdgeKeySpecifier)[];
export type StarredRepositoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	starredAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusKeySpecifier = ('combinedContexts' | 'commit' | 'context' | 'contexts' | 'id' | 'state' | StatusKeySpecifier)[];
export type StatusFieldPolicy = {
	combinedContexts?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	contexts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusCheckRollupKeySpecifier = ('commit' | 'contexts' | 'id' | 'state' | StatusCheckRollupKeySpecifier)[];
export type StatusCheckRollupFieldPolicy = {
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	contexts?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusCheckRollupContextConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | StatusCheckRollupContextConnectionKeySpecifier)[];
export type StatusCheckRollupContextConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusCheckRollupContextEdgeKeySpecifier = ('cursor' | 'node' | StatusCheckRollupContextEdgeKeySpecifier)[];
export type StatusCheckRollupContextEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusContextKeySpecifier = ('avatarUrl' | 'commit' | 'context' | 'createdAt' | 'creator' | 'description' | 'id' | 'isRequired' | 'state' | 'targetUrl' | StatusContextKeySpecifier)[];
export type StatusContextFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	commit?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	targetUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitPullRequestReviewPayloadKeySpecifier = ('clientMutationId' | 'pullRequestReview' | SubmitPullRequestReviewPayloadKeySpecifier)[];
export type SubmitPullRequestReviewPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmoduleKeySpecifier = ('branch' | 'gitUrl' | 'name' | 'path' | 'subprojectCommitOid' | SubmoduleKeySpecifier)[];
export type SubmoduleFieldPolicy = {
	branch?: FieldPolicy<any> | FieldReadFunction<any>,
	gitUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	subprojectCommitOid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmoduleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | SubmoduleConnectionKeySpecifier)[];
export type SubmoduleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmoduleEdgeKeySpecifier = ('cursor' | 'node' | SubmoduleEdgeKeySpecifier)[];
export type SubmoduleEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribableKeySpecifier = ('id' | 'viewerCanSubscribe' | 'viewerSubscription' | SubscribableKeySpecifier)[];
export type SubscribableFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'subscribable' | SubscribedEventKeySpecifier)[];
export type SubscribedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestedReviewerKeySpecifier = ('isAuthor' | 'isCommenter' | 'reviewer' | SuggestedReviewerKeySpecifier)[];
export type SuggestedReviewerFieldPolicy = {
	isAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	isCommenter?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('abbreviatedOid' | 'commitResourcePath' | 'commitUrl' | 'id' | 'message' | 'name' | 'oid' | 'repository' | 'tagger' | 'target' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	abbreviatedOid?: FieldPolicy<any> | FieldReadFunction<any>,
	commitResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	commitUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	tagger?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('ancestors' | 'avatarUrl' | 'childTeams' | 'combinedSlug' | 'createdAt' | 'databaseId' | 'description' | 'discussion' | 'discussions' | 'discussionsResourcePath' | 'discussionsUrl' | 'editTeamResourcePath' | 'editTeamUrl' | 'id' | 'invitations' | 'memberStatuses' | 'members' | 'membersResourcePath' | 'membersUrl' | 'name' | 'newTeamResourcePath' | 'newTeamUrl' | 'organization' | 'parentTeam' | 'privacy' | 'repositories' | 'repositoriesResourcePath' | 'repositoriesUrl' | 'resourcePath' | 'reviewRequestDelegationAlgorithm' | 'reviewRequestDelegationEnabled' | 'reviewRequestDelegationMemberCount' | 'reviewRequestDelegationNotifyTeam' | 'slug' | 'teamsResourcePath' | 'teamsUrl' | 'updatedAt' | 'url' | 'viewerCanAdminister' | 'viewerCanSubscribe' | 'viewerSubscription' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	childTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	combinedSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>,
	discussions?: FieldPolicy<any> | FieldReadFunction<any>,
	discussionsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	discussionsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	editTeamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	editTeamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitations?: FieldPolicy<any> | FieldReadFunction<any>,
	memberStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	membersResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	membersUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	newTeamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	newTeamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	privacy?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoriesResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoriesUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewRequestDelegationAlgorithm?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewRequestDelegationEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewRequestDelegationMemberCount?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewRequestDelegationNotifyTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanAdminister?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamAddMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'isLdapMapped' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'team' | 'teamName' | 'teamResourcePath' | 'teamUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | TeamAddMemberAuditEntryKeySpecifier)[];
export type TeamAddMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLdapMapped?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teamName?: FieldPolicy<any> | FieldReadFunction<any>,
	teamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamAddRepositoryAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'isLdapMapped' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'team' | 'teamName' | 'teamResourcePath' | 'teamUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | TeamAddRepositoryAuditEntryKeySpecifier)[];
export type TeamAddRepositoryAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLdapMapped?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teamName?: FieldPolicy<any> | FieldReadFunction<any>,
	teamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamAuditEntryDataKeySpecifier = ('team' | 'teamName' | 'teamResourcePath' | 'teamUrl' | TeamAuditEntryDataKeySpecifier)[];
export type TeamAuditEntryDataFieldPolicy = {
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teamName?: FieldPolicy<any> | FieldReadFunction<any>,
	teamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamChangeParentTeamAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'isLdapMapped' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'parentTeam' | 'parentTeamName' | 'parentTeamNameWas' | 'parentTeamResourcePath' | 'parentTeamUrl' | 'parentTeamWas' | 'parentTeamWasResourcePath' | 'parentTeamWasUrl' | 'team' | 'teamName' | 'teamResourcePath' | 'teamUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | TeamChangeParentTeamAuditEntryKeySpecifier)[];
export type TeamChangeParentTeamAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLdapMapped?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeamName?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeamNameWas?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeamWas?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeamWasResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	parentTeamWasUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teamName?: FieldPolicy<any> | FieldReadFunction<any>,
	teamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | TeamConnectionKeySpecifier)[];
export type TeamConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamDiscussionKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'bodyVersion' | 'comments' | 'commentsResourcePath' | 'commentsUrl' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'editor' | 'id' | 'includesCreatedEdit' | 'isPinned' | 'isPrivate' | 'lastEditedAt' | 'number' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'resourcePath' | 'team' | 'title' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanPin' | 'viewerCanReact' | 'viewerCanSubscribe' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | 'viewerSubscription' | TeamDiscussionKeySpecifier)[];
export type TeamDiscussionFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	isPinned?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanPin?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamDiscussionCommentKeySpecifier = ('author' | 'authorAssociation' | 'body' | 'bodyHTML' | 'bodyText' | 'bodyVersion' | 'createdAt' | 'createdViaEmail' | 'databaseId' | 'discussion' | 'editor' | 'id' | 'includesCreatedEdit' | 'lastEditedAt' | 'number' | 'publishedAt' | 'reactionGroups' | 'reactions' | 'resourcePath' | 'updatedAt' | 'url' | 'userContentEdits' | 'viewerCanDelete' | 'viewerCanReact' | 'viewerCanUpdate' | 'viewerCannotUpdateReasons' | 'viewerDidAuthor' | TeamDiscussionCommentKeySpecifier)[];
export type TeamDiscussionCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorAssociation?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyText?: FieldPolicy<any> | FieldReadFunction<any>,
	bodyVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdViaEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesCreatedEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reactionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userContentEdits?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanReact?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerDidAuthor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamDiscussionCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | TeamDiscussionCommentConnectionKeySpecifier)[];
export type TeamDiscussionCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamDiscussionCommentEdgeKeySpecifier = ('cursor' | 'node' | TeamDiscussionCommentEdgeKeySpecifier)[];
export type TeamDiscussionCommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamDiscussionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | TeamDiscussionConnectionKeySpecifier)[];
export type TeamDiscussionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamDiscussionEdgeKeySpecifier = ('cursor' | 'node' | TeamDiscussionEdgeKeySpecifier)[];
export type TeamDiscussionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamEdgeKeySpecifier = ('cursor' | 'node' | TeamEdgeKeySpecifier)[];
export type TeamEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | TeamMemberConnectionKeySpecifier)[];
export type TeamMemberConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberEdgeKeySpecifier = ('cursor' | 'memberAccessResourcePath' | 'memberAccessUrl' | 'node' | 'role' | TeamMemberEdgeKeySpecifier)[];
export type TeamMemberEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	memberAccessResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	memberAccessUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamRemoveMemberAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'isLdapMapped' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'team' | 'teamName' | 'teamResourcePath' | 'teamUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | TeamRemoveMemberAuditEntryKeySpecifier)[];
export type TeamRemoveMemberAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLdapMapped?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teamName?: FieldPolicy<any> | FieldReadFunction<any>,
	teamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamRemoveRepositoryAuditEntryKeySpecifier = ('action' | 'actor' | 'actorIp' | 'actorLocation' | 'actorLogin' | 'actorResourcePath' | 'actorUrl' | 'createdAt' | 'id' | 'isLdapMapped' | 'operationType' | 'organization' | 'organizationName' | 'organizationResourcePath' | 'organizationUrl' | 'repository' | 'repositoryName' | 'repositoryResourcePath' | 'repositoryUrl' | 'team' | 'teamName' | 'teamResourcePath' | 'teamUrl' | 'user' | 'userLogin' | 'userResourcePath' | 'userUrl' | TeamRemoveRepositoryAuditEntryKeySpecifier)[];
export type TeamRemoveRepositoryAuditEntryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	actorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	actorLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	actorResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	actorUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLdapMapped?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryName?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	teamName?: FieldPolicy<any> | FieldReadFunction<any>,
	teamResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	userResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	userUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamRepositoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | TeamRepositoryConnectionKeySpecifier)[];
export type TeamRepositoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamRepositoryEdgeKeySpecifier = ('cursor' | 'node' | 'permission' | TeamRepositoryEdgeKeySpecifier)[];
export type TeamRepositoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextMatchKeySpecifier = ('fragment' | 'highlights' | 'property' | TextMatchKeySpecifier)[];
export type TextMatchFieldPolicy = {
	fragment?: FieldPolicy<any> | FieldReadFunction<any>,
	highlights?: FieldPolicy<any> | FieldReadFunction<any>,
	property?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextMatchHighlightKeySpecifier = ('beginIndice' | 'endIndice' | 'text' | TextMatchHighlightKeySpecifier)[];
export type TextMatchHighlightFieldPolicy = {
	beginIndice?: FieldPolicy<any> | FieldReadFunction<any>,
	endIndice?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicKeySpecifier = ('id' | 'name' | 'relatedTopics' | 'repositories' | 'stargazerCount' | 'stargazers' | 'viewerHasStarred' | TopicKeySpecifier)[];
export type TopicFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedTopics?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	stargazers?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasStarred?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicAuditEntryDataKeySpecifier = ('topic' | 'topicName' | TopicAuditEntryDataKeySpecifier)[];
export type TopicAuditEntryDataFieldPolicy = {
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	topicName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferIssuePayloadKeySpecifier = ('clientMutationId' | 'issue' | TransferIssuePayloadKeySpecifier)[];
export type TransferIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferredEventKeySpecifier = ('actor' | 'createdAt' | 'fromRepository' | 'id' | 'issue' | TransferredEventKeySpecifier)[];
export type TransferredEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	fromRepository?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TreeKeySpecifier = ('abbreviatedOid' | 'commitResourcePath' | 'commitUrl' | 'entries' | 'id' | 'oid' | 'repository' | TreeKeySpecifier)[];
export type TreeFieldPolicy = {
	abbreviatedOid?: FieldPolicy<any> | FieldReadFunction<any>,
	commitResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	commitUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TreeEntryKeySpecifier = ('extension' | 'isGenerated' | 'mode' | 'name' | 'object' | 'oid' | 'path' | 'repository' | 'submodule' | 'type' | TreeEntryKeySpecifier)[];
export type TreeEntryFieldPolicy = {
	extension?: FieldPolicy<any> | FieldReadFunction<any>,
	isGenerated?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>,
	oid?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	submodule?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnarchiveRepositoryPayloadKeySpecifier = ('clientMutationId' | 'repository' | UnarchiveRepositoryPayloadKeySpecifier)[];
export type UnarchiveRepositoryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnassignedEventKeySpecifier = ('actor' | 'assignable' | 'assignee' | 'createdAt' | 'id' | 'user' | UnassignedEventKeySpecifier)[];
export type UnassignedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	assignable?: FieldPolicy<any> | FieldReadFunction<any>,
	assignee?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnfollowUserPayloadKeySpecifier = ('clientMutationId' | 'user' | UnfollowUserPayloadKeySpecifier)[];
export type UnfollowUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UniformResourceLocatableKeySpecifier = ('resourcePath' | 'url' | UniformResourceLocatableKeySpecifier)[];
export type UniformResourceLocatableFieldPolicy = {
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnknownSignatureKeySpecifier = ('email' | 'isValid' | 'payload' | 'signature' | 'signer' | 'state' | 'wasSignedByGitHub' | UnknownSignatureKeySpecifier)[];
export type UnknownSignatureFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	signer?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	wasSignedByGitHub?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnlabeledEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'label' | 'labelable' | UnlabeledEventKeySpecifier)[];
export type UnlabeledEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	labelable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnlinkRepositoryFromProjectPayloadKeySpecifier = ('clientMutationId' | 'project' | 'repository' | UnlinkRepositoryFromProjectPayloadKeySpecifier)[];
export type UnlinkRepositoryFromProjectPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnlockLockablePayloadKeySpecifier = ('actor' | 'clientMutationId' | 'unlockedRecord' | UnlockLockablePayloadKeySpecifier)[];
export type UnlockLockablePayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	unlockedRecord?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnlockedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'lockable' | UnlockedEventKeySpecifier)[];
export type UnlockedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lockable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnmarkDiscussionCommentAsAnswerPayloadKeySpecifier = ('clientMutationId' | 'discussion' | UnmarkDiscussionCommentAsAnswerPayloadKeySpecifier)[];
export type UnmarkDiscussionCommentAsAnswerPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnmarkFileAsViewedPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | UnmarkFileAsViewedPayloadKeySpecifier)[];
export type UnmarkFileAsViewedPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnmarkIssueAsDuplicatePayloadKeySpecifier = ('clientMutationId' | 'duplicate' | UnmarkIssueAsDuplicatePayloadKeySpecifier)[];
export type UnmarkIssueAsDuplicatePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnmarkedAsDuplicateEventKeySpecifier = ('actor' | 'canonical' | 'createdAt' | 'duplicate' | 'id' | 'isCrossRepository' | UnmarkedAsDuplicateEventKeySpecifier)[];
export type UnmarkedAsDuplicateEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCrossRepository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnminimizeCommentPayloadKeySpecifier = ('clientMutationId' | 'unminimizedComment' | UnminimizeCommentPayloadKeySpecifier)[];
export type UnminimizeCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	unminimizedComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnpinIssuePayloadKeySpecifier = ('clientMutationId' | 'issue' | UnpinIssuePayloadKeySpecifier)[];
export type UnpinIssuePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnpinnedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'issue' | UnpinnedEventKeySpecifier)[];
export type UnpinnedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnresolveReviewThreadPayloadKeySpecifier = ('clientMutationId' | 'thread' | UnresolveReviewThreadPayloadKeySpecifier)[];
export type UnresolveReviewThreadPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnsubscribedEventKeySpecifier = ('actor' | 'createdAt' | 'id' | 'subscribable' | UnsubscribedEventKeySpecifier)[];
export type UnsubscribedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatableKeySpecifier = ('viewerCanUpdate' | UpdatableKeySpecifier)[];
export type UpdatableFieldPolicy = {
	viewerCanUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatableCommentKeySpecifier = ('viewerCannotUpdateReasons' | UpdatableCommentKeySpecifier)[];
export type UpdatableCommentFieldPolicy = {
	viewerCannotUpdateReasons?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateBranchProtectionRulePayloadKeySpecifier = ('branchProtectionRule' | 'clientMutationId' | UpdateBranchProtectionRulePayloadKeySpecifier)[];
export type UpdateBranchProtectionRulePayloadFieldPolicy = {
	branchProtectionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCheckRunPayloadKeySpecifier = ('checkRun' | 'clientMutationId' | UpdateCheckRunPayloadKeySpecifier)[];
export type UpdateCheckRunPayloadFieldPolicy = {
	checkRun?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCheckSuitePreferencesPayloadKeySpecifier = ('clientMutationId' | 'repository' | UpdateCheckSuitePreferencesPayloadKeySpecifier)[];
export type UpdateCheckSuitePreferencesPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateDiscussionCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | UpdateDiscussionCommentPayloadKeySpecifier)[];
export type UpdateDiscussionCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateDiscussionPayloadKeySpecifier = ('clientMutationId' | 'discussion' | UpdateDiscussionPayloadKeySpecifier)[];
export type UpdateDiscussionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseAdministratorRolePayloadKeySpecifier = ('clientMutationId' | 'message' | UpdateEnterpriseAdministratorRolePayloadKeySpecifier)[];
export type UpdateEnterpriseAdministratorRolePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseDefaultRepositoryPermissionSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanCreateRepositoriesSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanDeleteIssuesSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanMakePurchasesSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanMakePurchasesSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanMakePurchasesSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseOrganizationProjectsSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseOrganizationProjectsSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseOrganizationProjectsSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseProfilePayloadKeySpecifier = ('clientMutationId' | 'enterprise' | UpdateEnterpriseProfilePayloadKeySpecifier)[];
export type UpdateEnterpriseProfilePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseRepositoryProjectsSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseRepositoryProjectsSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseRepositoryProjectsSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseTeamDiscussionsSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseTeamDiscussionsSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseTeamDiscussionsSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayloadKeySpecifier = ('clientMutationId' | 'enterprise' | 'message' | UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayloadKeySpecifier)[];
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	enterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnvironmentPayloadKeySpecifier = ('clientMutationId' | 'environment' | UpdateEnvironmentPayloadKeySpecifier)[];
export type UpdateEnvironmentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIpAllowListEnabledSettingPayloadKeySpecifier = ('clientMutationId' | 'owner' | UpdateIpAllowListEnabledSettingPayloadKeySpecifier)[];
export type UpdateIpAllowListEnabledSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIpAllowListEntryPayloadKeySpecifier = ('clientMutationId' | 'ipAllowListEntry' | UpdateIpAllowListEntryPayloadKeySpecifier)[];
export type UpdateIpAllowListEntryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	ipAllowListEntry?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIpAllowListForInstalledAppsEnabledSettingPayloadKeySpecifier = ('clientMutationId' | 'owner' | UpdateIpAllowListForInstalledAppsEnabledSettingPayloadKeySpecifier)[];
export type UpdateIpAllowListForInstalledAppsEnabledSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIssueCommentPayloadKeySpecifier = ('clientMutationId' | 'issueComment' | UpdateIssueCommentPayloadKeySpecifier)[];
export type UpdateIssueCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issueComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIssuePayloadKeySpecifier = ('actor' | 'clientMutationId' | 'issue' | UpdateIssuePayloadKeySpecifier)[];
export type UpdateIssuePayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	issue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateLabelPayloadKeySpecifier = ('clientMutationId' | 'label' | UpdateLabelPayloadKeySpecifier)[];
export type UpdateLabelPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateNotificationRestrictionSettingPayloadKeySpecifier = ('clientMutationId' | 'owner' | UpdateNotificationRestrictionSettingPayloadKeySpecifier)[];
export type UpdateNotificationRestrictionSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateOrganizationAllowPrivateRepositoryForkingSettingPayloadKeySpecifier = ('clientMutationId' | 'message' | 'organization' | UpdateOrganizationAllowPrivateRepositoryForkingSettingPayloadKeySpecifier)[];
export type UpdateOrganizationAllowPrivateRepositoryForkingSettingPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProjectCardPayloadKeySpecifier = ('clientMutationId' | 'projectCard' | UpdateProjectCardPayloadKeySpecifier)[];
export type UpdateProjectCardPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	projectCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProjectColumnPayloadKeySpecifier = ('clientMutationId' | 'projectColumn' | UpdateProjectColumnPayloadKeySpecifier)[];
export type UpdateProjectColumnPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	projectColumn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProjectNextItemFieldPayloadKeySpecifier = ('clientMutationId' | 'projectNextItem' | UpdateProjectNextItemFieldPayloadKeySpecifier)[];
export type UpdateProjectNextItemFieldPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	projectNextItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProjectPayloadKeySpecifier = ('clientMutationId' | 'project' | UpdateProjectPayloadKeySpecifier)[];
export type UpdateProjectPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePullRequestBranchPayloadKeySpecifier = ('clientMutationId' | 'pullRequest' | UpdatePullRequestBranchPayloadKeySpecifier)[];
export type UpdatePullRequestBranchPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePullRequestPayloadKeySpecifier = ('actor' | 'clientMutationId' | 'pullRequest' | UpdatePullRequestPayloadKeySpecifier)[];
export type UpdatePullRequestPayloadFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePullRequestReviewCommentPayloadKeySpecifier = ('clientMutationId' | 'pullRequestReviewComment' | UpdatePullRequestReviewCommentPayloadKeySpecifier)[];
export type UpdatePullRequestReviewCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReviewComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePullRequestReviewPayloadKeySpecifier = ('clientMutationId' | 'pullRequestReview' | UpdatePullRequestReviewPayloadKeySpecifier)[];
export type UpdatePullRequestReviewPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequestReview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateRefPayloadKeySpecifier = ('clientMutationId' | 'ref' | UpdateRefPayloadKeySpecifier)[];
export type UpdateRefPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateRefsPayloadKeySpecifier = ('clientMutationId' | UpdateRefsPayloadKeySpecifier)[];
export type UpdateRefsPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateRepositoryPayloadKeySpecifier = ('clientMutationId' | 'repository' | UpdateRepositoryPayloadKeySpecifier)[];
export type UpdateRepositoryPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSponsorshipPreferencesPayloadKeySpecifier = ('clientMutationId' | 'sponsorship' | UpdateSponsorshipPreferencesPayloadKeySpecifier)[];
export type UpdateSponsorshipPreferencesPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorship?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSubscriptionPayloadKeySpecifier = ('clientMutationId' | 'subscribable' | UpdateSubscriptionPayloadKeySpecifier)[];
export type UpdateSubscriptionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTeamDiscussionCommentPayloadKeySpecifier = ('clientMutationId' | 'teamDiscussionComment' | UpdateTeamDiscussionCommentPayloadKeySpecifier)[];
export type UpdateTeamDiscussionCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDiscussionComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTeamDiscussionPayloadKeySpecifier = ('clientMutationId' | 'teamDiscussion' | UpdateTeamDiscussionPayloadKeySpecifier)[];
export type UpdateTeamDiscussionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDiscussion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTeamReviewAssignmentPayloadKeySpecifier = ('clientMutationId' | 'team' | UpdateTeamReviewAssignmentPayloadKeySpecifier)[];
export type UpdateTeamReviewAssignmentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTopicsPayloadKeySpecifier = ('clientMutationId' | 'invalidTopicNames' | 'repository' | UpdateTopicsPayloadKeySpecifier)[];
export type UpdateTopicsPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	invalidTopicNames?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('anyPinnableItems' | 'avatarUrl' | 'bio' | 'bioHTML' | 'canReceiveOrganizationEmailsWhenNotificationsRestricted' | 'commitComments' | 'company' | 'companyHTML' | 'contributionsCollection' | 'createdAt' | 'databaseId' | 'email' | 'estimatedNextSponsorsPayoutInCents' | 'followers' | 'following' | 'gist' | 'gistComments' | 'gists' | 'hasSponsorsListing' | 'hovercard' | 'id' | 'interactionAbility' | 'isBountyHunter' | 'isCampusExpert' | 'isDeveloperProgramMember' | 'isEmployee' | 'isFollowingViewer' | 'isGitHubStar' | 'isHireable' | 'isSiteAdmin' | 'isSponsoredBy' | 'isSponsoringViewer' | 'isViewer' | 'issueComments' | 'issues' | 'itemShowcase' | 'location' | 'login' | 'monthlyEstimatedSponsorsIncomeInCents' | 'name' | 'organization' | 'organizationVerifiedDomainEmails' | 'organizations' | 'packages' | 'pinnableItems' | 'pinnedItems' | 'pinnedItemsRemaining' | 'project' | 'projectNext' | 'projects' | 'projectsNext' | 'projectsResourcePath' | 'projectsUrl' | 'publicKeys' | 'pullRequests' | 'repositories' | 'repositoriesContributedTo' | 'repository' | 'repositoryDiscussionComments' | 'repositoryDiscussions' | 'resourcePath' | 'savedReplies' | 'sponsoring' | 'sponsors' | 'sponsorsActivities' | 'sponsorsListing' | 'sponsorshipForViewerAsSponsor' | 'sponsorshipForViewerAsSponsorable' | 'sponsorshipNewsletters' | 'sponsorshipsAsMaintainer' | 'sponsorshipsAsSponsor' | 'starredRepositories' | 'status' | 'topRepositories' | 'twitterUsername' | 'updatedAt' | 'url' | 'viewerCanChangePinnedItems' | 'viewerCanCreateProjects' | 'viewerCanFollow' | 'viewerCanSponsor' | 'viewerIsFollowing' | 'viewerIsSponsoring' | 'watching' | 'websiteUrl' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	anyPinnableItems?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	bioHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	canReceiveOrganizationEmailsWhenNotificationsRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	commitComments?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	contributionsCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	estimatedNextSponsorsPayoutInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	followers?: FieldPolicy<any> | FieldReadFunction<any>,
	following?: FieldPolicy<any> | FieldReadFunction<any>,
	gist?: FieldPolicy<any> | FieldReadFunction<any>,
	gistComments?: FieldPolicy<any> | FieldReadFunction<any>,
	gists?: FieldPolicy<any> | FieldReadFunction<any>,
	hasSponsorsListing?: FieldPolicy<any> | FieldReadFunction<any>,
	hovercard?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	interactionAbility?: FieldPolicy<any> | FieldReadFunction<any>,
	isBountyHunter?: FieldPolicy<any> | FieldReadFunction<any>,
	isCampusExpert?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeveloperProgramMember?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmployee?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowingViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	isGitHubStar?: FieldPolicy<any> | FieldReadFunction<any>,
	isHireable?: FieldPolicy<any> | FieldReadFunction<any>,
	isSiteAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	isSponsoredBy?: FieldPolicy<any> | FieldReadFunction<any>,
	isSponsoringViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	isViewer?: FieldPolicy<any> | FieldReadFunction<any>,
	issueComments?: FieldPolicy<any> | FieldReadFunction<any>,
	issues?: FieldPolicy<any> | FieldReadFunction<any>,
	itemShowcase?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	monthlyEstimatedSponsorsIncomeInCents?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationVerifiedDomainEmails?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	packages?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnableItems?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedItems?: FieldPolicy<any> | FieldReadFunction<any>,
	pinnedItemsRemaining?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectNext?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsNext?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsResourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	publicKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	pullRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	repositories?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoriesContributedTo?: FieldPolicy<any> | FieldReadFunction<any>,
	repository?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryDiscussionComments?: FieldPolicy<any> | FieldReadFunction<any>,
	repositoryDiscussions?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	savedReplies?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsoring?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsors?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorsListing?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipForViewerAsSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipForViewerAsSponsorable?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipNewsletters?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipsAsMaintainer?: FieldPolicy<any> | FieldReadFunction<any>,
	sponsorshipsAsSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	starredRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	topRepositories?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterUsername?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanChangePinnedItems?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanCreateProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanFollow?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanSponsor?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerIsSponsoring?: FieldPolicy<any> | FieldReadFunction<any>,
	watching?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBlockedEventKeySpecifier = ('actor' | 'blockDuration' | 'createdAt' | 'id' | 'subject' | UserBlockedEventKeySpecifier)[];
export type UserBlockedEventFieldPolicy = {
	actor?: FieldPolicy<any> | FieldReadFunction<any>,
	blockDuration?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserContentEditKeySpecifier = ('createdAt' | 'deletedAt' | 'deletedBy' | 'diff' | 'editedAt' | 'editor' | 'id' | 'updatedAt' | UserContentEditKeySpecifier)[];
export type UserContentEditFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	editedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	editor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserContentEditConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | UserContentEditConnectionKeySpecifier)[];
export type UserContentEditConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserContentEditEdgeKeySpecifier = ('cursor' | 'node' | UserContentEditEdgeKeySpecifier)[];
export type UserContentEditEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEmailMetadataKeySpecifier = ('primary' | 'type' | 'value' | UserEmailMetadataKeySpecifier)[];
export type UserEmailMetadataFieldPolicy = {
	primary?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStatusKeySpecifier = ('createdAt' | 'emoji' | 'emojiHTML' | 'expiresAt' | 'id' | 'indicatesLimitedAvailability' | 'message' | 'organization' | 'updatedAt' | 'user' | UserStatusKeySpecifier)[];
export type UserStatusFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	emoji?: FieldPolicy<any> | FieldReadFunction<any>,
	emojiHTML?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicatesLimitedAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStatusConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | UserStatusConnectionKeySpecifier)[];
export type UserStatusConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserStatusEdgeKeySpecifier = ('cursor' | 'node' | UserStatusEdgeKeySpecifier)[];
export type UserStatusEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifiableDomainKeySpecifier = ('createdAt' | 'databaseId' | 'dnsHostName' | 'domain' | 'hasFoundHostName' | 'hasFoundVerificationToken' | 'id' | 'isApproved' | 'isRequiredForPolicyEnforcement' | 'isVerified' | 'owner' | 'punycodeEncodedDomain' | 'tokenExpirationTime' | 'updatedAt' | 'verificationToken' | VerifiableDomainKeySpecifier)[];
export type VerifiableDomainFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	dnsHostName?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	hasFoundHostName?: FieldPolicy<any> | FieldReadFunction<any>,
	hasFoundVerificationToken?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isApproved?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequiredForPolicyEnforcement?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	punycodeEncodedDomain?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenExpirationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifiableDomainConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | VerifiableDomainConnectionKeySpecifier)[];
export type VerifiableDomainConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifiableDomainEdgeKeySpecifier = ('cursor' | 'node' | VerifiableDomainEdgeKeySpecifier)[];
export type VerifiableDomainEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyVerifiableDomainPayloadKeySpecifier = ('clientMutationId' | 'domain' | VerifyVerifiableDomainPayloadKeySpecifier)[];
export type VerifyVerifiableDomainPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewerHovercardContextKeySpecifier = ('message' | 'octicon' | 'viewer' | ViewerHovercardContextKeySpecifier)[];
export type ViewerHovercardContextFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	octicon?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotableKeySpecifier = ('upvoteCount' | 'viewerCanUpvote' | 'viewerHasUpvoted' | VotableKeySpecifier)[];
export type VotableFieldPolicy = {
	upvoteCount?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCanUpvote?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerHasUpvoted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkflowKeySpecifier = ('createdAt' | 'databaseId' | 'id' | 'name' | 'updatedAt' | WorkflowKeySpecifier)[];
export type WorkflowFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkflowRunKeySpecifier = ('checkSuite' | 'createdAt' | 'databaseId' | 'deploymentReviews' | 'id' | 'pendingDeploymentRequests' | 'resourcePath' | 'runNumber' | 'updatedAt' | 'url' | 'workflow' | WorkflowRunKeySpecifier)[];
export type WorkflowRunFieldPolicy = {
	checkSuite?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	deploymentReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingDeploymentRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcePath?: FieldPolicy<any> | FieldReadFunction<any>,
	runNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	workflow?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AcceptEnterpriseAdministratorInvitationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcceptEnterpriseAdministratorInvitationPayloadKeySpecifier | (() => undefined | AcceptEnterpriseAdministratorInvitationPayloadKeySpecifier),
		fields?: AcceptEnterpriseAdministratorInvitationPayloadFieldPolicy,
	},
	AcceptTopicSuggestionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcceptTopicSuggestionPayloadKeySpecifier | (() => undefined | AcceptTopicSuggestionPayloadKeySpecifier),
		fields?: AcceptTopicSuggestionPayloadFieldPolicy,
	},
	Actor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActorKeySpecifier | (() => undefined | ActorKeySpecifier),
		fields?: ActorFieldPolicy,
	},
	ActorLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActorLocationKeySpecifier | (() => undefined | ActorLocationKeySpecifier),
		fields?: ActorLocationFieldPolicy,
	},
	AddAssigneesToAssignablePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddAssigneesToAssignablePayloadKeySpecifier | (() => undefined | AddAssigneesToAssignablePayloadKeySpecifier),
		fields?: AddAssigneesToAssignablePayloadFieldPolicy,
	},
	AddCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddCommentPayloadKeySpecifier | (() => undefined | AddCommentPayloadKeySpecifier),
		fields?: AddCommentPayloadFieldPolicy,
	},
	AddDiscussionCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddDiscussionCommentPayloadKeySpecifier | (() => undefined | AddDiscussionCommentPayloadKeySpecifier),
		fields?: AddDiscussionCommentPayloadFieldPolicy,
	},
	AddEnterpriseSupportEntitlementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddEnterpriseSupportEntitlementPayloadKeySpecifier | (() => undefined | AddEnterpriseSupportEntitlementPayloadKeySpecifier),
		fields?: AddEnterpriseSupportEntitlementPayloadFieldPolicy,
	},
	AddLabelsToLabelablePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddLabelsToLabelablePayloadKeySpecifier | (() => undefined | AddLabelsToLabelablePayloadKeySpecifier),
		fields?: AddLabelsToLabelablePayloadFieldPolicy,
	},
	AddProjectCardPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddProjectCardPayloadKeySpecifier | (() => undefined | AddProjectCardPayloadKeySpecifier),
		fields?: AddProjectCardPayloadFieldPolicy,
	},
	AddProjectColumnPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddProjectColumnPayloadKeySpecifier | (() => undefined | AddProjectColumnPayloadKeySpecifier),
		fields?: AddProjectColumnPayloadFieldPolicy,
	},
	AddProjectNextItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddProjectNextItemPayloadKeySpecifier | (() => undefined | AddProjectNextItemPayloadKeySpecifier),
		fields?: AddProjectNextItemPayloadFieldPolicy,
	},
	AddPullRequestReviewCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddPullRequestReviewCommentPayloadKeySpecifier | (() => undefined | AddPullRequestReviewCommentPayloadKeySpecifier),
		fields?: AddPullRequestReviewCommentPayloadFieldPolicy,
	},
	AddPullRequestReviewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddPullRequestReviewPayloadKeySpecifier | (() => undefined | AddPullRequestReviewPayloadKeySpecifier),
		fields?: AddPullRequestReviewPayloadFieldPolicy,
	},
	AddPullRequestReviewThreadPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddPullRequestReviewThreadPayloadKeySpecifier | (() => undefined | AddPullRequestReviewThreadPayloadKeySpecifier),
		fields?: AddPullRequestReviewThreadPayloadFieldPolicy,
	},
	AddReactionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddReactionPayloadKeySpecifier | (() => undefined | AddReactionPayloadKeySpecifier),
		fields?: AddReactionPayloadFieldPolicy,
	},
	AddStarPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddStarPayloadKeySpecifier | (() => undefined | AddStarPayloadKeySpecifier),
		fields?: AddStarPayloadFieldPolicy,
	},
	AddUpvotePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddUpvotePayloadKeySpecifier | (() => undefined | AddUpvotePayloadKeySpecifier),
		fields?: AddUpvotePayloadFieldPolicy,
	},
	AddVerifiableDomainPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddVerifiableDomainPayloadKeySpecifier | (() => undefined | AddVerifiableDomainPayloadKeySpecifier),
		fields?: AddVerifiableDomainPayloadFieldPolicy,
	},
	AddedToProjectEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddedToProjectEventKeySpecifier | (() => undefined | AddedToProjectEventKeySpecifier),
		fields?: AddedToProjectEventFieldPolicy,
	},
	App?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppKeySpecifier | (() => undefined | AppKeySpecifier),
		fields?: AppFieldPolicy,
	},
	ApproveDeploymentsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApproveDeploymentsPayloadKeySpecifier | (() => undefined | ApproveDeploymentsPayloadKeySpecifier),
		fields?: ApproveDeploymentsPayloadFieldPolicy,
	},
	ApproveVerifiableDomainPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApproveVerifiableDomainPayloadKeySpecifier | (() => undefined | ApproveVerifiableDomainPayloadKeySpecifier),
		fields?: ApproveVerifiableDomainPayloadFieldPolicy,
	},
	ArchiveRepositoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArchiveRepositoryPayloadKeySpecifier | (() => undefined | ArchiveRepositoryPayloadKeySpecifier),
		fields?: ArchiveRepositoryPayloadFieldPolicy,
	},
	Assignable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignableKeySpecifier | (() => undefined | AssignableKeySpecifier),
		fields?: AssignableFieldPolicy,
	},
	AssignedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignedEventKeySpecifier | (() => undefined | AssignedEventKeySpecifier),
		fields?: AssignedEventFieldPolicy,
	},
	AuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuditEntryKeySpecifier | (() => undefined | AuditEntryKeySpecifier),
		fields?: AuditEntryFieldPolicy,
	},
	AutoMergeDisabledEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutoMergeDisabledEventKeySpecifier | (() => undefined | AutoMergeDisabledEventKeySpecifier),
		fields?: AutoMergeDisabledEventFieldPolicy,
	},
	AutoMergeEnabledEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutoMergeEnabledEventKeySpecifier | (() => undefined | AutoMergeEnabledEventKeySpecifier),
		fields?: AutoMergeEnabledEventFieldPolicy,
	},
	AutoMergeRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutoMergeRequestKeySpecifier | (() => undefined | AutoMergeRequestKeySpecifier),
		fields?: AutoMergeRequestFieldPolicy,
	},
	AutoRebaseEnabledEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutoRebaseEnabledEventKeySpecifier | (() => undefined | AutoRebaseEnabledEventKeySpecifier),
		fields?: AutoRebaseEnabledEventFieldPolicy,
	},
	AutoSquashEnabledEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutoSquashEnabledEventKeySpecifier | (() => undefined | AutoSquashEnabledEventKeySpecifier),
		fields?: AutoSquashEnabledEventFieldPolicy,
	},
	AutomaticBaseChangeFailedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutomaticBaseChangeFailedEventKeySpecifier | (() => undefined | AutomaticBaseChangeFailedEventKeySpecifier),
		fields?: AutomaticBaseChangeFailedEventFieldPolicy,
	},
	AutomaticBaseChangeSucceededEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AutomaticBaseChangeSucceededEventKeySpecifier | (() => undefined | AutomaticBaseChangeSucceededEventKeySpecifier),
		fields?: AutomaticBaseChangeSucceededEventFieldPolicy,
	},
	BaseRefChangedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BaseRefChangedEventKeySpecifier | (() => undefined | BaseRefChangedEventKeySpecifier),
		fields?: BaseRefChangedEventFieldPolicy,
	},
	BaseRefDeletedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BaseRefDeletedEventKeySpecifier | (() => undefined | BaseRefDeletedEventKeySpecifier),
		fields?: BaseRefDeletedEventFieldPolicy,
	},
	BaseRefForcePushedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BaseRefForcePushedEventKeySpecifier | (() => undefined | BaseRefForcePushedEventKeySpecifier),
		fields?: BaseRefForcePushedEventFieldPolicy,
	},
	Blame?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlameKeySpecifier | (() => undefined | BlameKeySpecifier),
		fields?: BlameFieldPolicy,
	},
	BlameRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlameRangeKeySpecifier | (() => undefined | BlameRangeKeySpecifier),
		fields?: BlameRangeFieldPolicy,
	},
	Blob?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlobKeySpecifier | (() => undefined | BlobKeySpecifier),
		fields?: BlobFieldPolicy,
	},
	Bot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotKeySpecifier | (() => undefined | BotKeySpecifier),
		fields?: BotFieldPolicy,
	},
	BranchProtectionRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BranchProtectionRuleKeySpecifier | (() => undefined | BranchProtectionRuleKeySpecifier),
		fields?: BranchProtectionRuleFieldPolicy,
	},
	BranchProtectionRuleConflict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BranchProtectionRuleConflictKeySpecifier | (() => undefined | BranchProtectionRuleConflictKeySpecifier),
		fields?: BranchProtectionRuleConflictFieldPolicy,
	},
	BranchProtectionRuleConflictConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BranchProtectionRuleConflictConnectionKeySpecifier | (() => undefined | BranchProtectionRuleConflictConnectionKeySpecifier),
		fields?: BranchProtectionRuleConflictConnectionFieldPolicy,
	},
	BranchProtectionRuleConflictEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BranchProtectionRuleConflictEdgeKeySpecifier | (() => undefined | BranchProtectionRuleConflictEdgeKeySpecifier),
		fields?: BranchProtectionRuleConflictEdgeFieldPolicy,
	},
	BranchProtectionRuleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BranchProtectionRuleConnectionKeySpecifier | (() => undefined | BranchProtectionRuleConnectionKeySpecifier),
		fields?: BranchProtectionRuleConnectionFieldPolicy,
	},
	BranchProtectionRuleEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BranchProtectionRuleEdgeKeySpecifier | (() => undefined | BranchProtectionRuleEdgeKeySpecifier),
		fields?: BranchProtectionRuleEdgeFieldPolicy,
	},
	BypassForcePushAllowance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BypassForcePushAllowanceKeySpecifier | (() => undefined | BypassForcePushAllowanceKeySpecifier),
		fields?: BypassForcePushAllowanceFieldPolicy,
	},
	BypassForcePushAllowanceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BypassForcePushAllowanceConnectionKeySpecifier | (() => undefined | BypassForcePushAllowanceConnectionKeySpecifier),
		fields?: BypassForcePushAllowanceConnectionFieldPolicy,
	},
	BypassForcePushAllowanceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BypassForcePushAllowanceEdgeKeySpecifier | (() => undefined | BypassForcePushAllowanceEdgeKeySpecifier),
		fields?: BypassForcePushAllowanceEdgeFieldPolicy,
	},
	BypassPullRequestAllowance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BypassPullRequestAllowanceKeySpecifier | (() => undefined | BypassPullRequestAllowanceKeySpecifier),
		fields?: BypassPullRequestAllowanceFieldPolicy,
	},
	BypassPullRequestAllowanceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BypassPullRequestAllowanceConnectionKeySpecifier | (() => undefined | BypassPullRequestAllowanceConnectionKeySpecifier),
		fields?: BypassPullRequestAllowanceConnectionFieldPolicy,
	},
	BypassPullRequestAllowanceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BypassPullRequestAllowanceEdgeKeySpecifier | (() => undefined | BypassPullRequestAllowanceEdgeKeySpecifier),
		fields?: BypassPullRequestAllowanceEdgeFieldPolicy,
	},
	CVSS?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CVSSKeySpecifier | (() => undefined | CVSSKeySpecifier),
		fields?: CVSSFieldPolicy,
	},
	CWE?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CWEKeySpecifier | (() => undefined | CWEKeySpecifier),
		fields?: CWEFieldPolicy,
	},
	CWEConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CWEConnectionKeySpecifier | (() => undefined | CWEConnectionKeySpecifier),
		fields?: CWEConnectionFieldPolicy,
	},
	CWEEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CWEEdgeKeySpecifier | (() => undefined | CWEEdgeKeySpecifier),
		fields?: CWEEdgeFieldPolicy,
	},
	CancelEnterpriseAdminInvitationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancelEnterpriseAdminInvitationPayloadKeySpecifier | (() => undefined | CancelEnterpriseAdminInvitationPayloadKeySpecifier),
		fields?: CancelEnterpriseAdminInvitationPayloadFieldPolicy,
	},
	CancelSponsorshipPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancelSponsorshipPayloadKeySpecifier | (() => undefined | CancelSponsorshipPayloadKeySpecifier),
		fields?: CancelSponsorshipPayloadFieldPolicy,
	},
	ChangeUserStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangeUserStatusPayloadKeySpecifier | (() => undefined | ChangeUserStatusPayloadKeySpecifier),
		fields?: ChangeUserStatusPayloadFieldPolicy,
	},
	CheckAnnotation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckAnnotationKeySpecifier | (() => undefined | CheckAnnotationKeySpecifier),
		fields?: CheckAnnotationFieldPolicy,
	},
	CheckAnnotationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckAnnotationConnectionKeySpecifier | (() => undefined | CheckAnnotationConnectionKeySpecifier),
		fields?: CheckAnnotationConnectionFieldPolicy,
	},
	CheckAnnotationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckAnnotationEdgeKeySpecifier | (() => undefined | CheckAnnotationEdgeKeySpecifier),
		fields?: CheckAnnotationEdgeFieldPolicy,
	},
	CheckAnnotationPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckAnnotationPositionKeySpecifier | (() => undefined | CheckAnnotationPositionKeySpecifier),
		fields?: CheckAnnotationPositionFieldPolicy,
	},
	CheckAnnotationSpan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckAnnotationSpanKeySpecifier | (() => undefined | CheckAnnotationSpanKeySpecifier),
		fields?: CheckAnnotationSpanFieldPolicy,
	},
	CheckRun?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckRunKeySpecifier | (() => undefined | CheckRunKeySpecifier),
		fields?: CheckRunFieldPolicy,
	},
	CheckRunConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckRunConnectionKeySpecifier | (() => undefined | CheckRunConnectionKeySpecifier),
		fields?: CheckRunConnectionFieldPolicy,
	},
	CheckRunEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckRunEdgeKeySpecifier | (() => undefined | CheckRunEdgeKeySpecifier),
		fields?: CheckRunEdgeFieldPolicy,
	},
	CheckStep?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckStepKeySpecifier | (() => undefined | CheckStepKeySpecifier),
		fields?: CheckStepFieldPolicy,
	},
	CheckStepConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckStepConnectionKeySpecifier | (() => undefined | CheckStepConnectionKeySpecifier),
		fields?: CheckStepConnectionFieldPolicy,
	},
	CheckStepEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckStepEdgeKeySpecifier | (() => undefined | CheckStepEdgeKeySpecifier),
		fields?: CheckStepEdgeFieldPolicy,
	},
	CheckSuite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckSuiteKeySpecifier | (() => undefined | CheckSuiteKeySpecifier),
		fields?: CheckSuiteFieldPolicy,
	},
	CheckSuiteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckSuiteConnectionKeySpecifier | (() => undefined | CheckSuiteConnectionKeySpecifier),
		fields?: CheckSuiteConnectionFieldPolicy,
	},
	CheckSuiteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckSuiteEdgeKeySpecifier | (() => undefined | CheckSuiteEdgeKeySpecifier),
		fields?: CheckSuiteEdgeFieldPolicy,
	},
	ClearLabelsFromLabelablePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClearLabelsFromLabelablePayloadKeySpecifier | (() => undefined | ClearLabelsFromLabelablePayloadKeySpecifier),
		fields?: ClearLabelsFromLabelablePayloadFieldPolicy,
	},
	CloneProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloneProjectPayloadKeySpecifier | (() => undefined | CloneProjectPayloadKeySpecifier),
		fields?: CloneProjectPayloadFieldPolicy,
	},
	CloneTemplateRepositoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloneTemplateRepositoryPayloadKeySpecifier | (() => undefined | CloneTemplateRepositoryPayloadKeySpecifier),
		fields?: CloneTemplateRepositoryPayloadFieldPolicy,
	},
	Closable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClosableKeySpecifier | (() => undefined | ClosableKeySpecifier),
		fields?: ClosableFieldPolicy,
	},
	CloseIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloseIssuePayloadKeySpecifier | (() => undefined | CloseIssuePayloadKeySpecifier),
		fields?: CloseIssuePayloadFieldPolicy,
	},
	ClosePullRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClosePullRequestPayloadKeySpecifier | (() => undefined | ClosePullRequestPayloadKeySpecifier),
		fields?: ClosePullRequestPayloadFieldPolicy,
	},
	ClosedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClosedEventKeySpecifier | (() => undefined | ClosedEventKeySpecifier),
		fields?: ClosedEventFieldPolicy,
	},
	CodeOfConduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeOfConductKeySpecifier | (() => undefined | CodeOfConductKeySpecifier),
		fields?: CodeOfConductFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentDeletedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentDeletedEventKeySpecifier | (() => undefined | CommentDeletedEventKeySpecifier),
		fields?: CommentDeletedEventFieldPolicy,
	},
	Commit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitKeySpecifier | (() => undefined | CommitKeySpecifier),
		fields?: CommitFieldPolicy,
	},
	CommitComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitCommentKeySpecifier | (() => undefined | CommitCommentKeySpecifier),
		fields?: CommitCommentFieldPolicy,
	},
	CommitCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitCommentConnectionKeySpecifier | (() => undefined | CommitCommentConnectionKeySpecifier),
		fields?: CommitCommentConnectionFieldPolicy,
	},
	CommitCommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitCommentEdgeKeySpecifier | (() => undefined | CommitCommentEdgeKeySpecifier),
		fields?: CommitCommentEdgeFieldPolicy,
	},
	CommitCommentThread?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitCommentThreadKeySpecifier | (() => undefined | CommitCommentThreadKeySpecifier),
		fields?: CommitCommentThreadFieldPolicy,
	},
	CommitConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitConnectionKeySpecifier | (() => undefined | CommitConnectionKeySpecifier),
		fields?: CommitConnectionFieldPolicy,
	},
	CommitContributionsByRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitContributionsByRepositoryKeySpecifier | (() => undefined | CommitContributionsByRepositoryKeySpecifier),
		fields?: CommitContributionsByRepositoryFieldPolicy,
	},
	CommitEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitEdgeKeySpecifier | (() => undefined | CommitEdgeKeySpecifier),
		fields?: CommitEdgeFieldPolicy,
	},
	CommitHistoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommitHistoryConnectionKeySpecifier | (() => undefined | CommitHistoryConnectionKeySpecifier),
		fields?: CommitHistoryConnectionFieldPolicy,
	},
	ConnectedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectedEventKeySpecifier | (() => undefined | ConnectedEventKeySpecifier),
		fields?: ConnectedEventFieldPolicy,
	},
	Contribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionKeySpecifier | (() => undefined | ContributionKeySpecifier),
		fields?: ContributionFieldPolicy,
	},
	ContributionCalendar?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionCalendarKeySpecifier | (() => undefined | ContributionCalendarKeySpecifier),
		fields?: ContributionCalendarFieldPolicy,
	},
	ContributionCalendarDay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionCalendarDayKeySpecifier | (() => undefined | ContributionCalendarDayKeySpecifier),
		fields?: ContributionCalendarDayFieldPolicy,
	},
	ContributionCalendarMonth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionCalendarMonthKeySpecifier | (() => undefined | ContributionCalendarMonthKeySpecifier),
		fields?: ContributionCalendarMonthFieldPolicy,
	},
	ContributionCalendarWeek?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionCalendarWeekKeySpecifier | (() => undefined | ContributionCalendarWeekKeySpecifier),
		fields?: ContributionCalendarWeekFieldPolicy,
	},
	ContributionsCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionsCollectionKeySpecifier | (() => undefined | ContributionsCollectionKeySpecifier),
		fields?: ContributionsCollectionFieldPolicy,
	},
	ConvertProjectCardNoteToIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConvertProjectCardNoteToIssuePayloadKeySpecifier | (() => undefined | ConvertProjectCardNoteToIssuePayloadKeySpecifier),
		fields?: ConvertProjectCardNoteToIssuePayloadFieldPolicy,
	},
	ConvertPullRequestToDraftPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConvertPullRequestToDraftPayloadKeySpecifier | (() => undefined | ConvertPullRequestToDraftPayloadKeySpecifier),
		fields?: ConvertPullRequestToDraftPayloadFieldPolicy,
	},
	ConvertToDraftEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConvertToDraftEventKeySpecifier | (() => undefined | ConvertToDraftEventKeySpecifier),
		fields?: ConvertToDraftEventFieldPolicy,
	},
	ConvertedNoteToIssueEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConvertedNoteToIssueEventKeySpecifier | (() => undefined | ConvertedNoteToIssueEventKeySpecifier),
		fields?: ConvertedNoteToIssueEventFieldPolicy,
	},
	ConvertedToDiscussionEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConvertedToDiscussionEventKeySpecifier | (() => undefined | ConvertedToDiscussionEventKeySpecifier),
		fields?: ConvertedToDiscussionEventFieldPolicy,
	},
	CreateBranchProtectionRulePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBranchProtectionRulePayloadKeySpecifier | (() => undefined | CreateBranchProtectionRulePayloadKeySpecifier),
		fields?: CreateBranchProtectionRulePayloadFieldPolicy,
	},
	CreateCheckRunPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCheckRunPayloadKeySpecifier | (() => undefined | CreateCheckRunPayloadKeySpecifier),
		fields?: CreateCheckRunPayloadFieldPolicy,
	},
	CreateCheckSuitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCheckSuitePayloadKeySpecifier | (() => undefined | CreateCheckSuitePayloadKeySpecifier),
		fields?: CreateCheckSuitePayloadFieldPolicy,
	},
	CreateCommitOnBranchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCommitOnBranchPayloadKeySpecifier | (() => undefined | CreateCommitOnBranchPayloadKeySpecifier),
		fields?: CreateCommitOnBranchPayloadFieldPolicy,
	},
	CreateDeploymentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateDeploymentPayloadKeySpecifier | (() => undefined | CreateDeploymentPayloadKeySpecifier),
		fields?: CreateDeploymentPayloadFieldPolicy,
	},
	CreateDeploymentStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateDeploymentStatusPayloadKeySpecifier | (() => undefined | CreateDeploymentStatusPayloadKeySpecifier),
		fields?: CreateDeploymentStatusPayloadFieldPolicy,
	},
	CreateDiscussionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateDiscussionPayloadKeySpecifier | (() => undefined | CreateDiscussionPayloadKeySpecifier),
		fields?: CreateDiscussionPayloadFieldPolicy,
	},
	CreateEnterpriseOrganizationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEnterpriseOrganizationPayloadKeySpecifier | (() => undefined | CreateEnterpriseOrganizationPayloadKeySpecifier),
		fields?: CreateEnterpriseOrganizationPayloadFieldPolicy,
	},
	CreateEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEnvironmentPayloadKeySpecifier | (() => undefined | CreateEnvironmentPayloadKeySpecifier),
		fields?: CreateEnvironmentPayloadFieldPolicy,
	},
	CreateIpAllowListEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateIpAllowListEntryPayloadKeySpecifier | (() => undefined | CreateIpAllowListEntryPayloadKeySpecifier),
		fields?: CreateIpAllowListEntryPayloadFieldPolicy,
	},
	CreateIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateIssuePayloadKeySpecifier | (() => undefined | CreateIssuePayloadKeySpecifier),
		fields?: CreateIssuePayloadFieldPolicy,
	},
	CreateLabelPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateLabelPayloadKeySpecifier | (() => undefined | CreateLabelPayloadKeySpecifier),
		fields?: CreateLabelPayloadFieldPolicy,
	},
	CreateProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateProjectPayloadKeySpecifier | (() => undefined | CreateProjectPayloadKeySpecifier),
		fields?: CreateProjectPayloadFieldPolicy,
	},
	CreatePullRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePullRequestPayloadKeySpecifier | (() => undefined | CreatePullRequestPayloadKeySpecifier),
		fields?: CreatePullRequestPayloadFieldPolicy,
	},
	CreateRefPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateRefPayloadKeySpecifier | (() => undefined | CreateRefPayloadKeySpecifier),
		fields?: CreateRefPayloadFieldPolicy,
	},
	CreateRepositoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateRepositoryPayloadKeySpecifier | (() => undefined | CreateRepositoryPayloadKeySpecifier),
		fields?: CreateRepositoryPayloadFieldPolicy,
	},
	CreateSponsorshipPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSponsorshipPayloadKeySpecifier | (() => undefined | CreateSponsorshipPayloadKeySpecifier),
		fields?: CreateSponsorshipPayloadFieldPolicy,
	},
	CreateTeamDiscussionCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTeamDiscussionCommentPayloadKeySpecifier | (() => undefined | CreateTeamDiscussionCommentPayloadKeySpecifier),
		fields?: CreateTeamDiscussionCommentPayloadFieldPolicy,
	},
	CreateTeamDiscussionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTeamDiscussionPayloadKeySpecifier | (() => undefined | CreateTeamDiscussionPayloadKeySpecifier),
		fields?: CreateTeamDiscussionPayloadFieldPolicy,
	},
	CreatedCommitContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedCommitContributionKeySpecifier | (() => undefined | CreatedCommitContributionKeySpecifier),
		fields?: CreatedCommitContributionFieldPolicy,
	},
	CreatedCommitContributionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedCommitContributionConnectionKeySpecifier | (() => undefined | CreatedCommitContributionConnectionKeySpecifier),
		fields?: CreatedCommitContributionConnectionFieldPolicy,
	},
	CreatedCommitContributionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedCommitContributionEdgeKeySpecifier | (() => undefined | CreatedCommitContributionEdgeKeySpecifier),
		fields?: CreatedCommitContributionEdgeFieldPolicy,
	},
	CreatedIssueContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedIssueContributionKeySpecifier | (() => undefined | CreatedIssueContributionKeySpecifier),
		fields?: CreatedIssueContributionFieldPolicy,
	},
	CreatedIssueContributionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedIssueContributionConnectionKeySpecifier | (() => undefined | CreatedIssueContributionConnectionKeySpecifier),
		fields?: CreatedIssueContributionConnectionFieldPolicy,
	},
	CreatedIssueContributionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedIssueContributionEdgeKeySpecifier | (() => undefined | CreatedIssueContributionEdgeKeySpecifier),
		fields?: CreatedIssueContributionEdgeFieldPolicy,
	},
	CreatedPullRequestContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedPullRequestContributionKeySpecifier | (() => undefined | CreatedPullRequestContributionKeySpecifier),
		fields?: CreatedPullRequestContributionFieldPolicy,
	},
	CreatedPullRequestContributionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedPullRequestContributionConnectionKeySpecifier | (() => undefined | CreatedPullRequestContributionConnectionKeySpecifier),
		fields?: CreatedPullRequestContributionConnectionFieldPolicy,
	},
	CreatedPullRequestContributionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedPullRequestContributionEdgeKeySpecifier | (() => undefined | CreatedPullRequestContributionEdgeKeySpecifier),
		fields?: CreatedPullRequestContributionEdgeFieldPolicy,
	},
	CreatedPullRequestReviewContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedPullRequestReviewContributionKeySpecifier | (() => undefined | CreatedPullRequestReviewContributionKeySpecifier),
		fields?: CreatedPullRequestReviewContributionFieldPolicy,
	},
	CreatedPullRequestReviewContributionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedPullRequestReviewContributionConnectionKeySpecifier | (() => undefined | CreatedPullRequestReviewContributionConnectionKeySpecifier),
		fields?: CreatedPullRequestReviewContributionConnectionFieldPolicy,
	},
	CreatedPullRequestReviewContributionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedPullRequestReviewContributionEdgeKeySpecifier | (() => undefined | CreatedPullRequestReviewContributionEdgeKeySpecifier),
		fields?: CreatedPullRequestReviewContributionEdgeFieldPolicy,
	},
	CreatedRepositoryContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedRepositoryContributionKeySpecifier | (() => undefined | CreatedRepositoryContributionKeySpecifier),
		fields?: CreatedRepositoryContributionFieldPolicy,
	},
	CreatedRepositoryContributionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedRepositoryContributionConnectionKeySpecifier | (() => undefined | CreatedRepositoryContributionConnectionKeySpecifier),
		fields?: CreatedRepositoryContributionConnectionFieldPolicy,
	},
	CreatedRepositoryContributionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatedRepositoryContributionEdgeKeySpecifier | (() => undefined | CreatedRepositoryContributionEdgeKeySpecifier),
		fields?: CreatedRepositoryContributionEdgeFieldPolicy,
	},
	CrossReferencedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CrossReferencedEventKeySpecifier | (() => undefined | CrossReferencedEventKeySpecifier),
		fields?: CrossReferencedEventFieldPolicy,
	},
	DeclineTopicSuggestionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeclineTopicSuggestionPayloadKeySpecifier | (() => undefined | DeclineTopicSuggestionPayloadKeySpecifier),
		fields?: DeclineTopicSuggestionPayloadFieldPolicy,
	},
	Deletable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletableKeySpecifier | (() => undefined | DeletableKeySpecifier),
		fields?: DeletableFieldPolicy,
	},
	DeleteBranchProtectionRulePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteBranchProtectionRulePayloadKeySpecifier | (() => undefined | DeleteBranchProtectionRulePayloadKeySpecifier),
		fields?: DeleteBranchProtectionRulePayloadFieldPolicy,
	},
	DeleteDeploymentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteDeploymentPayloadKeySpecifier | (() => undefined | DeleteDeploymentPayloadKeySpecifier),
		fields?: DeleteDeploymentPayloadFieldPolicy,
	},
	DeleteDiscussionCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteDiscussionCommentPayloadKeySpecifier | (() => undefined | DeleteDiscussionCommentPayloadKeySpecifier),
		fields?: DeleteDiscussionCommentPayloadFieldPolicy,
	},
	DeleteDiscussionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteDiscussionPayloadKeySpecifier | (() => undefined | DeleteDiscussionPayloadKeySpecifier),
		fields?: DeleteDiscussionPayloadFieldPolicy,
	},
	DeleteEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteEnvironmentPayloadKeySpecifier | (() => undefined | DeleteEnvironmentPayloadKeySpecifier),
		fields?: DeleteEnvironmentPayloadFieldPolicy,
	},
	DeleteIpAllowListEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteIpAllowListEntryPayloadKeySpecifier | (() => undefined | DeleteIpAllowListEntryPayloadKeySpecifier),
		fields?: DeleteIpAllowListEntryPayloadFieldPolicy,
	},
	DeleteIssueCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteIssueCommentPayloadKeySpecifier | (() => undefined | DeleteIssueCommentPayloadKeySpecifier),
		fields?: DeleteIssueCommentPayloadFieldPolicy,
	},
	DeleteIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteIssuePayloadKeySpecifier | (() => undefined | DeleteIssuePayloadKeySpecifier),
		fields?: DeleteIssuePayloadFieldPolicy,
	},
	DeleteLabelPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteLabelPayloadKeySpecifier | (() => undefined | DeleteLabelPayloadKeySpecifier),
		fields?: DeleteLabelPayloadFieldPolicy,
	},
	DeletePackageVersionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePackageVersionPayloadKeySpecifier | (() => undefined | DeletePackageVersionPayloadKeySpecifier),
		fields?: DeletePackageVersionPayloadFieldPolicy,
	},
	DeleteProjectCardPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteProjectCardPayloadKeySpecifier | (() => undefined | DeleteProjectCardPayloadKeySpecifier),
		fields?: DeleteProjectCardPayloadFieldPolicy,
	},
	DeleteProjectColumnPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteProjectColumnPayloadKeySpecifier | (() => undefined | DeleteProjectColumnPayloadKeySpecifier),
		fields?: DeleteProjectColumnPayloadFieldPolicy,
	},
	DeleteProjectNextItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteProjectNextItemPayloadKeySpecifier | (() => undefined | DeleteProjectNextItemPayloadKeySpecifier),
		fields?: DeleteProjectNextItemPayloadFieldPolicy,
	},
	DeleteProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteProjectPayloadKeySpecifier | (() => undefined | DeleteProjectPayloadKeySpecifier),
		fields?: DeleteProjectPayloadFieldPolicy,
	},
	DeletePullRequestReviewCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePullRequestReviewCommentPayloadKeySpecifier | (() => undefined | DeletePullRequestReviewCommentPayloadKeySpecifier),
		fields?: DeletePullRequestReviewCommentPayloadFieldPolicy,
	},
	DeletePullRequestReviewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePullRequestReviewPayloadKeySpecifier | (() => undefined | DeletePullRequestReviewPayloadKeySpecifier),
		fields?: DeletePullRequestReviewPayloadFieldPolicy,
	},
	DeleteRefPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteRefPayloadKeySpecifier | (() => undefined | DeleteRefPayloadKeySpecifier),
		fields?: DeleteRefPayloadFieldPolicy,
	},
	DeleteTeamDiscussionCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteTeamDiscussionCommentPayloadKeySpecifier | (() => undefined | DeleteTeamDiscussionCommentPayloadKeySpecifier),
		fields?: DeleteTeamDiscussionCommentPayloadFieldPolicy,
	},
	DeleteTeamDiscussionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteTeamDiscussionPayloadKeySpecifier | (() => undefined | DeleteTeamDiscussionPayloadKeySpecifier),
		fields?: DeleteTeamDiscussionPayloadFieldPolicy,
	},
	DeleteVerifiableDomainPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteVerifiableDomainPayloadKeySpecifier | (() => undefined | DeleteVerifiableDomainPayloadKeySpecifier),
		fields?: DeleteVerifiableDomainPayloadFieldPolicy,
	},
	DemilestonedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DemilestonedEventKeySpecifier | (() => undefined | DemilestonedEventKeySpecifier),
		fields?: DemilestonedEventFieldPolicy,
	},
	DependencyGraphDependency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DependencyGraphDependencyKeySpecifier | (() => undefined | DependencyGraphDependencyKeySpecifier),
		fields?: DependencyGraphDependencyFieldPolicy,
	},
	DependencyGraphDependencyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DependencyGraphDependencyConnectionKeySpecifier | (() => undefined | DependencyGraphDependencyConnectionKeySpecifier),
		fields?: DependencyGraphDependencyConnectionFieldPolicy,
	},
	DependencyGraphDependencyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DependencyGraphDependencyEdgeKeySpecifier | (() => undefined | DependencyGraphDependencyEdgeKeySpecifier),
		fields?: DependencyGraphDependencyEdgeFieldPolicy,
	},
	DependencyGraphManifest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DependencyGraphManifestKeySpecifier | (() => undefined | DependencyGraphManifestKeySpecifier),
		fields?: DependencyGraphManifestFieldPolicy,
	},
	DependencyGraphManifestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DependencyGraphManifestConnectionKeySpecifier | (() => undefined | DependencyGraphManifestConnectionKeySpecifier),
		fields?: DependencyGraphManifestConnectionFieldPolicy,
	},
	DependencyGraphManifestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DependencyGraphManifestEdgeKeySpecifier | (() => undefined | DependencyGraphManifestEdgeKeySpecifier),
		fields?: DependencyGraphManifestEdgeFieldPolicy,
	},
	DeployKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeployKeyKeySpecifier | (() => undefined | DeployKeyKeySpecifier),
		fields?: DeployKeyFieldPolicy,
	},
	DeployKeyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeployKeyConnectionKeySpecifier | (() => undefined | DeployKeyConnectionKeySpecifier),
		fields?: DeployKeyConnectionFieldPolicy,
	},
	DeployKeyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeployKeyEdgeKeySpecifier | (() => undefined | DeployKeyEdgeKeySpecifier),
		fields?: DeployKeyEdgeFieldPolicy,
	},
	DeployedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeployedEventKeySpecifier | (() => undefined | DeployedEventKeySpecifier),
		fields?: DeployedEventFieldPolicy,
	},
	Deployment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentKeySpecifier | (() => undefined | DeploymentKeySpecifier),
		fields?: DeploymentFieldPolicy,
	},
	DeploymentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentConnectionKeySpecifier | (() => undefined | DeploymentConnectionKeySpecifier),
		fields?: DeploymentConnectionFieldPolicy,
	},
	DeploymentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentEdgeKeySpecifier | (() => undefined | DeploymentEdgeKeySpecifier),
		fields?: DeploymentEdgeFieldPolicy,
	},
	DeploymentEnvironmentChangedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentEnvironmentChangedEventKeySpecifier | (() => undefined | DeploymentEnvironmentChangedEventKeySpecifier),
		fields?: DeploymentEnvironmentChangedEventFieldPolicy,
	},
	DeploymentProtectionRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentProtectionRuleKeySpecifier | (() => undefined | DeploymentProtectionRuleKeySpecifier),
		fields?: DeploymentProtectionRuleFieldPolicy,
	},
	DeploymentProtectionRuleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentProtectionRuleConnectionKeySpecifier | (() => undefined | DeploymentProtectionRuleConnectionKeySpecifier),
		fields?: DeploymentProtectionRuleConnectionFieldPolicy,
	},
	DeploymentProtectionRuleEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentProtectionRuleEdgeKeySpecifier | (() => undefined | DeploymentProtectionRuleEdgeKeySpecifier),
		fields?: DeploymentProtectionRuleEdgeFieldPolicy,
	},
	DeploymentRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentRequestKeySpecifier | (() => undefined | DeploymentRequestKeySpecifier),
		fields?: DeploymentRequestFieldPolicy,
	},
	DeploymentRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentRequestConnectionKeySpecifier | (() => undefined | DeploymentRequestConnectionKeySpecifier),
		fields?: DeploymentRequestConnectionFieldPolicy,
	},
	DeploymentRequestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentRequestEdgeKeySpecifier | (() => undefined | DeploymentRequestEdgeKeySpecifier),
		fields?: DeploymentRequestEdgeFieldPolicy,
	},
	DeploymentReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentReviewKeySpecifier | (() => undefined | DeploymentReviewKeySpecifier),
		fields?: DeploymentReviewFieldPolicy,
	},
	DeploymentReviewConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentReviewConnectionKeySpecifier | (() => undefined | DeploymentReviewConnectionKeySpecifier),
		fields?: DeploymentReviewConnectionFieldPolicy,
	},
	DeploymentReviewEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentReviewEdgeKeySpecifier | (() => undefined | DeploymentReviewEdgeKeySpecifier),
		fields?: DeploymentReviewEdgeFieldPolicy,
	},
	DeploymentReviewerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentReviewerConnectionKeySpecifier | (() => undefined | DeploymentReviewerConnectionKeySpecifier),
		fields?: DeploymentReviewerConnectionFieldPolicy,
	},
	DeploymentReviewerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentReviewerEdgeKeySpecifier | (() => undefined | DeploymentReviewerEdgeKeySpecifier),
		fields?: DeploymentReviewerEdgeFieldPolicy,
	},
	DeploymentStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentStatusKeySpecifier | (() => undefined | DeploymentStatusKeySpecifier),
		fields?: DeploymentStatusFieldPolicy,
	},
	DeploymentStatusConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentStatusConnectionKeySpecifier | (() => undefined | DeploymentStatusConnectionKeySpecifier),
		fields?: DeploymentStatusConnectionFieldPolicy,
	},
	DeploymentStatusEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeploymentStatusEdgeKeySpecifier | (() => undefined | DeploymentStatusEdgeKeySpecifier),
		fields?: DeploymentStatusEdgeFieldPolicy,
	},
	DisablePullRequestAutoMergePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DisablePullRequestAutoMergePayloadKeySpecifier | (() => undefined | DisablePullRequestAutoMergePayloadKeySpecifier),
		fields?: DisablePullRequestAutoMergePayloadFieldPolicy,
	},
	DisconnectedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DisconnectedEventKeySpecifier | (() => undefined | DisconnectedEventKeySpecifier),
		fields?: DisconnectedEventFieldPolicy,
	},
	Discussion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionKeySpecifier | (() => undefined | DiscussionKeySpecifier),
		fields?: DiscussionFieldPolicy,
	},
	DiscussionCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionCategoryKeySpecifier | (() => undefined | DiscussionCategoryKeySpecifier),
		fields?: DiscussionCategoryFieldPolicy,
	},
	DiscussionCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionCategoryConnectionKeySpecifier | (() => undefined | DiscussionCategoryConnectionKeySpecifier),
		fields?: DiscussionCategoryConnectionFieldPolicy,
	},
	DiscussionCategoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionCategoryEdgeKeySpecifier | (() => undefined | DiscussionCategoryEdgeKeySpecifier),
		fields?: DiscussionCategoryEdgeFieldPolicy,
	},
	DiscussionComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionCommentKeySpecifier | (() => undefined | DiscussionCommentKeySpecifier),
		fields?: DiscussionCommentFieldPolicy,
	},
	DiscussionCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionCommentConnectionKeySpecifier | (() => undefined | DiscussionCommentConnectionKeySpecifier),
		fields?: DiscussionCommentConnectionFieldPolicy,
	},
	DiscussionCommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionCommentEdgeKeySpecifier | (() => undefined | DiscussionCommentEdgeKeySpecifier),
		fields?: DiscussionCommentEdgeFieldPolicy,
	},
	DiscussionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionConnectionKeySpecifier | (() => undefined | DiscussionConnectionKeySpecifier),
		fields?: DiscussionConnectionFieldPolicy,
	},
	DiscussionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionEdgeKeySpecifier | (() => undefined | DiscussionEdgeKeySpecifier),
		fields?: DiscussionEdgeFieldPolicy,
	},
	DismissPullRequestReviewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DismissPullRequestReviewPayloadKeySpecifier | (() => undefined | DismissPullRequestReviewPayloadKeySpecifier),
		fields?: DismissPullRequestReviewPayloadFieldPolicy,
	},
	DismissRepositoryVulnerabilityAlertPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DismissRepositoryVulnerabilityAlertPayloadKeySpecifier | (() => undefined | DismissRepositoryVulnerabilityAlertPayloadKeySpecifier),
		fields?: DismissRepositoryVulnerabilityAlertPayloadFieldPolicy,
	},
	EnablePullRequestAutoMergePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnablePullRequestAutoMergePayloadKeySpecifier | (() => undefined | EnablePullRequestAutoMergePayloadKeySpecifier),
		fields?: EnablePullRequestAutoMergePayloadFieldPolicy,
	},
	Enterprise?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseKeySpecifier | (() => undefined | EnterpriseKeySpecifier),
		fields?: EnterpriseFieldPolicy,
	},
	EnterpriseAdministratorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseAdministratorConnectionKeySpecifier | (() => undefined | EnterpriseAdministratorConnectionKeySpecifier),
		fields?: EnterpriseAdministratorConnectionFieldPolicy,
	},
	EnterpriseAdministratorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseAdministratorEdgeKeySpecifier | (() => undefined | EnterpriseAdministratorEdgeKeySpecifier),
		fields?: EnterpriseAdministratorEdgeFieldPolicy,
	},
	EnterpriseAdministratorInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseAdministratorInvitationKeySpecifier | (() => undefined | EnterpriseAdministratorInvitationKeySpecifier),
		fields?: EnterpriseAdministratorInvitationFieldPolicy,
	},
	EnterpriseAdministratorInvitationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseAdministratorInvitationConnectionKeySpecifier | (() => undefined | EnterpriseAdministratorInvitationConnectionKeySpecifier),
		fields?: EnterpriseAdministratorInvitationConnectionFieldPolicy,
	},
	EnterpriseAdministratorInvitationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseAdministratorInvitationEdgeKeySpecifier | (() => undefined | EnterpriseAdministratorInvitationEdgeKeySpecifier),
		fields?: EnterpriseAdministratorInvitationEdgeFieldPolicy,
	},
	EnterpriseAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseAuditEntryDataKeySpecifier | (() => undefined | EnterpriseAuditEntryDataKeySpecifier),
		fields?: EnterpriseAuditEntryDataFieldPolicy,
	},
	EnterpriseBillingInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseBillingInfoKeySpecifier | (() => undefined | EnterpriseBillingInfoKeySpecifier),
		fields?: EnterpriseBillingInfoFieldPolicy,
	},
	EnterpriseIdentityProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseIdentityProviderKeySpecifier | (() => undefined | EnterpriseIdentityProviderKeySpecifier),
		fields?: EnterpriseIdentityProviderFieldPolicy,
	},
	EnterpriseMemberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseMemberConnectionKeySpecifier | (() => undefined | EnterpriseMemberConnectionKeySpecifier),
		fields?: EnterpriseMemberConnectionFieldPolicy,
	},
	EnterpriseMemberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseMemberEdgeKeySpecifier | (() => undefined | EnterpriseMemberEdgeKeySpecifier),
		fields?: EnterpriseMemberEdgeFieldPolicy,
	},
	EnterpriseOrganizationMembershipConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseOrganizationMembershipConnectionKeySpecifier | (() => undefined | EnterpriseOrganizationMembershipConnectionKeySpecifier),
		fields?: EnterpriseOrganizationMembershipConnectionFieldPolicy,
	},
	EnterpriseOrganizationMembershipEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseOrganizationMembershipEdgeKeySpecifier | (() => undefined | EnterpriseOrganizationMembershipEdgeKeySpecifier),
		fields?: EnterpriseOrganizationMembershipEdgeFieldPolicy,
	},
	EnterpriseOutsideCollaboratorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseOutsideCollaboratorConnectionKeySpecifier | (() => undefined | EnterpriseOutsideCollaboratorConnectionKeySpecifier),
		fields?: EnterpriseOutsideCollaboratorConnectionFieldPolicy,
	},
	EnterpriseOutsideCollaboratorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseOutsideCollaboratorEdgeKeySpecifier | (() => undefined | EnterpriseOutsideCollaboratorEdgeKeySpecifier),
		fields?: EnterpriseOutsideCollaboratorEdgeFieldPolicy,
	},
	EnterpriseOwnerInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseOwnerInfoKeySpecifier | (() => undefined | EnterpriseOwnerInfoKeySpecifier),
		fields?: EnterpriseOwnerInfoFieldPolicy,
	},
	EnterprisePendingCollaboratorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterprisePendingCollaboratorConnectionKeySpecifier | (() => undefined | EnterprisePendingCollaboratorConnectionKeySpecifier),
		fields?: EnterprisePendingCollaboratorConnectionFieldPolicy,
	},
	EnterprisePendingCollaboratorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterprisePendingCollaboratorEdgeKeySpecifier | (() => undefined | EnterprisePendingCollaboratorEdgeKeySpecifier),
		fields?: EnterprisePendingCollaboratorEdgeFieldPolicy,
	},
	EnterprisePendingMemberInvitationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterprisePendingMemberInvitationConnectionKeySpecifier | (() => undefined | EnterprisePendingMemberInvitationConnectionKeySpecifier),
		fields?: EnterprisePendingMemberInvitationConnectionFieldPolicy,
	},
	EnterprisePendingMemberInvitationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterprisePendingMemberInvitationEdgeKeySpecifier | (() => undefined | EnterprisePendingMemberInvitationEdgeKeySpecifier),
		fields?: EnterprisePendingMemberInvitationEdgeFieldPolicy,
	},
	EnterpriseRepositoryInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseRepositoryInfoKeySpecifier | (() => undefined | EnterpriseRepositoryInfoKeySpecifier),
		fields?: EnterpriseRepositoryInfoFieldPolicy,
	},
	EnterpriseRepositoryInfoConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseRepositoryInfoConnectionKeySpecifier | (() => undefined | EnterpriseRepositoryInfoConnectionKeySpecifier),
		fields?: EnterpriseRepositoryInfoConnectionFieldPolicy,
	},
	EnterpriseRepositoryInfoEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseRepositoryInfoEdgeKeySpecifier | (() => undefined | EnterpriseRepositoryInfoEdgeKeySpecifier),
		fields?: EnterpriseRepositoryInfoEdgeFieldPolicy,
	},
	EnterpriseServerInstallation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerInstallationKeySpecifier | (() => undefined | EnterpriseServerInstallationKeySpecifier),
		fields?: EnterpriseServerInstallationFieldPolicy,
	},
	EnterpriseServerInstallationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerInstallationConnectionKeySpecifier | (() => undefined | EnterpriseServerInstallationConnectionKeySpecifier),
		fields?: EnterpriseServerInstallationConnectionFieldPolicy,
	},
	EnterpriseServerInstallationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerInstallationEdgeKeySpecifier | (() => undefined | EnterpriseServerInstallationEdgeKeySpecifier),
		fields?: EnterpriseServerInstallationEdgeFieldPolicy,
	},
	EnterpriseServerUserAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountKeySpecifier | (() => undefined | EnterpriseServerUserAccountKeySpecifier),
		fields?: EnterpriseServerUserAccountFieldPolicy,
	},
	EnterpriseServerUserAccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountConnectionKeySpecifier | (() => undefined | EnterpriseServerUserAccountConnectionKeySpecifier),
		fields?: EnterpriseServerUserAccountConnectionFieldPolicy,
	},
	EnterpriseServerUserAccountEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountEdgeKeySpecifier | (() => undefined | EnterpriseServerUserAccountEdgeKeySpecifier),
		fields?: EnterpriseServerUserAccountEdgeFieldPolicy,
	},
	EnterpriseServerUserAccountEmail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountEmailKeySpecifier | (() => undefined | EnterpriseServerUserAccountEmailKeySpecifier),
		fields?: EnterpriseServerUserAccountEmailFieldPolicy,
	},
	EnterpriseServerUserAccountEmailConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountEmailConnectionKeySpecifier | (() => undefined | EnterpriseServerUserAccountEmailConnectionKeySpecifier),
		fields?: EnterpriseServerUserAccountEmailConnectionFieldPolicy,
	},
	EnterpriseServerUserAccountEmailEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountEmailEdgeKeySpecifier | (() => undefined | EnterpriseServerUserAccountEmailEdgeKeySpecifier),
		fields?: EnterpriseServerUserAccountEmailEdgeFieldPolicy,
	},
	EnterpriseServerUserAccountsUpload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountsUploadKeySpecifier | (() => undefined | EnterpriseServerUserAccountsUploadKeySpecifier),
		fields?: EnterpriseServerUserAccountsUploadFieldPolicy,
	},
	EnterpriseServerUserAccountsUploadConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountsUploadConnectionKeySpecifier | (() => undefined | EnterpriseServerUserAccountsUploadConnectionKeySpecifier),
		fields?: EnterpriseServerUserAccountsUploadConnectionFieldPolicy,
	},
	EnterpriseServerUserAccountsUploadEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseServerUserAccountsUploadEdgeKeySpecifier | (() => undefined | EnterpriseServerUserAccountsUploadEdgeKeySpecifier),
		fields?: EnterpriseServerUserAccountsUploadEdgeFieldPolicy,
	},
	EnterpriseUserAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseUserAccountKeySpecifier | (() => undefined | EnterpriseUserAccountKeySpecifier),
		fields?: EnterpriseUserAccountFieldPolicy,
	},
	EnterpriseUserAccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseUserAccountConnectionKeySpecifier | (() => undefined | EnterpriseUserAccountConnectionKeySpecifier),
		fields?: EnterpriseUserAccountConnectionFieldPolicy,
	},
	EnterpriseUserAccountEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnterpriseUserAccountEdgeKeySpecifier | (() => undefined | EnterpriseUserAccountEdgeKeySpecifier),
		fields?: EnterpriseUserAccountEdgeFieldPolicy,
	},
	Environment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnvironmentKeySpecifier | (() => undefined | EnvironmentKeySpecifier),
		fields?: EnvironmentFieldPolicy,
	},
	EnvironmentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnvironmentConnectionKeySpecifier | (() => undefined | EnvironmentConnectionKeySpecifier),
		fields?: EnvironmentConnectionFieldPolicy,
	},
	EnvironmentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnvironmentEdgeKeySpecifier | (() => undefined | EnvironmentEdgeKeySpecifier),
		fields?: EnvironmentEdgeFieldPolicy,
	},
	ExternalIdentity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalIdentityKeySpecifier | (() => undefined | ExternalIdentityKeySpecifier),
		fields?: ExternalIdentityFieldPolicy,
	},
	ExternalIdentityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalIdentityConnectionKeySpecifier | (() => undefined | ExternalIdentityConnectionKeySpecifier),
		fields?: ExternalIdentityConnectionFieldPolicy,
	},
	ExternalIdentityEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalIdentityEdgeKeySpecifier | (() => undefined | ExternalIdentityEdgeKeySpecifier),
		fields?: ExternalIdentityEdgeFieldPolicy,
	},
	ExternalIdentitySamlAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalIdentitySamlAttributesKeySpecifier | (() => undefined | ExternalIdentitySamlAttributesKeySpecifier),
		fields?: ExternalIdentitySamlAttributesFieldPolicy,
	},
	ExternalIdentityScimAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExternalIdentityScimAttributesKeySpecifier | (() => undefined | ExternalIdentityScimAttributesKeySpecifier),
		fields?: ExternalIdentityScimAttributesFieldPolicy,
	},
	FollowUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowUserPayloadKeySpecifier | (() => undefined | FollowUserPayloadKeySpecifier),
		fields?: FollowUserPayloadFieldPolicy,
	},
	FollowerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowerConnectionKeySpecifier | (() => undefined | FollowerConnectionKeySpecifier),
		fields?: FollowerConnectionFieldPolicy,
	},
	FollowingConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowingConnectionKeySpecifier | (() => undefined | FollowingConnectionKeySpecifier),
		fields?: FollowingConnectionFieldPolicy,
	},
	FundingLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FundingLinkKeySpecifier | (() => undefined | FundingLinkKeySpecifier),
		fields?: FundingLinkFieldPolicy,
	},
	GenericHovercardContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericHovercardContextKeySpecifier | (() => undefined | GenericHovercardContextKeySpecifier),
		fields?: GenericHovercardContextFieldPolicy,
	},
	Gist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GistKeySpecifier | (() => undefined | GistKeySpecifier),
		fields?: GistFieldPolicy,
	},
	GistComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GistCommentKeySpecifier | (() => undefined | GistCommentKeySpecifier),
		fields?: GistCommentFieldPolicy,
	},
	GistCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GistCommentConnectionKeySpecifier | (() => undefined | GistCommentConnectionKeySpecifier),
		fields?: GistCommentConnectionFieldPolicy,
	},
	GistCommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GistCommentEdgeKeySpecifier | (() => undefined | GistCommentEdgeKeySpecifier),
		fields?: GistCommentEdgeFieldPolicy,
	},
	GistConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GistConnectionKeySpecifier | (() => undefined | GistConnectionKeySpecifier),
		fields?: GistConnectionFieldPolicy,
	},
	GistEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GistEdgeKeySpecifier | (() => undefined | GistEdgeKeySpecifier),
		fields?: GistEdgeFieldPolicy,
	},
	GistFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GistFileKeySpecifier | (() => undefined | GistFileKeySpecifier),
		fields?: GistFileFieldPolicy,
	},
	GitActor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitActorKeySpecifier | (() => undefined | GitActorKeySpecifier),
		fields?: GitActorFieldPolicy,
	},
	GitActorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitActorConnectionKeySpecifier | (() => undefined | GitActorConnectionKeySpecifier),
		fields?: GitActorConnectionFieldPolicy,
	},
	GitActorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitActorEdgeKeySpecifier | (() => undefined | GitActorEdgeKeySpecifier),
		fields?: GitActorEdgeFieldPolicy,
	},
	GitHubMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitHubMetadataKeySpecifier | (() => undefined | GitHubMetadataKeySpecifier),
		fields?: GitHubMetadataFieldPolicy,
	},
	GitObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitObjectKeySpecifier | (() => undefined | GitObjectKeySpecifier),
		fields?: GitObjectFieldPolicy,
	},
	GitSignature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GitSignatureKeySpecifier | (() => undefined | GitSignatureKeySpecifier),
		fields?: GitSignatureFieldPolicy,
	},
	GpgSignature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GpgSignatureKeySpecifier | (() => undefined | GpgSignatureKeySpecifier),
		fields?: GpgSignatureFieldPolicy,
	},
	HeadRefDeletedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HeadRefDeletedEventKeySpecifier | (() => undefined | HeadRefDeletedEventKeySpecifier),
		fields?: HeadRefDeletedEventFieldPolicy,
	},
	HeadRefForcePushedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HeadRefForcePushedEventKeySpecifier | (() => undefined | HeadRefForcePushedEventKeySpecifier),
		fields?: HeadRefForcePushedEventFieldPolicy,
	},
	HeadRefRestoredEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HeadRefRestoredEventKeySpecifier | (() => undefined | HeadRefRestoredEventKeySpecifier),
		fields?: HeadRefRestoredEventFieldPolicy,
	},
	Hovercard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HovercardKeySpecifier | (() => undefined | HovercardKeySpecifier),
		fields?: HovercardFieldPolicy,
	},
	HovercardContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HovercardContextKeySpecifier | (() => undefined | HovercardContextKeySpecifier),
		fields?: HovercardContextFieldPolicy,
	},
	ImportProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImportProjectPayloadKeySpecifier | (() => undefined | ImportProjectPayloadKeySpecifier),
		fields?: ImportProjectPayloadFieldPolicy,
	},
	InviteEnterpriseAdminPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InviteEnterpriseAdminPayloadKeySpecifier | (() => undefined | InviteEnterpriseAdminPayloadKeySpecifier),
		fields?: InviteEnterpriseAdminPayloadFieldPolicy,
	},
	IpAllowListEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IpAllowListEntryKeySpecifier | (() => undefined | IpAllowListEntryKeySpecifier),
		fields?: IpAllowListEntryFieldPolicy,
	},
	IpAllowListEntryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IpAllowListEntryConnectionKeySpecifier | (() => undefined | IpAllowListEntryConnectionKeySpecifier),
		fields?: IpAllowListEntryConnectionFieldPolicy,
	},
	IpAllowListEntryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IpAllowListEntryEdgeKeySpecifier | (() => undefined | IpAllowListEntryEdgeKeySpecifier),
		fields?: IpAllowListEntryEdgeFieldPolicy,
	},
	Issue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueKeySpecifier | (() => undefined | IssueKeySpecifier),
		fields?: IssueFieldPolicy,
	},
	IssueComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueCommentKeySpecifier | (() => undefined | IssueCommentKeySpecifier),
		fields?: IssueCommentFieldPolicy,
	},
	IssueCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueCommentConnectionKeySpecifier | (() => undefined | IssueCommentConnectionKeySpecifier),
		fields?: IssueCommentConnectionFieldPolicy,
	},
	IssueCommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueCommentEdgeKeySpecifier | (() => undefined | IssueCommentEdgeKeySpecifier),
		fields?: IssueCommentEdgeFieldPolicy,
	},
	IssueConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueConnectionKeySpecifier | (() => undefined | IssueConnectionKeySpecifier),
		fields?: IssueConnectionFieldPolicy,
	},
	IssueContributionsByRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueContributionsByRepositoryKeySpecifier | (() => undefined | IssueContributionsByRepositoryKeySpecifier),
		fields?: IssueContributionsByRepositoryFieldPolicy,
	},
	IssueEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueEdgeKeySpecifier | (() => undefined | IssueEdgeKeySpecifier),
		fields?: IssueEdgeFieldPolicy,
	},
	IssueTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueTemplateKeySpecifier | (() => undefined | IssueTemplateKeySpecifier),
		fields?: IssueTemplateFieldPolicy,
	},
	IssueTimelineConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueTimelineConnectionKeySpecifier | (() => undefined | IssueTimelineConnectionKeySpecifier),
		fields?: IssueTimelineConnectionFieldPolicy,
	},
	IssueTimelineItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueTimelineItemEdgeKeySpecifier | (() => undefined | IssueTimelineItemEdgeKeySpecifier),
		fields?: IssueTimelineItemEdgeFieldPolicy,
	},
	IssueTimelineItemsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueTimelineItemsConnectionKeySpecifier | (() => undefined | IssueTimelineItemsConnectionKeySpecifier),
		fields?: IssueTimelineItemsConnectionFieldPolicy,
	},
	IssueTimelineItemsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssueTimelineItemsEdgeKeySpecifier | (() => undefined | IssueTimelineItemsEdgeKeySpecifier),
		fields?: IssueTimelineItemsEdgeFieldPolicy,
	},
	JoinedGitHubContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JoinedGitHubContributionKeySpecifier | (() => undefined | JoinedGitHubContributionKeySpecifier),
		fields?: JoinedGitHubContributionFieldPolicy,
	},
	Label?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabelKeySpecifier | (() => undefined | LabelKeySpecifier),
		fields?: LabelFieldPolicy,
	},
	LabelConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabelConnectionKeySpecifier | (() => undefined | LabelConnectionKeySpecifier),
		fields?: LabelConnectionFieldPolicy,
	},
	LabelEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabelEdgeKeySpecifier | (() => undefined | LabelEdgeKeySpecifier),
		fields?: LabelEdgeFieldPolicy,
	},
	Labelable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabelableKeySpecifier | (() => undefined | LabelableKeySpecifier),
		fields?: LabelableFieldPolicy,
	},
	LabeledEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LabeledEventKeySpecifier | (() => undefined | LabeledEventKeySpecifier),
		fields?: LabeledEventFieldPolicy,
	},
	Language?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageKeySpecifier | (() => undefined | LanguageKeySpecifier),
		fields?: LanguageFieldPolicy,
	},
	LanguageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageConnectionKeySpecifier | (() => undefined | LanguageConnectionKeySpecifier),
		fields?: LanguageConnectionFieldPolicy,
	},
	LanguageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageEdgeKeySpecifier | (() => undefined | LanguageEdgeKeySpecifier),
		fields?: LanguageEdgeFieldPolicy,
	},
	License?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LicenseKeySpecifier | (() => undefined | LicenseKeySpecifier),
		fields?: LicenseFieldPolicy,
	},
	LicenseRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LicenseRuleKeySpecifier | (() => undefined | LicenseRuleKeySpecifier),
		fields?: LicenseRuleFieldPolicy,
	},
	LinkRepositoryToProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkRepositoryToProjectPayloadKeySpecifier | (() => undefined | LinkRepositoryToProjectPayloadKeySpecifier),
		fields?: LinkRepositoryToProjectPayloadFieldPolicy,
	},
	LockLockablePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockLockablePayloadKeySpecifier | (() => undefined | LockLockablePayloadKeySpecifier),
		fields?: LockLockablePayloadFieldPolicy,
	},
	Lockable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockableKeySpecifier | (() => undefined | LockableKeySpecifier),
		fields?: LockableFieldPolicy,
	},
	LockedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockedEventKeySpecifier | (() => undefined | LockedEventKeySpecifier),
		fields?: LockedEventFieldPolicy,
	},
	Mannequin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MannequinKeySpecifier | (() => undefined | MannequinKeySpecifier),
		fields?: MannequinFieldPolicy,
	},
	MarkDiscussionCommentAsAnswerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarkDiscussionCommentAsAnswerPayloadKeySpecifier | (() => undefined | MarkDiscussionCommentAsAnswerPayloadKeySpecifier),
		fields?: MarkDiscussionCommentAsAnswerPayloadFieldPolicy,
	},
	MarkFileAsViewedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarkFileAsViewedPayloadKeySpecifier | (() => undefined | MarkFileAsViewedPayloadKeySpecifier),
		fields?: MarkFileAsViewedPayloadFieldPolicy,
	},
	MarkPullRequestReadyForReviewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarkPullRequestReadyForReviewPayloadKeySpecifier | (() => undefined | MarkPullRequestReadyForReviewPayloadKeySpecifier),
		fields?: MarkPullRequestReadyForReviewPayloadFieldPolicy,
	},
	MarkedAsDuplicateEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarkedAsDuplicateEventKeySpecifier | (() => undefined | MarkedAsDuplicateEventKeySpecifier),
		fields?: MarkedAsDuplicateEventFieldPolicy,
	},
	MarketplaceCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketplaceCategoryKeySpecifier | (() => undefined | MarketplaceCategoryKeySpecifier),
		fields?: MarketplaceCategoryFieldPolicy,
	},
	MarketplaceListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketplaceListingKeySpecifier | (() => undefined | MarketplaceListingKeySpecifier),
		fields?: MarketplaceListingFieldPolicy,
	},
	MarketplaceListingConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketplaceListingConnectionKeySpecifier | (() => undefined | MarketplaceListingConnectionKeySpecifier),
		fields?: MarketplaceListingConnectionFieldPolicy,
	},
	MarketplaceListingEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketplaceListingEdgeKeySpecifier | (() => undefined | MarketplaceListingEdgeKeySpecifier),
		fields?: MarketplaceListingEdgeFieldPolicy,
	},
	MemberStatusable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberStatusableKeySpecifier | (() => undefined | MemberStatusableKeySpecifier),
		fields?: MemberStatusableFieldPolicy,
	},
	MembersCanDeleteReposClearAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembersCanDeleteReposClearAuditEntryKeySpecifier | (() => undefined | MembersCanDeleteReposClearAuditEntryKeySpecifier),
		fields?: MembersCanDeleteReposClearAuditEntryFieldPolicy,
	},
	MembersCanDeleteReposDisableAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembersCanDeleteReposDisableAuditEntryKeySpecifier | (() => undefined | MembersCanDeleteReposDisableAuditEntryKeySpecifier),
		fields?: MembersCanDeleteReposDisableAuditEntryFieldPolicy,
	},
	MembersCanDeleteReposEnableAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembersCanDeleteReposEnableAuditEntryKeySpecifier | (() => undefined | MembersCanDeleteReposEnableAuditEntryKeySpecifier),
		fields?: MembersCanDeleteReposEnableAuditEntryFieldPolicy,
	},
	MentionedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MentionedEventKeySpecifier | (() => undefined | MentionedEventKeySpecifier),
		fields?: MentionedEventFieldPolicy,
	},
	MergeBranchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MergeBranchPayloadKeySpecifier | (() => undefined | MergeBranchPayloadKeySpecifier),
		fields?: MergeBranchPayloadFieldPolicy,
	},
	MergePullRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MergePullRequestPayloadKeySpecifier | (() => undefined | MergePullRequestPayloadKeySpecifier),
		fields?: MergePullRequestPayloadFieldPolicy,
	},
	MergedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MergedEventKeySpecifier | (() => undefined | MergedEventKeySpecifier),
		fields?: MergedEventFieldPolicy,
	},
	Milestone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MilestoneKeySpecifier | (() => undefined | MilestoneKeySpecifier),
		fields?: MilestoneFieldPolicy,
	},
	MilestoneConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MilestoneConnectionKeySpecifier | (() => undefined | MilestoneConnectionKeySpecifier),
		fields?: MilestoneConnectionFieldPolicy,
	},
	MilestoneEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MilestoneEdgeKeySpecifier | (() => undefined | MilestoneEdgeKeySpecifier),
		fields?: MilestoneEdgeFieldPolicy,
	},
	MilestonedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MilestonedEventKeySpecifier | (() => undefined | MilestonedEventKeySpecifier),
		fields?: MilestonedEventFieldPolicy,
	},
	Minimizable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MinimizableKeySpecifier | (() => undefined | MinimizableKeySpecifier),
		fields?: MinimizableFieldPolicy,
	},
	MinimizeCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MinimizeCommentPayloadKeySpecifier | (() => undefined | MinimizeCommentPayloadKeySpecifier),
		fields?: MinimizeCommentPayloadFieldPolicy,
	},
	MoveProjectCardPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoveProjectCardPayloadKeySpecifier | (() => undefined | MoveProjectCardPayloadKeySpecifier),
		fields?: MoveProjectCardPayloadFieldPolicy,
	},
	MoveProjectColumnPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoveProjectColumnPayloadKeySpecifier | (() => undefined | MoveProjectColumnPayloadKeySpecifier),
		fields?: MoveProjectColumnPayloadFieldPolicy,
	},
	MovedColumnsInProjectEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovedColumnsInProjectEventKeySpecifier | (() => undefined | MovedColumnsInProjectEventKeySpecifier),
		fields?: MovedColumnsInProjectEventFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	OIDCProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OIDCProviderKeySpecifier | (() => undefined | OIDCProviderKeySpecifier),
		fields?: OIDCProviderFieldPolicy,
	},
	OauthApplicationAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OauthApplicationAuditEntryDataKeySpecifier | (() => undefined | OauthApplicationAuditEntryDataKeySpecifier),
		fields?: OauthApplicationAuditEntryDataFieldPolicy,
	},
	OauthApplicationCreateAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OauthApplicationCreateAuditEntryKeySpecifier | (() => undefined | OauthApplicationCreateAuditEntryKeySpecifier),
		fields?: OauthApplicationCreateAuditEntryFieldPolicy,
	},
	OrgAddBillingManagerAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgAddBillingManagerAuditEntryKeySpecifier | (() => undefined | OrgAddBillingManagerAuditEntryKeySpecifier),
		fields?: OrgAddBillingManagerAuditEntryFieldPolicy,
	},
	OrgAddMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgAddMemberAuditEntryKeySpecifier | (() => undefined | OrgAddMemberAuditEntryKeySpecifier),
		fields?: OrgAddMemberAuditEntryFieldPolicy,
	},
	OrgBlockUserAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgBlockUserAuditEntryKeySpecifier | (() => undefined | OrgBlockUserAuditEntryKeySpecifier),
		fields?: OrgBlockUserAuditEntryFieldPolicy,
	},
	OrgConfigDisableCollaboratorsOnlyAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier | (() => undefined | OrgConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier),
		fields?: OrgConfigDisableCollaboratorsOnlyAuditEntryFieldPolicy,
	},
	OrgConfigEnableCollaboratorsOnlyAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier | (() => undefined | OrgConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier),
		fields?: OrgConfigEnableCollaboratorsOnlyAuditEntryFieldPolicy,
	},
	OrgCreateAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgCreateAuditEntryKeySpecifier | (() => undefined | OrgCreateAuditEntryKeySpecifier),
		fields?: OrgCreateAuditEntryFieldPolicy,
	},
	OrgDisableOauthAppRestrictionsAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgDisableOauthAppRestrictionsAuditEntryKeySpecifier | (() => undefined | OrgDisableOauthAppRestrictionsAuditEntryKeySpecifier),
		fields?: OrgDisableOauthAppRestrictionsAuditEntryFieldPolicy,
	},
	OrgDisableSamlAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgDisableSamlAuditEntryKeySpecifier | (() => undefined | OrgDisableSamlAuditEntryKeySpecifier),
		fields?: OrgDisableSamlAuditEntryFieldPolicy,
	},
	OrgDisableTwoFactorRequirementAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgDisableTwoFactorRequirementAuditEntryKeySpecifier | (() => undefined | OrgDisableTwoFactorRequirementAuditEntryKeySpecifier),
		fields?: OrgDisableTwoFactorRequirementAuditEntryFieldPolicy,
	},
	OrgEnableOauthAppRestrictionsAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgEnableOauthAppRestrictionsAuditEntryKeySpecifier | (() => undefined | OrgEnableOauthAppRestrictionsAuditEntryKeySpecifier),
		fields?: OrgEnableOauthAppRestrictionsAuditEntryFieldPolicy,
	},
	OrgEnableSamlAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgEnableSamlAuditEntryKeySpecifier | (() => undefined | OrgEnableSamlAuditEntryKeySpecifier),
		fields?: OrgEnableSamlAuditEntryFieldPolicy,
	},
	OrgEnableTwoFactorRequirementAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgEnableTwoFactorRequirementAuditEntryKeySpecifier | (() => undefined | OrgEnableTwoFactorRequirementAuditEntryKeySpecifier),
		fields?: OrgEnableTwoFactorRequirementAuditEntryFieldPolicy,
	},
	OrgInviteMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgInviteMemberAuditEntryKeySpecifier | (() => undefined | OrgInviteMemberAuditEntryKeySpecifier),
		fields?: OrgInviteMemberAuditEntryFieldPolicy,
	},
	OrgInviteToBusinessAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgInviteToBusinessAuditEntryKeySpecifier | (() => undefined | OrgInviteToBusinessAuditEntryKeySpecifier),
		fields?: OrgInviteToBusinessAuditEntryFieldPolicy,
	},
	OrgOauthAppAccessApprovedAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgOauthAppAccessApprovedAuditEntryKeySpecifier | (() => undefined | OrgOauthAppAccessApprovedAuditEntryKeySpecifier),
		fields?: OrgOauthAppAccessApprovedAuditEntryFieldPolicy,
	},
	OrgOauthAppAccessDeniedAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgOauthAppAccessDeniedAuditEntryKeySpecifier | (() => undefined | OrgOauthAppAccessDeniedAuditEntryKeySpecifier),
		fields?: OrgOauthAppAccessDeniedAuditEntryFieldPolicy,
	},
	OrgOauthAppAccessRequestedAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgOauthAppAccessRequestedAuditEntryKeySpecifier | (() => undefined | OrgOauthAppAccessRequestedAuditEntryKeySpecifier),
		fields?: OrgOauthAppAccessRequestedAuditEntryFieldPolicy,
	},
	OrgRemoveBillingManagerAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgRemoveBillingManagerAuditEntryKeySpecifier | (() => undefined | OrgRemoveBillingManagerAuditEntryKeySpecifier),
		fields?: OrgRemoveBillingManagerAuditEntryFieldPolicy,
	},
	OrgRemoveMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgRemoveMemberAuditEntryKeySpecifier | (() => undefined | OrgRemoveMemberAuditEntryKeySpecifier),
		fields?: OrgRemoveMemberAuditEntryFieldPolicy,
	},
	OrgRemoveOutsideCollaboratorAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgRemoveOutsideCollaboratorAuditEntryKeySpecifier | (() => undefined | OrgRemoveOutsideCollaboratorAuditEntryKeySpecifier),
		fields?: OrgRemoveOutsideCollaboratorAuditEntryFieldPolicy,
	},
	OrgRestoreMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgRestoreMemberAuditEntryKeySpecifier | (() => undefined | OrgRestoreMemberAuditEntryKeySpecifier),
		fields?: OrgRestoreMemberAuditEntryFieldPolicy,
	},
	OrgRestoreMemberMembershipOrganizationAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgRestoreMemberMembershipOrganizationAuditEntryDataKeySpecifier | (() => undefined | OrgRestoreMemberMembershipOrganizationAuditEntryDataKeySpecifier),
		fields?: OrgRestoreMemberMembershipOrganizationAuditEntryDataFieldPolicy,
	},
	OrgRestoreMemberMembershipRepositoryAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgRestoreMemberMembershipRepositoryAuditEntryDataKeySpecifier | (() => undefined | OrgRestoreMemberMembershipRepositoryAuditEntryDataKeySpecifier),
		fields?: OrgRestoreMemberMembershipRepositoryAuditEntryDataFieldPolicy,
	},
	OrgRestoreMemberMembershipTeamAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgRestoreMemberMembershipTeamAuditEntryDataKeySpecifier | (() => undefined | OrgRestoreMemberMembershipTeamAuditEntryDataKeySpecifier),
		fields?: OrgRestoreMemberMembershipTeamAuditEntryDataFieldPolicy,
	},
	OrgUnblockUserAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgUnblockUserAuditEntryKeySpecifier | (() => undefined | OrgUnblockUserAuditEntryKeySpecifier),
		fields?: OrgUnblockUserAuditEntryFieldPolicy,
	},
	OrgUpdateDefaultRepositoryPermissionAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgUpdateDefaultRepositoryPermissionAuditEntryKeySpecifier | (() => undefined | OrgUpdateDefaultRepositoryPermissionAuditEntryKeySpecifier),
		fields?: OrgUpdateDefaultRepositoryPermissionAuditEntryFieldPolicy,
	},
	OrgUpdateMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgUpdateMemberAuditEntryKeySpecifier | (() => undefined | OrgUpdateMemberAuditEntryKeySpecifier),
		fields?: OrgUpdateMemberAuditEntryFieldPolicy,
	},
	OrgUpdateMemberRepositoryCreationPermissionAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgUpdateMemberRepositoryCreationPermissionAuditEntryKeySpecifier | (() => undefined | OrgUpdateMemberRepositoryCreationPermissionAuditEntryKeySpecifier),
		fields?: OrgUpdateMemberRepositoryCreationPermissionAuditEntryFieldPolicy,
	},
	OrgUpdateMemberRepositoryInvitationPermissionAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrgUpdateMemberRepositoryInvitationPermissionAuditEntryKeySpecifier | (() => undefined | OrgUpdateMemberRepositoryInvitationPermissionAuditEntryKeySpecifier),
		fields?: OrgUpdateMemberRepositoryInvitationPermissionAuditEntryFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	OrganizationAuditEntryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationAuditEntryConnectionKeySpecifier | (() => undefined | OrganizationAuditEntryConnectionKeySpecifier),
		fields?: OrganizationAuditEntryConnectionFieldPolicy,
	},
	OrganizationAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationAuditEntryDataKeySpecifier | (() => undefined | OrganizationAuditEntryDataKeySpecifier),
		fields?: OrganizationAuditEntryDataFieldPolicy,
	},
	OrganizationAuditEntryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationAuditEntryEdgeKeySpecifier | (() => undefined | OrganizationAuditEntryEdgeKeySpecifier),
		fields?: OrganizationAuditEntryEdgeFieldPolicy,
	},
	OrganizationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationConnectionKeySpecifier | (() => undefined | OrganizationConnectionKeySpecifier),
		fields?: OrganizationConnectionFieldPolicy,
	},
	OrganizationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationEdgeKeySpecifier | (() => undefined | OrganizationEdgeKeySpecifier),
		fields?: OrganizationEdgeFieldPolicy,
	},
	OrganizationIdentityProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationIdentityProviderKeySpecifier | (() => undefined | OrganizationIdentityProviderKeySpecifier),
		fields?: OrganizationIdentityProviderFieldPolicy,
	},
	OrganizationInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationInvitationKeySpecifier | (() => undefined | OrganizationInvitationKeySpecifier),
		fields?: OrganizationInvitationFieldPolicy,
	},
	OrganizationInvitationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationInvitationConnectionKeySpecifier | (() => undefined | OrganizationInvitationConnectionKeySpecifier),
		fields?: OrganizationInvitationConnectionFieldPolicy,
	},
	OrganizationInvitationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationInvitationEdgeKeySpecifier | (() => undefined | OrganizationInvitationEdgeKeySpecifier),
		fields?: OrganizationInvitationEdgeFieldPolicy,
	},
	OrganizationMemberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMemberConnectionKeySpecifier | (() => undefined | OrganizationMemberConnectionKeySpecifier),
		fields?: OrganizationMemberConnectionFieldPolicy,
	},
	OrganizationMemberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMemberEdgeKeySpecifier | (() => undefined | OrganizationMemberEdgeKeySpecifier),
		fields?: OrganizationMemberEdgeFieldPolicy,
	},
	OrganizationTeamsHovercardContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationTeamsHovercardContextKeySpecifier | (() => undefined | OrganizationTeamsHovercardContextKeySpecifier),
		fields?: OrganizationTeamsHovercardContextFieldPolicy,
	},
	OrganizationsHovercardContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationsHovercardContextKeySpecifier | (() => undefined | OrganizationsHovercardContextKeySpecifier),
		fields?: OrganizationsHovercardContextFieldPolicy,
	},
	Package?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageKeySpecifier | (() => undefined | PackageKeySpecifier),
		fields?: PackageFieldPolicy,
	},
	PackageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageConnectionKeySpecifier | (() => undefined | PackageConnectionKeySpecifier),
		fields?: PackageConnectionFieldPolicy,
	},
	PackageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageEdgeKeySpecifier | (() => undefined | PackageEdgeKeySpecifier),
		fields?: PackageEdgeFieldPolicy,
	},
	PackageFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageFileKeySpecifier | (() => undefined | PackageFileKeySpecifier),
		fields?: PackageFileFieldPolicy,
	},
	PackageFileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageFileConnectionKeySpecifier | (() => undefined | PackageFileConnectionKeySpecifier),
		fields?: PackageFileConnectionFieldPolicy,
	},
	PackageFileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageFileEdgeKeySpecifier | (() => undefined | PackageFileEdgeKeySpecifier),
		fields?: PackageFileEdgeFieldPolicy,
	},
	PackageOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageOwnerKeySpecifier | (() => undefined | PackageOwnerKeySpecifier),
		fields?: PackageOwnerFieldPolicy,
	},
	PackageStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageStatisticsKeySpecifier | (() => undefined | PackageStatisticsKeySpecifier),
		fields?: PackageStatisticsFieldPolicy,
	},
	PackageTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageTagKeySpecifier | (() => undefined | PackageTagKeySpecifier),
		fields?: PackageTagFieldPolicy,
	},
	PackageVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageVersionKeySpecifier | (() => undefined | PackageVersionKeySpecifier),
		fields?: PackageVersionFieldPolicy,
	},
	PackageVersionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageVersionConnectionKeySpecifier | (() => undefined | PackageVersionConnectionKeySpecifier),
		fields?: PackageVersionConnectionFieldPolicy,
	},
	PackageVersionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageVersionEdgeKeySpecifier | (() => undefined | PackageVersionEdgeKeySpecifier),
		fields?: PackageVersionEdgeFieldPolicy,
	},
	PackageVersionStatistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageVersionStatisticsKeySpecifier | (() => undefined | PackageVersionStatisticsKeySpecifier),
		fields?: PackageVersionStatisticsFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PermissionSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionSourceKeySpecifier | (() => undefined | PermissionSourceKeySpecifier),
		fields?: PermissionSourceFieldPolicy,
	},
	PinIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinIssuePayloadKeySpecifier | (() => undefined | PinIssuePayloadKeySpecifier),
		fields?: PinIssuePayloadFieldPolicy,
	},
	PinnableItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnableItemConnectionKeySpecifier | (() => undefined | PinnableItemConnectionKeySpecifier),
		fields?: PinnableItemConnectionFieldPolicy,
	},
	PinnableItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnableItemEdgeKeySpecifier | (() => undefined | PinnableItemEdgeKeySpecifier),
		fields?: PinnableItemEdgeFieldPolicy,
	},
	PinnedDiscussion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnedDiscussionKeySpecifier | (() => undefined | PinnedDiscussionKeySpecifier),
		fields?: PinnedDiscussionFieldPolicy,
	},
	PinnedDiscussionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnedDiscussionConnectionKeySpecifier | (() => undefined | PinnedDiscussionConnectionKeySpecifier),
		fields?: PinnedDiscussionConnectionFieldPolicy,
	},
	PinnedDiscussionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnedDiscussionEdgeKeySpecifier | (() => undefined | PinnedDiscussionEdgeKeySpecifier),
		fields?: PinnedDiscussionEdgeFieldPolicy,
	},
	PinnedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnedEventKeySpecifier | (() => undefined | PinnedEventKeySpecifier),
		fields?: PinnedEventFieldPolicy,
	},
	PinnedIssue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnedIssueKeySpecifier | (() => undefined | PinnedIssueKeySpecifier),
		fields?: PinnedIssueFieldPolicy,
	},
	PinnedIssueConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnedIssueConnectionKeySpecifier | (() => undefined | PinnedIssueConnectionKeySpecifier),
		fields?: PinnedIssueConnectionFieldPolicy,
	},
	PinnedIssueEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PinnedIssueEdgeKeySpecifier | (() => undefined | PinnedIssueEdgeKeySpecifier),
		fields?: PinnedIssueEdgeFieldPolicy,
	},
	PrivateRepositoryForkingDisableAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrivateRepositoryForkingDisableAuditEntryKeySpecifier | (() => undefined | PrivateRepositoryForkingDisableAuditEntryKeySpecifier),
		fields?: PrivateRepositoryForkingDisableAuditEntryFieldPolicy,
	},
	PrivateRepositoryForkingEnableAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrivateRepositoryForkingEnableAuditEntryKeySpecifier | (() => undefined | PrivateRepositoryForkingEnableAuditEntryKeySpecifier),
		fields?: PrivateRepositoryForkingEnableAuditEntryFieldPolicy,
	},
	ProfileItemShowcase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileItemShowcaseKeySpecifier | (() => undefined | ProfileItemShowcaseKeySpecifier),
		fields?: ProfileItemShowcaseFieldPolicy,
	},
	ProfileOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileOwnerKeySpecifier | (() => undefined | ProfileOwnerKeySpecifier),
		fields?: ProfileOwnerFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectCardKeySpecifier | (() => undefined | ProjectCardKeySpecifier),
		fields?: ProjectCardFieldPolicy,
	},
	ProjectCardConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectCardConnectionKeySpecifier | (() => undefined | ProjectCardConnectionKeySpecifier),
		fields?: ProjectCardConnectionFieldPolicy,
	},
	ProjectCardEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectCardEdgeKeySpecifier | (() => undefined | ProjectCardEdgeKeySpecifier),
		fields?: ProjectCardEdgeFieldPolicy,
	},
	ProjectColumn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectColumnKeySpecifier | (() => undefined | ProjectColumnKeySpecifier),
		fields?: ProjectColumnFieldPolicy,
	},
	ProjectColumnConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectColumnConnectionKeySpecifier | (() => undefined | ProjectColumnConnectionKeySpecifier),
		fields?: ProjectColumnConnectionFieldPolicy,
	},
	ProjectColumnEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectColumnEdgeKeySpecifier | (() => undefined | ProjectColumnEdgeKeySpecifier),
		fields?: ProjectColumnEdgeFieldPolicy,
	},
	ProjectConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectConnectionKeySpecifier | (() => undefined | ProjectConnectionKeySpecifier),
		fields?: ProjectConnectionFieldPolicy,
	},
	ProjectEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectEdgeKeySpecifier | (() => undefined | ProjectEdgeKeySpecifier),
		fields?: ProjectEdgeFieldPolicy,
	},
	ProjectNext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextKeySpecifier | (() => undefined | ProjectNextKeySpecifier),
		fields?: ProjectNextFieldPolicy,
	},
	ProjectNextConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextConnectionKeySpecifier | (() => undefined | ProjectNextConnectionKeySpecifier),
		fields?: ProjectNextConnectionFieldPolicy,
	},
	ProjectNextEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextEdgeKeySpecifier | (() => undefined | ProjectNextEdgeKeySpecifier),
		fields?: ProjectNextEdgeFieldPolicy,
	},
	ProjectNextField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextFieldKeySpecifier | (() => undefined | ProjectNextFieldKeySpecifier),
		fields?: ProjectNextFieldFieldPolicy,
	},
	ProjectNextFieldConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextFieldConnectionKeySpecifier | (() => undefined | ProjectNextFieldConnectionKeySpecifier),
		fields?: ProjectNextFieldConnectionFieldPolicy,
	},
	ProjectNextFieldEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextFieldEdgeKeySpecifier | (() => undefined | ProjectNextFieldEdgeKeySpecifier),
		fields?: ProjectNextFieldEdgeFieldPolicy,
	},
	ProjectNextItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextItemKeySpecifier | (() => undefined | ProjectNextItemKeySpecifier),
		fields?: ProjectNextItemFieldPolicy,
	},
	ProjectNextItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextItemConnectionKeySpecifier | (() => undefined | ProjectNextItemConnectionKeySpecifier),
		fields?: ProjectNextItemConnectionFieldPolicy,
	},
	ProjectNextItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextItemEdgeKeySpecifier | (() => undefined | ProjectNextItemEdgeKeySpecifier),
		fields?: ProjectNextItemEdgeFieldPolicy,
	},
	ProjectNextItemFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextItemFieldValueKeySpecifier | (() => undefined | ProjectNextItemFieldValueKeySpecifier),
		fields?: ProjectNextItemFieldValueFieldPolicy,
	},
	ProjectNextItemFieldValueConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextItemFieldValueConnectionKeySpecifier | (() => undefined | ProjectNextItemFieldValueConnectionKeySpecifier),
		fields?: ProjectNextItemFieldValueConnectionFieldPolicy,
	},
	ProjectNextItemFieldValueEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextItemFieldValueEdgeKeySpecifier | (() => undefined | ProjectNextItemFieldValueEdgeKeySpecifier),
		fields?: ProjectNextItemFieldValueEdgeFieldPolicy,
	},
	ProjectNextOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectNextOwnerKeySpecifier | (() => undefined | ProjectNextOwnerKeySpecifier),
		fields?: ProjectNextOwnerFieldPolicy,
	},
	ProjectOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectOwnerKeySpecifier | (() => undefined | ProjectOwnerKeySpecifier),
		fields?: ProjectOwnerFieldPolicy,
	},
	ProjectProgress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectProgressKeySpecifier | (() => undefined | ProjectProgressKeySpecifier),
		fields?: ProjectProgressFieldPolicy,
	},
	PublicKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicKeyKeySpecifier | (() => undefined | PublicKeyKeySpecifier),
		fields?: PublicKeyFieldPolicy,
	},
	PublicKeyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicKeyConnectionKeySpecifier | (() => undefined | PublicKeyConnectionKeySpecifier),
		fields?: PublicKeyConnectionFieldPolicy,
	},
	PublicKeyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicKeyEdgeKeySpecifier | (() => undefined | PublicKeyEdgeKeySpecifier),
		fields?: PublicKeyEdgeFieldPolicy,
	},
	PullRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestKeySpecifier | (() => undefined | PullRequestKeySpecifier),
		fields?: PullRequestFieldPolicy,
	},
	PullRequestChangedFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestChangedFileKeySpecifier | (() => undefined | PullRequestChangedFileKeySpecifier),
		fields?: PullRequestChangedFileFieldPolicy,
	},
	PullRequestChangedFileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestChangedFileConnectionKeySpecifier | (() => undefined | PullRequestChangedFileConnectionKeySpecifier),
		fields?: PullRequestChangedFileConnectionFieldPolicy,
	},
	PullRequestChangedFileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestChangedFileEdgeKeySpecifier | (() => undefined | PullRequestChangedFileEdgeKeySpecifier),
		fields?: PullRequestChangedFileEdgeFieldPolicy,
	},
	PullRequestCommit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestCommitKeySpecifier | (() => undefined | PullRequestCommitKeySpecifier),
		fields?: PullRequestCommitFieldPolicy,
	},
	PullRequestCommitCommentThread?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestCommitCommentThreadKeySpecifier | (() => undefined | PullRequestCommitCommentThreadKeySpecifier),
		fields?: PullRequestCommitCommentThreadFieldPolicy,
	},
	PullRequestCommitConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestCommitConnectionKeySpecifier | (() => undefined | PullRequestCommitConnectionKeySpecifier),
		fields?: PullRequestCommitConnectionFieldPolicy,
	},
	PullRequestCommitEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestCommitEdgeKeySpecifier | (() => undefined | PullRequestCommitEdgeKeySpecifier),
		fields?: PullRequestCommitEdgeFieldPolicy,
	},
	PullRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestConnectionKeySpecifier | (() => undefined | PullRequestConnectionKeySpecifier),
		fields?: PullRequestConnectionFieldPolicy,
	},
	PullRequestContributionsByRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestContributionsByRepositoryKeySpecifier | (() => undefined | PullRequestContributionsByRepositoryKeySpecifier),
		fields?: PullRequestContributionsByRepositoryFieldPolicy,
	},
	PullRequestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestEdgeKeySpecifier | (() => undefined | PullRequestEdgeKeySpecifier),
		fields?: PullRequestEdgeFieldPolicy,
	},
	PullRequestReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewKeySpecifier | (() => undefined | PullRequestReviewKeySpecifier),
		fields?: PullRequestReviewFieldPolicy,
	},
	PullRequestReviewComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewCommentKeySpecifier | (() => undefined | PullRequestReviewCommentKeySpecifier),
		fields?: PullRequestReviewCommentFieldPolicy,
	},
	PullRequestReviewCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewCommentConnectionKeySpecifier | (() => undefined | PullRequestReviewCommentConnectionKeySpecifier),
		fields?: PullRequestReviewCommentConnectionFieldPolicy,
	},
	PullRequestReviewCommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewCommentEdgeKeySpecifier | (() => undefined | PullRequestReviewCommentEdgeKeySpecifier),
		fields?: PullRequestReviewCommentEdgeFieldPolicy,
	},
	PullRequestReviewConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewConnectionKeySpecifier | (() => undefined | PullRequestReviewConnectionKeySpecifier),
		fields?: PullRequestReviewConnectionFieldPolicy,
	},
	PullRequestReviewContributionsByRepository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewContributionsByRepositoryKeySpecifier | (() => undefined | PullRequestReviewContributionsByRepositoryKeySpecifier),
		fields?: PullRequestReviewContributionsByRepositoryFieldPolicy,
	},
	PullRequestReviewEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewEdgeKeySpecifier | (() => undefined | PullRequestReviewEdgeKeySpecifier),
		fields?: PullRequestReviewEdgeFieldPolicy,
	},
	PullRequestReviewThread?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewThreadKeySpecifier | (() => undefined | PullRequestReviewThreadKeySpecifier),
		fields?: PullRequestReviewThreadFieldPolicy,
	},
	PullRequestReviewThreadConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewThreadConnectionKeySpecifier | (() => undefined | PullRequestReviewThreadConnectionKeySpecifier),
		fields?: PullRequestReviewThreadConnectionFieldPolicy,
	},
	PullRequestReviewThreadEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestReviewThreadEdgeKeySpecifier | (() => undefined | PullRequestReviewThreadEdgeKeySpecifier),
		fields?: PullRequestReviewThreadEdgeFieldPolicy,
	},
	PullRequestRevisionMarker?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestRevisionMarkerKeySpecifier | (() => undefined | PullRequestRevisionMarkerKeySpecifier),
		fields?: PullRequestRevisionMarkerFieldPolicy,
	},
	PullRequestTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestTemplateKeySpecifier | (() => undefined | PullRequestTemplateKeySpecifier),
		fields?: PullRequestTemplateFieldPolicy,
	},
	PullRequestTimelineConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestTimelineConnectionKeySpecifier | (() => undefined | PullRequestTimelineConnectionKeySpecifier),
		fields?: PullRequestTimelineConnectionFieldPolicy,
	},
	PullRequestTimelineItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestTimelineItemEdgeKeySpecifier | (() => undefined | PullRequestTimelineItemEdgeKeySpecifier),
		fields?: PullRequestTimelineItemEdgeFieldPolicy,
	},
	PullRequestTimelineItemsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestTimelineItemsConnectionKeySpecifier | (() => undefined | PullRequestTimelineItemsConnectionKeySpecifier),
		fields?: PullRequestTimelineItemsConnectionFieldPolicy,
	},
	PullRequestTimelineItemsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PullRequestTimelineItemsEdgeKeySpecifier | (() => undefined | PullRequestTimelineItemsEdgeKeySpecifier),
		fields?: PullRequestTimelineItemsEdgeFieldPolicy,
	},
	Push?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PushKeySpecifier | (() => undefined | PushKeySpecifier),
		fields?: PushFieldPolicy,
	},
	PushAllowance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PushAllowanceKeySpecifier | (() => undefined | PushAllowanceKeySpecifier),
		fields?: PushAllowanceFieldPolicy,
	},
	PushAllowanceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PushAllowanceConnectionKeySpecifier | (() => undefined | PushAllowanceConnectionKeySpecifier),
		fields?: PushAllowanceConnectionFieldPolicy,
	},
	PushAllowanceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PushAllowanceEdgeKeySpecifier | (() => undefined | PushAllowanceEdgeKeySpecifier),
		fields?: PushAllowanceEdgeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RateLimit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RateLimitKeySpecifier | (() => undefined | RateLimitKeySpecifier),
		fields?: RateLimitFieldPolicy,
	},
	Reactable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactableKeySpecifier | (() => undefined | ReactableKeySpecifier),
		fields?: ReactableFieldPolicy,
	},
	ReactingUserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactingUserConnectionKeySpecifier | (() => undefined | ReactingUserConnectionKeySpecifier),
		fields?: ReactingUserConnectionFieldPolicy,
	},
	ReactingUserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactingUserEdgeKeySpecifier | (() => undefined | ReactingUserEdgeKeySpecifier),
		fields?: ReactingUserEdgeFieldPolicy,
	},
	Reaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionKeySpecifier | (() => undefined | ReactionKeySpecifier),
		fields?: ReactionFieldPolicy,
	},
	ReactionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionConnectionKeySpecifier | (() => undefined | ReactionConnectionKeySpecifier),
		fields?: ReactionConnectionFieldPolicy,
	},
	ReactionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionEdgeKeySpecifier | (() => undefined | ReactionEdgeKeySpecifier),
		fields?: ReactionEdgeFieldPolicy,
	},
	ReactionGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionGroupKeySpecifier | (() => undefined | ReactionGroupKeySpecifier),
		fields?: ReactionGroupFieldPolicy,
	},
	ReactorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactorConnectionKeySpecifier | (() => undefined | ReactorConnectionKeySpecifier),
		fields?: ReactorConnectionFieldPolicy,
	},
	ReactorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactorEdgeKeySpecifier | (() => undefined | ReactorEdgeKeySpecifier),
		fields?: ReactorEdgeFieldPolicy,
	},
	ReadyForReviewEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReadyForReviewEventKeySpecifier | (() => undefined | ReadyForReviewEventKeySpecifier),
		fields?: ReadyForReviewEventFieldPolicy,
	},
	Ref?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefKeySpecifier | (() => undefined | RefKeySpecifier),
		fields?: RefFieldPolicy,
	},
	RefConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefConnectionKeySpecifier | (() => undefined | RefConnectionKeySpecifier),
		fields?: RefConnectionFieldPolicy,
	},
	RefEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefEdgeKeySpecifier | (() => undefined | RefEdgeKeySpecifier),
		fields?: RefEdgeFieldPolicy,
	},
	RefUpdateRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefUpdateRuleKeySpecifier | (() => undefined | RefUpdateRuleKeySpecifier),
		fields?: RefUpdateRuleFieldPolicy,
	},
	ReferencedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReferencedEventKeySpecifier | (() => undefined | ReferencedEventKeySpecifier),
		fields?: ReferencedEventFieldPolicy,
	},
	RegenerateEnterpriseIdentityProviderRecoveryCodesPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegenerateEnterpriseIdentityProviderRecoveryCodesPayloadKeySpecifier | (() => undefined | RegenerateEnterpriseIdentityProviderRecoveryCodesPayloadKeySpecifier),
		fields?: RegenerateEnterpriseIdentityProviderRecoveryCodesPayloadFieldPolicy,
	},
	RegenerateVerifiableDomainTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegenerateVerifiableDomainTokenPayloadKeySpecifier | (() => undefined | RegenerateVerifiableDomainTokenPayloadKeySpecifier),
		fields?: RegenerateVerifiableDomainTokenPayloadFieldPolicy,
	},
	RejectDeploymentsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RejectDeploymentsPayloadKeySpecifier | (() => undefined | RejectDeploymentsPayloadKeySpecifier),
		fields?: RejectDeploymentsPayloadFieldPolicy,
	},
	Release?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReleaseKeySpecifier | (() => undefined | ReleaseKeySpecifier),
		fields?: ReleaseFieldPolicy,
	},
	ReleaseAsset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReleaseAssetKeySpecifier | (() => undefined | ReleaseAssetKeySpecifier),
		fields?: ReleaseAssetFieldPolicy,
	},
	ReleaseAssetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReleaseAssetConnectionKeySpecifier | (() => undefined | ReleaseAssetConnectionKeySpecifier),
		fields?: ReleaseAssetConnectionFieldPolicy,
	},
	ReleaseAssetEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReleaseAssetEdgeKeySpecifier | (() => undefined | ReleaseAssetEdgeKeySpecifier),
		fields?: ReleaseAssetEdgeFieldPolicy,
	},
	ReleaseConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReleaseConnectionKeySpecifier | (() => undefined | ReleaseConnectionKeySpecifier),
		fields?: ReleaseConnectionFieldPolicy,
	},
	ReleaseEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReleaseEdgeKeySpecifier | (() => undefined | ReleaseEdgeKeySpecifier),
		fields?: ReleaseEdgeFieldPolicy,
	},
	RemoveAssigneesFromAssignablePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveAssigneesFromAssignablePayloadKeySpecifier | (() => undefined | RemoveAssigneesFromAssignablePayloadKeySpecifier),
		fields?: RemoveAssigneesFromAssignablePayloadFieldPolicy,
	},
	RemoveEnterpriseAdminPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveEnterpriseAdminPayloadKeySpecifier | (() => undefined | RemoveEnterpriseAdminPayloadKeySpecifier),
		fields?: RemoveEnterpriseAdminPayloadFieldPolicy,
	},
	RemoveEnterpriseIdentityProviderPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveEnterpriseIdentityProviderPayloadKeySpecifier | (() => undefined | RemoveEnterpriseIdentityProviderPayloadKeySpecifier),
		fields?: RemoveEnterpriseIdentityProviderPayloadFieldPolicy,
	},
	RemoveEnterpriseOrganizationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveEnterpriseOrganizationPayloadKeySpecifier | (() => undefined | RemoveEnterpriseOrganizationPayloadKeySpecifier),
		fields?: RemoveEnterpriseOrganizationPayloadFieldPolicy,
	},
	RemoveEnterpriseSupportEntitlementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveEnterpriseSupportEntitlementPayloadKeySpecifier | (() => undefined | RemoveEnterpriseSupportEntitlementPayloadKeySpecifier),
		fields?: RemoveEnterpriseSupportEntitlementPayloadFieldPolicy,
	},
	RemoveLabelsFromLabelablePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveLabelsFromLabelablePayloadKeySpecifier | (() => undefined | RemoveLabelsFromLabelablePayloadKeySpecifier),
		fields?: RemoveLabelsFromLabelablePayloadFieldPolicy,
	},
	RemoveOutsideCollaboratorPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveOutsideCollaboratorPayloadKeySpecifier | (() => undefined | RemoveOutsideCollaboratorPayloadKeySpecifier),
		fields?: RemoveOutsideCollaboratorPayloadFieldPolicy,
	},
	RemoveReactionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveReactionPayloadKeySpecifier | (() => undefined | RemoveReactionPayloadKeySpecifier),
		fields?: RemoveReactionPayloadFieldPolicy,
	},
	RemoveStarPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveStarPayloadKeySpecifier | (() => undefined | RemoveStarPayloadKeySpecifier),
		fields?: RemoveStarPayloadFieldPolicy,
	},
	RemoveUpvotePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveUpvotePayloadKeySpecifier | (() => undefined | RemoveUpvotePayloadKeySpecifier),
		fields?: RemoveUpvotePayloadFieldPolicy,
	},
	RemovedFromProjectEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemovedFromProjectEventKeySpecifier | (() => undefined | RemovedFromProjectEventKeySpecifier),
		fields?: RemovedFromProjectEventFieldPolicy,
	},
	RenamedTitleEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RenamedTitleEventKeySpecifier | (() => undefined | RenamedTitleEventKeySpecifier),
		fields?: RenamedTitleEventFieldPolicy,
	},
	ReopenIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReopenIssuePayloadKeySpecifier | (() => undefined | ReopenIssuePayloadKeySpecifier),
		fields?: ReopenIssuePayloadFieldPolicy,
	},
	ReopenPullRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReopenPullRequestPayloadKeySpecifier | (() => undefined | ReopenPullRequestPayloadKeySpecifier),
		fields?: ReopenPullRequestPayloadFieldPolicy,
	},
	ReopenedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReopenedEventKeySpecifier | (() => undefined | ReopenedEventKeySpecifier),
		fields?: ReopenedEventFieldPolicy,
	},
	RepoAccessAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoAccessAuditEntryKeySpecifier | (() => undefined | RepoAccessAuditEntryKeySpecifier),
		fields?: RepoAccessAuditEntryFieldPolicy,
	},
	RepoAddMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoAddMemberAuditEntryKeySpecifier | (() => undefined | RepoAddMemberAuditEntryKeySpecifier),
		fields?: RepoAddMemberAuditEntryFieldPolicy,
	},
	RepoAddTopicAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoAddTopicAuditEntryKeySpecifier | (() => undefined | RepoAddTopicAuditEntryKeySpecifier),
		fields?: RepoAddTopicAuditEntryFieldPolicy,
	},
	RepoArchivedAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoArchivedAuditEntryKeySpecifier | (() => undefined | RepoArchivedAuditEntryKeySpecifier),
		fields?: RepoArchivedAuditEntryFieldPolicy,
	},
	RepoChangeMergeSettingAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoChangeMergeSettingAuditEntryKeySpecifier | (() => undefined | RepoChangeMergeSettingAuditEntryKeySpecifier),
		fields?: RepoChangeMergeSettingAuditEntryFieldPolicy,
	},
	RepoConfigDisableAnonymousGitAccessAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigDisableAnonymousGitAccessAuditEntryKeySpecifier | (() => undefined | RepoConfigDisableAnonymousGitAccessAuditEntryKeySpecifier),
		fields?: RepoConfigDisableAnonymousGitAccessAuditEntryFieldPolicy,
	},
	RepoConfigDisableCollaboratorsOnlyAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier | (() => undefined | RepoConfigDisableCollaboratorsOnlyAuditEntryKeySpecifier),
		fields?: RepoConfigDisableCollaboratorsOnlyAuditEntryFieldPolicy,
	},
	RepoConfigDisableContributorsOnlyAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigDisableContributorsOnlyAuditEntryKeySpecifier | (() => undefined | RepoConfigDisableContributorsOnlyAuditEntryKeySpecifier),
		fields?: RepoConfigDisableContributorsOnlyAuditEntryFieldPolicy,
	},
	RepoConfigDisableSockpuppetDisallowedAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigDisableSockpuppetDisallowedAuditEntryKeySpecifier | (() => undefined | RepoConfigDisableSockpuppetDisallowedAuditEntryKeySpecifier),
		fields?: RepoConfigDisableSockpuppetDisallowedAuditEntryFieldPolicy,
	},
	RepoConfigEnableAnonymousGitAccessAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigEnableAnonymousGitAccessAuditEntryKeySpecifier | (() => undefined | RepoConfigEnableAnonymousGitAccessAuditEntryKeySpecifier),
		fields?: RepoConfigEnableAnonymousGitAccessAuditEntryFieldPolicy,
	},
	RepoConfigEnableCollaboratorsOnlyAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier | (() => undefined | RepoConfigEnableCollaboratorsOnlyAuditEntryKeySpecifier),
		fields?: RepoConfigEnableCollaboratorsOnlyAuditEntryFieldPolicy,
	},
	RepoConfigEnableContributorsOnlyAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigEnableContributorsOnlyAuditEntryKeySpecifier | (() => undefined | RepoConfigEnableContributorsOnlyAuditEntryKeySpecifier),
		fields?: RepoConfigEnableContributorsOnlyAuditEntryFieldPolicy,
	},
	RepoConfigEnableSockpuppetDisallowedAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigEnableSockpuppetDisallowedAuditEntryKeySpecifier | (() => undefined | RepoConfigEnableSockpuppetDisallowedAuditEntryKeySpecifier),
		fields?: RepoConfigEnableSockpuppetDisallowedAuditEntryFieldPolicy,
	},
	RepoConfigLockAnonymousGitAccessAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigLockAnonymousGitAccessAuditEntryKeySpecifier | (() => undefined | RepoConfigLockAnonymousGitAccessAuditEntryKeySpecifier),
		fields?: RepoConfigLockAnonymousGitAccessAuditEntryFieldPolicy,
	},
	RepoConfigUnlockAnonymousGitAccessAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoConfigUnlockAnonymousGitAccessAuditEntryKeySpecifier | (() => undefined | RepoConfigUnlockAnonymousGitAccessAuditEntryKeySpecifier),
		fields?: RepoConfigUnlockAnonymousGitAccessAuditEntryFieldPolicy,
	},
	RepoCreateAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoCreateAuditEntryKeySpecifier | (() => undefined | RepoCreateAuditEntryKeySpecifier),
		fields?: RepoCreateAuditEntryFieldPolicy,
	},
	RepoDestroyAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoDestroyAuditEntryKeySpecifier | (() => undefined | RepoDestroyAuditEntryKeySpecifier),
		fields?: RepoDestroyAuditEntryFieldPolicy,
	},
	RepoRemoveMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoRemoveMemberAuditEntryKeySpecifier | (() => undefined | RepoRemoveMemberAuditEntryKeySpecifier),
		fields?: RepoRemoveMemberAuditEntryFieldPolicy,
	},
	RepoRemoveTopicAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepoRemoveTopicAuditEntryKeySpecifier | (() => undefined | RepoRemoveTopicAuditEntryKeySpecifier),
		fields?: RepoRemoveTopicAuditEntryFieldPolicy,
	},
	Repository?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryKeySpecifier | (() => undefined | RepositoryKeySpecifier),
		fields?: RepositoryFieldPolicy,
	},
	RepositoryAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryAuditEntryDataKeySpecifier | (() => undefined | RepositoryAuditEntryDataKeySpecifier),
		fields?: RepositoryAuditEntryDataFieldPolicy,
	},
	RepositoryCollaboratorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryCollaboratorConnectionKeySpecifier | (() => undefined | RepositoryCollaboratorConnectionKeySpecifier),
		fields?: RepositoryCollaboratorConnectionFieldPolicy,
	},
	RepositoryCollaboratorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryCollaboratorEdgeKeySpecifier | (() => undefined | RepositoryCollaboratorEdgeKeySpecifier),
		fields?: RepositoryCollaboratorEdgeFieldPolicy,
	},
	RepositoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryConnectionKeySpecifier | (() => undefined | RepositoryConnectionKeySpecifier),
		fields?: RepositoryConnectionFieldPolicy,
	},
	RepositoryContactLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryContactLinkKeySpecifier | (() => undefined | RepositoryContactLinkKeySpecifier),
		fields?: RepositoryContactLinkFieldPolicy,
	},
	RepositoryDiscussionAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryDiscussionAuthorKeySpecifier | (() => undefined | RepositoryDiscussionAuthorKeySpecifier),
		fields?: RepositoryDiscussionAuthorFieldPolicy,
	},
	RepositoryDiscussionCommentAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryDiscussionCommentAuthorKeySpecifier | (() => undefined | RepositoryDiscussionCommentAuthorKeySpecifier),
		fields?: RepositoryDiscussionCommentAuthorFieldPolicy,
	},
	RepositoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryEdgeKeySpecifier | (() => undefined | RepositoryEdgeKeySpecifier),
		fields?: RepositoryEdgeFieldPolicy,
	},
	RepositoryInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryInfoKeySpecifier | (() => undefined | RepositoryInfoKeySpecifier),
		fields?: RepositoryInfoFieldPolicy,
	},
	RepositoryInteractionAbility?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryInteractionAbilityKeySpecifier | (() => undefined | RepositoryInteractionAbilityKeySpecifier),
		fields?: RepositoryInteractionAbilityFieldPolicy,
	},
	RepositoryInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryInvitationKeySpecifier | (() => undefined | RepositoryInvitationKeySpecifier),
		fields?: RepositoryInvitationFieldPolicy,
	},
	RepositoryInvitationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryInvitationConnectionKeySpecifier | (() => undefined | RepositoryInvitationConnectionKeySpecifier),
		fields?: RepositoryInvitationConnectionFieldPolicy,
	},
	RepositoryInvitationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryInvitationEdgeKeySpecifier | (() => undefined | RepositoryInvitationEdgeKeySpecifier),
		fields?: RepositoryInvitationEdgeFieldPolicy,
	},
	RepositoryNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryNodeKeySpecifier | (() => undefined | RepositoryNodeKeySpecifier),
		fields?: RepositoryNodeFieldPolicy,
	},
	RepositoryOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryOwnerKeySpecifier | (() => undefined | RepositoryOwnerKeySpecifier),
		fields?: RepositoryOwnerFieldPolicy,
	},
	RepositoryTopic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryTopicKeySpecifier | (() => undefined | RepositoryTopicKeySpecifier),
		fields?: RepositoryTopicFieldPolicy,
	},
	RepositoryTopicConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryTopicConnectionKeySpecifier | (() => undefined | RepositoryTopicConnectionKeySpecifier),
		fields?: RepositoryTopicConnectionFieldPolicy,
	},
	RepositoryTopicEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryTopicEdgeKeySpecifier | (() => undefined | RepositoryTopicEdgeKeySpecifier),
		fields?: RepositoryTopicEdgeFieldPolicy,
	},
	RepositoryVisibilityChangeDisableAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryVisibilityChangeDisableAuditEntryKeySpecifier | (() => undefined | RepositoryVisibilityChangeDisableAuditEntryKeySpecifier),
		fields?: RepositoryVisibilityChangeDisableAuditEntryFieldPolicy,
	},
	RepositoryVisibilityChangeEnableAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryVisibilityChangeEnableAuditEntryKeySpecifier | (() => undefined | RepositoryVisibilityChangeEnableAuditEntryKeySpecifier),
		fields?: RepositoryVisibilityChangeEnableAuditEntryFieldPolicy,
	},
	RepositoryVulnerabilityAlert?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryVulnerabilityAlertKeySpecifier | (() => undefined | RepositoryVulnerabilityAlertKeySpecifier),
		fields?: RepositoryVulnerabilityAlertFieldPolicy,
	},
	RepositoryVulnerabilityAlertConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryVulnerabilityAlertConnectionKeySpecifier | (() => undefined | RepositoryVulnerabilityAlertConnectionKeySpecifier),
		fields?: RepositoryVulnerabilityAlertConnectionFieldPolicy,
	},
	RepositoryVulnerabilityAlertEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RepositoryVulnerabilityAlertEdgeKeySpecifier | (() => undefined | RepositoryVulnerabilityAlertEdgeKeySpecifier),
		fields?: RepositoryVulnerabilityAlertEdgeFieldPolicy,
	},
	RequestReviewsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestReviewsPayloadKeySpecifier | (() => undefined | RequestReviewsPayloadKeySpecifier),
		fields?: RequestReviewsPayloadFieldPolicy,
	},
	RequirableByPullRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequirableByPullRequestKeySpecifier | (() => undefined | RequirableByPullRequestKeySpecifier),
		fields?: RequirableByPullRequestFieldPolicy,
	},
	RequiredStatusCheckDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequiredStatusCheckDescriptionKeySpecifier | (() => undefined | RequiredStatusCheckDescriptionKeySpecifier),
		fields?: RequiredStatusCheckDescriptionFieldPolicy,
	},
	RerequestCheckSuitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RerequestCheckSuitePayloadKeySpecifier | (() => undefined | RerequestCheckSuitePayloadKeySpecifier),
		fields?: RerequestCheckSuitePayloadFieldPolicy,
	},
	ResolveReviewThreadPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResolveReviewThreadPayloadKeySpecifier | (() => undefined | ResolveReviewThreadPayloadKeySpecifier),
		fields?: ResolveReviewThreadPayloadFieldPolicy,
	},
	RestrictedContribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RestrictedContributionKeySpecifier | (() => undefined | RestrictedContributionKeySpecifier),
		fields?: RestrictedContributionFieldPolicy,
	},
	ReviewDismissalAllowance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewDismissalAllowanceKeySpecifier | (() => undefined | ReviewDismissalAllowanceKeySpecifier),
		fields?: ReviewDismissalAllowanceFieldPolicy,
	},
	ReviewDismissalAllowanceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewDismissalAllowanceConnectionKeySpecifier | (() => undefined | ReviewDismissalAllowanceConnectionKeySpecifier),
		fields?: ReviewDismissalAllowanceConnectionFieldPolicy,
	},
	ReviewDismissalAllowanceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewDismissalAllowanceEdgeKeySpecifier | (() => undefined | ReviewDismissalAllowanceEdgeKeySpecifier),
		fields?: ReviewDismissalAllowanceEdgeFieldPolicy,
	},
	ReviewDismissedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewDismissedEventKeySpecifier | (() => undefined | ReviewDismissedEventKeySpecifier),
		fields?: ReviewDismissedEventFieldPolicy,
	},
	ReviewRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewRequestKeySpecifier | (() => undefined | ReviewRequestKeySpecifier),
		fields?: ReviewRequestFieldPolicy,
	},
	ReviewRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewRequestConnectionKeySpecifier | (() => undefined | ReviewRequestConnectionKeySpecifier),
		fields?: ReviewRequestConnectionFieldPolicy,
	},
	ReviewRequestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewRequestEdgeKeySpecifier | (() => undefined | ReviewRequestEdgeKeySpecifier),
		fields?: ReviewRequestEdgeFieldPolicy,
	},
	ReviewRequestRemovedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewRequestRemovedEventKeySpecifier | (() => undefined | ReviewRequestRemovedEventKeySpecifier),
		fields?: ReviewRequestRemovedEventFieldPolicy,
	},
	ReviewRequestedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewRequestedEventKeySpecifier | (() => undefined | ReviewRequestedEventKeySpecifier),
		fields?: ReviewRequestedEventFieldPolicy,
	},
	ReviewStatusHovercardContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewStatusHovercardContextKeySpecifier | (() => undefined | ReviewStatusHovercardContextKeySpecifier),
		fields?: ReviewStatusHovercardContextFieldPolicy,
	},
	SavedReply?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SavedReplyKeySpecifier | (() => undefined | SavedReplyKeySpecifier),
		fields?: SavedReplyFieldPolicy,
	},
	SavedReplyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SavedReplyConnectionKeySpecifier | (() => undefined | SavedReplyConnectionKeySpecifier),
		fields?: SavedReplyConnectionFieldPolicy,
	},
	SavedReplyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SavedReplyEdgeKeySpecifier | (() => undefined | SavedReplyEdgeKeySpecifier),
		fields?: SavedReplyEdgeFieldPolicy,
	},
	SearchResultItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultItemConnectionKeySpecifier | (() => undefined | SearchResultItemConnectionKeySpecifier),
		fields?: SearchResultItemConnectionFieldPolicy,
	},
	SearchResultItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultItemEdgeKeySpecifier | (() => undefined | SearchResultItemEdgeKeySpecifier),
		fields?: SearchResultItemEdgeFieldPolicy,
	},
	SecurityAdvisory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityAdvisoryKeySpecifier | (() => undefined | SecurityAdvisoryKeySpecifier),
		fields?: SecurityAdvisoryFieldPolicy,
	},
	SecurityAdvisoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityAdvisoryConnectionKeySpecifier | (() => undefined | SecurityAdvisoryConnectionKeySpecifier),
		fields?: SecurityAdvisoryConnectionFieldPolicy,
	},
	SecurityAdvisoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityAdvisoryEdgeKeySpecifier | (() => undefined | SecurityAdvisoryEdgeKeySpecifier),
		fields?: SecurityAdvisoryEdgeFieldPolicy,
	},
	SecurityAdvisoryIdentifier?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityAdvisoryIdentifierKeySpecifier | (() => undefined | SecurityAdvisoryIdentifierKeySpecifier),
		fields?: SecurityAdvisoryIdentifierFieldPolicy,
	},
	SecurityAdvisoryPackage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityAdvisoryPackageKeySpecifier | (() => undefined | SecurityAdvisoryPackageKeySpecifier),
		fields?: SecurityAdvisoryPackageFieldPolicy,
	},
	SecurityAdvisoryPackageVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityAdvisoryPackageVersionKeySpecifier | (() => undefined | SecurityAdvisoryPackageVersionKeySpecifier),
		fields?: SecurityAdvisoryPackageVersionFieldPolicy,
	},
	SecurityAdvisoryReference?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityAdvisoryReferenceKeySpecifier | (() => undefined | SecurityAdvisoryReferenceKeySpecifier),
		fields?: SecurityAdvisoryReferenceFieldPolicy,
	},
	SecurityVulnerability?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityVulnerabilityKeySpecifier | (() => undefined | SecurityVulnerabilityKeySpecifier),
		fields?: SecurityVulnerabilityFieldPolicy,
	},
	SecurityVulnerabilityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityVulnerabilityConnectionKeySpecifier | (() => undefined | SecurityVulnerabilityConnectionKeySpecifier),
		fields?: SecurityVulnerabilityConnectionFieldPolicy,
	},
	SecurityVulnerabilityEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SecurityVulnerabilityEdgeKeySpecifier | (() => undefined | SecurityVulnerabilityEdgeKeySpecifier),
		fields?: SecurityVulnerabilityEdgeFieldPolicy,
	},
	SetEnterpriseIdentityProviderPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetEnterpriseIdentityProviderPayloadKeySpecifier | (() => undefined | SetEnterpriseIdentityProviderPayloadKeySpecifier),
		fields?: SetEnterpriseIdentityProviderPayloadFieldPolicy,
	},
	SetOrganizationInteractionLimitPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetOrganizationInteractionLimitPayloadKeySpecifier | (() => undefined | SetOrganizationInteractionLimitPayloadKeySpecifier),
		fields?: SetOrganizationInteractionLimitPayloadFieldPolicy,
	},
	SetRepositoryInteractionLimitPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetRepositoryInteractionLimitPayloadKeySpecifier | (() => undefined | SetRepositoryInteractionLimitPayloadKeySpecifier),
		fields?: SetRepositoryInteractionLimitPayloadFieldPolicy,
	},
	SetUserInteractionLimitPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetUserInteractionLimitPayloadKeySpecifier | (() => undefined | SetUserInteractionLimitPayloadKeySpecifier),
		fields?: SetUserInteractionLimitPayloadFieldPolicy,
	},
	SmimeSignature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmimeSignatureKeySpecifier | (() => undefined | SmimeSignatureKeySpecifier),
		fields?: SmimeSignatureFieldPolicy,
	},
	SponsorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorConnectionKeySpecifier | (() => undefined | SponsorConnectionKeySpecifier),
		fields?: SponsorConnectionFieldPolicy,
	},
	SponsorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorEdgeKeySpecifier | (() => undefined | SponsorEdgeKeySpecifier),
		fields?: SponsorEdgeFieldPolicy,
	},
	Sponsorable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorableKeySpecifier | (() => undefined | SponsorableKeySpecifier),
		fields?: SponsorableFieldPolicy,
	},
	SponsorableItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorableItemConnectionKeySpecifier | (() => undefined | SponsorableItemConnectionKeySpecifier),
		fields?: SponsorableItemConnectionFieldPolicy,
	},
	SponsorableItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorableItemEdgeKeySpecifier | (() => undefined | SponsorableItemEdgeKeySpecifier),
		fields?: SponsorableItemEdgeFieldPolicy,
	},
	SponsorsActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsActivityKeySpecifier | (() => undefined | SponsorsActivityKeySpecifier),
		fields?: SponsorsActivityFieldPolicy,
	},
	SponsorsActivityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsActivityConnectionKeySpecifier | (() => undefined | SponsorsActivityConnectionKeySpecifier),
		fields?: SponsorsActivityConnectionFieldPolicy,
	},
	SponsorsActivityEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsActivityEdgeKeySpecifier | (() => undefined | SponsorsActivityEdgeKeySpecifier),
		fields?: SponsorsActivityEdgeFieldPolicy,
	},
	SponsorsGoal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsGoalKeySpecifier | (() => undefined | SponsorsGoalKeySpecifier),
		fields?: SponsorsGoalFieldPolicy,
	},
	SponsorsListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsListingKeySpecifier | (() => undefined | SponsorsListingKeySpecifier),
		fields?: SponsorsListingFieldPolicy,
	},
	SponsorsTier?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsTierKeySpecifier | (() => undefined | SponsorsTierKeySpecifier),
		fields?: SponsorsTierFieldPolicy,
	},
	SponsorsTierAdminInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsTierAdminInfoKeySpecifier | (() => undefined | SponsorsTierAdminInfoKeySpecifier),
		fields?: SponsorsTierAdminInfoFieldPolicy,
	},
	SponsorsTierConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsTierConnectionKeySpecifier | (() => undefined | SponsorsTierConnectionKeySpecifier),
		fields?: SponsorsTierConnectionFieldPolicy,
	},
	SponsorsTierEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorsTierEdgeKeySpecifier | (() => undefined | SponsorsTierEdgeKeySpecifier),
		fields?: SponsorsTierEdgeFieldPolicy,
	},
	Sponsorship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorshipKeySpecifier | (() => undefined | SponsorshipKeySpecifier),
		fields?: SponsorshipFieldPolicy,
	},
	SponsorshipConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorshipConnectionKeySpecifier | (() => undefined | SponsorshipConnectionKeySpecifier),
		fields?: SponsorshipConnectionFieldPolicy,
	},
	SponsorshipEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorshipEdgeKeySpecifier | (() => undefined | SponsorshipEdgeKeySpecifier),
		fields?: SponsorshipEdgeFieldPolicy,
	},
	SponsorshipNewsletter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorshipNewsletterKeySpecifier | (() => undefined | SponsorshipNewsletterKeySpecifier),
		fields?: SponsorshipNewsletterFieldPolicy,
	},
	SponsorshipNewsletterConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorshipNewsletterConnectionKeySpecifier | (() => undefined | SponsorshipNewsletterConnectionKeySpecifier),
		fields?: SponsorshipNewsletterConnectionFieldPolicy,
	},
	SponsorshipNewsletterEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SponsorshipNewsletterEdgeKeySpecifier | (() => undefined | SponsorshipNewsletterEdgeKeySpecifier),
		fields?: SponsorshipNewsletterEdgeFieldPolicy,
	},
	StargazerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StargazerConnectionKeySpecifier | (() => undefined | StargazerConnectionKeySpecifier),
		fields?: StargazerConnectionFieldPolicy,
	},
	StargazerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StargazerEdgeKeySpecifier | (() => undefined | StargazerEdgeKeySpecifier),
		fields?: StargazerEdgeFieldPolicy,
	},
	Starrable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StarrableKeySpecifier | (() => undefined | StarrableKeySpecifier),
		fields?: StarrableFieldPolicy,
	},
	StarredRepositoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StarredRepositoryConnectionKeySpecifier | (() => undefined | StarredRepositoryConnectionKeySpecifier),
		fields?: StarredRepositoryConnectionFieldPolicy,
	},
	StarredRepositoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StarredRepositoryEdgeKeySpecifier | (() => undefined | StarredRepositoryEdgeKeySpecifier),
		fields?: StarredRepositoryEdgeFieldPolicy,
	},
	Status?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusKeySpecifier | (() => undefined | StatusKeySpecifier),
		fields?: StatusFieldPolicy,
	},
	StatusCheckRollup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusCheckRollupKeySpecifier | (() => undefined | StatusCheckRollupKeySpecifier),
		fields?: StatusCheckRollupFieldPolicy,
	},
	StatusCheckRollupContextConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusCheckRollupContextConnectionKeySpecifier | (() => undefined | StatusCheckRollupContextConnectionKeySpecifier),
		fields?: StatusCheckRollupContextConnectionFieldPolicy,
	},
	StatusCheckRollupContextEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusCheckRollupContextEdgeKeySpecifier | (() => undefined | StatusCheckRollupContextEdgeKeySpecifier),
		fields?: StatusCheckRollupContextEdgeFieldPolicy,
	},
	StatusContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusContextKeySpecifier | (() => undefined | StatusContextKeySpecifier),
		fields?: StatusContextFieldPolicy,
	},
	SubmitPullRequestReviewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitPullRequestReviewPayloadKeySpecifier | (() => undefined | SubmitPullRequestReviewPayloadKeySpecifier),
		fields?: SubmitPullRequestReviewPayloadFieldPolicy,
	},
	Submodule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmoduleKeySpecifier | (() => undefined | SubmoduleKeySpecifier),
		fields?: SubmoduleFieldPolicy,
	},
	SubmoduleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmoduleConnectionKeySpecifier | (() => undefined | SubmoduleConnectionKeySpecifier),
		fields?: SubmoduleConnectionFieldPolicy,
	},
	SubmoduleEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmoduleEdgeKeySpecifier | (() => undefined | SubmoduleEdgeKeySpecifier),
		fields?: SubmoduleEdgeFieldPolicy,
	},
	Subscribable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribableKeySpecifier | (() => undefined | SubscribableKeySpecifier),
		fields?: SubscribableFieldPolicy,
	},
	SubscribedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribedEventKeySpecifier | (() => undefined | SubscribedEventKeySpecifier),
		fields?: SubscribedEventFieldPolicy,
	},
	SuggestedReviewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestedReviewerKeySpecifier | (() => undefined | SuggestedReviewerKeySpecifier),
		fields?: SuggestedReviewerFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	TeamAddMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamAddMemberAuditEntryKeySpecifier | (() => undefined | TeamAddMemberAuditEntryKeySpecifier),
		fields?: TeamAddMemberAuditEntryFieldPolicy,
	},
	TeamAddRepositoryAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamAddRepositoryAuditEntryKeySpecifier | (() => undefined | TeamAddRepositoryAuditEntryKeySpecifier),
		fields?: TeamAddRepositoryAuditEntryFieldPolicy,
	},
	TeamAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamAuditEntryDataKeySpecifier | (() => undefined | TeamAuditEntryDataKeySpecifier),
		fields?: TeamAuditEntryDataFieldPolicy,
	},
	TeamChangeParentTeamAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamChangeParentTeamAuditEntryKeySpecifier | (() => undefined | TeamChangeParentTeamAuditEntryKeySpecifier),
		fields?: TeamChangeParentTeamAuditEntryFieldPolicy,
	},
	TeamConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamConnectionKeySpecifier | (() => undefined | TeamConnectionKeySpecifier),
		fields?: TeamConnectionFieldPolicy,
	},
	TeamDiscussion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamDiscussionKeySpecifier | (() => undefined | TeamDiscussionKeySpecifier),
		fields?: TeamDiscussionFieldPolicy,
	},
	TeamDiscussionComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamDiscussionCommentKeySpecifier | (() => undefined | TeamDiscussionCommentKeySpecifier),
		fields?: TeamDiscussionCommentFieldPolicy,
	},
	TeamDiscussionCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamDiscussionCommentConnectionKeySpecifier | (() => undefined | TeamDiscussionCommentConnectionKeySpecifier),
		fields?: TeamDiscussionCommentConnectionFieldPolicy,
	},
	TeamDiscussionCommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamDiscussionCommentEdgeKeySpecifier | (() => undefined | TeamDiscussionCommentEdgeKeySpecifier),
		fields?: TeamDiscussionCommentEdgeFieldPolicy,
	},
	TeamDiscussionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamDiscussionConnectionKeySpecifier | (() => undefined | TeamDiscussionConnectionKeySpecifier),
		fields?: TeamDiscussionConnectionFieldPolicy,
	},
	TeamDiscussionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamDiscussionEdgeKeySpecifier | (() => undefined | TeamDiscussionEdgeKeySpecifier),
		fields?: TeamDiscussionEdgeFieldPolicy,
	},
	TeamEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamEdgeKeySpecifier | (() => undefined | TeamEdgeKeySpecifier),
		fields?: TeamEdgeFieldPolicy,
	},
	TeamMemberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberConnectionKeySpecifier | (() => undefined | TeamMemberConnectionKeySpecifier),
		fields?: TeamMemberConnectionFieldPolicy,
	},
	TeamMemberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberEdgeKeySpecifier | (() => undefined | TeamMemberEdgeKeySpecifier),
		fields?: TeamMemberEdgeFieldPolicy,
	},
	TeamRemoveMemberAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamRemoveMemberAuditEntryKeySpecifier | (() => undefined | TeamRemoveMemberAuditEntryKeySpecifier),
		fields?: TeamRemoveMemberAuditEntryFieldPolicy,
	},
	TeamRemoveRepositoryAuditEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamRemoveRepositoryAuditEntryKeySpecifier | (() => undefined | TeamRemoveRepositoryAuditEntryKeySpecifier),
		fields?: TeamRemoveRepositoryAuditEntryFieldPolicy,
	},
	TeamRepositoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamRepositoryConnectionKeySpecifier | (() => undefined | TeamRepositoryConnectionKeySpecifier),
		fields?: TeamRepositoryConnectionFieldPolicy,
	},
	TeamRepositoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamRepositoryEdgeKeySpecifier | (() => undefined | TeamRepositoryEdgeKeySpecifier),
		fields?: TeamRepositoryEdgeFieldPolicy,
	},
	TextMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextMatchKeySpecifier | (() => undefined | TextMatchKeySpecifier),
		fields?: TextMatchFieldPolicy,
	},
	TextMatchHighlight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextMatchHighlightKeySpecifier | (() => undefined | TextMatchHighlightKeySpecifier),
		fields?: TextMatchHighlightFieldPolicy,
	},
	Topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicKeySpecifier | (() => undefined | TopicKeySpecifier),
		fields?: TopicFieldPolicy,
	},
	TopicAuditEntryData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicAuditEntryDataKeySpecifier | (() => undefined | TopicAuditEntryDataKeySpecifier),
		fields?: TopicAuditEntryDataFieldPolicy,
	},
	TransferIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferIssuePayloadKeySpecifier | (() => undefined | TransferIssuePayloadKeySpecifier),
		fields?: TransferIssuePayloadFieldPolicy,
	},
	TransferredEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferredEventKeySpecifier | (() => undefined | TransferredEventKeySpecifier),
		fields?: TransferredEventFieldPolicy,
	},
	Tree?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TreeKeySpecifier | (() => undefined | TreeKeySpecifier),
		fields?: TreeFieldPolicy,
	},
	TreeEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TreeEntryKeySpecifier | (() => undefined | TreeEntryKeySpecifier),
		fields?: TreeEntryFieldPolicy,
	},
	UnarchiveRepositoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnarchiveRepositoryPayloadKeySpecifier | (() => undefined | UnarchiveRepositoryPayloadKeySpecifier),
		fields?: UnarchiveRepositoryPayloadFieldPolicy,
	},
	UnassignedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnassignedEventKeySpecifier | (() => undefined | UnassignedEventKeySpecifier),
		fields?: UnassignedEventFieldPolicy,
	},
	UnfollowUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnfollowUserPayloadKeySpecifier | (() => undefined | UnfollowUserPayloadKeySpecifier),
		fields?: UnfollowUserPayloadFieldPolicy,
	},
	UniformResourceLocatable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UniformResourceLocatableKeySpecifier | (() => undefined | UniformResourceLocatableKeySpecifier),
		fields?: UniformResourceLocatableFieldPolicy,
	},
	UnknownSignature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnknownSignatureKeySpecifier | (() => undefined | UnknownSignatureKeySpecifier),
		fields?: UnknownSignatureFieldPolicy,
	},
	UnlabeledEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnlabeledEventKeySpecifier | (() => undefined | UnlabeledEventKeySpecifier),
		fields?: UnlabeledEventFieldPolicy,
	},
	UnlinkRepositoryFromProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnlinkRepositoryFromProjectPayloadKeySpecifier | (() => undefined | UnlinkRepositoryFromProjectPayloadKeySpecifier),
		fields?: UnlinkRepositoryFromProjectPayloadFieldPolicy,
	},
	UnlockLockablePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnlockLockablePayloadKeySpecifier | (() => undefined | UnlockLockablePayloadKeySpecifier),
		fields?: UnlockLockablePayloadFieldPolicy,
	},
	UnlockedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnlockedEventKeySpecifier | (() => undefined | UnlockedEventKeySpecifier),
		fields?: UnlockedEventFieldPolicy,
	},
	UnmarkDiscussionCommentAsAnswerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnmarkDiscussionCommentAsAnswerPayloadKeySpecifier | (() => undefined | UnmarkDiscussionCommentAsAnswerPayloadKeySpecifier),
		fields?: UnmarkDiscussionCommentAsAnswerPayloadFieldPolicy,
	},
	UnmarkFileAsViewedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnmarkFileAsViewedPayloadKeySpecifier | (() => undefined | UnmarkFileAsViewedPayloadKeySpecifier),
		fields?: UnmarkFileAsViewedPayloadFieldPolicy,
	},
	UnmarkIssueAsDuplicatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnmarkIssueAsDuplicatePayloadKeySpecifier | (() => undefined | UnmarkIssueAsDuplicatePayloadKeySpecifier),
		fields?: UnmarkIssueAsDuplicatePayloadFieldPolicy,
	},
	UnmarkedAsDuplicateEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnmarkedAsDuplicateEventKeySpecifier | (() => undefined | UnmarkedAsDuplicateEventKeySpecifier),
		fields?: UnmarkedAsDuplicateEventFieldPolicy,
	},
	UnminimizeCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnminimizeCommentPayloadKeySpecifier | (() => undefined | UnminimizeCommentPayloadKeySpecifier),
		fields?: UnminimizeCommentPayloadFieldPolicy,
	},
	UnpinIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnpinIssuePayloadKeySpecifier | (() => undefined | UnpinIssuePayloadKeySpecifier),
		fields?: UnpinIssuePayloadFieldPolicy,
	},
	UnpinnedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnpinnedEventKeySpecifier | (() => undefined | UnpinnedEventKeySpecifier),
		fields?: UnpinnedEventFieldPolicy,
	},
	UnresolveReviewThreadPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnresolveReviewThreadPayloadKeySpecifier | (() => undefined | UnresolveReviewThreadPayloadKeySpecifier),
		fields?: UnresolveReviewThreadPayloadFieldPolicy,
	},
	UnsubscribedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnsubscribedEventKeySpecifier | (() => undefined | UnsubscribedEventKeySpecifier),
		fields?: UnsubscribedEventFieldPolicy,
	},
	Updatable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatableKeySpecifier | (() => undefined | UpdatableKeySpecifier),
		fields?: UpdatableFieldPolicy,
	},
	UpdatableComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatableCommentKeySpecifier | (() => undefined | UpdatableCommentKeySpecifier),
		fields?: UpdatableCommentFieldPolicy,
	},
	UpdateBranchProtectionRulePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateBranchProtectionRulePayloadKeySpecifier | (() => undefined | UpdateBranchProtectionRulePayloadKeySpecifier),
		fields?: UpdateBranchProtectionRulePayloadFieldPolicy,
	},
	UpdateCheckRunPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCheckRunPayloadKeySpecifier | (() => undefined | UpdateCheckRunPayloadKeySpecifier),
		fields?: UpdateCheckRunPayloadFieldPolicy,
	},
	UpdateCheckSuitePreferencesPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCheckSuitePreferencesPayloadKeySpecifier | (() => undefined | UpdateCheckSuitePreferencesPayloadKeySpecifier),
		fields?: UpdateCheckSuitePreferencesPayloadFieldPolicy,
	},
	UpdateDiscussionCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateDiscussionCommentPayloadKeySpecifier | (() => undefined | UpdateDiscussionCommentPayloadKeySpecifier),
		fields?: UpdateDiscussionCommentPayloadFieldPolicy,
	},
	UpdateDiscussionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateDiscussionPayloadKeySpecifier | (() => undefined | UpdateDiscussionPayloadKeySpecifier),
		fields?: UpdateDiscussionPayloadFieldPolicy,
	},
	UpdateEnterpriseAdministratorRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseAdministratorRolePayloadKeySpecifier | (() => undefined | UpdateEnterpriseAdministratorRolePayloadKeySpecifier),
		fields?: UpdateEnterpriseAdministratorRolePayloadFieldPolicy,
	},
	UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseDefaultRepositoryPermissionSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseDefaultRepositoryPermissionSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseDefaultRepositoryPermissionSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseDefaultRepositoryPermissionSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanCreateRepositoriesSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanCreateRepositoriesSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanCreateRepositoriesSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanDeleteIssuesSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanDeleteIssuesSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanDeleteIssuesSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanDeleteIssuesSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanMakePurchasesSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanMakePurchasesSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanMakePurchasesSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanMakePurchasesSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseOrganizationProjectsSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseOrganizationProjectsSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseOrganizationProjectsSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseOrganizationProjectsSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseProfilePayloadKeySpecifier | (() => undefined | UpdateEnterpriseProfilePayloadKeySpecifier),
		fields?: UpdateEnterpriseProfilePayloadFieldPolicy,
	},
	UpdateEnterpriseRepositoryProjectsSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseRepositoryProjectsSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseRepositoryProjectsSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseRepositoryProjectsSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseTeamDiscussionsSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseTeamDiscussionsSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseTeamDiscussionsSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseTeamDiscussionsSettingPayloadFieldPolicy,
	},
	UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayloadKeySpecifier | (() => undefined | UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayloadKeySpecifier),
		fields?: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayloadFieldPolicy,
	},
	UpdateEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnvironmentPayloadKeySpecifier | (() => undefined | UpdateEnvironmentPayloadKeySpecifier),
		fields?: UpdateEnvironmentPayloadFieldPolicy,
	},
	UpdateIpAllowListEnabledSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIpAllowListEnabledSettingPayloadKeySpecifier | (() => undefined | UpdateIpAllowListEnabledSettingPayloadKeySpecifier),
		fields?: UpdateIpAllowListEnabledSettingPayloadFieldPolicy,
	},
	UpdateIpAllowListEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIpAllowListEntryPayloadKeySpecifier | (() => undefined | UpdateIpAllowListEntryPayloadKeySpecifier),
		fields?: UpdateIpAllowListEntryPayloadFieldPolicy,
	},
	UpdateIpAllowListForInstalledAppsEnabledSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIpAllowListForInstalledAppsEnabledSettingPayloadKeySpecifier | (() => undefined | UpdateIpAllowListForInstalledAppsEnabledSettingPayloadKeySpecifier),
		fields?: UpdateIpAllowListForInstalledAppsEnabledSettingPayloadFieldPolicy,
	},
	UpdateIssueCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIssueCommentPayloadKeySpecifier | (() => undefined | UpdateIssueCommentPayloadKeySpecifier),
		fields?: UpdateIssueCommentPayloadFieldPolicy,
	},
	UpdateIssuePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIssuePayloadKeySpecifier | (() => undefined | UpdateIssuePayloadKeySpecifier),
		fields?: UpdateIssuePayloadFieldPolicy,
	},
	UpdateLabelPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateLabelPayloadKeySpecifier | (() => undefined | UpdateLabelPayloadKeySpecifier),
		fields?: UpdateLabelPayloadFieldPolicy,
	},
	UpdateNotificationRestrictionSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateNotificationRestrictionSettingPayloadKeySpecifier | (() => undefined | UpdateNotificationRestrictionSettingPayloadKeySpecifier),
		fields?: UpdateNotificationRestrictionSettingPayloadFieldPolicy,
	},
	UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateOrganizationAllowPrivateRepositoryForkingSettingPayloadKeySpecifier | (() => undefined | UpdateOrganizationAllowPrivateRepositoryForkingSettingPayloadKeySpecifier),
		fields?: UpdateOrganizationAllowPrivateRepositoryForkingSettingPayloadFieldPolicy,
	},
	UpdateProjectCardPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProjectCardPayloadKeySpecifier | (() => undefined | UpdateProjectCardPayloadKeySpecifier),
		fields?: UpdateProjectCardPayloadFieldPolicy,
	},
	UpdateProjectColumnPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProjectColumnPayloadKeySpecifier | (() => undefined | UpdateProjectColumnPayloadKeySpecifier),
		fields?: UpdateProjectColumnPayloadFieldPolicy,
	},
	UpdateProjectNextItemFieldPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProjectNextItemFieldPayloadKeySpecifier | (() => undefined | UpdateProjectNextItemFieldPayloadKeySpecifier),
		fields?: UpdateProjectNextItemFieldPayloadFieldPolicy,
	},
	UpdateProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProjectPayloadKeySpecifier | (() => undefined | UpdateProjectPayloadKeySpecifier),
		fields?: UpdateProjectPayloadFieldPolicy,
	},
	UpdatePullRequestBranchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePullRequestBranchPayloadKeySpecifier | (() => undefined | UpdatePullRequestBranchPayloadKeySpecifier),
		fields?: UpdatePullRequestBranchPayloadFieldPolicy,
	},
	UpdatePullRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePullRequestPayloadKeySpecifier | (() => undefined | UpdatePullRequestPayloadKeySpecifier),
		fields?: UpdatePullRequestPayloadFieldPolicy,
	},
	UpdatePullRequestReviewCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePullRequestReviewCommentPayloadKeySpecifier | (() => undefined | UpdatePullRequestReviewCommentPayloadKeySpecifier),
		fields?: UpdatePullRequestReviewCommentPayloadFieldPolicy,
	},
	UpdatePullRequestReviewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePullRequestReviewPayloadKeySpecifier | (() => undefined | UpdatePullRequestReviewPayloadKeySpecifier),
		fields?: UpdatePullRequestReviewPayloadFieldPolicy,
	},
	UpdateRefPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateRefPayloadKeySpecifier | (() => undefined | UpdateRefPayloadKeySpecifier),
		fields?: UpdateRefPayloadFieldPolicy,
	},
	UpdateRefsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateRefsPayloadKeySpecifier | (() => undefined | UpdateRefsPayloadKeySpecifier),
		fields?: UpdateRefsPayloadFieldPolicy,
	},
	UpdateRepositoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateRepositoryPayloadKeySpecifier | (() => undefined | UpdateRepositoryPayloadKeySpecifier),
		fields?: UpdateRepositoryPayloadFieldPolicy,
	},
	UpdateSponsorshipPreferencesPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSponsorshipPreferencesPayloadKeySpecifier | (() => undefined | UpdateSponsorshipPreferencesPayloadKeySpecifier),
		fields?: UpdateSponsorshipPreferencesPayloadFieldPolicy,
	},
	UpdateSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSubscriptionPayloadKeySpecifier | (() => undefined | UpdateSubscriptionPayloadKeySpecifier),
		fields?: UpdateSubscriptionPayloadFieldPolicy,
	},
	UpdateTeamDiscussionCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTeamDiscussionCommentPayloadKeySpecifier | (() => undefined | UpdateTeamDiscussionCommentPayloadKeySpecifier),
		fields?: UpdateTeamDiscussionCommentPayloadFieldPolicy,
	},
	UpdateTeamDiscussionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTeamDiscussionPayloadKeySpecifier | (() => undefined | UpdateTeamDiscussionPayloadKeySpecifier),
		fields?: UpdateTeamDiscussionPayloadFieldPolicy,
	},
	UpdateTeamReviewAssignmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTeamReviewAssignmentPayloadKeySpecifier | (() => undefined | UpdateTeamReviewAssignmentPayloadKeySpecifier),
		fields?: UpdateTeamReviewAssignmentPayloadFieldPolicy,
	},
	UpdateTopicsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTopicsPayloadKeySpecifier | (() => undefined | UpdateTopicsPayloadKeySpecifier),
		fields?: UpdateTopicsPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserBlockedEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBlockedEventKeySpecifier | (() => undefined | UserBlockedEventKeySpecifier),
		fields?: UserBlockedEventFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserContentEdit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserContentEditKeySpecifier | (() => undefined | UserContentEditKeySpecifier),
		fields?: UserContentEditFieldPolicy,
	},
	UserContentEditConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserContentEditConnectionKeySpecifier | (() => undefined | UserContentEditConnectionKeySpecifier),
		fields?: UserContentEditConnectionFieldPolicy,
	},
	UserContentEditEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserContentEditEdgeKeySpecifier | (() => undefined | UserContentEditEdgeKeySpecifier),
		fields?: UserContentEditEdgeFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	UserEmailMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEmailMetadataKeySpecifier | (() => undefined | UserEmailMetadataKeySpecifier),
		fields?: UserEmailMetadataFieldPolicy,
	},
	UserStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStatusKeySpecifier | (() => undefined | UserStatusKeySpecifier),
		fields?: UserStatusFieldPolicy,
	},
	UserStatusConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStatusConnectionKeySpecifier | (() => undefined | UserStatusConnectionKeySpecifier),
		fields?: UserStatusConnectionFieldPolicy,
	},
	UserStatusEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserStatusEdgeKeySpecifier | (() => undefined | UserStatusEdgeKeySpecifier),
		fields?: UserStatusEdgeFieldPolicy,
	},
	VerifiableDomain?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifiableDomainKeySpecifier | (() => undefined | VerifiableDomainKeySpecifier),
		fields?: VerifiableDomainFieldPolicy,
	},
	VerifiableDomainConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifiableDomainConnectionKeySpecifier | (() => undefined | VerifiableDomainConnectionKeySpecifier),
		fields?: VerifiableDomainConnectionFieldPolicy,
	},
	VerifiableDomainEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifiableDomainEdgeKeySpecifier | (() => undefined | VerifiableDomainEdgeKeySpecifier),
		fields?: VerifiableDomainEdgeFieldPolicy,
	},
	VerifyVerifiableDomainPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyVerifiableDomainPayloadKeySpecifier | (() => undefined | VerifyVerifiableDomainPayloadKeySpecifier),
		fields?: VerifyVerifiableDomainPayloadFieldPolicy,
	},
	ViewerHovercardContext?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewerHovercardContextKeySpecifier | (() => undefined | ViewerHovercardContextKeySpecifier),
		fields?: ViewerHovercardContextFieldPolicy,
	},
	Votable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotableKeySpecifier | (() => undefined | VotableKeySpecifier),
		fields?: VotableFieldPolicy,
	},
	Workflow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkflowKeySpecifier | (() => undefined | WorkflowKeySpecifier),
		fields?: WorkflowFieldPolicy,
	},
	WorkflowRun?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkflowRunKeySpecifier | (() => undefined | WorkflowRunKeySpecifier),
		fields?: WorkflowRunFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;