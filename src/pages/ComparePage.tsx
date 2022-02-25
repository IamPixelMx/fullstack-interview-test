import React, { useState, useEffect, useRef } from "react";
import { Table, Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { useActions } from "store";
import {
  getRepo,
  getBranches,
  createPR,
  mergeBranch,
  mergePR,
} from "services/api";

const ComparePage = () => {
  const { fetchStart, fetchEnd, showAlert, setBranch } = useActions();
  const [allBranches, setAllBranches] = useState<null | any[]>(null);

  const baseRef = useRef<HTMLSelectElement>(null);
  const headRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const loadBranches = async () => {
    fetchStart();
    try {
      const data = await getBranches();
      const branches = data.map(({ name }: { name: string }) => name);
      setAllBranches(branches);
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

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (
      !(
        baseRef?.current?.value &&
        headRef?.current?.value &&
        titleRef?.current?.value &&
        bodyRef?.current?.value
      )
    ) {
      showAlert({
        text: "One or more required fields are empty. Please, fill all fields",
        status: "danger",
      });
      return;
    }

    const base: string = baseRef?.current?.value;
    const head: string = headRef?.current?.value;
    const title: string = titleRef?.current?.value;
    const body: string = bodyRef?.current?.value;

    const requiredParams = {
      base,
      head,
    };

    try {
      switch (name) {
        case "mergeBranches":
          const mergeBranchesParams = {
            ...requiredParams,
            commit_message: `${title}: ${body}`,
          };
          await mergeBranch(mergeBranchesParams);
          break;

        case "createPR":
          const createPullParams = {
            ...requiredParams,
            title,
            body,
          };
          await createPR(createPullParams);
          break;

        case "mergePR":
          const createPRparams = {
            ...requiredParams,
            title,
            body,
          };
          const data = await createPR(createPRparams);
          const { number } = data;
          const res = await mergePR(number);
          const { message } = res;
          showAlert({
            text: message,
            status: "success",
          });
          return;

        default:
          showAlert({
            text: "The action can't be compleated right now",
            status: "info",
          });
          return;
      }

      const successText =
        (name === "mergeBranches" && "Branches successfully merged") ||
        (name === "createPR" && "Pull request successfully created") ||
        "";

      successText &&
        showAlert({
          text: successText,
          status: "success",
        });
    } catch (error: any) {
      console.error("ERRRRRROR: ", error?.message);
      showAlert({
        text:
          error?.message ||
          "Something went wrong! The action couldn't be completed",
        status: "danger",
      });
    } finally {
      fetchEnd();
    }
  };

  useEffect(() => {
    loadBranches();
  }, []);

  return (
    <React.Fragment>
      <Table bordered>
        <thead>
          <tr>
            <th className="w-100">Create pull request</th>
          </tr>
        </thead>
        <tr></tr>
      </Table>
      <Form>
        {allBranches && (
          <Row>
            <Col md>
              <FloatingLabel label="Base" className="mb-3">
                <Form.Select ref={baseRef} size="sm">
                  <option>Select base branch</option>
                  {allBranches.map((name: string) => (
                    <option value={name} key={`base-option-${name}`}>
                      {name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel label="Head" className="mb-3">
                <Form.Select ref={headRef} size="sm">
                  <option>Select head branch</option>
                  {allBranches.map((name: string) => (
                    <option value={name} key={`head-option-${name}`}>
                      {name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        )}
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter a title"
            ref={titleRef}
            size="sm"
          />
        </FloatingLabel>
        <FloatingLabel label="Description" className="mb-3">
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter a description"
            ref={bodyRef}
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Row className="justify-content-between">
          <Col className="text-center">
            <Button
              name="mergeBranches"
              variant="outline-dark"
              type="button"
              onClick={onClick}
            >
              Merge branches
            </Button>
          </Col>
          <Col className="text-center">
            <Button
              name="mergePR"
              variant="outline-dark"
              type="button"
              onClick={onClick}
            >
              Merge as pull request
            </Button>
          </Col>
          <Col className="text-center">
            <Button
              name="createPR"
              variant="outline-dark"
              type="button"
              onClick={onClick}
            >
              Create pull request
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default ComparePage;

ComparePage.displayName = "ComparePage";
