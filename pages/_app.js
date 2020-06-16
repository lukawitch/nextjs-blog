import React from "react";
import App, { Container } from "next/app";
import { Provider } from "mobx-react";
import Router from "next/router";
import withFBQ from "next-fbq";
import TagManager from "react-gtm-module";
import initializeStore from "../stores/stores";

import "bootstrap/dist/css/bootstrap.css";
const tagManagerArgs = {
  gtmId: "GTM-MGN9D85",
};

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

  static async getInitialProps(appContext) {
    const kakaoKey = "79f4a4e9c21f0d6f7f2a173a3c9e130f";
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default withFBQ("273549143770693", Router)(MyApp);
