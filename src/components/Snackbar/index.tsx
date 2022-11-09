import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type AlertColor = "success" | "info" | "warning" | "error";

interface SnackbarProps {
  timeAlert: number;
  textAlert: string;
  severity: AlertColor;
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event) => void;
}

const SnackbarWithAlert = ({
  timeAlert,
  textAlert,
  severity,
  open,
  onClose,
}: SnackbarProps): JSX.Element => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={timeAlert}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity}>
        {textAlert}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWithAlert;
