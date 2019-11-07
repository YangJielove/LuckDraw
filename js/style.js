$(document).ready(function () {
    var test = [];
    var conduct = false;
    var start;
    var number;
    var name = []
    var indexs = [];
    var data = [];
    var style_start = 0;
    var style_start_num = [];
    var div1 = '<div class="name_nu">';
    var div3 = '<div class="data_one_css">';
    var div2 = '</div>';
    localStorage.setItem('style', 1); //默认是特等奖
    console.log('类型', localStorage.getItem('style'));
    var title = localStorage.getItem('title');
    if (title) {
        console.log('title', title);
        $('h1').html('<h1>' + title + '</h1>');
    }

    //===================设置中奖人数 start=====================//


    var cookie_set_one   = localStorage.getItem('set_one');
    var cookie_set_two   = localStorage.getItem('set_two');
    var cookie_set_three = localStorage.getItem('set_three');
    var cookie_set_four  = localStorage.getItem('set_four');
    var cookie_set_five  = localStorage.getItem('set_five');
    var cookie_set_six   = localStorage.getItem('set_six');

    if(cookie_set_one){
        $('.set_one_s').html('<div>' + '特等奖(' + cookie_set_one + '名)' + '</div>');

        $('.set_one').html('<div class="first_prize_text">\n' +
            '                    <text> 《《</text>\n' +
            '                    特等奖(' + cookie_set_one + '名)\n' +
            '                    <text> 》》</text>\n' +
            '                </div>');
    }
    if(cookie_set_two){
        $('.set_two_s').html('<div>' + '幸运奖(' + cookie_set_two + '名)' + '</div>');
        $('.set_two').html('<div class="first_prize_text">\n' +
            '                    <text> 《《</text>\n' +
            '                    幸运等奖(' + cookie_set_two + '名)\n' +
            '                    <text> 》》</text>\n' +
            '                </div>');
    }
    if(cookie_set_three){
        $('.set_three_s').html('<div>' + '一等等奖(' + cookie_set_three + '名)' + '</div>');
        $('.set_three').html('<div class="first_prize_text">\n' +
            '                    <text> 《《</text>\n' +
            '                    一等奖(' + cookie_set_three + '名)\n' +
            '                    <text> 》》</text>\n' +
            '                </div>');
    }

    if(cookie_set_four){
        $('.set_four_s').html('<div>' + '二等奖(' + cookie_set_four + '名)' + '</div>');

        $('.set_four').html('<div class="first_prize_text">\n' +
            '                    <text> 《《</text>\n' +
            '                    二等奖(' + cookie_set_four + '名)\n' +
            '                    <text> 》》</text>\n' +
            '                </div>');
    }

    if(cookie_set_five){
        $('.set_five_s').html('<div>' + '三等奖(' + cookie_set_five + '名)' + '</div>');

        $('.set_five').html('<div class="first_prize_text">\n' +
            '                    <text> 《《</text>\n' +
            '                    三等奖(' + cookie_set_five + '名)\n' +
            '                    <text> 》》</text>\n' +
            '                </div>');
    }

    if(cookie_set_six){
        $('.set_six_s').html('<div>' + '四等奖(' + cookie_set_six + '名)' + '</div>');

        $('.set_six').html('<div class="first_prize_text">\n' +
            '                    <text> 《《</text>\n' +
            '                    四等奖(' + cookie_set_six + '名)\n' +
            '                    <text> 》》</text>\n' +
            '                </div>');
    }



    $("#set_num").on('click', function () {
        let set_one = $("#set_one").val();
        let set_two = $("#set_two").val();
        let set_three = $("#set_three").val();
        let set_four = $("#set_four").val();
        let set_five = $("#set_five").val();
        let set_six = $("#set_six").val();

        if (!set_one) {
            alert('特等奖人数不能为空');
        } else if (!set_two) {
            alert('幸运奖人数不能为空');
        } else if (!set_three) {
            alert('第一奖人数不能为空');
        } else if (!set_four) {
            alert('二等奖不能为空');
        } else if (!set_five) {
            alert('三等奖不能为空');
        } else if (!set_six) {
            alert('四等奖不能为空');
        } else {
            localStorage.setItem('set_one', set_one);
            localStorage.setItem('set_two', set_two);
            localStorage.setItem('set_three', set_three);
            localStorage.setItem('set_four', set_four);
            localStorage.setItem('set_five', set_five);
            localStorage.setItem('set_six', set_six);

            $('.set_one_s').html('<div>' + '特等奖(' + set_one + '名)' + '</div>');
            $('.set_two_s').html('<div>' + '幸运奖(' + set_two + '名)' + '</div>');
            $('.set_three_s').html('<div>' + '一等等奖(' + set_three + '名)' + '</div>');
            $('.set_four_s').html('<div>' + '二等奖(' + set_four + '名)' + '</div>');
            $('.set_five_s').html('<div>' + '三等奖(' + set_five + '名)' + '</div>');
            $('.set_six_s').html('<div>' + '四等奖(' + set_six + '名)' + '</div>');

            $('.set_one').html('<div class="first_prize_text">\n' +
                '                    <text> 《《</text>\n' +
                '                    特等奖(' + set_one + '名)\n' +
                '                    <text> 》》</text>\n' +
                '                </div>');
            $('.set_two').html('<div class="first_prize_text">\n' +
                '                    <text> 《《</text>\n' +
                '                    幸运等奖(' + set_two + '名)\n' +
                '                    <text> 》》</text>\n' +
                '                </div>');
            $('.set_three').html('<div class="first_prize_text">\n' +
                '                    <text> 《《</text>\n' +
                '                    一等奖(' + set_three + '名)\n' +
                '                    <text> 》》</text>\n' +
                '                </div>');
            $('.set_four').html('<div class="first_prize_text">\n' +
                '                    <text> 《《</text>\n' +
                '                    二等奖(' + set_four + '名)\n' +
                '                    <text> 》》</text>\n' +
                '                </div>');
            $('.set_five').html('<div class="first_prize_text">\n' +
                '                    <text> 《《</text>\n' +
                '                    三等奖(' + set_five + '名)\n' +
                '                    <text> 》》</text>\n' +
                '                </div>');
            $('.set_six').html('<div class="first_prize_text">\n' +
                '                    <text> 《《</text>\n' +
                '                    四等奖(' + set_six + '名)\n' +
                '                    <text> 》》</text>\n' +
                '                </div>');
            console.log(localStorage.getItem('set_one'), localStorage.getItem('set_two'), localStorage.getItem('set_three'), localStorage.getItem('set_four'), localStorage.getItem('set_five'), localStorage.getItem('set_six'));
            $('#mySetNum').modal('hide');//关闭模糊弹窗

        }

    })
    //===================设置中奖人数 end=====================//


    //========获取用户是点击是什么类型的抽奖 start ==========//

    $(".a").on('click', function () {
        localStorage.setItem('style', 1);
        $("input[name='num']").val('xxx,xxx,xxx,xxx');
        console.log('cookie', localStorage.getItem('style'));
    })
    $(".b").on('click', function () {
        localStorage.setItem('style', 2);
        $("input[name='num']").val('xxx,xxx,xxx,xxx');
        console.log('cookie', localStorage.getItem('style'));
    })
    $(".c").on('click', function () {
        localStorage.setItem('style', 3);
        $("input[name='num']").val('xxx,xxx,xxx,xxx');
        console.log('cookie', localStorage.getItem('style'));
    })
    $(".d").on('click', function () {
        localStorage.setItem('style', 4);
        $("input[name='num']").val('xxx,xxx,xxx,xxx');
        console.log('cookie', localStorage.getItem('style'));
    })
    $(".e").on('click', function () {
        localStorage.setItem('style', 5);
        $("input[name='num']").val('xxx,xxx,xxx,xxx');
        console.log('cookie', localStorage.getItem('style'));
    })
    $(".f").on('click', function () {
        localStorage.setItem('style', 6);
        $("input[name='num']").val('xxx,xxx,xxx,xxx');
        console.log('cookie', localStorage.getItem('style'));
    })
    //========获取用户是点击是什么类型的抽奖 end  ===========//


    //================= 设置标题 start ====================//
    $("#setUTitle").on('click', function () {
        let title = $('#title').val();
        if (title) {
            $('h1').html('<h1>' + title + '</h1>');
            localStorage.setItem('title', title);
            $('#myTitle').modal('hide');//关闭模糊弹窗

        } else {
            alert('标题不能为空');
        }
    });

    //================= 设置人数 end =====================//
    function decode(str) {
        var _str = str.join(',');
        return _str;
    }

    function encode(str) {
        var _arr = str.split(',');

        return _arr;
    }

    //============判断之前是否有中奖名单有就输出名单 start ===================//
    // console.log('$.cookie(\'data_one\')',encode($.cookie('data_one')));

    if (localStorage.getItem('data_one')) {
        let data = encode(localStorage.getItem('data_one'));
        $.each(data, function (i, v) {
            $('.data_one_box').append(div3 + v + div2);
        })
    }
    if (localStorage.getItem('data_two')) {
        let data = encode(localStorage.getItem('data_two'));
        $.each(data, function (i, v) {
            $('.data_two_box').append(div3 + v + div2);
        })
    }
    if (localStorage.getItem('data_three')) {
        let data = encode(localStorage.getItem('data_three'));
        $.each(data, function (i, v) {
            $('.data_three_box').append(div3 + v + div2);
        })
    }
    if (localStorage.getItem('data_four')) {
        let data = encode(localStorage.getItem('data_four'));
        $.each(data, function (i, v) {
            $('.data_four_box').append(div3 + v + div2);
        })
    }
    if (localStorage.getItem('data_five')) {
        let data = encode(localStorage.getItem('data_five'));
        $.each(data, function (i, v) {
            $('.data_five_box').append(div3 + v + div2);
        })
    }
    if (localStorage.getItem('data_six')) {
        let data = encode(localStorage.getItem('data_six'));
        $.each(data, function (i, v) {
            $('.data_six_box').append(div3 + v + div2);
        })
    }

    //============判断之前是否有中奖名单有就输出名单 end=====================//


    //================= 设置人数 start ====================//
    $("#setUp").on('click', function () {
        let n = $('#n').val();
        console.log('n', n);
        if (n > 0) {
            $('#myModal').modal('hide');//关闭模糊弹窗
            test = [];
            for (let i = 0; i < n; i++) {//获取人数
                test.push(i);
            }
            if (localStorage.getItem('data_one')) {
                localStorage.setItem('data_one', null);
            }
            if (localStorage.getItem('data_two')) {
                localStorage.setItem('data_two', null);
            }
            if (localStorage.getItem('data_three')) {
                localStorage.setItem('data_three', null);
            }
            if (localStorage.getItem('data_four')) {
                localStorage.setItem('data_four', null);
            }
            if (localStorage.getItem('data_five')) {
                localStorage.setItem('data_five', null);
            }
            if (localStorage.getItem('data_six')) {
                localStorage.setItem('data_six', null);
            }
            $('.data_one_box').empty();
            $('.data_two_box').empty();
            $('.data_three_box').empty();
            $('.data_four_box').empty();
            $('.data_five_box').empty();
            $('.data_six_box').empty();
        } else {
            alert('数字不能是负数，或者为空并，且只能是数字@@');
        }
    })
    //================= 设置人数 end =====================//


    //================= 抽奖start =======================//
    $("#bottom").on('click', (function () {
        conduct = false;
        console.log(localStorage.getItem('style'))
        if (style_start_num.indexOf(localStorage.getItem('style')) == -1 && test.length != 0) {
            if (localStorage.getItem('style') == 1) {
                if ((localStorage.getItem('set_one'))) {
                    style_start = localStorage.getItem('set_one');
                } else {
                    style_start = 1;
                }

            } else if (localStorage.getItem('style') == 2) {
                if ((localStorage.getItem('set_two'))) {
                    style_start = localStorage.getItem('set_two');
                } else {
                    style_start = 2;
                }
            } else if (localStorage.getItem('style') == 3) {
                if ((localStorage.getItem('set_three'))) {
                    style_start = localStorage.getItem('set_three');
                } else {
                    style_start = 3;
                }
            } else if (localStorage.getItem('style') == 4) {
                if ((localStorage.getItem('set_four'))) {
                    style_start = localStorage.getItem('set_four');
                } else {
                    style_start = 10;
                }
            } else if (localStorage.getItem('style') == 5) {
                if ((localStorage.getItem('set_five'))) {
                    style_start =localStorage.getItem('set_five');
                } else {
                    style_start = 25;
                }
            } else if (localStorage.getItem('style') == 6) {
                if ((localStorage.getItem('set_six'))) {
                    style_start = localStorage.getItem('set_six');
                } else {
                    style_start = 80;
                }

            }
            style_start_num.push(localStorage.getItem('style'));
            if (test.length >= style_start) {
                $('#end').css("display", "block");
                $('#bottom').css("display", "none");
                if (start) {
                    return;
                } else {
                    start = setInterval(num, 50);
                }
            } else {
                alert('请设置人数或者人数没有到达要求@@');
            }
        } else {
            alert(
                '1、请设置人数' +
                '2、该类型已经抽取过，不能重复抽'
            );
        }
    }));
    //================= 抽奖end =======================//

    //================= 暂停 start ===================//
    $("#end").on('click', (function () {
        if (start) {
            start = clearInterval(start);
            if (conduct) {
                for (let i = 0; i < data.length; i++) {
                    var delete_index = data[i];
                    var xxx = test.splice($.inArray(delete_index, test), 1);
                }
            }
            $('#end').css("display", "none");
            $('#bottom').css("display", "block");

            if (localStorage.getItem('style') == 1) {
                console.log('datasssss', data);
                localStorage.setItem('data_one', decode(data));
                $.each(data, function (i, v) {
                    $('.data_one_box').append(div3 + v + div2);
                })
            } else if (localStorage.getItem('style') == 2) {
                localStorage.setItem('data_two', decode(data));
                $.each(data, function (i, v) {
                    $('.data_two_box').append(div3 + v + div2);
                })
            } else if (localStorage.getItem('style') == 3) {
                localStorage.setItem('data_three', decode(data));
                $.each(data, function (i, v) {
                    $('.data_three_box').append(div3 + v + div2);
                })
            } else if (localStorage.getItem('style') == 4) {
                localStorage.setItem('data_four', decode(data));
                $.each(data, function (i, v) {
                    $('.data_four_box').append(div3 + v + div2);
                })
            } else if (localStorage.getItem('style') == 5) {
                localStorage.setItem('data_five', decode(data));
                $.each(data, function (i, v) {
                    $('.data_five_box').append(div3 + v + div2);
                })
            } else if (localStorage.getItem('style') == 6) {
                localStorage.setItem('data_six', decode(data));
                $.each(data, function (i, v) {
                    $('.data_six_box').append(div3 + v + div2);
                })
            }
            $.each(data, function (index, value) {
                if (localStorage.getItem('style') == 1) {
                    $('.one_name').append(div1 + value + div2);
                } else if (localStorage.getItem('style') == 2) {
                    $('.two_name').append(div1 + value + div2);
                } else if (localStorage.getItem('style') == 3) {
                    $('.three_name').append(div1 + value + div2);
                } else if (localStorage.getItem('style') == 4) {
                    $('.four_name').append(div1 + value + div2);
                } else if (localStorage.getItem('style') == 5) {
                    $('.five_name').append(div1 + value + div2);
                } else if (localStorage.getItem('style') == 6) {
                    $('.six_name').append(div1 + value + div2);
                }
            })
        } else {
            return;
        }
    }));

    //================= 暂停 start ===================//
    function num(d = 0) {
        if (d == 0) {
            var ont = [];
            var data_index = [];
            for (let i = 0; i < style_start;) {
                var index = Math.floor((Math.random() * test.length));
                if (data_index.indexOf(index) == -1) {
                    //indexOf返回值为-1表示数组中没有和新随机数重复的值
                    ont.push(test[index]);
                    data_index.push(index);
                    i++;
                }
            }
            data = ont;
            indexs = data_index;
            $("input[name='num']").val(data);
            conduct = true;
        }
    }
});