"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {


  
  const [webhook, setWebHook] = useState(null)

  const br = [
    // if it says it's a webview, let's go with that
    'WebView',
    // iOS webview will be the same as safari but missing "Safari"
    '(iPhone|iPod|iPad)(?!.*Safari)',
    // Android Lollipop and Above: webview will be the same as native but it will contain "wv"
    // Android KitKat to Lollipop webview will put Version/X.X Chrome/{version}.0.0.0
    'Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})',
    // old chrome android webview agent
    'Linux; U; Android'
  ]

  var webviewRegExp = new RegExp('(' + br.join('|') + ')', 'ig')

 function isWebview(ua) {
    return !!ua.match(webviewRegExp)
  }


  
  useEffect(()=>{
    const x = isWebview(window.navigator.userAgent)
    console.log( "isWebView", x );


    var isWebView = false;
var userAgent = window.navigator.userAgent;

if (/Android/.test(userAgent)) {
  // Check the Android version to determine how to differentiate WebView from Chrome
  var androidVersion = parseFloat(userAgent.slice(userAgent.indexOf("Android")+8));
  if (androidVersion >= 10) {
    // For Android 10 and above, check for the "wv" field in the user-agent string
    isWebView = /(wv)/.test(userAgent);
  } else {
    // For versions of Android below 10, check for the "Version/_X.X_" string in the user-agent string
    isWebView = userAgent.includes("Version/");
  }
}

if (isWebView) {

   // user is viewing page from WebView

   setWebHook(true)
   
} else {

  //user is not using WebView
}





  }, [])

  const handleClick = ()=>{

    // window.location.href = "external:https://webviewredirect.vercel.app/"

    window.open('https://webviewredirect.vercel.app', '_system')

  }
//   var standalone = window.navigator.standalone,
//   userAgent = window.navigator.userAgent.toLowerCase(),
//   safari = /safari/.test(userAgent),
//   ios = /iphone|ipod|ipad/.test(userAgent);

// if (ios) {
//   if (!standalone && safari) {
//     // Safari
//   } else if (!standalone && !safari) {
//     // iOS webview
//   };
// } else {
//   if (userAgent.includes('wv')) {
//     // Android webview
//   } else {
//     // Chrome
//   }
// };


//  new one

var isWebView = false;
var userAgent = navigator.userAgent;

if (/Android/.test(userAgent)) {
  // Check the Android version to determine how to differentiate WebView from Chrome
  var androidVersion = parseFloat(userAgent.slice(userAgent.indexOf("Android")+8));
  if (androidVersion >= 10) {
    // For Android 10 and above, check for the "wv" field in the user-agent string
    isWebView = /(wv)/.test(userAgent);
  } else {
    // For versions of Android below 10, check for the "Version/_X.X_" string in the user-agent string
    isWebView = userAgent.includes("Version/");
  }
}

if (isWebView) {

   // user is viewing page from WebView


} else {

  //user is not using WebView
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

    <p> WebView : { webhook ? "true" : "false" }  </p>

    <button onClick={handleClick} > Redirect</button>

    </main>
  );
}
