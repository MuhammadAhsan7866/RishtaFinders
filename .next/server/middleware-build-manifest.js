self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/OurVision": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/OurVision.js"
    ],
    "/Register": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/Register.js"
    ],
    "/SignIn": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/SignIn.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];