window.addEventListener("load", function () {
    console.log("app loaded...");
});

$(document).ready(function () {

    var pageId = $('body').attr("id");

    //タイトル表示
    if (pageId == 'top') {
        startTittleAnim();
        $('#gotStampBtn').click(function () {
            window.location.href = "list.html";
        });
    }

    if (pageId == 'stamp') {
        //stampページ 1
        showIcon('#testIcon1', 1000);
        showIcon('#testIcon2', 4000);

        //stampページ 2
        showIcon('#testIcon2_1', 1000);
        //showIcon('#testIcon2_2', 4000);
    }

    //割れるページ
    if (pageId == 'stamp3') {
        setTimeout(function () {
            $('body').css('background-image', 'url(img/broken.jpg)');
            audio.play();
        }, 3000);
    }

});

//アイコン表示
function showIcon(argId, argTime) {
    setTimeout(function () {
        $(argId).show();
        audio.play();
    }, argTime);
}

//TODO タイトル表示
function startTittleAnim() {
    var targetObj = $('.split');
    var delaySpeed = 100;
    var fadeSpeed = 0;
    var targetTxt = targetObj.html();

    targetObj.css({visibility: 'visible'}).children().addBack().contents().each(function () {
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    splitLength = $('.textSplitLoad').length;
    targetObj.find('.textSplitLoad').each(function (i) {
        splitThis = $(this);

        splitTxt = splitThis.text();

        splitThis.delay(i * (delaySpeed)).css({
            display: 'inline-block',
            opacity: '0'
        }).animate({opacity: '1'}, fadeSpeed);
    });

    setTimeout(function () {
        targetObj.html(targetTxt);
        $('#mainTitle').fadeOut('slow');
        $('#mainBox').fadeIn('slow');
    }, splitLength * delaySpeed + fadeSpeed);
}
