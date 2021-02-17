import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Message from '../assets/images/Messages-cuate.png'
import Device from '../assets/images/Devices-cuate.png'
import {useDispatch} from 'react-redux'
import {push} from 'connected-react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1024,
    margin: '60px auto 0',
    position: 'relative'
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  mg: {
    margin: 30,
    width: 120,
    height: 60,
    color: '#fff',
  },
  mg2: {
    margin: '30px 150px 30px 30px',
    width: 120,
    height: 60,
    color: '#fff',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Oswald, sans-serif',
    color: '#DEB887'
  },
  image: {
    width: 300,
    height: 'auto',
  },
  image2: {
    position: 'absolute',
    bottom: '-100px',
    left: 120,
    width: 350,
    height: 'auto',
  }
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      
      <div className={classes.root}>
        <div className='flex'>
          <div>
            <h2 className={classes.title}>友達や恋人とYoutubeを見よう！！</h2>
            <p>コロナ禍で外に出られない今はお家でまったりYoutubeを見て楽しみませんか？</p>
            <p>HomeVideoは離れている友達や恋人だけの世界でYoutubeを見ることができます。</p>
            <p>Youtubeを見ながらチャットをして盛り上がりましょう！！</p>
          </div>
          <div>
            <img className={classes.image} src={Message} alt="メッセージ"/>
          </div>
        </div>
        <div className={classes.flex}>
          <Button className={classes.mg} variant="contained" color="secondary" onClick={() => dispatch(push('/room/create'))}>
            部屋を作る
          </Button>
          <Button className={classes.mg2} variant="contained" color="secondary" onClick={() => dispatch(push('/room/enter'))}>
            部屋に入る
          </Button>
        </div>
        <img className={classes.image2} src={Device} alt="デバイス"/>
      </div>
    </>
  )
}

export default Home