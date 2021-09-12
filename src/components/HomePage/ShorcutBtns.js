import React,{ useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getShortcutButtons} from '../../store/actions/homepage';

import './css/shortcutBtns.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '90%',
    marginTop:"30px",
    maxWidth:"1200px"
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const ButtonBases = ({getShortcutButtons, shortcutBtns}) => {
  const classes = useStyles();

  useEffect(()=> {
    if(shortcutBtns.length === 0){
      getShortcutButtons()
    }
  },[shortcutBtns.length,getShortcutButtons])
  

  return (
    <>
    <div className={`${classes.root} `}>
      {shortcutBtns.map((btn) => (
        <ButtonBase
          focusRipple
          href= {btn.link}
          key={btn.title}
          className={`${classes.image} r-btn--group`}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: btn.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${btn.imgurl})`,
              backgroundColor:" #f50057"
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {btn.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}

            
    </div>
    </>
  );
}

ButtonBases.prototypes = {
  shortcutBtns: PropTypes.array.isRequired,
  getShortcutButtons: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  shortcutBtns: state.homepage.shortcutBtns
})

export default  connect(mapStateToProps, {getShortcutButtons})(ButtonBases)