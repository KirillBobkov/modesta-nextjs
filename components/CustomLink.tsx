import React from 'react'
import router from 'next/router';

export function CustomLink(props) {
  const linkHref = props.href;

  function customLinkOnClick(e) {
    e.preventDefault();
    props.onClick(e);
    router.push(linkHref);
  }

  return (
    <a {...props} href={linkHref} onClick={customLinkOnClick}>
      {props.children}
    </a>
  );
}