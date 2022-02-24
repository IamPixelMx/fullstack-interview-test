import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useStore, useActions } from "store";
import { getCommitDetail } from "services/api";

const CommitPage = () => {
  const {
    state: { currentCommit },
  } = useStore();
  const { fetchStart, fetchEnd, showAlert } = useActions();
  const [commitDetail, setCommitDetail] = useState<null | any>(null);

  const loadCommitDetail = async () => {
    fetchStart();
    try {
      const data = await getCommitDetail(currentCommit);
      setCommitDetail(data);
    } catch (error: any) {
      showAlert({
        text: error?.message || "Something went wrong!",
        status: "danger",
      });
    } finally {
      fetchEnd();
    }
  };

  useEffect(() => {
    loadCommitDetail();
  }, []);

  return (
    <React.Fragment>
      <Table bordered>
        <thead>
          <tr>
            <th className="table-active" colSpan={2}>
              {commitDetail?.commit?.message}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="w-25">Author:</th>
            <td>{commitDetail?.commit?.author?.name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{commitDetail?.commit?.author?.email}</td>
          </tr>
          <tr>
            <th>Date:</th>
            <td>{commitDetail?.commit?.author?.date}</td>
          </tr>
        </tbody>
      </Table>

      <Table className="mt-5" striped hover>
        <thead>
          <tr>
            <th colSpan={3}>Files</th>
          </tr>
        </thead>
        <tbody>
          {commitDetail?.files.map(
            (
              { filename, sha }: { filename: string; sha: string },
              i: number
            ) => (
              <tr key={sha}>
                <th>{i + 1}</th> <th>{filename}</th>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default CommitPage;

CommitPage.displayName = "CurrentCommitPage";
