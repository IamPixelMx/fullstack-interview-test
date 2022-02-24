import { useActions } from "store";
import { Alert as BootstrapAlert } from "react-bootstrap";

const Alert = ({
  alertText,
  alertStatus,
}: {
  alertText: string;
  alertStatus: string;
}) => {
  const { clearAlert } = useActions();

  if (!(alertText && alertStatus)) return null;

  return (
    <BootstrapAlert variant={alertStatus} onClose={clearAlert} dismissible>
      <BootstrapAlert.Heading className="text-capitalize">
        {alertStatus === "danger" ? "error" : alertStatus}
      </BootstrapAlert.Heading>
      <p>{alertText}</p>
    </BootstrapAlert>
  );
};

export default Alert;
