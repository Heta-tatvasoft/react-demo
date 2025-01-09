  import React from "react";
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import Button from '@mui/material/Button';
  import Snackbar from '@mui/material/Snackbar';
// for adding custom snackbar content
  import SnackbarContent from "@mui/material/SnackbarContent";

  import CloseImage from '../assets/images/close-icon-gray.svg';
  import Fade from "@mui/material/Fade";
  import Alert from '@mui/material/Alert';

  const SnackBarComponent = () => {

    // Basic
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    const action = (
      <Button variant="outlined" color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
    );


    // Basic snamckbar with inline action
    const [openInline, setOpenInline] = React.useState(false);

    const handleInlineClick = () => {
      setOpenInline(true);
    };

    const handleInlineClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpenInline(false);
    };

    // Position options
    const [openPosition, setOpenPosition] = React.useState({
      display: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, display } = openPosition;

    const handlePositionClick = (newOpenPosition) => {
      setOpenPosition({ ...newOpenPosition, display: true });
    };

    const handlePositionClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpenPosition({ ...openPosition, display: false });
    };

    const actionPosition = (
      <Button variant="outlined" color="secondary" size="small" onClick={handlePositionClose}>
        close
      </Button>
    );


    // SnackbarContent Example
    const [openCustom, setOpenCustom] = React.useState(false);

    const handleCustomClick = () => {
      setOpenCustom(true);
    }
    const handleCustomClose = () => {
      setOpenCustom(false);
    }
    const actionCustom = (
      <Button variant="outlined" color="secondary" size="small" onClick={handleCustomClose}>
        <img src={CloseImage} alt="close" />
      </Button>
    );

    // Snackbar with Alerts Example
    const [openAlert, setOpenAlert] = React.useState(false);

    const handleAlertClick = () => {
      setOpenAlert(true);
    }
    const handleAlertClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpenAlert(false);
    }
    const actionAlert = (
      <Button variant="outlined" color="secondary" size="small" onClick={handleCustomClose}>
        <img src={CloseImage} alt="close" />
      </Button>
    );


    return (
      <div>
        <section>
          <div className="container">
            <Card variant="outlined" className="snackbar-component-wrapper">
              <CardContent>
                <h2>SnackBar Component</h2>
                <div className="description">
                  <p>Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.</p>
                  <div className="item-wrapper">
                    <h3>Basic Snackbar with transition variations</h3>
                    <Button variant="outlined" onClick={handleClick}>Open Snackbar</Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="Hi! I'm Basic Snackbar message.."
                      action={action}
                      TransitionComponent={Fade}
                    />
                    {/* // import Grow from "@mui/material/Grow";
                    // TransitionComponent={Grow} */}
                  </div>
                  <div className="item-wrapper">
                    <h3>Basic Snackbar with inline Action</h3>
                    <Button variant="outlined" onClick={handleInlineClick}>Open Snackbar</Button>
                    <Snackbar
                      open={openInline}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="Hi! I'm Snackbar with inline action.."
                      TransitionComponent={Fade}
                      action={
                        <Button variant="outlined" color="secondary" size="small" onClick={handleInlineClose}>
                          <img src={CloseImage} alt="close" />
                        </Button>
                      } 
                    />
                    {/* // import Grow from "@mui/material/Grow";
                    // TransitionComponent={Grow} */}
                  </div>
                  <div className="item-wrapper">
                    <h3>Basic Snackbar with position options</h3>
                    <Button variant="outlined" onClick={() => handlePositionClick({ vertical: 'bottom', horizontal: 'center' })}>Open Snackbar</Button>
                    <Snackbar
                      anchorOrigin= {{ vertical, horizontal }}
                      open={display}
                      autoHideDuration={3000}
                      onClose={handlePositionClose}
                      message="Lorem ipsum dolor sit amet consectetur."
                      action={actionPosition}
                    />
                    <p>Possible position options are:</p>
                    <ul>
                      <li>top center</li>
                      <li>top left</li>
                      <li>top right</li>
                      <li>bottom center</li>
                      <li>bottom left</li>
                      <li>bottom right</li>
                    </ul>
                  </div>
                  <div className="item-wrapper">
                    <h3>Snackbar with Use of SnackbarContent</h3>
                    <Button variant="outlined" onClick={handleCustomClick}> Open Custom Snackbar</Button>
                    <Snackbar
                      open={openCustom}
                      autoHideDuration={60000}
                      onClose={handleCustomClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    >
                      <SnackbarContent
                        message="This is a custom snackbar position and SnackbarContent both are used "
                        action={actionCustom}
                        style={{
                          backgroundColor: "#2196f3", // Blue background
                          color: "white", // Text color
                        }}
                      />
                    </Snackbar>
                  </div>
                  <div className="item-wrapper">
                    <h3>Snackbar with Alert</h3>
                    <Button variant="outlined" onClick={handleAlertClick}>Open Snackbar</Button>
                    <Snackbar
                      open={openAlert}
                      autoHideDuration={6000}
                      onClose={handleAlertClose}
                      message="Hi! I'm Basic Snackbar message.."
                      action={actionAlert}
                      TransitionComponent={Fade}> 
                        <Alert
                            onClose={handleAlertClose}
                            severity="success"
                            variant="filled"
                            sx={{ width: '100%' }}
                          >
                            This is a success Alert inside a Snackbar!
                          </Alert>
                      </Snackbar>
                      {/* error, info, warning */}
                  </div>
                </div>
                </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  };
  export default SnackBarComponent;


