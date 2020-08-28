import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "../../src/component/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../src/component/date";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#FFF",
  },
  main: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  footer: {
    padding: theme.spacing(3, 2),
    background: "rgba(76, 175, 80, 0)",
  },
  button: {
    marginTop: theme.spacing(5),
    width: "250px",
  },
  textheader: {
    marginTop: "70px",
    fontSize: "30px",
  },
  textbatas: {
    maxWidth: "250px",
    color: "#e8e4e1",
  },
  medsos: {
    justifyContent: "flex-end",
  },
}));
export default function Post({ postData }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.main} maxWidth="sm">
        <Layout>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 className={classes.textheader}>{postData.title}</h1>
            <div>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </Layout>
      </Container>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
