import './componentStyles/Project-CursorArt.css'

function CursorArtProject() {
  var mouse = false

  onmousemove = function (e) {
    var mouseX = e.clientX - 10
    var mouseY = e.clientY - 25

    if (mouse == true) {
      var interval = setInterval(paint(mouseX, mouseY), 1) // if the mouse is held down then every 10 ms call paint with the mouse coordinates, otherwise cancel the interval
    } else if (mouse == false) {
      clearInterval(interval)
    }
  }

  //check if the mouse is held down
  onmousedown = function () {
    mouse = true
  }
  onmouseup = function () {
    mouse = false
  }

  // document.onkeyup = function (e) {
  //   if (e.code == 'Space') {
  //     location.reload()
  //   }
  // }

  // creates a p element (no text) and sets its shape as a circle, then sets its position to the mouse coordinates
  var circleNum = 1
  function paint(mouseX, mouseY) {
    var element = document.createElement('p')
    var elementParent = document.getElementById('canvas')
    elementParent.appendChild(element).setAttribute('id', circleNum)

    var elementNum = document.getElementById(circleNum)
    elementNum.classList.add('circle')
    elementNum.style.position = 'absolute'
    elementNum.style.left = mouseX + 'px'
    elementNum.style.top = mouseY + 'px'

    circleNum++
  }

  return (
    <>
      <div className="depricatedBanner-project">
        <h4>This post is depricated</h4>
        <p>
          The content in the post is either outdated or no longer reflects my
          point of view on the topic
        </p>
        <em>
          Note: As this cursor art project was written a long time ago using
          vanilla HTML, CSS, and JS, some minor refactoring was required for it
          to function in react. It has many bugs (which i'm sure you'll find),
          if I ever revisit this the revised 2.0 version would be captured in an
          additional post
        </em>
      </div>
      <div className="canvasWrapper">
        <h4 className="center-text">
          Click to paint the colours of the rainbow, use spacebar to reset the
          canvas
        </h4>
        <p className="center-text">
          Due to the way i coded this, moving the mouse too fast will create
          gaps in the trail. Too much drawing may also slow the browser.
        </p>

        <div id="canvas"></div>
      </div>
    </>
  )
}

export default CursorArtProject
