<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Dicee - Reload Me</title>
    <link rel="icon" href="images/dice6.png">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <div class="full-container">
      <h1 id="changetitle">Refresh Me</h1>

      <div class="dice">
        <p>Player 1</p>
        <img id="img1" src="images/dice6.png">
      </div>

      <div class="dice">
        <p>Player 2</p>
        <img id="img2" src="images/dice6.png">
      </div>

      <div class="rld-btn">
        <button class="btn btn-dark" onClick="window.location.reload();">Re-roll</button>
      </div>
    </div>


  </body>

  <footer>
    © Copyright Aryan Grover - Dicee
  </footer>

  <script src="dicee.js"></script>
</html>
