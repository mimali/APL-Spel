/* Authors: Henrik Jademyr, Jonathan Wilsson, Magnus Antonsson, Supernormal */

function playSound( sndName ) {
	var elem = document.getElementById(sndName);

	if( "play" in elem ) {
		elem.load();
		elem.play();
	}
}

function setVolume( sndName, vol ) {
	document.getElementById(sndName).volume = vol;
}

window.requestAnimFrame = (function () {
	return window.requestAnimationFrame  ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function( callback ) {
			window.setTimeout(callback, 1000 / 60);
		};
})();

$(document).ready( function () {
	sr.init();
	srAnimator.init();

	var isIE = $("html").hasClass("oldie");
	
	window.innerWidth = ( window.innerWidth ? window.innerWidth : document.body.offsetWidth ); // Fix for IE not supporting window.innerWidth

	init++;
	
	if ( init === 2 ) {
		refreshScreen();
	}
	
	initKeyTouchAndDragInput();
	
	/* prevent "draggable" images */
	var _preventDefault = function(evt) { evt.preventDefault(); };
	$("img").bind("dragstart", _preventDefault).bind("selectstart", _preventDefault);
	
	sr.initObstacles();
	
	$("#spelregler, #spelregler-info").bind("click", function () {
		$("#spelregler-info").slideToggle();
		navActive = !navActive;
	});

	/* animations */
	sr.$inst.bind("step", function ( e, deltaTime ) {
		$("#spolahar").each( function ( n ) {
			var $this = $(this);

			if( sr.posXRaw < 100 ) {
				$this.css("left", "179px");
				//$this.stop(true).animate({left: "5px"}, 1000);
			} else {
				$this.css("left", "5px");
				/*$this.stop(true).animate({left: "5px"}, 1000);

				$this.data("animated", false);
				if ( $this.data("animated") !== true ) {
					, function () {
						$this.data("animated", false);
					});
				}*/
			}
		});
	});

	$("#hjulet").bind("onShow", function () {
		var wheel = $(this).find(".wheel");
		sr.$inst.bind("step.wheel", function ( e, deltaTime ) {
			wheel.rotate(sr.counter * 30);
		});
	}).bind("onHide", function () {
		sr.$inst.unbind("step.wheel");
	});
	
	$("#kungalv").bind("onShow", function () {
		var water = $(this).find(".water");
		sr.$inst.bind("step.water", function ( e, deltaTime ) {
			/* water */
			water.each( function ( n ) {
				switch ( n ) {
					case 0:
						$(this).css({
							left: 110 + Math.sin( sr.counter ) * 8,
							bottom: Math.sin( (sr.counter) * 2 ) * 2 - 2
						});
						break;
					case 1:
						$(this).css({
							left: 80 + Math.sin( (sr.counter + 3.14) * 1.1 ) * 15,
							bottom: Math.sin( (sr.counter) * 2.2 ) * 3 - 3
						});
						break;
				}
			});
		});
	}).bind("onHide", function () {
		sr.$inst.unbind("step.water");
	});
	
	$("#gryyab").bind("onShow", function () {
		var water = $(this).find(".water");
		//console.log("start water");
		sr.$inst.bind("step.water", function ( e, deltaTime ) {
			/* water */
			water.each( function ( n ) {
				switch ( n ) {
					case 0:
						$(this).css({ // light
							left: 25 + Math.sin( sr.counter ) * 8,
							top: 60 + Math.sin( (sr.counter) * 2 ) * 2
						});
						break;
					case 1:
						$(this).css({ // dark
							left: 10 + Math.sin( (sr.counter + 3.14) * 3 ) * 1.3,
							top: 60 + Math.sin( (sr.counter) * 2.2 ) * 3 + 2
						});
						break;
				}
			});
		});
	}).bind("onHide", function () {
		sr.$inst.unbind("step.water");
	});

	/* balloon */
	$(".balloon").each(function ( n ) {
		var $this = $(this);

		var container = $this.parent();
		container.bind("onShow", function () {
			sr.$inst.bind("step." + container.attr("id"), function () {
				switch( n ) {
					case 0:
					case 2:
						$this.css({
							top: 20 + Math.sin( (sr.counter + 3.14) * 1.1 ) * 15
						});
						break;
					case 1:
						$this.css({
							top: 20 + Math.sin( (sr.counter + 5) * 1.1 ) * 15
						});
						break;
				}
			});
		}).bind("onHide", function () {
			sr.$inst.unbind("step." + container.attr("id"));
		});
	});
	
	$("#ale-flag").bind("onShow", function ( n ) {
		var $this = $(this), src =  $this.attr("src");

		setTimeout(function () {
			if( src.indexOf(".gif") <= 0 ) {
				src = src.replace(".png", ".gif");
				$this.attr("src", src);
			}
		}, 1000);
	});
	
	$("#lerum").each( function ( n ) {
		var $this = $(this);

		$this.parent().bind("onShow", function () {
			$this.delay(1500).animate({
				height: "159px",
				width: "320px"
			}, 800, "easeOutBack");
		});
	});

	$("#plane").bind("onShow", function ( n ) {
		var $container = $(this), $this = $(this).find("img");

		sr.$inst.bind("step.fly", function () {
			if( Math.abs(sr.wHalf - $container.position().left ) < 100 ) {
				sr.$inst.unbind("step.fly");
				setTimeout(function () {
					$this.addClass("fly");
				}, 1000);
			}
		});
	}).bind("onHide", function () {
		sr.$inst.unbind("step.fly");
		$(this).find("img").removeClass("fly");
	});
		
	$("#horse").bind("onShow", function () {
		var $container = $(this), $this = $(this).find("img");

		sr.$inst.bind("step.horse", function () {
			if( Math.abs(sr.wHalf - $container.position().left ) < 100 ) {
				sr.$inst.unbind("step.horse");
				setTimeout(function () {
					$this.animate({ left: "500px"}, 4000);
				}, 1000);
			}
		});
	}).bind("onHide", function () {
		sr.$inst.unbind("step.horse");
	});

	$(".aby-flag").bind("onShow", function ( n ) {
		var $this = $(this), src =  $this.attr("src");

		setTimeout(function () {
			if( src.indexOf(".gif") <= 0 ) {
				src = src.replace(".png", ".gif");
				$this.attr("src", src);
			}
		}, 1000);
	});

	$("#tram").each( function ( n ) {
		var $this = $(this), $container = $this.parent();

		$container.bind("onShow", function () {
			sr.$inst.bind("step.tram" + n, function () {
				if( Math.abs(sr.wHalf - $container.position().left ) < 100 ) {
					sr.$inst.unbind("step.tram" + n);
					$this.delay(1000).animate({ left: "800px"}, 16000);
				}
			});
		}).bind("onHide", function () {
			sr.$inst.unbind("step.tram" + n);

			$this.css("left", 0);
		});
	});
	
	$("#traktor").bind("onShow", function () {
		var $container = $(this), $this = $(this).find("img");

		sr.$inst.bind("step.traktor", function () {
			if( Math.abs(sr.wHalf - $container.position().left ) < 100 ) {
				sr.$inst.unbind("step.traktor");
				setTimeout(function () {
					$this.animate({ left: "250px"}, 4000);
				}, 1000);
			}
		});
	}).bind("onHide", function () {
		sr.$inst.unbind("step.traktor");
	});
	
	$("#goteborg").each( function ( n ) {
		var $this = $(this);

		$this.parent().bind("onShow", function () {
			$this.delay(1500).animate({
				height: "159px",
				width: "320px"
			}, 400, "linear");
		});
	});
	
	$("#bus").each( function ( n ) {
		var $this = $(this);

		$this.parent().bind("onShow", function () {
			setTimeout(function () {
				$this.addClass("bus-go");
			}, 500);
		}).bind("onHide", function () {
			$this.removeClass("bus-go");
		});
	});
	
	/*$(".form-info").each( function ( n ) {
		var $this = $(this);

		$this.parent().bind("onShow", function () {
			setTimeout(function () {
				switch( n ) {
					case 0:
						$this.animate({
							left: "99px"
						});
					break;
					case 1:
						$this.delay(250).animate({
							left: "50px"
						});
					break;
					case 2:
						$this.delay(500).animate({
							left: "767px"
						}, { complete: function () {
								$(this).css("z-index", "999"); // Position it over the form
							}
						});
					break;
				}
			}, 1000);
		});
	});*/
	
	/* send form */
	$("#tavla").bind("submit", function (e) {
		var $this = $(this), $formError = $this.find("#form-error");

		if($this.data("active") === false)  {
			$("#nogo").fadeIn(300).delay(2000).fadeOut(300);
			return false;
		}

		e.preventDefault();

		$.ajax({
			beforeSend: function () {
				$this.find("#send").css("background-position", "0 -129px").attr("disabled", "disabled");
			},
			cache: false,
			data: {
				story: $this.find("#story").val(),
                username: $this.find("#username").val(),
				name: $this.find("#name").val(),
				email: $this.find("#email").val(),
				phone: $this.find("#phone").val()
			},
			dataType: "json",
			success: function (data) {
				if(data.success) {
					$this.fadeOut(500, function () {
						$this.remove();
					});
					$("#tack-text").fadeIn(500);
				} else {
					$formError.slideDown(500);
		
					$this.children(":not(#send)").bind("click", function () {
						$formError.slideUp(500);
						$this.find("#send").css("background-position", "0 0").removeAttr("disabled");
					});
				}
			},
			type: "POST",
			url: $this.attr("action"),
			xhr: function () {
				return new XMLHttpRequest();
			}
		});
	}).find("div").bind("click", function () { // Allow for input focus even when clicking outside of the input
		$(this).find("input").trigger("focus");
	}).find("input, textarea").each(function () {
		var $this = $(this), supportPlaceholder = "placeholder" in document.createElement("input");

		if( $this.is("textarea") ) { // Limit input
			maxlength = $this.attr("maxlength");

			if (supportPlaceholder) {
				$this.val("");
			}

			$this.bind("keyup", function () {
				if ($this.val().length > maxlength) $this.val($this.val().substr(0, maxlength));
			});
		}

		$this.bind({ // Change fonts on focus and placeholder shim
			blur: function () {
				if (!supportPlaceholder) {
					if ($this.val() === "") {
						$this.val($this.prop("defaultValue"));
					}
				}

				if( $this.val() && $this.val() !== $this.prop("defaultValue") ) {
					$this.css("font", "12px Arial");
				} else {
					$this.css("font", "14px 'Pacifico Regular'");
				}
			},
			focus: function () {
				if (!supportPlaceholder) {
					if ($this.val() === $this.prop("defaultValue")) {
						$this.val("");
					}
				}

				$this.css("font", "12px Arial");
			}
		});
	});

	function addInterpolatedPoints( arr ) {
		var interpolatedArr = [];
		var i = 0;
		interpolatedArr.push( arr[i] );
		interpolatedArr.push( [arr[i][0] * 0.5 + arr[i + 1][0] * 0.5, arr[i][1] * 0.5 + arr[i + 1][1] * 0.5] );
		var intFactor = 0.85;
		var invIntFactor = 1 - intFactor;
		
		for ( i = 1 ; i < arr.length - 1; i++ ) {
			var p0 = [arr[i][0] * intFactor + arr[i - 1][0] * invIntFactor, arr[i][1] * intFactor + arr[i - 1][1] * invIntFactor ];
			var p1 = [arr[i][0] * intFactor + arr[i + 1][0] * invIntFactor, arr[i][1] * intFactor + arr[i + 1][1] * invIntFactor ];
			var p2 = [arr[i][0] * 0.5 + arr[i + 1][0] * 0.5, arr[i][1] * 0.5 + arr[i + 1][1] * 0.5];
			
			interpolatedArr.push( p0 );
			interpolatedArr.push( p1 );
			interpolatedArr.push( p2 );
		}
		interpolatedArr.push( arr[i] );
		return interpolatedArr;
	}
	
	var lastKorvPos;
	var $bajskorv = $("#bajskorv");
	var korvRot = 0;
	
	function animateBajskorv( now, fx ) {
		var pos = { // Fix for IE not handling position() correctly
			left: parseFloat( $bajskorv.css("left") ),
			top: parseFloat( $bajskorv.css("top") )
		};
		//var pos = $bajskorv.position();

		var dx = pos.left - lastKorvPos.left;
		var dy = pos.top - lastKorvPos.top;
		var len = Math.sqrt( dx * dx + dy * dy );
		var rad = Math.atan2( dy, dx );
		
		korvRot += (rad - korvRot) * Math.min(1, len * 0.02);
		
		if( !isIE ) $bajskorv.rotate({ angle: 180 * korvRot / Math.PI });
		
		lastKorvPos.left += ( pos.left - lastKorvPos.left ) * 0.5;
		lastKorvPos.top += ( pos.top - lastKorvPos.top ) * 0.5;
	}
	
	var sequences = {
		"start" :
			[[137, -40],
			[137, 110],
			[431, 110],
			[431, 230],
			[580, 230],
			[580, 75],
			[880, 75],
			[880, 180],
			[1030, 180],
			[1030, 110],
			[1270, 110]],
												
		"spel-topps" :
			[[1270, 110],
			[1751, 116],
			[1763, 230],
			[1903, 229],
			[1907, 80],
			[1972, 76]],
			
		"question_1" :
			[[1972, 76],
			[2205, 82],
			[2209, 185],
			[2354, 183],
			[2356, 120],
			[2603, 114]],
			
		"question_2" :
			[[2603, 114],
			[3076, 116],
			[3083, 229],
			[3231, 230],
			[3238, 81],
			[3303, 76]],
			
		"spel-blobb" :
			[[3303, 76],
			[3528, 84],
			[3539, 185],
			[3679, 189],
			[3688, 116],
			[4074, 113]],
			
		"spel-piller" :
			[[4074, 113],
			[4404, 116],
			[4411, 230],
			[4559, 231],
			[4566, 82],
			[4854, 83],
			[4864, 184],
			[5011, 186],
			[5014, 118],
			[5259, 113]],
			
		"question_3" :
			[[5259, 113],
			[5732, 114],
			[5739, 228],
			[5881, 230],
			[5896, 84],
			[5960, 77],
			[6182, 81],
			[6191, 182],
			[6336, 188],
			[6345, 115],
			[6817, 113]],

		"question_4" :
			[[6817, 113],
			[7058, 115],
			[7066, 230],
			[7212, 230],
			[7218, 78],
			[7294, 76],
			[7506, 83],
			[7516, 184],
			[7660, 187],
			[7671, 116],
			[8384, 116],
			[8392, 230],
			[8536, 229],
			[8547, 82],
			[8619, 76]],

		"question_5" :
			[[8619, 76],
			[8834, 82],
			[8843, 181],
			[8992, 184],
			[8997, 117],
			[9247, 113],
			[9464, 113]],

		"question_6" :
			[[9464, 113],
			[9712, 116],
			[9720, 230],
			[9867, 230],
			[9875, 81],
			[10165, 82],
			[10172, 183],
			[10317, 184],
			[10321, 114],
			[10375, 113]],

		"question_7" :
			[[10375, 113],
			[10709, 112],
			[10719, -35]]
		};

	var sequenceButtons =  {
		"start" : "btn-topps",
		"spel-topps": "question_1",
		"question_1": "question_2",
		"question_2": "btn-blobb",
		"spel-blobb": "btn-piller",
		"spel-piller": "question_3",
		"question_3": "question_4",
		"question_4": "question_5",
		"question_5": "question_6",
		"question_6": "question_7",
		"question_7": ""
	};
	function getNextSequenceName(_currentSequence) {
		return sequenceButtons[_currentSequence];
	}
	
	var lastObstacle = "start";

	/* start */
	sr.animateGirl = false;
	$("#container").waitForImages(function() {
		$("#container").fadeIn(500);
		//$("#startskylt").delay(500).animate({top: "-180px"}, {duration: 500, complete: function () {
			$("#loading").remove();
		//}}).bind("click", function () {
		//	$(this).animate({top: -900}, {duration: 250, complete: function () {
				playSound("music");
				$("#startblocker").fadeOut(300);
				$("#spolhandtag").animate({top: 0}, {duration: 750});
				$("#spolhandtag, #spolahar").bind("click", function (e) {
					e.stopPropagation();

					if( sr.posXRaw < 100 ) { // At the start
						$("#spolhandtag").animate({top: 40}, {duration: 100}).delay(200).animate({top: -384}, {duration: 750, easing: "easeOutExpo"});
						$("#spolahar img").fadeOut();
						//console.log( $.crSpline );
						lastKorvPos = {left:137, top:10};
						korvRot = Math.PI * 0.5;
						animateBajsToNextStep("start");
						playSound("flush");
						$("#girl").delay(2000).animate({left: 400}, { duration: 2000, step: function () {
							var $left = $girl.position().left;
							var iindex = Math.round($left * 0.4) % 20;
							$girl.css("background-position", "-" + (iindex * 26 ) + "px 0px");
						}, complete: function () { $("#girl-pratbubbla-start").fadeIn(500).delay(5000).fadeOut(500); sr.animateGirl = true; }});
					} else { // Scroll to the start
						sr.targetX = 0;
					}
				});
				$("#spolhandtagcontainer").rotate({ angle: 15, animateTo: 0, duration: 5000, easing: $.easing.easeOutElastic});
				$("#spolahar").delay(1000).fadeIn();
				$("#spolahar img").delay(1000).css({left: 50}).animate({ left: 0 }, {easing: "easeOutBounce", duration: 750});

				navActive = true;
			//}});
		//});
	});
	
	function animateBajsToNextStep($lastStep) {
		hideAlert();

		$bajskorv.delay(800).fadeIn(100).animate({
				crSpline: $.crSpline.buildSequence(addInterpolatedPoints(sequences[ $lastStep ]))
		}, {duration: 6000, easing: "easeInOutSine", step: animateBajskorv, complete: function () {
			if( $lastStep !== "question_7") {
				if( $("#" + getNextSequenceName($lastStep)).data("complete") !== true) {
					showAlert();
				}
			} else {
					hideKorv();
				}
			}
		});
		
		$("#" + getNextSequenceName($lastStep)).data("active", true); // Activate next obstacle

		lastObstacle = $lastStep;
	}
			
	function hideKorv() {
		$bajskorv.hide();
		
		hideAlert();

		//$("#girl-pratbubbla-end").delay(250).fadeIn(500);
		$("#gryaab-bubblor").attr("src", "images/gryaab-bubblor.gif");
		
		$bajskorv.removeAttr("style").css({
			left: "10740px",
			top: "-53px"
		}).addClass("scale-bajs").delay(2500).fadeIn().animate({
			left: "11008px"
		}, 4000, function () {
			$bajskorv.hide();

			/* angels */
			function angelFly() {
				$(".angel").each(function ( n ) {
					var $this = $(this), top = $("#gryyab").offset().top + 25;

					if( !n ) {
						top += 125;
					}

					$this.delay(500).animate({ top: "-70px" }, { duration: 7000, ease: "linear", complete: function () {
						$this.css("top", top);

						angelFly();
					}, step: function (now, fx) {
						var iindex = Math.round(now * 0.1) % 4;
						$this.css("background-position", "0px -" + (iindex * 77 ) + "px");
					} });
				});
			}
			angelFly();

			$(".tanka-stapel").each(function(n) {
				var $this = $(this);
				$this.animate({ height: $this.data('height')}, { duration: 2000, easing: 'easeOutCirc' });
				$this.children(".stapel").animate({ backgroundColor: "#cded19" }, { duration: 2000, easing: 'linear' });
			});
		});

		// Activate form
		$("#tavla").data('active', true);
	}
	
	function showAlert() {
		var $alert = $("#alert");
		var $alertLeft = $("#alert-left");
		var $alertRight = $("#alert-right");
		var $alertTop = $("#alert-top");
		var $alertBottom = $("#alert-down");
		var dirs = [ $alertTop, $alertRight, $alertBottom, $alertLeft ];
		var currentDir = 2; // 0 - up, 1 - right, 2 - down, 3 - left
		var newDir;
		
		var $bajskorv = $("#bajskorv");
		var bajsPos;
		
		var bLeft;
		var minLeft;
		var maxLeft;
		var left;
		
		var bTop;
		var minTop;
		var maxTop;
		var top;
		
		$alert.fadeIn(600);
		
		dirs[currentDir].show();
		
		$alert.find("img").bind("click", function (e) {
			e.stopPropagation();

			if( elementInViewport( $bajskorv.get(0) ) ) {
				// Trigger game/question
				var $elem = $("#" + getNextSequenceName(lastObstacle)), event = new jQuery.Event("click");

				event.pageX = e.pageX;
				event.pageY = e.pageY;
				$elem.trigger(event);

				sr.targetX = ($bajskorv.position().left - 200) + ($elem.next("div").width() / 2) - (window.innerWidth / 2);
			} else {
				// Scroll to it
				sr.targetX = $bajskorv.position().left + ($bajskorv.width() / 2) - (window.innerWidth / 2);
			}
		});

		sr.$inst.bind("step.alert", function ( e, deltaTime ) {
			bajsPos = $bajskorv.position();
			bLeft = bajsPos.left - 15;
			minLeft = sr.posXRaw + 40;
			maxLeft = sr.posXRaw + (sr.wHalf * 2 ) - 120;
			
			bTop = bajsPos.top - 90 + 663;
			minTop = sr.posYRaw + 40;
			maxTop = sr.posYRaw + (sr.hHalf * 2 ) - 120;
			
			newDir = 2; // default
			
			if ( bLeft < minLeft ) newDir = 3;
			if ( bLeft > maxLeft ) newDir = 1;
			
			if ( newDir != currentDir ) {
				dirs[0].hide();
				dirs[1].hide();
				dirs[2].hide();
				dirs[3].hide();

				dirs[ newDir ].show();
				currentDir = newDir;
			}
			//console.log( currentDir);
			left = Math.min(Math.max( bLeft, minLeft ), maxLeft);
			top = Math.min(Math.max( bTop, minTop ), maxTop) - 663;

			$alert.css({left: left, top: top});
		});
	}
	
	function hideAlert() {
		$("#alert").fadeOut(300).unbind("click");
		$("#alert-left, #alert-right, #alert-top, #alert-down").delay(300).fadeOut(300).unbind("click");
		sr.$inst.unbind("step.alert");
	}
	
	/* obstacles */
	$(".question").click(function (e) {
		var $this = $(this), $questionPanel = $this.next();
		
		setVolume("music", 0.5);
		
		e.preventDefault();

		if (!$this.data('active')) return;

		hideAlert();
		
		$this.unbind("click");
		$questionPanel.delay(300).slideDown(500);
		
		$("#blocker").fadeIn(300);
		setTimeout( function () { navActive = !navActive; }, 10 );
		
		$(".girl-face", $questionPanel).delay(800).fadeIn();
		
		$("a", $questionPanel).click( function (e) {
			var $a = $(this);
			var $img = $("img", $a);
			var $div = $("div", $a);

			e.preventDefault();
			
			if ( $a.hasClass("correct") ) {
				$img.animate({left: "+=42"}, {duration: 300});
				$div.animate({backgroundColor: "#a0c56b"}, {duration: 300});
				$questionPanel.children('.spel-success').fadeIn(300).delay(600).fadeOut(300);
				$(".girl-face", $questionPanel).delay(900).fadeOut(300);
				
				$questionPanel.delay(1200).slideUp(500);
				$("#blocker").delay(1200).fadeOut(300);
				$this.find("img").delay(1500).fadeOut(300);
				
				setTimeout( function () {
					navActive = !navActive;

					$this.data("complete", true);
				}, 10 );
				setTimeout( function () {
					animateBajsToNextStep( $this.attr("id") );
					setVolume("music", 1.0);
					$this.find(".done").delay(2000).fadeIn(500);
				}, 1500);
				playSound("good");
				
			} else {
				$img.animate({left: "+=42"}, {duration: 300}).animate({left: "-=42"}, {duration: 300});
				$div.animate({backgroundColor: "#de7e6d"}, {duration: 300}).animate({backgroundColor: "#c4c4c4"}, {duration: 300});
				playSound("bad");
			}
		});
	});
	
	$("#btn-topps").click( function (e) {
		e.preventDefault();
		if (!$(this).data('active')) return;
		activateGame( $("#spel-topps") );
	});
	
	$("#btn-blobb").click( function (e) {
		e.preventDefault();
		if (!$(this).data('active')) return;
		activateGame( $("#spel-blobb") );
	});
	
	$("#btn-piller").click( function (e) {
		e.preventDefault();
		if (!$(this).data('active')) return;
		activateGame( $("#spel-piller") );
	});
	
	function activateGame( $game ) {
		$game.trigger('init-game'); // Do game init
		
		hideAlert();
		
		setVolume("music", 0.5);
		
		$game.addClass("active");
		setTimeout( function () { sr.targetY = Math.max( Math.min( sr.maxY, 175), sr.minY); navActive = false; }, 10 );
		
		$("#blocker").fadeIn(300);
		$game.slideDown(500, "easeOutBack", function () {
			$(".girl-face, .challenge", $game).fadeIn();
		});
		$("a.startknapp", $game).hover(
			function () {
				$(this).css({bottom: "+=2px"});
			},
			function () {
				$(this).css({bottom: "-=2px"});
			}
		).click( function(e) {
			e.preventDefault();

			$(this).fadeOut(200).unbind("click");
			$(".spel-blocker", $game).fadeOut(200);
			$game.trigger("start-game");
		});
	}

	function deactivateGame( $game ) {
		var id = $game.attr("id");

		setVolume("music", 1.0);
		
		$game.removeClass("active");
		setTimeout( function () { navActive = true; }, 10 );
		$(".girl-face, .challenge", $game).fadeOut(500, function() {
			$game.slideUp(500, "easeInBack");
			$("#blocker").fadeOut(300);
		});
		animateBajsToNextStep( id );

		id = id.replace("spel-", "btn-");
		$("#" + id).data("complete", true).find(".done").delay(2000).fadeIn(500);
	}

	$("#spel-topps").bind("start-game", function() {
		var $contentarea = $('#spel-topps .spel-content').first();
		
		var startCounter = sr.counter;
		var rotareArrow = true;
		sr.$inst.bind("step", function ( e, deltaTime ) {
			if ( rotareArrow ) {
				$("#topps-pil").rotate( Math.sin( (sr.counter - startCounter) * 4 ) * 90 );

				if( isIE ) {
					$("#topps-pil").css({
						bottom: "-49px",
						top: "auto"
					});
				}
			}
		});
		
		// Remove old objects if they've been added before.
		$contentarea.children('.topps, #topps-gojs').remove();
		
		var tops = [];
		$('<img src="images/topps-gojs.png" class="abs" style="left: 106px; bottom: 142px;" id="topps-gojs" />').appendTo($contentarea);
		
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 100px; bottom: 175px;" />').appendTo($contentarea).rotate(70));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 135px; bottom: 195px;" />').appendTo($contentarea).rotate(130));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 125px; bottom: 175px;" />').appendTo($contentarea).rotate(90));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 170px; bottom: 190px;" />').appendTo($contentarea).rotate(15));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 155px; bottom: 172px;" />').appendTo($contentarea).rotate(150));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 127px; bottom: 210px;" />').appendTo($contentarea).rotate(5));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 115px; bottom: 195px;" />').appendTo($contentarea).rotate(150));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 135px; bottom: 185px;" />').appendTo($contentarea).rotate(90));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 145px; bottom: 173px;" />').appendTo($contentarea).rotate(110));
		tops.push($('<img src="images/topps-single.png" class="abs topps" style="left: 110px; bottom: 175px;" />').appendTo($contentarea).rotate(85));

		function removeTops(num) {
			num = Math.min(tops.length, num);
			for(var i = 0; i < num; i++) {
				var topp = tops.shift()[0];
				var tleft = parseFloat(topp.css('left'));
				var tbottom = parseFloat(topp.css('bottom'));
				if( isIE ) {
					topp.animate({ left: tleft + 70, bottom: 185 }, 1000).fadeOut().rotate({ animateTo: 0, duration: 500 });
				} else {
					topp.animate({ opacity: 0, left: tleft + 70, bottom: 185 }, 1000).rotate({ animateTo: 0, duration: 500 });
				}
			}
			
			if (tops.length === 0) {
				$('#topps-gojs').fadeOut(500);
				
				gameOver(true);
			}
		}
		function gameOver(success) {
			if (success) {
				$("#btn-topps").unbind("click").find("img").fadeOut();
				playSound("good");
				
				// Game over -> Show ok!
				$("#spel-topps").children('.spel-success, .spel-blocker').fadeIn(500);
			} else {
				$("#spel-topps").children('.spel-fail, .spel-blocker').fadeIn(500);
			}

			setTimeout(function() {
				deactivateGame($("#spel-topps"));
			}, 3000);
		}
		
		$(this).children('.spel-content').bind("mousedown touchstart", function () {
			if (rotareArrow === false) return;

			var strength = Math.max(0, 45 - Math.abs( Math.sin( (sr.counter - startCounter) * 4 ) * 90 ) );
			rotareArrow = false;
			var $sug = $('#topps-sug');
			var $pipe = $("#topps-pipe");
			setTimeout( function () { playSound("schlupp"); }, 200 - strength * 4 );

			$sug.animate({ left: 340-28 }, { duration: 300-strength*5 })
			.animate({ left: 340-35, width: 80, height: 74 }, { duration: 200, complete: function() {
					//playSound("squeak");
			}}).animate({ width: 121, height: 74 }, { duration: 300-strength*3, complete: function() {
				// Strength = max 45
				removeTops(Math.round(strength/10)); // Max 4 tops tas bort
					
				if (strength > 0) {
					$pipe.animate({ width: "+=8px" }, { duration: 150 }).animate({ width: "-=8px" }, { duration: 100 });
				}
			}}).animate({ left: 340 }, { duration: 300-strength*2, complete: function() {
				playSound("plopp");

				if (tops.length > 0) {
					rotareArrow = true;
				}
			}});
/*
			$(this)
				.animate({left: "-=" + (strength + 30)}, {duration: 300 - strength * 4, step: function(now, fx) {
					$pipe.css({left: Math.min(0, now - 310)});
				}, complete: function () {
					playSound("squeak");
				}})
				.animate({left: 340 + strength}, { duration: 200 + strength * 4 , complete: function () {
					playSound("plopp");
				}});
			$pipe.delay(1100 + 300 - strength * 4).animate({left: 0}, {duration: 1000, complete: function () { rotareArrow = true; }});
*/
		});
	});


	$('#spel-blobb').bind('init-game', function() {
		$blobbar = $("#spel-blobb .blobb");

		// Init blobs positions.
		$blobbar.each( function (n) {
			$(this).css({ left: (Math.random() * 493), top: (Math.random() * 345) });
		});
	}).bind("start-game", function() {
		var $contentarea = $('#spel-blobb .spel-content').first();
		var $blobbar = $("#spel-blobb .blobb");
		var data = [];
		var numBlobbar = $blobbar.length;

		function gameOver(success) {
			if (success) {
				$("#btn-blobb").unbind("click").find("img").fadeOut();
				playSound("good");
				
				// Game over -> Show ok!
				$("#spel-blobb").children('.spel-success, .spel-blocker').fadeIn(500);
			} else {
				$("#spel-blobb").children('.spel-fail, .spel-blocker').fadeIn(500);
			}

			setTimeout(function() {
				deactivateGame($("#spel-blobb"));
			}, 3000);
		}
		function explodeBlobb(x, y) {
//console.log("explodeBlobb("+x+", "+y+")");
			x+=79/2; // Kompensera för att coordinaterna inte är i mitten av blobben
			y+=74/2;
			for(var angle=0; angle<5; angle++) {
				var thisAngle = angle+Math.random()-0.5;
				var startX = x - 13 + Math.cos(Math.PI * 2 * thisAngle/5)*20;
				var startY = y - 13 + Math.sin(Math.PI * 2 * thisAngle/5)*20;
			
				var newX = x - 13 + Math.cos(Math.PI * 2 * thisAngle/5)*100;
				var newY = y - 13 + Math.sin(Math.PI * 2 * thisAngle/5)*100;
				
				$('<img src="images/blobb-part.png" class="abs" style="left:'+startX+'px;top:'+startY+'px;" />').appendTo($contentarea)
				.animate( { left: newX, top: newY, width: 1, height: 1, opacity: 0 }, { duration: 1000, easing: 'easeOutSine', complete: function() {
						$(this).remove();
					}
				});
			}
		}
		
		$blobbar.each( function (n) {
			data.push( {
					x: parseFloat($(this).css('left')), //(Math.random() * 493),
					y: parseFloat($(this).css('top')), //(Math.random() * 345),
					dx: (Math.random() * 400) - 200,
					dy: (Math.random() * 400) - 200 } );
					
			$(this).css({left: data[n].x, top: data[n].y }).bind("mousedown touchstart", function () {

				playSound("goop13");

				explodeBlobb( data[n].x, data[n].y );
				var $this = $(this);
				$this.css('display', 'none');
				$this.unbind("mousedown touchstart");
				numBlobbar--;
				if (numBlobbar <= 0) {
					gameOver(true);
				}
					
			});
		});
		
		sr.$inst.bind("step", function ( e, deltaTime ) {
			$contentarea.css("backgroundPosition", "0 " + ((sr.counter * 50)%345) + "px");
		
			$blobbar.each( function (n) {
				var $blob = $(this);
				
				data[n].x += data[n].dx * deltaTime;
				data[n].y += data[n].dy * deltaTime;
				
				while ( data[n].x < -79 ) data[n].x += 493 + 79;
				while ( data[n].x > 493 ) data[n].x -= 493 + 79;
				while ( data[n].y < -74 ) data[n].y += 345 + 74;
				while ( data[n].y > 345 ) data[n].y -= 345 + 74;
				
				$blob.css({left: data[n].x, top: data[n].y });
			});
		});
	});

	$('#spel-piller').bind('init-game', function() {
		$pills = $("#spel-piller .pills");

		// Init pill positions.
		$pills.each( function (n) {
			$(this).css({ top: -50 });
		});
		
		var $bucket = $("#bucket"); // Move bucket to center.
		var $bucketBack = $("#bucket-back");
		$bucket.css({ left: 211 });
		$bucketBack.css({ left: 211 });
	}).bind("start-game", function() {
		var $contentarea = $('#spel-piller .spel-content').first();
		var $pills = $("#spel-piller .pills");
		var data = [];
		var $bucket = $("#bucket");
		var $bucketBack = $("#bucket-back");
		var $counter = $('#piller-counter');
		
		var offset = $("#spel-piller .spel-content").offset();
		var bucketPos = 0;
		var pillsCaught = 0;
		var gameActive = true;
		
		$(this).bind("mousemove", function (e) {
			bucketPos = e.pageX - offset.left;
		});

		$bucket.bind("touchmove", function (event) {
			var e = event.originalEvent;

			bucketPos = e.touches[0].pageX - offset.left;

			event.preventDefault();
		});
		
		$pills.each( function (n) {
			data.push( {
					x: 50 + (Math.random() * 393),
					y: n * -40,
					rot: 0,
					dr: Math.random() * 10 - 5,
					dy: 100 //Math.random() * 75 + 100 //Math.random() * 100 + 100
			} );
					
			/*$(this).css({left: data[n].x, top: data[n].y }).mousedown( function () {
				$(this).hide(100);
			});*/
		});

		function gameOver(success) {
			if (success) {
				$("#btn-piller").unbind("click").find("img").fadeOut();
	
				playSound("good");
				
				// Game over -> Show ok!
				$("#spel-piller").children('.spel-success, .spel-blocker').fadeIn(500);
			} else {
				$("#spel-piller").children('.spel-fail, .spel-blocker').fadeIn(500);
			}

			setTimeout(function() {
				deactivateGame($("#spel-piller"));
			}, 3000);
		}
		
		sr.$inst.bind("step", function ( e, deltaTime ) {
			if (!gameActive) return;

			$contentarea.css("backgroundPosition", "0 " + ((sr.counter * 50)%345) + "px");

			var bucketCurrentPosition = parseFloat($bucket.css('left'))+35;
			var newPos = bucketCurrentPosition + ((bucketPos - bucketCurrentPosition)/5);
			$bucket.css({left: newPos - 35});
			$bucketBack.css({left: newPos - 35});
		
			$pills.each( function (n) {
				var $pill = $(this);
				
				data[n].y += data[n].dy * deltaTime;
				data[n].rot += data[n].dr;
				
				var y = data[n].y;
				if ( y > 345 || ( y > 275 && y < 320 && Math.abs(data[n].x - bucketCurrentPosition + 10) < 32 ) )  {
					if (y < 290) {
						pillsCaught++;
						$counter.text(""+pillsCaught);
						//playSound("bling04"); //fwip0"+Math.ceil(Math.random()*2) );
						playSound("pokerchip07");
						
						if (pillsCaught >= 20) {
							gameActive = false;
							gameOver(true);
						}
					}
					
					data[n].y -= 345 + 74;
					data[n].x = 50 + (Math.random() * 393);
					data[n].dy = 100; //Math.random() * 100 + 75; //Math.random() * 100 + 100;
					data[n].dr = Math.random() * 10 - 5;
				}
				
				$pill.css({left: data[n].x, top: data[n].y });

				if( !isIE) $pill.rotate( data[n].rot );
			});
		});
	});
	
});

