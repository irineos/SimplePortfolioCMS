import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteSkill } from '../../../actions/skills';
import useStyles from './styles';

const Skill = ({ skill, setCurrentSkillId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay2}>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentSkillId(skill._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{skill.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{skill.technologies?.map((tech) => <li key={tech}>{tech}</li> )} </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteSkill(skill._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Skill;