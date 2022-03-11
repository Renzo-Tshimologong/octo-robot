const body = document.querySelector("body")

function loadAtom(){
    const atomLoad =
    `
    <style>
    body{
        width: 100%;
        margin: 0;
        background-color: #000000;
    }
    .container {
        width: 200px;
        height: 100px;
        padding-top: 5rem;
        margin: 0 auto;
      }
      
      .ball {
        width: 10px;
        height: 10px;
        margin: 10px auto;
        border-radius: 50px;
      }
      
      .ball:nth-child(1) {
        background: red;
        -webkit-animation: right 2s infinite ease-in-out;
        -moz-animation: right 2s infinite ease-in-out;
        animation: right 2s infinite ease-in-out;
      }
      
      .ball:nth-child(2) {
        background: blue;
        -webkit-animation: left 1.5s infinite ease-in-out;
        -moz-animation: left 1.5s infinite ease-in-out;
        animation: left 1.5s infinite ease-in-out;
      }
      
      .ball:nth-child(3) {
        background: greenyellow;
        -webkit-animation: right 1.5s infinite ease-in-out;
        -moz-animation: right 1.5s infinite ease-in-out;
        animation: right 1.5s infinite ease-in-out;
      }
      
      .ball:nth-child(4) {
        background: red;
        -webkit-animation: left 2s infinite ease-in-out;
        -moz-animation: left 2s infinite ease-in-out;
        animation: left 2s infinite ease-in-out;
      }
      
      .ball:nth-child(5) {
        background: blue;
        -webkit-animation: right 1.5s infinite ease-in-out;
        -moz-animation: right 1.5s infinite ease-in-out;
        animation: right 1.5s infinite ease-in-out;
      }
      
      .ball:nth-child(6) {
        background: greenyellow;
        -webkit-animation: left 3s infinite ease-in-out;
        -moz-animation: left 3s infinite ease-in-out;
        animation: left 3s infinite ease-in-out;
      }
      
      .ball:nth-child(7) {
        background: red;
        -webkit-animation: right 1s infinite ease-in-out;
        -moz-animation: right 1s infinite ease-in-out;
        animation: right 1s infinite ease-in-out;
      }
      
      @-webkit-keyframes right {
        0% {
          -webkit-transform: translate(-15px);
        }
        50% {
          -webkit-transform: translate(15px);
        }
        100% {
          -webkit-transform: translate(-15px);
        }
      }
      
      @-webkit-keyframes left {
        0% {
          -webkit-transform: translate(15px);
        }
        50% {
          -webkit-transform: translate(-15px);
        }
        100% {
          -webkit-transform: translate(15px);
        }
      }
      
      @-moz-keyframes right {
        0% {
          -moz-transform: translate(-15px);
        }
        50% {
          -moz-transform: translate(15px);
        }
        100% {
          -moz-transform: translate(-15px);
        }
      }
      
      @-moz-keyframes left {
        0% {
          -moz-transform: translate(15px);
        }
        50% {
          -moz-transform: translate(-15px);
        }
        100% {
          -moz-transform: translate(15px);
        }
      }
      
      @keyframes right {
        0% {
          transform: translate(-15px);
        }
        50% {
          transform: translate(15px);
        }
        100% {
          transform: translate(-15px);
        }
      }
      
      @keyframes left {
        0% {
          transform: translate(15px);
        }
        50% {
          transform: translate(-15px);
        }
        100% {
          transform: translate(15px);
        }
      }
    </style>

    <div class="container">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
    </div>
    `
    body.innerHTML = atomLoad

    setTimeout(function(){
        window.location = 'atoms.html'; }, 3500);
}