var lefts = [];
var rights = [];

var numLefts = 0;
var numRights = 0;

var leftIndex = 0;
var rightIndex = 0;

var visible = [];

var sprites = [];
var textures = [];

var init = 0;

//$(document).mousemove( function (e) {
	//console.log( e.pageX + sr.posXRaw - 23, e.pageY + sr.posYRaw - 663 - 12);
	//console.log( sr.posXRaw, sr.wHalf );
//});

/* TODO - sortera objekt horsontellt och använd "occlusion culling" */
$(window).load( function () {
	//console.log( sr.animatables.length );
	
	//return;
	calcOcclusions();
	
	init++;
	
	if ( init == 2 ) {
		refreshScreen();
	}
});

function calcOcclusions() {

	lefts = [];
	rights = [];
	
	sr.animatables.each( function (n) {
		var $this = $(this), id = $this.attr('id');

		if (typeof(id) == 'undefined' && id !== false) {
			$this.attr('id', 'anim-' + n);
			id = $this.attr('id');
		}
		
		$this.data("order", n);
		
		var orgPosX = $this.data("posDataX");
		var wHalf = $(window).width() * 0.5;
		var bound = this.getBoundingClientRect();
		
		var leftX =  -((wHalf / $this.data("posFactor")) - orgPosX + wHalf);
		var rightX = -((wHalf / $this.data("posFactor")) - orgPosX + wHalf) + (($this.width() + wHalf * 2 ) / $this.data("posFactor"));

		lefts.push( { x: leftX, el: $this } ) ;
		rights.push( { x: rightX, el: $this } );
		
		sprites[ id ] = -1;
		if ( $this.is("img") ) {
			sprites[ id ] = 0;
			if ( $this.attr("src").indexOf(".gif") != -1 ) {
				//console.log("gif");

				sprites[ id ] = 1;
			}
		}
		
		$this.hide();
	});
	
	leftIndex = 0;
	rightIndex = 0;
	
	numLefts = lefts.length;
	numRights = rights.length;
	
	lefts.sort(sortfunction);
	rights.sort(sortfunction);
	
	function sortfunction(a, b) {
		return (a.x - b.x); //causes an array to be sorted numerically and ascending
	}
}

