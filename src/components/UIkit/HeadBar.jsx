import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {logout} from '../../reducks/users/operations'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider'
import {useSelector} from 'react-redux'
import {getIsSignedIn, getUserName, getUserId} from '../../reducks/users/selectors'
import {push} from 'connected-react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff',
    cursor: 'pointer',
  },
  mb: {
    padding: 10,
    marginBottom: 0,
  },
  pd: {
    padding: '0 124px',
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const HeadBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.pd}>
          <Typography variant="h6" className={classes.title} onClick={() => dispatch(push('/'))}>
            Home Video
          </Typography>
          {isSignedIn && (
            <IconButton onClick={handleClickOpen}>
              <AccountCircleIcon />
            </IconButton>
          )}
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              ユーザー情報
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom className={classes.mb}>
                アカウント名：{username}
              </Typography>
              <Divider/>
              <Typography gutterBottom className={classes.mb}>
                メールアドレス：000
              </Typography>
              <Divider/>
              <Typography gutterBottom className={classes.mb}>
                アカウントID：{uid}
              </Typography>
              <Divider/>
              <DialogActions>
                <Button className='btn-dialog' onClick={() => dispatch(logout())}>ログアウト</Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default HeadBar
