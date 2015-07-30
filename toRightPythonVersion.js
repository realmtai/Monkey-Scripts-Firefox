// ==UserScript==
// @name        ToTheRightPythonVersion
// @namespace   docs.python.org
// @match       https://docs.python.org/*
// @match       http://docs.python.org/*
// @version     1
// @grant       none
// ==/UserScript==


var pathname = window.location.pathname;
var default_version = "3.4"

pathnameSplitted = pathname.split('/')
if (pathnameSplitted.length > 1) {
  console.log(pathnameSplitted[1])
  if (pathnameSplitted[1] === default_version){
    console.log("Nothing need to be done")
    return
  }
  pathnameSplitted[1] = default_version;
  pathnameSplitted[0] = window.location.origin;

  # console.log("We are going to ");
  # console.log(pathnameSplitted.join('/'));

  window.location.replace(pathnameSplitted.join('/'))

}

