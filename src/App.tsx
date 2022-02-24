import { Route, useRouter } from "router";
import { Home, BranchesPage, BranchPage, PullsPage, CommitPage } from "pages";
import { Layout } from "components";

const App = () => {
  const { routesList } = useRouter();

  return (
    <Layout>
      <Route path={routesList.home.path}>
        <Home />
      </Route>
      <Route path={routesList.branches.path}>
        <BranchesPage />
      </Route>
      <Route path={routesList.branch.path}>
        <BranchPage />
      </Route>
      <Route path={routesList.pulls.path}>
        <PullsPage />
      </Route>
      <Route path={routesList.commit.path}>
        <CommitPage />
      </Route>
    </Layout>
  );
};

export default App;
