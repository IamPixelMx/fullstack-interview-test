import React, { useState, useEffect } from "react";
import { Table, Badge, Button } from "react-bootstrap";
import { getPRs, closePR } from "../services/api";
import { useActions } from "../store";

const PullsPage = () => {
  const { fetchStart, fetchEnd, showAlert } = useActions();
  const [allPulls, setAllPulls] = useState<null | any[]>(null);

  const loadPulls = async () => {
    fetchStart();
    try {
      const data = await getPRs();
      setAllPulls(data);
    } catch (error: any) {
      showAlert({
        text: error?.message || "Something went wrong!",
        status: "danger",
      });
    } finally {
      fetchEnd();
    }
  };

  const onClick = async (number: number) => {
    fetchStart();
    try {
      await closePR(number);
      showAlert({
        text: "Pull request has been closed",
        status: "success",
      });
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
    loadPulls();
  }, []);

  return (
    <React.Fragment>
      <Table bordered striped>
        <thead>
          <tr>
            <th className="w-100">Pull requests</th>
          </tr>
        </thead>
        <tr></tr>
      </Table>
      {!(allPulls && allPulls.length > 0) && "No pull request has been created"}
      {allPulls &&
        allPulls.map(
          ({
            user: { login },
            title,
            body,
            state,
            number,
          }: {
            user: { login: string };
            title: string;
            body: string;
            state: string;
            number: number;
          }) => (
            <Table>
              <tbody key={`pr-${number}`}>
                <tr>
                  <th className="table-active" colSpan={6}>
                    {title}
                  </th>
                </tr>
                <tr>
                  <td className="w-25">{login}</td>
                  <td>{body || "No description"}</td>
                  <td className="text-capitalize text-center w-25">
                    <div className="d-inline-block w-50">
                      <Badge bg={state === "open" ? "success" : "danger"}>
                        {state}
                      </Badge>
                    </div>
                    <div className="d-inline-block w-50">
                      {state === "open" && (
                        <Button
                          variant="dark"
                          className="text-capitalize"
                          size="sm"
                          onClick={() => onClick(number)}
                        >
                          close
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          )
        )}
    </React.Fragment>
  );
};

export default PullsPage;

PullsPage.displayName = "AllPullsPage";
