import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { db } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Video} from '../components/Youtube/'
import {ChatArea} from '../components/Chat'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Room = () => {
  const selector = useSelector(state => state);
  const path = selector.router.location.pathname;
  const id = path.split('/room/')[1];
  const classes = useStyles();
  
  const [room, setRoom] = useState(null);
  
  useEffect(() => {
    db.collection('rooms').doc(id).get()
      .then((doc) => {
        const data = doc.data();
        setRoom(data);
      })
  }, [id])

  return (
    <section>
      {room && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Video />
            </Grid>
            <Grid item xs={12} sm={5}>
              <ChatArea />
            </Grid>
          </Grid>
        </div>
      )}
    </section>
  )
}

export default Room