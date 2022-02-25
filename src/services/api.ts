import fetchInstance from "./fetchInstance";

export const getRepo = async () => fetchInstance.get();

export const getBranches = () => fetchInstance.get(`/branches`);

export const getBranchDetail = (branch?: string) =>
  fetchInstance.get(`/branches/${branch}`);

export const getCommits = (branch?: string) =>
  fetchInstance.get(branch ? `/commits?sha=${branch}` : `/commits`);

export const getCommitDetail = (commitRef: string) =>
  fetchInstance.get(`/commits/${commitRef}`);

export const getPRs = () => fetchInstance.get(`/pulls?state=all`);

interface BranchParamsType {
  base: string;
  head: string;
}

interface MergeParamsType extends BranchParamsType {
  commit_message: string;
}
export const mergeBranch = (params: MergeParamsType) =>
  fetchInstance.post(`/merges`, params);

export interface NewPRParamsType extends BranchParamsType {
  title: string;
  body: string;
}
export const createPR = (params: NewPRParamsType) =>
  fetchInstance.post(`/pulls`, params);

// export const mergePR = (prNumber: number) =>
//   fetchInstance.post(`/pulls/${prNumber}/merge`);

export const closePR = (prNumber: number) =>
  fetchInstance.patch(`/pulls/${prNumber}`, { state: "closed" });