function refreshScreen() {
	$("#content").css({top: 0});
	calcVisibility(sr.posXRaw,0);
	sr.handlePosition(sr.posXRaw,sr.posYRaw);
}

function calcVisibility( x, dx ) {
	
	//console.log( "calcVisibility", x, dx );
	
	function sortObj(arr){
		// Setup Arrays
		var sortedKeys = [];
		var sortedObj = {};
		var i;

		// Separate keys and sort them
		for (i in arr) {
			sortedKeys.push( i );
		}
		sortedKeys.sort();
	
		// Reconstruct sorted obj based on keys
		for (i in sortedKeys) {
			sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];
		}
		return sortedObj;
	}
	
	if (!init) return;

	var obj;
	var id;
	var leftLimit;
	var rightLimit;

	if ( dx >= 0 ) {
		//console.log( "###" );
		leftLimit = false;
		while ( !leftLimit && leftIndex < numLefts) {
			//console.log( "---" );
			obj = lefts[leftIndex];
			id = obj.el.attr('id' );
			//console.log( id, obj.x );
			if ( obj.x < x ) {
				//console.log( "showing" );
				visible[ id ] = obj.el;
				//visible = sortObj(visible);
				//if ( sprites[id] == -1 )
					obj.el.show();
					obj.el.trigger("onShow");
				//console.log("Showing! " + obj.el.attr('id' ));
				leftIndex++;
			} else {
				leftLimit = true;
			}
		}
		
		rightLimit = false;
		while ( !rightLimit && rightIndex < numRights) {
			//console.log( "---" );
			obj = rights[rightIndex];
			id = obj.el.attr('id' );
			//console.log( id, obj.x );
			if ( obj.x < x ) {
				//console.log( "hiding" );
				delete visible[ id ];
				obj.el.hide();
				obj.el.trigger("onHide");
				//console.log("Hiding! " + obj.el.attr('id' ));
				rightIndex++;
			} else {
				rightLimit = true;
			}
		}
	} else {
		leftLimit = false;
		while ( !leftLimit ) {
			obj = lefts[leftIndex];
			id = obj.el.attr('id' );
			if ( obj.x > x ) {
				delete visible[ id ];
				obj.el.hide();
				obj.el.trigger("onHide");
				//console.log("Hiding! " + obj.el.attr('id' ));
				leftIndex--;
				if ( leftIndex < 0 ) {
					leftIndex = 0;
					leftLimit = true;
				}
			} else {
				leftLimit = true;
			}
		}

		rightLimit = false;
		while ( !rightLimit ) {
			obj = rights[rightIndex];
			id = obj.el.attr('id' );
			if ( obj.x > x ) {
				visible[ id ] = obj.el;
				//visible = sortObj(visible);
				//if ( sprites[id] == -1 )
					obj.el.show();
					obj.el.trigger("onShow");
				//console.log("Showing! " + obj.el.attr('id' ));
				rightIndex--;
				if ( rightIndex < 0 ) {
					rightIndex = 0;
					rightLimit = true;
				}
			} else {
				rightLimit = true;
			}
		}
	}
}

