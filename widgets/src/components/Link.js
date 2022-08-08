import React from "react";

const Link = ({ className, href, children }) => {
  //dont want a fullpage reload here so call preventDefault
    const onClick = (event) => {
        //allows you to use CTRL or CMD to open new tab
        if (event.metaKey || event.ctrlKey) {
            return;
      }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