function loadDevCrew(){
  const devLoad =
  `
  <style>
      body{
          background-color: #1E0731;
      }
      footer{
          position: absolute;
          margin-top: 300px;
      }
      footer a{
          color: #F5E53A;
      }
      footer img{
          width: 32px;
          height: 32px;
          vertical-align: middle;
      }

      .wrapper{
          position: absolute;
          float: left;
          margin: 140px 100px;
      }

      .line{
          position: absolute;
          top: 0px;
          width: 2px;
          height: 8px;
          background-color: red;
      }

      .circle{
          position: absolute;
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: blue;
      }
      .circle-top{
          top: 0px;
          left: -3.5px;
      }
      .circle-bottom{
          bottom: 0px;
          left: -3.5px;
      }

      .dot{
          position: absolute;
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          left: -1.5px;
      }

      .line1{
          margin-left: 0px;
          background-color: #2410CB;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
      }
      .line1 > span{
          background-color: #D4141E;
      }
      .line1 > .dotted > .dot{
          background-color: #D4141E;
      }
      .line1 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
      }
      .line1 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
      }
      .line1 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
      }
      .line1 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
      }

      .line2{
          margin-left: 35px;
          background-color: #852DF4;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
      }
      .line2 > span{
          background-color: #FC7E48;
      }
      .line2 > .dotted > .dot{
          background-color: #FC7E48;
      }
      .line2 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
      }
      .line2 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
      }
      .line2 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
      }
      .line2 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
      }

      .line3{
          margin-left: 70px;
          background-color: #F42DF1;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
      }
      .line3 > span{
          background-color: #EDEB29;
      }
      .line3 > .dotted > .dot{
          background-color: #EDEB29;
      }
      .line3 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
      }
      .line3 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
      }
      .line3 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
      }
      .line3 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
      }

      .line4{
          margin-left: 105px;
          background-color: #F91396;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
      }
      .line4 > span{
          background-color: #ACED29;
      }
      .line4 > .dotted > .dot{
          background-color: #ACED29;
      }
      .line4 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
      }
      .line4 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
      }
      .line4 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
      }
      .line4 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
      }

      .line5{
          margin-left: 140px;
          background-color: #D4141E;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
      }
      .line5 > span{
          background-color: #4EF02B;
      }
      .line5 > .dotted > .dot{
          background-color: #4EF02B;
      }
      .line5 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
      }
      .line5 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
      }
      .line5 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
      }
      .line5 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
      }

      .line6{
          margin-left: 175px;
          background-color: #FC7E48;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
      }
      .line6 > span{
          background-color: #38E790;
      }
      .line6 > .dotted > .dot{
          background-color: #38E790;
      }
      .line6 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
      }
      .line6 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
      }
      .line6 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
      }
      .line6 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
      }

      .line7{
          margin-left: 210px;
          background-color: #EDEB29;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
      }
      .line7 > span{
          background-color: #25EACC;
      }
      .line7 > .dotted > .dot{
          background-color: #25EACC;
      }
      .line7 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
      }
      .line7 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
      }
      .line7 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
      }
      .line7 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
      }

      .line8{
          margin-left: 245px;
          background-color: #ACED29;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
      }
      .line8 > span{
          background-color: #309CDF;
      }
      .line8 > .dotted > .dot{
          background-color: #309CDF;
      }
      .line8 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
      }
      .line8 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
      }
      .line8 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
      }
      .line8 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
      }

      .line9{
          margin-left: 280px;
          background-color: #4EF02B;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
      }
      .line9 > span{
          background-color: #2544E7;
      }
      .line9 > .dotted > .dot{
          background-color: #2544E7;
      }
      .line9 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
      }
      .line9 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
      }
      .line9 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
      }
      .line9 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
      }

      .line10{
          margin-left: 315px;
          background-color: #38E790;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
      }
      .line10 > span{
          background-color: #852DF4;
      }
      .line10 > .dotted > .dot{
          background-color: #852DF4;
      }
      .line10 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
      }
      .line10 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
      }
      .line10 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
      }
      .line10 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
      }

      .line11{
          margin-left: 350px;
          background-color: #25EACC;
          -webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
          animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
      }
      .line11 > span{
          background-color: #F42DF1;
      }
      .line11 > .dotted > .dot{
          background-color: #F42DF1;
      }
      .line11 > .dotted > .dot-top{
          top: 0px;
          -webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
          animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;

      }
      .line11 > .dotted > .dot-bottom{
          bottom: 0px;
          -webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
          animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
      }
      .line11 > .dotted > .dot-middle-top{
          top: 0px;
          -webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
          animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
      }
      .line11 > .dotted > .dot-middle-bottom{
          bottom: 0px;
          -webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
          animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
      }

      @-webkit-keyframes line{
          0%{height: 4px; top: 0px; left: 0px; -webkit-transform: rotate(-65deg)}
          10%{height: 220px; top: -110px; left: 15px;}
          45%{height: 200px; top: -100px; left: 25px;}
          70%{height: 8px; top: 0px; left: 25px; -webkit-transform: rotate(0deg);}
          100%{height: 8px; top: 0px; left: 15px; -webkit-transform: rotate(0deg);}
      }
      @-webkit-keyframes dot-top{
          0%{top: -30px}
          10%{top: -30px;}
          45%{top: -25px;}
          60%{top: 0px;}
          100%{top: 0px;}
      }
      @-webkit-keyframes dot-bottom{
          0%{bottom: -30px}
          10%{bottom: -30px;}
          45%{bottom: -25px;}
          60%{bottom: 0px;}
          100%{bottom: 0px;}
      }
      @-webkit-keyframes dot-middle-top{
          0%{}
          10%{}
          45%{top: 98px;}
          70%{top: -50px;}
          85%{top: 0px;}
          100%{top: 0px;}
      }
      @-webkit-keyframes dot-middle-bottom{
          0%{}
          10%{}
          45%{bottom: 98px;}
          70%{bottom: -50px;}
          85%{bottom: 0px;}
          100%{bottom: 0px;}
      }
      
      @keyframes line{
          0%{height: 4px; top: 0px; left: 0px; transform: rotate(-65deg)}
          10%{height: 220px; top: -110px; left: 15px;}
          45%{height: 200px; top: -100px; left: 25px;}
          70%{height: 8px; top: 0px; left: 25px; transform: rotate(0deg);}
          100%{height: 8px; top: 0px; left: 15px; transform: rotate(0deg);}
      }
      @keyframes dot-top{
          0%{top: -30px}
          10%{top: -30px;}
          45%{top: -25px;}
          60%{top: 0px;}
          100%{top: 0px;}
      }
      @keyframes dot-bottom{
          0%{bottom: -30px}
          10%{bottom: -30px;}
          45%{bottom: -25px;}
          60%{bottom: 0px;}
          100%{bottom: 0px;}
      }
      @keyframes dot-middle-top{
          0%{}
          10%{}
          45%{top: 78px;}
          70%{top: -50px;}
          85%{top: 0px;}
          100%{top: 0px;}
      }
      @keyframes dot-middle-bottom{
          0%{}
          10%{}
          45%{bottom: 78px;}
          70%{bottom: -50px;}
          85%{bottom: 0px;}
          100%{bottom: 0px;}
      }
  </style>

  <div class="wrapper">
  <div class="line line1">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line2">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line3">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line4">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line5">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line6">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line7">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line8">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line9">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line10">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
  <div class="line line11">
    <span class="circle circle-top"></span>
    <div class="dotted">
      <span class="dot dot-top"></span>
      <span class="dot dot-middle-top"></span>
      <span class="dot dot-middle-bottom"></span>
      <span class="dot dot-bottom"></span>
    </div>
    <span class="circle circle-bottom"></span>
  </div>
</div>

  `
  body.innerHTML = devLoad

  setTimeout(function(){
      window.location = 'devCrew.html'; }, 3500);
}