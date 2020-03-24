//////////////////////////// Core Logic/////////////////////////////////////////////////

i=0;
function showMenu(){
      var menu= document.createElement('span');
      i=i+1;
      menu.className="chat_msg_item chat_msg_item_admin";
      menu.id="hii";
      menu.innerHTML='<div class="chat_avatar"><img src="https://miro.medium.com/max/600/1*t3PcRikIrq42teXReodcRQ.png"/></div>क्या आप कोरोनावायरस के कारण चिंतित हैं?';
      document.getElementById('spanner').appendChild(menu);

      var temp1 = document.createElement('ul');
      temp1.id="list1";
      temp1.className="tags";
      temp1.innerHTML='<li class="tags">'+"हाँ"+'</li>';
      temp1.addEventListener('click',yesfunction)  ;
      document.getElementById('spanner').appendChild(temp1);

      
      var temp1 = document.createElement('ul');
      temp1.id="list1";
      temp1.className="tags";
      temp1.innerHTML='<li class="tags">'+"नहीं"+'</li>';
      temp1.addEventListener('click',nosfunction)  ;
      document.getElementById('spanner').appendChild(temp1);

}

function yesfunction(){
      $.post(
            "http://127.0.0.1:5000/send",{"message":"Yes"}
        ).done(function( data ) {
          
          $('ul').fadeOut("slow");
          var btn = document.createElement("span");
          btn.className="chat_msg_item chat_msg_item_user";
          btn.innerHTML="<ul class='tagsuser'><li>हाँ</li></ul>";
          document.getElementById('spanner').appendChild(btn);
          
          var btn = document.createElement("span");
          btn.id="Breathing";
          btn.className="chat_msg_item chat_msg_item_admin";
          btn.innerHTML = '<div class="chat_avatar"><img src="https://miro.medium.com/max/600/1*t3PcRikIrq42teXReodcRQ.png"/></div> '+'<div>'+data.message+'</div>';
          document.getElementById('spanner').appendChild(btn);
    
          var btn2 = document.createElement("span");
          i=i+1;
          btn2.id=i;
          
          btn2.className="chat_msg_item chat_msg_item_admin";
          btn2.innerHTML = '<div class="chat_avatar"><img src="https://miro.medium.com/max/600/1*t3PcRikIrq42teXReodcRQ.png"/></div>';
          document.getElementById('spanner').appendChild(btn2);
    
          data.symptoms.forEach(element => {
          var temp = document.createElement('ul');
          temp.className="tags";
          temp.innerHTML='<li>'+element+'</li>';
          temp.addEventListener('click',function(){alert(element);})  ;
          document.getElementById(i).appendChild(temp);
          });
          
          var temp = document.createElement('ul');
          temp.className="tags";
          temp.innerHTML='<li>'+"Back to Main Menu"+'</li>';
          temp.addEventListener('click',function(){showMenu();})  ;
          document.getElementById(i).appendChild(temp);
          
    });

}
$(document).ready(function(){
    $("#yes").click(function(){
    
      yesfunction();
    });
  });

function nosfunction(){

      $.post(
            "http://127.0.0.1:5000/send",{"message":"No"}
        ).done(function( data ) {

            $('ul').fadeOut("slow");
            var btn = document.createElement("span");
            btn.className="chat_msg_item chat_msg_item_user";
            btn.innerHTML="<ul class='tagsuser'><li>हाँ</li></ul>";
            document.getElementById('spanner').appendChild(btn);

            var s ='<ul > ';
            data.symptoms.forEach(element => {
                s=s+'<li>'+'* '+element+'</li>';
            
            });
            s=s+"</ul>";
            
            var btn3 = document.createElement("span");
            btn3.id="spanner3";
            btn3.className="chat_msg_item chat_msg_item_admin";
            btn3.innerHTML = '<div class="chat_avatar"><img src="https://miro.medium.com/max/600/1*t3PcRikIrq42teXReodcRQ.png"/></div> '+'<div>'+data.message+'</div>'+'<div>'+s+'</div>';
            document.getElementById('spanner').appendChild(btn3);
            });
            
      //     var temp = document.createElement('ul');
      //     temp.className="tags";
      //     temp.innerHTML='<li>'+"Back to Main Menu"+'</li>';
      //     temp.addEventListener('click',function(){showMenu();})  ;
      //     document.getElementById('spanner3').appendChild(temp);
            
}


$(document).ready(function(){
    $("#no").click(function(){
      nosfunction();
        
    });
});








///////////////////////////////////////// Design ////////////////////////////////////////////////////////////
$('#chat_converse').css('display', 'block');
$('#chat_body').css('display', 'none');
$('#chat_form').css('display', 'none');
$('.chat_login').css('display', 'none');
$('.chat_fullscreen_loader').css('display', 'block');

$('#prime').click(function() {
  toggleFab();
});

//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  
}

  $('#chat_fullscreen_loader').click(function(e) {
      $('.fullscreen').toggleClass('zmdi-window-maximize');
      $('.fullscreen').toggleClass('zmdi-window-restore');
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
      $('.header_img').toggleClass('change_img');
      $('.img_container').toggleClass('change_img');
      $('.chat_header').toggleClass('chat_header2');
      $('.fab_field').toggleClass('fab_field2');
      $('.chat_converse').toggleClass('chat_converse2');
  });

