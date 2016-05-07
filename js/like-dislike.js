for(var i=1;i<=9;i++){
    $('#demo'+i).likeDislike({
                click: function(btnType, likes, dislikes, event) {
                    var likesElem = $(this).find('.likes');
                    var dislikedsElem = $(this).find('.dislikes');
                    likesElem.text(parseInt(likesElem.text()) + likes);
                    dislikedsElem.text(parseInt(dislikedsElem.text()) + dislikes);
                }
    });
  }