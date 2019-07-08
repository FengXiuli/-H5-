/*
* @Author: apple
* @Date:   2017-09-17 18:16:20
* @Last Modified by:   apple
* @Last Modified time: 2017-09-21 17:32:09
*/
$(function() {
	var k = $(window).height(); 
   
    $(".next").click(function(event) {
       $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage({
        // 是否显示导航栏，也就是说最右边的一竖排的那几个小点
    	navigation: true,
    	scrollspeeding: 1200,
        // afterLoad：回调函数滚动到第二屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
    	afterLoad: function (anchorLink, index) {
    		if(index == 2) {
                // 往第2屏幕滚动的时候，next 先消失  等所有动画都完毕了 next 才淡出 
                $(".next").fadeOut();
                //easeOutBack缓动动画，是easing插件中的， 缓动动画要加到时间的后面，回调函数的前面
    			$(".search").show().animate({"right":370}, 1500, "easeOutBack", function() {
    				$(".search-wrods").animate({"opacity": 1}, 500, function() {
    					$(".search").hide();
    					$(".search-02-1").show().animate({"height":30, "right":250, "bottom":452}, 1000, function() {
    					});
    					$(".goods-02").show().animate({"height":218}, 1000, "easeInOutQuart");
    					$(".words-02").animate({"opacity":1}, 500, function() {
                            $(".next").fadeIn();
                        });
    				})
    				
    			});
    		}
    	},
        onLeave: function (index, nextIndex, direction) {
            // 往接下来的幕滚动的时候，next 先消失  等所有动画都完毕了 next 才淡出 
                $(".next").fadeOut();
            if(index == 2 && nextIndex == 3) {
                // 沙发要往第三屏幕走，  走的距离 就是  当前哦屏幕的高度 - main 到底部的高度 - 沙发到main的距离    (当前屏幕的高度  - 250 )(由于此底部是相当于第二屏幕（index == 2）的底部，所以沙发走的举例的前面要加一个负号，表示沙发走到第三屏幕当中去)（如果实在不理解的话，可以打开调试页面，调试沙发的高度，将其放到合适的位置，再进行四则运算）
                $(".shirt-02").show().animate({"bottom": -(k - 250), "width": 207, "left": 260}, 2000, function () {
                    
                    $(".img-01-a").animate({"opacity": 1}, 500, function () {
                     $(".btn-01-a").animate({"opacity": 1},1000,  function() {
                            $(".next").fadeIn();
                        });   
                    });
                    
                });
                $(".cover").show();
            }
            if(index == 3 && nextIndex == 4) {
                $(".shirt-02").hide();
                // 尤其是这边的距离，写错之后 结果不会是自己想要的 (-(k - 250) + 50)是错误的
                // 当第二屏幕往第三屏幕滚动的时候， 沙发显示并且往第三屏幕跑  白色盒子显示
               
                $(".t1f").show().animate({"bottom": -((k - 250) + 50), "left": 260}, 2000, function () {
                    $(this).hide();
                    $(".car-img").show();
                    // 这个下面的150%特别容易忘记加双引号     easeInElastic  代表行走的曲线，是easing插件中的
                    $(".car").animate({"left": "150%"}, 3000, "easeInElastic", function() {
                        $(".note").show();
                        $(".note-img, .words-04-a").animate({"opacity": 1}, 1000, function() {
                            $(".next").fadeIn();
                        });
                    });
                })
            }
            if(index == 4 && nextIndex == 5) {
                $(".hand-05").animate({"bottom": 0}, 1000, function () {
                     $(".mouse-05-a").animate({"opacity": 1});
                    
                    $(".t1f-05").show().animate({"bottom": "13%"},1000, function () {
                        $(".order-05").animate({"bottom": 400}, 1000, function () {
                            //添加类的时候，前面不能加点了，也就是说  ".words-05-a "是错误的
                            $(".words-05").addClass("words-05-a");
                            $(".next").fadeIn();
                        });                       
                    })
                });
            }
            if(index == 5 && nextIndex == 6) {
                $(".t1f-05").animate({"bottom": -(k - 500), "left": "40%", "width": 65}, 1500, function() {
                        $(".t1f-05").hide();
                    });
                $(".box-06").animate({"left": "38%"}, 1500, function () {
                    $(".box-06").animate({"bottom": 40}, 1000, function () {
                        $(this).hide();
                        $(".section6").animate({"backgroundPositionX": "100%"}, 4000, function () {
                            $(".boy").animate({"height": 305, "bottom": 118}, 500, function() {
                                $(".boy").animate({"right": "42%"}, 500, function() {
                                    $(".door").animate({"opacity": 1}, 500, function() {
                                         $(".girl").show().animate({"height": 305,"right": "32%"}, 500, function() {
                                            $(".pop-07").show();
                                            $(".next").fadeIn();
                                         });
                                    })
                                   
                                })
                            })
                        });
                        $(".words-06-a").show().animate({"left": "30%"}, 1000, "easeOutElastic");
                    });
                });
                
            }
            if(index == 6 && nextIndex == 7) {
                // 定时器的目的是为了使其延时2000秒之后再变化，否则变化太快，没有效果？？？？？？？？？？？？？？？？？？？、
                setTimeout(function () {
                    $(".star").animate({"width": 120},500, function () {
                        $(".good-07").show();
                        $(".next").fadeIn();
                    })
                }, 2000)
            }
            
                // 这是第8屏幕动画
            
              // $(".beginShoping").mouseenter(function(event) {
              //     $(".btn-08-a").show();
              // }).mouseleave(function(event) {
              //    $(".btn-08-a").hide();
              // });
              // hover 来替代更简洁  以后一个盒子鼠标经过显示离开隐藏  我们就可以用hover和toggle混搭想必也是极好的
               $(".beginShoping").hover(function() {
                   $(".btn-08-a").toggle();  //  toggle  显示和隐藏的切换
              });
              // 大手跟随鼠标移动  
              $(document).mousemove(function(event) {
                   var x = event.pageX - $(".hand-08").width() / 2;  // 获得鼠标在页面中的x坐标
                   var y = event.pageY + 10;  // 获得鼠标在页面中的y坐标

                   // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
                   var minY = k - 449; 
                   // 把 鼠标在页面中的坐标 给  hand 大手 left  top 
                   if(y < minY ) {
                      y = minY;
                   }
                
                 $(".hand-08").css({"left": x, "top": y});
              });
              // 当我们点击 再来一次的 时候， 分两步进行
               $(".again").click(function(event) {
                 // 1. 返回第1屏幕 
                   $.fn.fullpage.moveTo(1);
                    // 2. 所有的动画都复原 就是原来没有看过的样子 
                    // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以，也就是说含有 style 的标签都给它清除掉）
                    // 所有带有动画的div 盒子 添加 move 类名（也就是说所有的重新开始）
                   $("img, .move").attr("style", "");
               });
            
        },
    
    
      
    });
});