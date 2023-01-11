import './componentStyles/Project-Calculator.css'

// NOTE - This is very old code, it represents my ability within the first 5 weeks of web development

function CalculatorProject() {
  var entries = []
  var total = 0

  var temp = ''

  //this works terribly, won't be refactored
  function calc(val) {
    //console.log('button clicked ' + val)

    if (!isNaN(val) || val === '.') {
      temp += val
      document.getElementById('answer').value = temp.substring(0, 10)
      //console.log('temp set to ' + temp)
    } else if (val === 'AC') {
      entries = []
      temp = ''
      total = 0
      document.getElementById('answer').value = ''
    } else if (val === 'CE') {
      temp = ''
      document.getElementById('answer').value = ''
    } else if (val === 'x') {
      entries.push(temp)
      entries.push('*')
      temp = ''
    } else if (val === '÷') {
      entries.push(temp)
      entries.push('/')
      temp = ''
    } else if (val === '+') {
      entries.push(temp)
      entries.push('+')
      temp = ''
    } else if (val === '-') {
      entries.push(temp)
      entries.push('-')
      temp = ''
    } else if (val === '=') {
      entries.push(temp)

      var nt = Number(entries[0])
      //console.log(typeof nt)

      for (var i = 1; i < entries.length; i++) {
        var nextNum = Number(entries[i + 1])
        var symbol = entries[i]

        if (symbol === '+') {
          nt += nextNum
        } else if (symbol === '-') {
          nt -= nextNum
        } else if (symbol === '*') {
          nt *= nextNum
        } else if (symbol === '/') {
          nt /= nextNum
        }

        if (nt < 0) {
          nt = Math.abs(nt) + '-'
        } else {
          entries.push(temp)
          entries.push(val)
          temp = ''
        }

        document.getElementById('answer').value = nt
        entries = []
        temp = ''
      }
    }
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
          Note: As this calculator was written a long time ago using vanilla
          HTML, CSS, and JS, some minor refactoring was required for it to
          function in react. It has many bugs (which i'm sure you'll find), if I
          ever revisit this the revised 2.0 version would be captured in an
          additional post
        </em>
      </div>

      <div className="calcWrapper">
        <div className="calculator">
          <h3 id="title">James' Calculator</h3>
          <p id="tagline">First draft</p>
          <input type="text" disabled id="answer" />

          <div>
            <div className="row">
              <button className="ctrl" onClick={() => calc('AC')}>
                AC
              </button>
              <button className="ctrl" onClick={() => calc('CE')}>
                CE
              </button>
              <button onClick={() => calc('%')}>%</button>
              <button onClick={() => calc('÷')}>÷</button>
            </div>
            <div className="row">
              <button onClick={() => calc('7')}>7</button>
              <button onClick={() => calc('8')}>8</button>
              <button onClick={() => calc('9')}>9</button>
              <button onClick={() => calc('x')}>x</button>
            </div>
            <div className="row">
              <button onClick={() => calc('4')}>4</button>
              <button onClick={() => calc('5')}>5</button>
              <button onClick={() => calc('6')}>6</button>
              <button onClick={() => calc('-')}>-</button>
            </div>
            <div className="row">
              <button onClick={() => calc('1')}>1</button>
              <button onClick={() => calc('2')}>2</button>
              <button onClick={() => calc('3')}>3</button>
              <button className="tall" onClick={() => calc('')}>
                +
              </button>
            </div>
            <div className="row">
              <button onClick={() => calc('0')}>0</button>
              <button onClick={() => calc('.')}>.</button>
              <button onClick={() => calc('=')}>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalculatorProject
