import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Head from "next/head";
import Layout, { siteTitle } from "../src/component/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../src/component/date";
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
export default function Blog({ allPostsData }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.main} maxWidth="sm">
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section>
            <p>Blog || Next Js || React Js || Material Ui ||</p>
          </section>
          <section>
            <h2>List Blog</h2>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      </Container>
    </div>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
