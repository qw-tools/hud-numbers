import "./canvas-toBlob.js";

Blob.prototype.stream =
  Blob.prototype.stream ||
  function () {
    return new Response(this).body;
  };
