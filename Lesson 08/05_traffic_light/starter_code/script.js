// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right.

  //stop

    function stopLight(){
    document.querySelector("#stopLight").classList.add('red');
    document.querySelector('#slowLight').classList.remove('yellow');
    document.querySelector('#goLight').classList.remove('green');
  }

  //slow

  function slowLight(){
    document.querySelector('#stopLight').classList.remove('red');
    document.querySelector('#slowLight').classList.add('yellow');
    document.querySelector('#goLight').classList.remove('green');
  }

  //go

  function goLight(){
    document.querySelector('#stopLight').classList.remove('red');
    document.querySelector('#slowLight').classList.remove('yellow');
    document.querySelector('#goLight').classList.add('green');
  }

  //click

    document.querySelector('#stopButton').addEventListener('click', stopLight);
    document.querySelector('#slowButton').addEventListener('click', slowLight);
    document.querySelector('#goButton').addEventListener('click', goLight);