/* END TODO */

var $girl = $("#girl");

/*var stats = new Stats();

// Align top-left
stats.getDomElement().style.position = 'absolute';
stats.getDomElement().style.left = '0px';
stats.getDomElement().style.top = '0px';

document.body.appendChild( stats.getDomElement() );*/

var sr = {
	init: function () {
		//this.scrollcontroller = $("#scrollcontroller");
		this.content = $("#content");
		this.animatables = $(".animatable").each(function (n) {
			var $this = $(this);
			$this.data("posDataX", parseInt( $this.css("left"), 10 ) );
			$this.data("posDataY", parseInt( $this.css("top"), 10 ) );
			$this.data("posFactor", parseFloat( $this.attr("data-depth") ) );
		});
		this.maxX = 13200;
		this.maxY = 300;
		this.minX = 0;
		this.minY = 100;
		
		this.targetX = this.minX;
		this.targetY = this.minY;
		this.posYRaw = 0;
		this.posXRaw = 0;
		this.posY = 0;
		this.posX = 0;
		this.counter = 0;
		
		sr.calcBounds();
		
		this.$inst = $(this);
		
		$(document).click(function (e) {
			if ( !navActive ) return;
			sr.targetX = Math.max( Math.min( sr.maxX, e.pageX - sr.wHalf + sr.targetX), sr.minX);
			sr.targetY = Math.max( Math.min( sr.maxY, e.pageY - sr.hHalf + sr.targetY), sr.minY);
		});

		$(window).resize( sr.onResize );
	},
	onStep: function ( deltaTime ) {
		this.counter += deltaTime;
		
		//stats.update();

		if ( Math.abs(this.targetX - this.posXRaw) > 1 || Math.abs(this.targetY - this.posYRaw) > 1) {
			this.posXRaw += (this.targetX - this.posXRaw) * Math.min(deltaTime * 4, 1);
			this.posYRaw += (this.targetY - this.posYRaw) * Math.min(deltaTime * 4, 1);
			
			calcVisibility( this.posXRaw, this.targetX - this.posXRaw );

			//console.log( this.targetY, this.posYRaw );
			sr.handlePosition( this.posXRaw, this.posYRaw );
		}
		
		/* animate girl */
		if ( sr.animateGirl && this.posXRaw > 0 ) {
			
			var $left = $girl.position().left;
			var dx = (this.posXRaw + this.wHalf - 200 - $left ) * Math.min(deltaTime * 1, 1);
			
			var max = 12350; // max position, just before bridge

			$left = Math.min(max, $left + dx); // Limit girl to left of bridge
			var iindex = Math.round($left * 0.4) % 20;
			
			$girl.css("background-position", "-" + (iindex * 26 ) + "px " + (dx > 0 ? 0 : -78 ) + "px");
			
			$girl.css({left: $left });

			if( $left === max ) { // Hide last message from girl
				$("#girl-pratbubbla-end").fadeOut(500);
			}
		}

		/* handle steps */
		this.$inst.trigger("step", deltaTime);
	},
	handlePosition: function ( x, y ) {
		//console.log("handlePosition");
		//console.log( x, y );
		sr.posX = x + sr.wHalf;
		sr.posY = y + sr.hHalf;
		//var c = $("canvas")[0];
		//var context = c.getContext("2d");
		//context.clearRect(0,0,sr.wHalf * 2, sr.hHalf * 2);
		
		//this.animatables.each( function (n) {
		c = 0;
		for ( var n in visible ) {
			c++;
			var $this = visible[n];
			var orgPosX = $this.data("posDataX");
			var orgPosY = $this.data("posDataY");
			var left = Math.floor( sr.wHalf + (orgPosX - sr.posX) * $this.data("posFactor") );
			var top = Math.floor( sr.hHalf + (orgPosY - sr.posY) );
			
			/*var sprite = sprites[n];
			switch ( sprite ) {
				case -1: // non canvas
					$this.css({left: left, top: top});
					break;
					
				case 0: // create texture + sprite
					if ( $this.height() > 0) {
						if ( !textures[$this.attr("src")] ) {
							console.log("Creating texture: ", $this[0]);
					
							var newTexture = document.createElement("canvas");
							newTexture.height = $this.height();
							newTexture.width = $this.width();
							console.log( newTexture.width, newTexture.height );
							newTexture.getContext('2d').drawImage($this[0], 0, 0);
							textures[$this.attr("src")] = newTexture;
							sprites[n] = {t: newTexture};
						} else {
							console.log("Reusing texture");
							sprites[n] = {t: textures[$this.attr("src")]};
						}
						$this.detach();
						context.drawImage( sprites[n], left, top);
					}
					break;
					
				case 1: // gif
					console.log("drawing gif");
					context.drawImage( $this[0], left, top);
					break;
					
				default:
					context.drawImage( sprite.t, left, top);
			}*/
			$this.css({left: left, top: top});
		}
		$("#marken").css({top: sr.hHalf + (663 - sr.posY)});
	},
	onResize: function () {
		sr.calcBounds();
		calcOcclusions();
		refreshScreen();
	},
	calcBounds: function () {
		sr.wHalf = $(window).width() * 0.5;
		sr.hHalf = $(window).height() * 0.5;
		sr.maxY = Math.max( 1000 - $(window).height(), sr.minY );
		sr.targetY = Math.min( sr.targetY, sr.maxY );
		sr.maxX = Math.max( 14500 - $(window).width(), sr.minX );
		sr.targetX = Math.min( sr.targetX, sr.maxX );
	},
	initObstacles: function () {
		$("#tavla").data('active', false); // Disable form

		$(".obstacle").each( function () {
			var $this = $(this);
			$this.data({
				active: false,
				complete: false
			});

			var $selection = $this.find(".selection");
			$this.hover( function () {
				if ($this.data('active')) { // Animate only if active
					$selection.stop(true).animate({opacity: 1}, {duration: 200});
				}
			}, function () {
				$selection.stop(true).animate({opacity: 0}, {duration: 200});
			});
		}); /*.click(function () {
			sr.targetX = $(this).position().left - sr.wHalf;
		});*/
	}
};

