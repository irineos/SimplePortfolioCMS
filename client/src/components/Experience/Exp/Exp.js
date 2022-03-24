import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteExperience } from '../../../actions/experience';
import useStyles from './styles';

const Exp = ({ exp, setCurrentExperienceId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay2}>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentExperienceId(exp._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title}  variant="h5" component="h2">{exp.companyName}</Typography>
      <div className={classes.details}>
        <Typography variant="body2" color="primary" component="h2">{exp.period}</Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{exp.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteExperience(exp._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Exp;