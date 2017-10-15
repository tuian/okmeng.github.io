var menuDisabled = false;

jQuery(function($) {

    $(document).ready( function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('#main-wrapper').delay(350).css({'overflow':'visible'});
            $("#magicword").html(getcheer());
            magicword();
    });

    $(document).ready( function() {

        // backstretch for background image
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 500});

	// for responsive-menu
	$("#m-btn").click(function(){

		$("#responsive").toggle();
	});

        // copy menu list to responsive menu
        var mainMenuList = $('#menu-list').html();
        $('#responsive').html(mainMenuList);

	//for image slide on menu item click(normal) and responsive
	$("#menu-list a, #responsive a").on('click',function(e){
            e.preventDefault();
            if (menuDisabled == false) // check the menu has disabled?
            {
                menuDisabled = true; // disable to menu

                var name = $(this).attr('href');
                $('#menu-list li').removeClass('active');
                $('#responsive li').removeClass('active');

                //  set active to both menu
                var menuClass = $(this).parent('li').attr('class');
                $('.'+menuClass).addClass('active');

                // hide responsive menu
                $("#responsive").hide();

                // get image url and assign to backstretch for background
                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 500}); //backstretch for background fade in/out

                // content slide in/out
                $("section.active").animate({left:$("section.active").outerWidth()}, 400,function(){
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name+"-text").show();
                    $(name+"-text").animate({left:'0px'},400,function(){
                        $(this).addClass("active");

                        $.backstretch("resize"); // resize the background image

                        menuDisabled = false; // enable the menu
                    });
                });

            }
            return;
	});

    });

});

function show(u){

    html = $.ajax({url: u, async:false});
    $("#main-text").html(html.responseText);
}

function showPage(p){
    html = $.ajax({url: p, async:false});
    h = html.responseText;
    $("#spancontent").html($(h).find("#testimonial-text").html());
    // alert($(h).find("#p").html());
    // $("#spancontent").html('pageHtml');
}

    $("a", "#catfunc").click(function(){
        // alert($(this).attr('href'));
        var ur=$(this).attr('href');
        // $(this).attr("href","javascript:void(0)");
        html = $.ajax({url: ur, async:false});
        $("#main-text").html(html.responseText);
        // this.attr("href": '0');
        return false;   //使原来的a标签不跳转
    });

$("a", "#archive").click(function(){
    // alert($(this).attr('href'));
    var ur=$(this).attr('href');
    // $(this).attr("href","javascript:void(0)");
    html = $.ajax({url: ur, async:false});
    $("#main-text").html(html.responseText);
    // this.attr("href": '0');
    return false;   //使原来的a标签不跳转
});

// $("#log").click(function(){
//
//     $("#meng").css("width","79%");
// });
// $("#home,#about,#blog,#contact").click(function(){
//     $("#meng").css("width","100%");
// });

    function getcheer(){
        var wow;
        $.ajax({
            async: false,          //设置同步，否则wow赋值不到
            url: "okmeng.json",
            dataType: "json",
            success: ok = function (data){
                items = 0;
                var len = getlen(data);
                ok = parseInt(
                    len * Math.random()
                ) + 1;
                $.each(data, function(key, val){
                    if (key == ok){
                        wow = val;
                        return false;
                    }
                });
            }
        });
        return '<span id="wow" class="color-text">' + wow + '</span>';
    }

$("#magicword").click(function(){

    var pre = '<span id="wow" class="color-text">';
    var pos = '</span>';

    if($(this).text() == '')
        {
            $(this).removeAttr("style");
            $(this).html(pre + '我又回来啦' + pos);
            magicword();
            $("#wow").on('outAnimationEnd.tlt', function (){
                $("#magicword").html(getcheer());
                magicword();
            });


        }else if ($(this).html().indexOf("么么，再点我就不理你了0.0") >= 0) {

            $(this).html("");
            $(this).css('height','26px');
            $(this).css('width','56%');

        }else {

            $(this).html(pre + '么么，再点我就不理你了0.0' + pos);
            setTimeout(function (){
                if ($("#magicword").html().indexOf("么么，再点我就不理你了0.0") >= 0){

                    $("#magicword").html(getcheer());
                    magicword();
                }

            },2000);

        }
});

function getlen(data){
    var len = 0;
    for (var i in data){
        len++;
    }
    return len;
}

function animatein(){
    var animatein = 'flash bounce shake tada swing wobble pulse flip flipInX flipInY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rollIn';
    var animatearr = animatein.split(' ');
    sel = parseInt(Math.random() * animatearr.length);
    return animatearr[sel];
}

function animateout(){
    var animateout = 'flash bounce shake tada swing wobble pulse flip flipOutX flipOutY fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollOut';
    var animatearr = animateout.split(' ');
    sel = parseInt(Math.random() * animatearr.length);
    return animatearr[sel];
}
function magicword(){
    $('#wow').textillate({
        // the default selector to use when detecting multiple texts to animate
        selector: '.texts',

        // enable looping
        loop: true,

        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 2000,

        // sets the initial delay before starting the animation
        // (note that depending on the in effect you may need to manually apply
        // visibility: hidden to the element before running this plugin)
        initialDelay: 0,

        // set whether or not to automatically start animating
        autoStart: true,

        // custom set of 'in' effects. This effects whether or not the
        // character is shown/hidden before or after an animation
        inEffects: [],

        // custom set of 'out' effects
        outEffects: ['hinge'],

        // in animation settings
        in: {
            // set the effect name
            // effect: 'fadeInLeftBig',
            effect: animatein(),

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 50,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false,

            // callback that executes once the animation has finished
            callback: function() {}
        },

        // out animation settings.
        out: {
            effect: animateout(),
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function() {
                $("#magicword").html(getcheer());
                magicword();

            }
        },

        // callback that executes once textillate has finished
        callback: function() {

        },

        // set the type of token to animate (available types: 'char' and 'word')
        type: 'char'
    });
}
