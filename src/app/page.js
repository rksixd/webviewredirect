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
    setWebHook(x)

  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

    <p> WebView : { webhook ? "true" : "false" }  </p>

    </main>
  );
}
