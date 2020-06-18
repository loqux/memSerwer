import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  IconButton,
  Popover,
} from "@material-ui/core";
import {
  ArrowUpwardRounded,
  ArrowDownwardRounded,
  Star,
} from "@material-ui/icons";
import styles from "./Mem.module.css";

const Mem = ({ mem, onUpvoteClick, onDownvoteClick, onMarkStar }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card className={styles.memCard}>
      <CardContent>
        <Typography variant="h4">{mem.title}</Typography>
        <img className={styles.memImg} src={mem.img} alt={mem.title} />
      </CardContent>
      <CardActions>
        <Grid container align="center" justify="center" alignItems="center">
          <Grid
            item
            sm={2}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <IconButton
              onClick={() => onMarkStar(mem)}
              color={mem.star ? "primary" : "default"}
            >
              <Star style={{ fontSize: 50 }} />
            </IconButton>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              style={{ pointerEvents: "none" }}
            >
              <Typography>Add to favorite</Typography>
            </Popover>
          </Grid>
          <Grid item sm={5}>
            <Button
              variant="contained"
              className={styles.voteButton}
              onClick={() => onUpvoteClick(mem)}
            >
              <ArrowUpwardRounded />
              {mem.upvotes}
            </Button>
          </Grid>
          <Grid item sm={5}>
            <Button
              className={styles.voteButton}
              variant="contained"
              onClick={() => onDownvoteClick(mem)}
            >
              <ArrowDownwardRounded />
              {mem.downvotes}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Mem;
