$(document).ready(function(){$(".popup-menu__wrapper").hide(),$(".popup-credits").hide(),$(".circle-menu").click(function(){$(".popup-menu__wrapper").show(300)}),$(".fa-times").click(function(){$(".popup-menu__wrapper").hide(300)}),$(".btn-c").click(function(){$(".popup-credits").show(300)}),$(".times").click(function(){$(".popup-credits").hide(300)}),$(".contact").click(function(){$(".mail").css("bottom","32.5%")}),960<$(window).width()&&$("body").parallax({elements:[{selector:".fig1",properties:{x:{right:{initial:0,multiplier:.003,unit:"%",invert:!1}},y:{top:{initial:-20,multiplier:.003,unit:"%",invert:!0}}}},{selector:".fig2",properties:{x:{left:{initial:-40,multiplier:.005,unit:"%",invert:!1}},y:{top:{initial:0,multiplier:.005,unit:"%",invert:!1}}}},{selector:".fig3",properties:{x:{left:{initial:-17,multiplier:.002,unit:"%",invert:!1}},y:{bottom:{initial:6,multiplier:.002,unit:"%",invert:!1}}}},{selector:".fig4",properties:{x:{right:{initial:-15,multiplier:.007,unit:"%",invert:!0}},y:{bottom:{initial:10,multiplier:.007,unit:"%",invert:!0}}}},{selector:".fig5",properties:{x:{left:{initial:-5,multiplier:.007,unit:"%",invert:!0}},y:{top:{initial:-5,multiplier:.007,unit:"%",invert:!1}}}},{selector:".fig6",properties:{x:{right:{initial:10,multiplier:.0015,unit:"%",invert:!1}},y:{bottom:{initial:-15,multiplier:.0015,unit:"%",invert:!0}}}},{selector:".shadow",properties:{x:{left:{initial:-25,multiplier:.005,unit:"%",invert:!1}},y:{top:{initial:-5,multiplier:.005,unit:"%",invert:!0}}}}]})});