import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 360,
    height: 500,
    padding: 0,
  },
  media: {
    height: 260,
    paddingTop: '56.25%', // 16:9
    paddingBottom: 0
  },
};

function AirJordans(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="airjordans.png"
          title="AirJordans"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            AirJordans
          </Typography>
          <Typography component="p" style={{textAlign: 'left'}}>
          System design of reviews microservice for short-term lodging listing page.
          <br/>          
          <br/>          
          <div style={{fontSize: '11px', color: 'black', textAlign: 'left'}}>
            <div>Tech Stack: Postgres, Cassandra, New Relic, Loader.io, NGINX,
            <i className="fab fa-docker fa-1x"></i>
            <i className="fab fa-aws fa-1x"></i>
            </div>

          </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/airJordans/review-module" className="icons">
            Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}


export default withStyles(styles)(AirJordans);