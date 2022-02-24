import { Spinner } from "react-bootstrap";

const Loader = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <div className="backdrop h-100 w-100" tabIndex={-1}>
      <div className="d-table-cell align-middle text-center">
        <Spinner animation="border" variant="light" />
      </div>
    </div>
  );
};
export default Loader;
