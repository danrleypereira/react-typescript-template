/* eslint-disable */
const webStream = {
  get: function (url, callback) {
      let webClient;

      if (url.startsWith("http://")) {
          webClient = require("http");
      } else if (url.startsWith("https://")) {
          webClient = require("https");
      } else {
          throw "Unsupported protocol.";
      }

      let clientRequest = webClient.get(url, function (response) {
          let context = {
              url: url,
              boundary: "",
              contentType: "",
              contentLength: 0
          };

          let headersCompleted = false;
          let bodyCompleted = false;
          let buffer = null;
          let receivedBodyChunk = 0;

          response.on("data", function (chunk) {
              if (!headersCompleted) {
                  let headers = chunk.toString().split(/\r?\n/);

                  context.boundary = headers[0].substring(2);
                  context.contentType = headers[1].split(":")[1].trim();
                  context.contentLength = parseInt(headers[2].split(":")[1]);

                  buffer = Buffer.alloc(context.contentLength);

                  headersCompleted = true;
              } else {
                  if (!bodyCompleted) {
                      if (receivedBodyChunk < context.contentLength) {
                          chunk.copy(buffer, receivedBodyChunk, 0, chunk.byteLength);

                          receivedBodyChunk += chunk.byteLength;

                          if (receivedBodyChunk === context.contentLength) {
                              bodyCompleted = true;
                          }
                      }
                  }

                  if (bodyCompleted) {
                      callback(buffer, context);

                      headersCompleted = false;
                      bodyCompleted = false;
                      buffer = null;
                      receivedBodyChunk = 0;
                  }
              }
          });
      });

      return {
          url: url,
          handler: clientRequest,
          on: function (type, listener) {
              clientRequest.on(type, listener);
          },
          abort: function () {
              clientRequest.abort();
          }
      };
  }
};


let stream = webStream.get("http://127.0.0.1:5000/video_feed", function (data, context) {
    // data: Received content (Buffer)
    // context: { url, boundary, contentType, contentLength }

    // TODO: Do something here...
});

// stream.abort();

// stream.on("error", function(e) {
//     console.log("Error: " + e.message);
// });
