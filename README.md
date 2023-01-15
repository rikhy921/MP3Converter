
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
  <link rel="shortcut icon" type="image/png" href="/img/yt.png" />
  <link rel="stylesheet" href="/css/styles.css">
  <title>YouTube To MP3</title>
</head>

<body>

  <div class="top-container">
    <form action="/convert-mp3" method="POST" id="form">
      <h1><i class="fab fa-youtube"></i> YouTube To MP3 Converter</h1>
      <h4>Masukkan Link video</h4>
      <h4>Contoh Copy yang ada di tanda Kutip </h4>
      <h5>https://www.youtube.com/watch?v= " 4gVxQN7-OXU " </h5>
      <div>
        <input type="text" name="videoId" placeholder="Link Video ..."><button id="submit-btn">Convert</button>
      </div>
    </form>
  </div>

  <div class="bottom-container">
    <% if (typeof success != "undefined" && success) { %>
      <div class="success">
        <p> <%= song_title %> </p>
        <a href="<%= song_link %>"><button id="download-btn">DOWNLOAD</button></a>
      </div>
    <% } else if (typeof success != "undefined" && !success) { %>
      <div class="errors">
        <p> <%= message %> </p>
      </div>
    <% } %>
  </div>

</body>

</html>
