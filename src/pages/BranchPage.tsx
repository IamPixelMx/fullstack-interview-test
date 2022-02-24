import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import {  useRouter } from "router";
import { useStore, useActions } from "store";
import { getCommits } from "services/api";
import { Link } from "components";

const BranchPage = () => {
  const { routesList, setRoutesList } = useRouter();
  const {
    state: { currentBranch },
  } = useStore();
  const { fetchStart, fetchEnd, showAlert, setCommit } = useActions();
  const [commits, setCommits] = useState<null | any[]>(null);

  const loadCommits = async () => {
    fetchStart();
    try {
      const data = await getCommits(currentBranch);
      setCommits(data);
    } catch (error: any) {
      showAlert({
        text: error?.message || "Something went wrong!",
        status: "danger",
      });
    } finally {
      fetchEnd();
    }
  };

  const onClick = (sha: string) => {
    setRoutesList({ ...routesList, commit: { path: `/commit/${sha}` } });
    setCommit(sha);
  };

  useEffect(() => {
    loadCommits();
  }, []);

  return (
    <React.Fragment>
      <Table>
        <thead>
          <tr>
            <th>{currentBranch}</th>
          </tr>
        </thead>
      </Table>

      {commits &&
        commits.map(
          ({
            sha,
            commit: { message, author },
          }: {
            sha: string;
            commit: any;
          }) => (
            <Table bordered>
              <tbody>
                <tr>
                  <th className="table-active" colSpan={3}>
                    <Link
                      to={`/commit/${sha}`}
                      className="dark-link"
                      onClick={() => onClick(sha)}
                    >
                      {message}
                    </Link>
                  </th>
                </tr>
                <tr>
                  <td>{author.name}</td>
                  <td>{author.date}</td>
                </tr>
              </tbody>
            </Table>
          )
        )}
    </React.Fragment>
  );
};

export default BranchPage;

BranchPage.displayName = "CurrentBranchPage";
