import React from "react";
import ReactDOM from "react-dom";

import { Link } from "./Link";

/**
 * A straightforward link wrapper that renders an <a> with the passed props.
 * What we are testing here is that the Link component passes the right props to the wrapper and itself.
 */
const LinkWrapper = (props) => <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content

it("has an href attribute when rendering with linkWrapper", () => {
  const div = document.createElement("div");
  const url = "https://foo.bar";
  const text = "Link Text";
  ReactDOM.render(
    <Link href={url} LinkWrapper={LinkWrapper}>
      {text}
    </Link>,
    div
  );

  expect(div.querySelector(`a[href="${url}"]`)).not.toBeNull();
  expect(div.textContent).toEqual(text);

  ReactDOM.unmountComponentAtNode(div);
});
