// 링크 태그들 객체
var Links = {
  setColor : function(color) {
    // var aList = document.querySelectorAll('a');
    // var i = 0;
    // while (i < aList.length) {
    //   aList[i].style.color = color;
    //   i = i + 1;
    // }
    // jQuery 이용 시
    $('a').css('color', color);
  }
}

// 바디 태그들 객체
var Body = {
  setColor : function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor : function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    // 모든 링크 걸린 것들의 색 변경
    // for (var i = 0; i < 6; i++)
      // document.getElementsByTagName('a')[i].style.color = 'white';
    Links.setColor('powderblue');
    self.value = 'day';
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    // for (var i = 0; i < 6; i++)
      // document.getElementsByTagName('a')[i].style.color = 'black';
    Links.setColor('blue');
    self.value = 'night';
  }
}
