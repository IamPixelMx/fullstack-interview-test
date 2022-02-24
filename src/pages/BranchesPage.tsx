import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useActions } from "store";
import { useRouter } from "router";
import { getRepo, getBranches } from "services/api";
import { Link } from "components";

const BranchesPage = () => {
  const { routesList, setRoutesList } = useRouter();
  const { fetchStart, fetchEnd, showAlert, setBranch } = useActions();
  const [allBranches, setAllBranches] = useState<null | any[]>(null);

  const loadBranches = async () => {
    fetchStart();
    try {
      const data = await getBranches();
      setAllBranches(data);
      const repoData = await getRepo();
      const { default_branch = "master" } = repoData;
      setBranch(default_branch);
    } catch (error: any) {
      showAlert({
        text: error?.message || "Something went wrong!",
        status: "danger",
      });
    } finally {
      fetchEnd();
    }
  };

  const onClick = (name: string) => {
    setRoutesList({ ...routesList, branch: { path: `/branch/${name}` } });
    setBranch(name);
  };

  useEffect(() => {
    loadBranches();
  }, []);

  return (
    <React.Fragment>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>All branches</th>
          </tr>
        </thead>
        <tbody>
          {allBranches &&
            allBranches.map(({ name }: { name: string }) => (
              <tr key={`branch-${name}`}>
                <td>
                  <Link
                    to={`/branch/${name}`}
                    className="dark-link"
                    onClick={() => onClick(name)}
                  >
                    {name}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default BranchesPage;

BranchesPage.displayName = "AllBranchesPage";
