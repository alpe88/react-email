import { Html } from "@react-email/components";
import * as React from "react";

export default function Email(props) {
  return (
    <Html>
      <pre>{props}</pre>
    </Html>
  );
}
