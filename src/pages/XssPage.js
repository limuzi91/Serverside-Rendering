import React, { Component } from "react";
import EscapeInput from "../components/security/EscapeInput";
import DangerousHTML from "../components/security/DangerousHTML";
import SanitizeCode from "../components/security/SanitizeCode";
import UserHref from "../components/security/UserHref";
import ServerRedux from "../components/security/ServerRedux";
import { Helmet } from "react-helmet";

class XssPage extends Component {
  head = () => {
    return (
      <Helmet>
        <title>React Security</title>
        <meta
          property="og:title"
          content="How to prevent XSS attack in React"
        />
        <meta
          name="description"
          content={`React Security: How to prevent XSS attack in React`}
        />
      </Helmet>
    );
  };
  render() {
    return (
      <div className="container">
        {this.head()}
        <h2 className="mt-4">React Security Examples</h2>
        <hr />
        <EscapeInput />
        <hr />
        <DangerousHTML />
        <hr />
        <SanitizeCode />
        <hr />
        <UserHref />
        <hr />
        <ServerRedux />
        <div style={{ minHeight: 300 }} />
      </div>
    );
  }
}
export default XssPage;
