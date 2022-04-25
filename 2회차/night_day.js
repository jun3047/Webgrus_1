var Links = {
    setColor: function(color){
        var slist = document.querySelectorAll('a');
        for(var i = 0; i < slist.length; i++)
            {
                slist[i].style.color = color;
            }
    }
}
var Body = {
    setBackgroundColor: function(color){
        document.querySelector('body').style.background = color;
    },
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    setText: function(text){
        var slist = document.querySelectorAll('[id=night_day]');
        for(var key in slist){
            slist[key].value = text;
        }
    }
}

var nightDayHandler = function(self){
    
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Body.setText('day');
        Links.setColor('powderblue');
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Body.setText('night');
        Links.setColor('blue');
    }

}

