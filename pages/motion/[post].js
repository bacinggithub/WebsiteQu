import React, { useEffect } from "react";
import Link from "next/link";
import posts from "../../data/posts";
import { motion } from "framer-motion";
import PostInfo from "../../src/layouts/post-info";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  button: {
    margin: `${theme.spacing(8)}px auto`,
    padding: theme.spacing(1),
  },
}));
let easing = [0.175, 0.85, 0.42, 0.96];
const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};
const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};
const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};
const Post = ({ post }) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.root}>
      <Container className={classes.main} maxWidth="xl">
        <motion.div initial="exit" animate="enter" exit="exit">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={0}>
                <motion.img
                  variants={imageVariants}
                  src={`/static/images/${post.id}.jpg`}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={0}>
                <motion.div variants={textVariants}>
                  <PostInfo post={post} />
                  <p>{post.text}</p>
                </motion.div>
                <motion.div variants={backVariants}>
                  <Link href="/motion">
                    <a>Back to list</a>
                  </Link>
                  <br />
                </motion.div>
                <motion.div variants={textVariants}>
                  <Link href="/project">
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      Bayar
                    </Button>
                  </Link>
                </motion.div>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
};
Post.getInitialProps = ({ query }) => {
  let post = posts.find((post) => post.id == query.post);
  return {
    post,
  };
};
export default Post;