var srAnimator = {
	init: function () {
		srAnimator.initTimer();
	},
	initTimer: function () {
		var animObj = ({ x: 0 });
		//var then = 0;
		var then = new Date().getTime();
		var deltaTime;
		var length = 1000;
		/*var animFunc = function () {
			var $func = arguments.callee;
			animObj.x = 0;
			$(animObj).animate({x: length}, {duration: length * 1000, easing: "linear",
			step: function(now, fx) {
				deltaTime = now - then;
				then = now;
				while( deltaTime < 0 ) deltaTime += length;
				sr.onStep( deltaTime );
			},
			complete: animFunc });
		};
		animFunc();*/
		function animFunc() {
			requestAnimFrame(animFunc);

			now = new Date().getTime();
			deltaTime = now - then;
			then = now;
			sr.onStep( deltaTime * 0.001 );
		}
		animFunc();
	}
};

/* check visibility */
function elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return !(
        rect.top >= window.innerHeight ||
        rect.left >= window.innerWidth ||
        rect.bottom <= 0 ||
        rect.right <= 0
	);
}

/* key and touch code */
var startPos = {x:0, y:0};
var dragging = false;
var navActive = false;

function initKeyTouchAndDragInput() {
	$(document).keydown( function (e) {
		var $target = $(e.target);

		if ( !navActive ) return;

		if( $target.is("input") || $target.is("textarea") ) return;

		switch (e.keyCode) {
			case 65: // a
			case 37: // left
				sr.targetX = Math.max(  sr.minX, sr.targetX - 400);
				e.preventDefault();
				break;

			case 68: // d
			case 39: // right
				sr.targetX = Math.min( sr.maxX, sr.targetX + 400);
				e.preventDefault();
				break;

			case 87: // w
			case 38: // up
				sr.targetY = Math.max( sr.minY, sr.targetY - 100);
				e.preventDefault();
				break;

			case 83: // s
			case 40: // down
				sr.targetY = Math.min( sr.maxY, sr.targetY + 100);
				break;
		}
	}).mousewheel(function(event, delta, deltaX, deltaY) {
		if ( !navActive ) return;
		
		sr.targetX = Math.max( Math.min( sr.maxX, sr.targetX + deltaX * 40), sr.minX);
		sr.targetY = Math.max( Math.min( sr.maxY, sr.targetY - deltaY * 40), sr.minY);
	}).mousedown( function(event) {
		if ( !navActive ) return;
		
		startPos.x = event.pageX;
		startPos.y = event.pageY;
		dragging = true;
    }).mousemove( function (event) {
		if ( !navActive ) return;

		if ( dragging ) {
			sr.targetX = Math.max( Math.min( sr.maxX, sr.targetX + (startPos.x - event.pageX) * 1.3), sr.minX);
			sr.targetY = Math.max( Math.min( sr.maxY, sr.targetY + (startPos.y - event.pageY) * 1.3), sr.minY);
			startPos.x = event.pageX;
			startPos.y = event.pageY;
		}
    }).mouseup( function(event) {
		dragging = false;
    }).bind('touchstart', function(event) {
		if ( !navActive ) return;

        // jQuery clones events, but only with a limited number of properties for perf reasons. Need the original event to get 'touches'
        var e = event.originalEvent;
        startPos.x = e.touches[0].pageX;
        startPos.y = e.touches[0].pageY;
        //e.preventDefault();
    }).bind('touchmove', function(event) {
		if ( !navActive ) return;

        var e = event.originalEvent;
        sr.targetX = Math.max( Math.min( sr.maxX, sr.targetX + (startPos.x - e.touches[0].pageX) * 1.3), sr.minX);
        sr.targetY = Math.max( Math.min( sr.maxY, sr.targetY + (startPos.y - e.touches[0].pageY) * 1.3), sr.minY);
        startPos.x = e.touches[0].pageX;
        startPos.y = e.touches[0].pageY;
        e.preventDefault();
    });
}