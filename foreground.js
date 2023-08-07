// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.
const newFaviconURL = "https://pbs.twimg.com/media/F2c4zmJakAASCw0?format=png&name=large"; // Replace this URL with your desired favicon URL
const logo = document.querySelectorAll('[aria-label]');
const existingFavicon = document.querySelector("link[rel*='shortcut icon']");
if (existingFavicon) {
  existingFavicon.href = newFaviconURL;
} else {
  const newFavicon = document.createElement("link");
  newFavicon.setAttribute("rel", "icon");
  newFavicon.setAttribute("href", newFaviconURL);
  document.head.appendChild(newFavicon);
}