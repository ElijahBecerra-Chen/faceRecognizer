import React from "react";

export default function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signOut")}
          className="f3 pr3 link pointer fw6 dim p3 black underline"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signIn")}
          className="f3 link pointer fw6 dim p3 black underline"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 pl3 pr3 link pointer fw6 dim p3 black underline"
        >
          Register
        </p>
      </nav>
    );
  }
}
