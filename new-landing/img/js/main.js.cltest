//if($("#agree").checked){ $("#agree").css('border', '1px solid red'); }
function show_alert()
{
  if (myCheckBox.checked)
  {
    alert("Флажок установлен"); }
  else
  {
    alert("Флажок не установлен")
  }
}

function inArray(needle, haystack) {
	var length = haystack.length;
	for (var i = 0; i < length; i++)
		if (typeof haystack[i] == "object") {
			if (arrayCompare(haystack[i], needle))
				return true
		} else if (haystack[i] == needle)
			return true;
	return false
}
window.isset = function (v) {
	if (typeof v == "object" && v == "undefined")
		return false;
	else if (arguments.length === 0)
		return false;
	
	else {
		var buff = arguments[0];
		for (var i = 0; i < arguments.length; i++) {
			if (typeof buff === "undefined" || buff === null)
				return false;
			buff = buff[arguments[i + 1]]
		}
	}
	return true
};

(function ($) {
	
	function myconf() {
		var cf = $.Deferred();
		$.ajax({
			type : "POST",
			url : "/wp-content/themes/WebPromo/feedback/",
			dataType : "json",
			data : "act=cfg",
			success : function (answer) {
				cf.resolve(answer.configs)
			}
		});
		return cf
	}
	var mcf = myconf();
	mcf.done(function (conf) {
		$(document).ready(function () {
			//(function () {
				var fb = $(".feedback");
				if (fb.length > 0)
					fb.each(function () {
						var form = $(this).closest("form"),
						name = form.attr("name");
						if (isset(conf[name]) && isset(conf[name].cfg.antispamjs))
							$(form).prepend('<input type="text" name="' + conf[name].cfg.antispamjs + '" value="tesby" style="display:none;">')
					});
			//})()
		});
		function feedback(vars) {
			var bt = $(vars.form).find(".feedback");
			var btc = bt.clone();
			var bvc = bt.val();
			var cfg = conf[vars.act].cfg;
			console.log('12313132');
			$.ajax({
				type : "POST",
				url : "/wp-content/themes/WebPromo/feedback/",
				cache : false,
				dataType : "json",
				data : "act=" + vars.act + "&" + vars.data,
				beforeSend : function () {
					$(bt).prop("disabled", true);
					$(bt).addClass("loading")
				},
				success : function (answer) {
					if (isset(cfg.notify) && !/none/i.test(cfg.notify)) {
						if (/textbox/i.test(cfg.notify)) {
							if (isset(answer.errors))
								$.each(answer.errors, function (k, val) {
									$.jGrowl(val, {
										theme : "error",
										header : "\u041e\u0448\u0438\u0431\u043a\u0430!",
										life : 3E3
									})
								});
							if (isset(answer.infos))
								$.each(answer.infos, function (k, val) {
									$.jGrowl(val, {
										theme : "infos",
										header : "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",
										life : 3E3
									})
								})
						}
						if (/color/i.test(cfg.notify)) {
							$(vars.form).find("input[type=text]:visible, textarea:visible, select:visible").css({
								"border" : "1px solid #D7D5CF",
								"margin" : "0"
							}, 300);
							if (isset(answer.errors))
								$.each(answer.errors, function (k, val) {
									var reg = /[a-z]/i;
									if (reg.test(k)) {
										var e = $(vars.form).find("[name=" + k + "]");
										if (e.length == 1)
											$(e).css({
												"border" : "2px solid #ff4747",
												"margin" : "0"
											}, 100)
									}
								});
							
							//if ($("#agree").checked){alert("Флажок установлен");}
							//else { alert("Флажок не установлен");}
							
							if (isset(answer.infos)) {
								var li = "",
								$inf = $("<ul>", {
										id : "feedback-infolist"
									});
								$.each(answer.infos, function (k, val) {
									li += "<li>" + val + "</li>"
								});
								$inf.html(li);
								$.arcticmodal("close");
								if (/modal/i.test(cfg.notify)) {
									var m = $('<div class="box-modal" id="feedback-modal-box" />');
									m.html($inf);
									m.prepend('<div class="modal-close arcticmodal-close"></div>');
									$.arcticmodal({
										content : m
									})
								}
							}
						}
					}
					$(bt).prop("disabled", false);
					$(bt).removeClass("loading");
					if (isset(answer.ok) && answer.ok == 1)
						$(vars.form)[0].reset()
				}
			})
		}
		$(document).on("mouseenter mouseover", ".feedback", function () {
			var form = $(this).closest("form"),
			name = form.attr("name");
			if (isset(conf[name]) && isset(conf[name].cfg.antispamjs))
				$("input[name=" + conf[name].cfg.antispamjs + "]").val("")
		});
		$(document).on("click", ".feedback", function () {
			var form = $(this).closest("form"),
			name = form.attr("name"),
			obj = {};
			obj.form = form;
			obj.act = name;
			obj.data = $(form).serialize();
			feedback(obj);
			return false
		})
	});
	
	var default_options = {
		type : "html",
		content : "",
		url : "",
		ajax : {},
		ajax_request : null,
		closeOnEsc : true,
		closeOnOverlayClick : true,
		clone : false,
		overlay : {
			block : undefined,
			tpl : '<div class="arcticmodal-overlay"></div>',
			css : {
				backgroundColor : "#fff",
				opacity : .9
			}
		},
		container : {
			block : undefined,
			tpl : '<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
		},
		wrap : undefined,
		body : undefined,
		errors : {
			tpl : '<div class="arcticmodal-error arcticmodal-close"></div>',
			autoclose_delay : 2E3,
			ajax_unsuccessful_load : "Error"
		},
		openEffect : {
			type : "fade",
			speed : 400
		},
		closeEffect : {
			type : "fade",
			speed : 400
		},
		beforeOpen : $.noop,
		afterOpen : $.noop,
		beforeClose : $.noop,
		afterClose : $.noop,
		afterLoading : $.noop,
		afterLoadingOnShow : $.noop,
		errorLoading : $.noop
	};
	var modalID = 0;
	var modals = $([]);
	var utils = {
		isEventOut : function (blocks, e) {
			var r = true;
			$(blocks).each(function () {
				if ($(e.target).get(0) == $(this).get(0))
					r = false;
				if ($(e.target).closest("HTML", $(this).get(0)).length == 0)
					r = false
			});
			return r
		}
	};
	var modal = {
		getParentEl : function (el) {
			var r = $(el);
			if (r.data("arcticmodal"))
				return r;
			r = $(el).closest(".arcticmodal-container").data("arcticmodalParentEl");
			if (r)
				return r;
			return false
		},
		transition : function (el, action, options, callback) {
			callback = callback == undefined ? $.noop : callback;
			switch (options.type) {
			case "fade":
				action == "show" ? el.fadeIn(options.speed, callback) : el.fadeOut(options.speed, callback);
				break;
			case "none":
				action == "show" ? el.show() : el.hide();
				callback();
				break
			}
		},
		prepare_body : function (D, $this) {
			$(".arcticmodal-close", D.body).unbind("click.arcticmodal").bind("click.arcticmodal", function () {
				$this.arcticmodal("close");
				return false
			})
		},
		init_el : function ($this, options) {
			var D = $this.data("arcticmodal");
			if (D)
				return;
			D = options;
			modalID++;
			D.modalID = modalID;
			D.overlay.block = $(D.overlay.tpl);
			D.overlay.block.css(D.overlay.css);
			D.container.block = $(D.container.tpl);
			D.body = $(".arcticmodal-container_i2", D.container.block);
			if (options.clone)
				D.body.html($this.clone(true));
			else {
				$this.before('<div id="arcticmodalReserve' + D.modalID + '" style="display: none" />');
				D.body.html($this)
			}
			modal.prepare_body(D, $this);
			if (D.closeOnOverlayClick)
				D.overlay.block.add(D.container.block).click(function (e) {
					if (utils.isEventOut($(">*", D.body), e))
						$this.arcticmodal("close")
				});
			D.container.block.data("arcticmodalParentEl", $this);
			$this.data("arcticmodal", D);
			modals = $.merge(modals, $this);
			$.proxy(actions.show, $this)();
			if (D.type == "html")
				return $this;
			if (D.ajax.beforeSend != undefined) {
				var fn_beforeSend = D.ajax.beforeSend;
				delete D.ajax.beforeSend
			}
			if (D.ajax.success != undefined) {
				var fn_success = D.ajax.success;
				delete D.ajax.success
			}
			if (D.ajax.error != undefined) {
				var fn_error = D.ajax.error;
				delete D.ajax.error
			}
			var o = $.extend(true, {
					url : D.url,
					beforeSend : function () {
						if (fn_beforeSend == undefined)
							D.body.html('<div class="arcticmodal-loading" />');
						else
							fn_beforeSend(D, $this)
					},
					success : function (responce) {
						$this.trigger("afterLoading");
						D.afterLoading(D, $this, responce);
						if (fn_success == undefined)
							D.body.html(responce);
						else
							fn_success(D, $this, responce);
						modal.prepare_body(D, $this);
						$this.trigger("afterLoadingOnShow");
						D.afterLoadingOnShow(D, $this, responce)
					},
					error : function () {
						$this.trigger("errorLoading");
						D.errorLoading(D, $this);
						if (fn_error == undefined) {
							D.body.html(D.errors.tpl);
							$(".arcticmodal-error", D.body).html(D.errors.ajax_unsuccessful_load);
							$(".arcticmodal-close", D.body).click(function () {
								$this.arcticmodal("close");
								return false
							});
							if (D.errors.autoclose_delay)
								setTimeout(function () {
									$this.arcticmodal("close")
								}, D.errors.autoclose_delay)
						} else
							fn_error(D, $this)
					}
				}, D.ajax);
			D.ajax_request = $.ajax(o);
			$this.data("arcticmodal", D)
		},
		init : function (options) {
			options = $.extend(true, {}, default_options, options);
			if ($.isFunction(this)) {
				if (options == undefined) {
					$.error("jquery.arcticmodal: Uncorrect parameters");
					return
				}
				if (options.type == "") {
					$.error('jquery.arcticmodal: Don\'t set parameter "type"');
					return
				}
				switch (options.type) {
				case "html":
					if (options.content == "") {
						$.error('jquery.arcticmodal: Don\'t set parameter "content"');
						return
					}
					var c = options.content;
					options.content = "";
					return modal.init_el($(c), options);
					break;
				case "ajax":
					if (options.url == "") {
						$.error('jquery.arcticmodal: Don\'t set parameter "url"');
						return
					}
					return modal.init_el($("<div />"), options);
					break
				}
			} else
				return this.each(function () {
					modal.init_el($(this), $.extend(true, {}, options))
				});
		}
	};
	var actions = {
		show : function () {
			var $this = modal.getParentEl(this);
			if ($this === false) {
				$.error("jquery.arcticmodal: Uncorrect call");
				return
			}
			var D = $this.data("arcticmodal");
			D.overlay.block.hide();
			D.container.block.hide();
			$("BODY").append(D.overlay.block);
			$("BODY").append(D.container.block);
			D.beforeOpen(D, $this);
			$this.trigger("beforeOpen");
			if (D.wrap.css("overflow") != "hidden") {
				D.wrap.data("arcticmodalOverflow", D.wrap.css("overflow"));
				var w1 = D.wrap.outerWidth(true);
				D.wrap.css("overflow", "hidden");
				var w2 = D.wrap.outerWidth(true);
				if (w2 != w1)
					D.wrap.css("marginRight", w2 - w1 + "px")
			}
			modals.not($this).each(function () {
				var d = $(this).data("arcticmodal");
				d.overlay.block.hide()
			});
			modal.transition(D.overlay.block, "show", modals.length > 1 ? {
				type : "none"
			}
				 : D.openEffect);
			modal.transition(D.container.block, "show", modals.length > 1 ? {
				type : "none"
			}
				 : D.openEffect, function () {
				D.afterOpen(D, $this);
				$this.trigger("afterOpen")
			});
			return $this
		},
		close : function () {
			if ($.isFunction(this))
				modals.each(function () {
					$(this).arcticmodal("close")
				});
			else
				return this.each(function () {
					var $this = modal.getParentEl(this);
					if ($this === false) {
						$.error("jquery.arcticmodal: Uncorrect call");
						return
					}
					var D = $this.data("arcticmodal");
					if (D.beforeClose(D, $this) === false)
						return;
					$this.trigger("beforeClose");
					modals.not($this).last().each(function () {
						var d = $(this).data("arcticmodal");
						d.overlay.block.show()
					});
					modal.transition(D.overlay.block, "hide", modals.length > 1 ? {
						type : "none"
					}
						 : D.closeEffect);
					modal.transition(D.container.block, "hide", modals.length > 1 ? {
						type : "none"
					}
						 : D.closeEffect, function () {
						D.afterClose(D, $this);
						$this.trigger("afterClose");
						if (!D.clone)
							$("#arcticmodalReserve" + D.modalID).replaceWith(D.body.find(">*"));
						D.overlay.block.remove();
						D.container.block.remove();
						$this.data("arcticmodal", null);
						if (!$(".arcticmodal-container").length) {
							if (D.wrap.data("arcticmodalOverflow"))
								D.wrap.css("overflow", D.wrap.data("arcticmodalOverflow"));
							D.wrap.css("marginRight", 0)
						}
					});
					if (D.type == "ajax")
						D.ajax_request.abort();
					modals = modals.not($this)
				})
		},
		setDefault : function (options) {
			$.extend(true, default_options, options)
		}
	};
	
	default_options.wrap = $(document.all && !document.querySelector ? "html" : "body")
	
	$(document).bind("keyup.arcticmodal", function (e) {
		var m = modals.last();
		if (!m.length)
			return;
		var D = m.data("arcticmodal");
		if (D.closeOnEsc && e.keyCode === 27)
			m.arcticmodal("close")
	});
	$.arcticmodal = $.fn.arcticmodal = function (method) {
		if (actions[method])
			return actions[method].apply(this, Array.prototype.slice.call(arguments, 1));
		else if (typeof method === "object" || !method)
			return modal.init.apply(this, arguments);
		else
			$.error("jquery.arcticmodal: Method " + method + " does not exist")
	}
	//=========================================
	var $ie6 = function () {
		return false === $.support.boxModel && $.support.objectAll && $support.leadingWhitespace
	}
	
	$.jGrowl = function (m, o) {
		if ($("#jGrowl").size() == 0)
			$('<div id="jGrowl"></div>').addClass(o && o.position ? o.position : $.jGrowl.defaults.position).appendTo("body");
		$("#jGrowl").jGrowl(m, o)
	};
	$.fn.jGrowl = function (m, o) {
		if ($.isFunction(this.each)) {
			var args = arguments;
			return this.each(function () {
				var self = this;
				if ($(this).data("jGrowl.instance") == undefined) {
					$(this).data("jGrowl.instance", $.extend(new $.fn.jGrowl, {
							notifications : [],
							element : null,
							interval : null
						}));
					$(this).data("jGrowl.instance").startup(this)
				}
				if ($.isFunction($(this).data("jGrowl.instance")[m]))
					$(this).data("jGrowl.instance")[m].apply($(this).data("jGrowl.instance"), $.makeArray(args).slice(1));
				else
					$(this).data("jGrowl.instance").create(m, o)
			})
		}
	};
	$.extend($.fn.jGrowl.prototype, {
		defaults : {
			pool : 0,
			header : "",
			group : "",
			sticky : false,
			position : "top-right",
			glue : "after",
			theme : "default",
			themeState : "",
			corners : "10px",
			check : 250,
			life : 3E3,
			closeDuration : "normal",
			openDuration : "normal",
			easing : "swing",
			closer : true,
			closeTemplate : "&times;",
			closerTemplate : "<div>[ close all ]</div>",
			log : function (e, m, o) {},
			beforeOpen : function (e, m, o) {},
			afterOpen : function (e, m, o) {},
			open : function (e, m, o) {},
			beforeClose : function (e, m, o) {},
			close : function (e, m, o) {},
			animateOpen : {
				opacity : "show"
			},
			animateClose : {
				opacity : "hide"
			}
		},
		notifications : [],
		element : null,
		interval : null,
		create : function (message, o) {
			var o = $.extend({}, this.defaults, o);
			if (typeof o.speed !== "undefined") {
				o.openDuration = o.speed;
				o.closeDuration = o.speed
			}
			this.notifications.push({
				message : message,
				options : o
			});
			o.log.apply(this.element, [this.element, message, o])
		},
		render : function (notification) {
			var self = this;
			var message = notification.message;
			var o = notification.options;
			o.themeState = o.themeState == "" ? "" : "ui-state-" + o.themeState;
			var notification = $('<div class="jGrowl-notification ' + o.themeState + " ui-corner-all" + (o.group != undefined && o.group != "" ? " " + o.group : "") + '">' + '<div class="jGrowl-close">' + o.closeTemplate + "</div>" + '<div class="jGrowl-header">' + o.header + "</div>" + '<div class="jGrowl-message">' + message + "</div></div>").data("jGrowl", o).addClass(o.theme).children("div.jGrowl-close").bind("click.jGrowl", function () {
					$(this).parent().trigger("jGrowl.close")
				}).parent();
			$(notification).bind("mouseover.jGrowl", function () {
				$("div.jGrowl-notification", self.element).data("jGrowl.pause", true)
			}).bind("mouseout.jGrowl", function () {
				$("div.jGrowl-notification", self.element).data("jGrowl.pause", false)
			}).bind("jGrowl.beforeOpen", function () {
				if (o.beforeOpen.apply(notification, [notification, message, o, self.element]) != false)
					$(this).trigger("jGrowl.open")
			}).bind("jGrowl.open", function () {
				if (o.open.apply(notification, [notification, message, o, self.element]) != false) {
					if (o.glue == "after")
						$("div.jGrowl-notification:last", self.element).after(notification);
					else
						$("div.jGrowl-notification:first", self.element).before(notification);
					$(this).animate(o.animateOpen, o.openDuration, o.easing, function () {
						if ($.support.opacity === false)
							this.style.removeAttribute("filter");
						if ($(this).data("jGrowl") != null)
							$(this).data("jGrowl").created = new Date;
						$(this).trigger("jGrowl.afterOpen")
					})
				}
			}).bind("jGrowl.afterOpen", function () {
				o.afterOpen.apply(notification, [notification, message, o, self.element])
			}).bind("jGrowl.beforeClose", function () {
				if (o.beforeClose.apply(notification, [notification, message, o, self.element]) != false)
					$(this).trigger("jGrowl.close")
			}).bind("jGrowl.close", function () {
				$(this).data("jGrowl.pause", true);
				$(this).animate(o.animateClose, o.closeDuration, o.easing, function () {
					if ($.isFunction(o.close)) {
						if (o.close.apply(notification, [notification, message, o, self.element]) !== false)
							$(this).remove()
					} else
						$(this).remove()
				})
			}).trigger("jGrowl.beforeOpen");
			if (o.corners != "" && $.fn.corner != undefined)
				$(notification).corner(o.corners);
			if ($("div.jGrowl-notification:parent", self.element).size() > 1 && $("div.jGrowl-closer", self.element).size() == 0 && this.defaults.closer != false)
				$(this.defaults.closerTemplate).addClass("jGrowl-closer " + this.defaults.themeState + " ui-corner-all").addClass(this.defaults.theme).appendTo(self.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing).bind("click.jGrowl", function () {
					$(this).siblings().trigger("jGrowl.beforeClose");
					if ($.isFunction(self.defaults.closer))
						self.defaults.closer.apply($(this).parent()[0], [$(this).parent()[0]])
				})
		},
		update : function () {
			$(this.element).find("div.jGrowl-notification:parent").each(function () {
				if ($(this).data("jGrowl") != undefined && $(this).data("jGrowl").created != undefined && $(this).data("jGrowl").created.getTime() + parseInt($(this).data("jGrowl").life) < (new Date).getTime() && $(this).data("jGrowl").sticky != true && ($(this).data("jGrowl.pause") == undefined || $(this).data("jGrowl.pause") != true))
					$(this).trigger("jGrowl.beforeClose")
			});
			if (this.notifications.length > 0 && (this.defaults.pool == 0 || $(this.element).find("div.jGrowl-notification:parent").size() < this.defaults.pool))
				this.render(this.notifications.shift());
			if ($(this.element).find("div.jGrowl-notification:parent").size() < 2)
				$(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function () {
					$(this).remove()
				})
		},
		startup : function (e) {
			this.element = $(e).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');
			this.interval = setInterval(function () {
					$(e).data("jGrowl.instance").update()
				}, parseInt(this.defaults.check));
			if ($ie6)
				$(this.element).addClass("ie6")
		},
		shutdown : function () {
			$(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();
			clearInterval(this.interval)
		},
		close : function () {
			$(this.element).find("div.jGrowl-notification").each(function () {
				$(this).trigger("jGrowl.beforeClose")
			})
		}
	});
	$.jGrowl.defaults = $.fn.jGrowl.prototype.defaults
	
	//===================================
	$.fn.selectbox = function () {
		$(this).each(function () {
			var select = $(this);
			if (select.prev("span.selectbox").length < 1) {
				function doSelect() {
					var option = select.find("option");
					var optionSelected = option.filter(":selected");
					var optionText = option.filter(":first").text();
					if (optionSelected.length)
						optionText = optionSelected.text();
					var ddlist = "";
					for (i = 0; i < option.length; i++) {
						var selected = "";
						var disabled = ' class="disabled"';
						if (option.eq(i).is(":selected"))
							selected = ' class="selected sel"';
						if (option.eq(i).is(":disabled"))
							selected = disabled;
						ddlist += "<li" + selected + ">" + option.eq(i).text() + "</li>"
					}
					var selectbox = $('<span class="selectbox" style="display:inline-block;position:relative">' + '<div class="select" style="float:left;position:relative;z-index:0"><div class="text">' + optionText + "</div>" + '<b class="trigger"><i class="arrow"></i></b>' + "</div>" + '<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">' + "<ul>" + ddlist + "</ul>" + "</div>" + "</span>");
					select.before(selectbox).css({
						position : "absolute",
						top : -9999
					});
					var divSelect = selectbox.find("div.select");
					var divText = selectbox.find("div.text");
					var dropdown = selectbox.find("div.dropdown");
					var li = dropdown.find("li");
					var selectHeight = selectbox.outerHeight();
					if (dropdown.css("left") == "auto")
						dropdown.css({
							left : 0
						});
					if (dropdown.css("top") == "auto")
						dropdown.css({
							top : selectHeight
						});
					var liHeight = li.outerHeight();
					var position = dropdown.css("top");
					dropdown.hide();
					divSelect.click(function () {
						var topOffset = selectbox.offset().top;
						var bottomOffset = $(window).height() - selectHeight - (topOffset - $(window).scrollTop());
						if (bottomOffset < 0 || bottomOffset < liHeight * 6) {
							dropdown.height("auto").css({
								top : "auto",
								bottom : position
							});
							if (dropdown.outerHeight() > topOffset - $(window).scrollTop() - 20)
								dropdown.height(Math.floor((topOffset - $(window).scrollTop() - 20) / liHeight) * liHeight)
						} else if (bottomOffset > liHeight * 6) {
							dropdown.height("auto").css({
								bottom : "auto",
								top : position
							});
							if (dropdown.outerHeight() > bottomOffset - 20)
								dropdown.height(Math.floor((bottomOffset - 20) / liHeight) * liHeight)
						}
						$("span.selectbox").css({
							zIndex : 1
						}).removeClass("focused");
						selectbox.css({
							zIndex : 2
						});
						if (dropdown.is(":hidden")) {
							$("div.dropdown:visible").hide();
							dropdown.show()
						} else
							dropdown.hide();
						return false
					});
					li.hover(function () {
						$(this).siblings().removeClass("selected")
					});
					var selectedText = li.filter(".selected").text();
					li.filter(":not(.disabled)").click(function () {
						var liText = $(this).text();
						if (selectedText != liText) {
							$(this).addClass("selected sel").siblings().removeClass("selected sel");
							option.removeAttr("selected").eq($(this).index()).attr("selected", true);
							selectedText = liText;
							divText.text(liText);
							select.change()
						}
						dropdown.hide()
					});
					dropdown.mouseout(function () {
						dropdown.find("li.sel").addClass("selected")
					});
					select.focus(function () {
						$("span.selectbox").removeClass("focused");
						selectbox.addClass("focused")
					}).keyup(function () {
						divText.text(option.filter(":selected").text());
						li.removeClass("selected sel").eq(option.filter(":selected").index()).addClass("selected sel")
					});
					$(document).on("click", function (e) {
						if (!$(e.target).parents().hasClass("selectbox")) {
							dropdown.hide().find("li.sel").addClass("selected");
							selectbox.removeClass("focused")
						}
					})
				}
				doSelect();
				select.on("refresh", function () {
					select.prev().remove();
					doSelect()
				})
			}
		})
	}	
})(jQuery);
