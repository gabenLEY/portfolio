import { useState, Fragment } from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export default function Signal(props) {
  const [show, setShow] = useState(true);
 
  return (
    <Fragment>
      {!show && (
        <Button
          variant="gradient"
          className="absolute"
          onClick={() => setShow(true)}
        >
          Show Alert
        </Button>
      )}
      <Alert
        show={show}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {props.message}
      </Alert>
    </Fragment>
  );
}