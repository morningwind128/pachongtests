define("card/cards", function(require, a, b) {}), define("card/card1", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card10", function(require, a, b) {
    var c = require("core/io/actLog");
    b.exports = function(a, b, d) {
        a = $(a), b.actionlog && b.actionlog.act_code && a.find("a").click(function() {
            if (!$(this).hasClass("mod-operate")) {
                var a = $(this).attr("href");
                c(b.actionlog.act_code, function() {
                    window.location = a
                })
            }
        })
    }
}), define("core/io/actLog", function(require, a, b) {
    b.exports = function(a, b) {
        if (a) {
            var c = "/h5logs/actionLog?type=pic&act_code=" + a + "&t=" + (new Date).getTime(),
                d = require("core/util/keepParams");
            c = d(c, !0);
            var e = new Image;
            b && (e.onload = b, e.onerror = b), e.src = c
        }
    }
}), define("core/util/keepParams", function(require, a, b) {
    b.exports = function(a, b) {
        var c, d = $render_data.common;
        return a && d && (c = b ? d.ajaxPassParams : d.passParams, c && (a += -1 != a.indexOf("?") ? "&" + c : "?" + c)), a
    }
}), define("card/card11", function(require, a, b) {
    var c = require("brick"),
        d = require("core/tplFunc").canAccessLink;
    b.exports = function(a, b, e) {
        a = $(a), a.find(">.more-detail a").click(function(a) {
            return a.preventDefault(), d ? (location.href = b.scheme, !1) : (c.notice.trigger("AccessDenied"), !1)
        })
    }
}), define("core/tplFunc", function(require, a, b) {
    var c = require("core/util/keepParams"),
        d = require("core/util/checkLogin");
    require("core/util/accessLevel");
    a.canAccessLink = function() {
        return !!d
    }(), a.href = function(b) {
        var e = b;
        return b && ("object" != typeof b || (e = b.urls && b.urls.h5 || b.scheme)) ? !d && $render_data.common.showPopLogin ? "javascript:require(['brick'],function(brick){brick.notice.trigger('AccessDenied');});" : a.canAccessLink ? 0 === e.indexOf("javascript:") ? e : c(e) : "javascript:require(['brick'],function(brick){brick.notice.trigger('AccessDenied');});" : "javascript:;"
    }
}), define("core/util/checkLogin", function(require, a, b) {
    b.exports = function() {
        return !(1 != $render_data.common.isLogin && 1 != $render_data.common.login)
    }()
}), define("core/util/accessLevel", function(require, a, b) {
    b.exports = $render_data.common.seeLevel || 0
}), define("card/card13", function(require, a, b) {
    b.exports = function(a, b, c) {
        location.href = b.content_url
    }
}), define("card/card15", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card16", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card17", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card19", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card2", function(require, a, b) {
    b.exports = function(a, b, c) {
        a = $(a);
        var d = a.find('[node-type="more"]'),
            e = a.find('[node-type="pop-list"]');
        d.size() && e.size() && (a.after(e), e.css({
            top: d.offset().top + d.height() + 15 + "px",
            right: d.width() / 2 - 20 + "px"
        }), d.on("click", function() {
            e.toggle()
        }))
    }
}), define("card/card20", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card21", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card22", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card23", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card24", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card25", function(require, a, b) {
    b.exports = function(a, b, c) {
        a = $(a)
    }
}), define("card/card26", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card27", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card28", function(require, a, b) {
    var c = require("core/io/actLog");
    b.exports = function(a, b, d) {
        a = $(a), b.actionlog && b.actionlog.act_code && a.find("a").click(function() {
            if (!$(this).hasClass("mod-operate")) {
                var a = $(this).attr("href");
                c(b.actionlog.act_code, function() {
                    window.location = a
                })
            }
        })
    }
}), define("card/card29", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card3", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card30", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card31", function(require, a, b) {
    b.exports = function(a, b, c) {
        a = $(a), a.find("form").on("submit", function(c) {
            c.preventDefault();
            var d = a.find("input").val();
            return d && b.scheme && (location.href = b.scheme + encodeURIComponent(d)), !1
        })
    }
}), define("card/card32", function(require, a, b) {
    b.exports = function(a, b, c) {
        a = $(a), a.on("click", function() {
            return a.find(".bubble").remove(), !0
        })
    }
}), define("card/card35", function(require, a, b) {
    b.exports = function(a, b, c) {
        for (var d = b.pics, e = [], f = 0, g = d.length; g > f; f++) e.push(d[f].pic_big || d[f].pic_ori);
        $(a).on("click", "a", function() {
            var a = $(this);
            if (!/^javascript:/gi.test(a.attr("href"))) return !0;
            var b = a.index() + 1;
            return require(["ux/picShow"], function(a) {
                new a({
                    imgList: e,
                    curPage: b
                })
            }), !1
        })
    }
}), define("card/card38", function(require, a, b) {
    b.exports = function(a, b, c) {
        for (var a = $(a), d = a.find(".star-box"), e = a.find(".star-info"), f = a.find(".icon-font-star.star-choosed").length || 0, g = 0; g < a.find(".icon-font-star").length; g++) a.find(".icon-font-star").eq(g).attr("order", g);
        d.on("click", ".icon-font-star", function() {
            var a = $(this),
                b = a.attr("order");
            switch (a.addClass("star-choosed"), a.nextUntil(".star-box").removeClass("star-choosed"), a.parent().children().removeClass("starblink"), setTimeout(function() {
                for (var b = a.prevUntil(".star-box").length, c = 0; b > c; c++) a.prevUntil(".star-box").eq(c).addClass("star-choosed starblink"), a.prevUntil(".star-box").eq(c).css("-webkit-animation-delay", 50 * c + "ms")
            }, 0), b) {
                case "0":
                    e.html("很差"), f = 1;
                    break;
                case "1":
                    e.html("一般"), f = 2;
                    break;
                case "2":
                    e.html("还行"), f = 3;
                    break;
                case "3":
                    e.html("不错"), f = 4;
                    break;
                case "4":
                    e.html("怒赞"), f = 5
            }
        }), a.find(".more-detail .mct-d").on("click", function() {
            var a = $(this).attr("href");
            $(this).attr("href", a + "&star=" + f)
        })
    }
}), define("card/card39", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card4", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card6", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card7", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card8", function(require, a, b) {
    b.exports = function(a, b, c) {}
}), define("card/card9", function(require, a, b) {
    var c = require("brick"),
        d = c.notice,
        e = require("ux/picShow"),
        f = require("core/tplFunc").canAccessLink,
        g = (require("core/util/keepParams"), require("ux/moreMenu")),
        h = require("core/io/trans")(),
        i = h.json;
    b.exports = function(a, b, h) {
        function j(a) {
            return a > 0 && (a > 99999999 && (a = Math.floor(a / 1e8) + "亿"), a > 9999 && (a = a > 99999999 ? Math.floor(a / 1e8) + "亿" : Math.floor(a / 1e4) + "万")), a
        }

        function k(a, b, c, d) {
            return new e({
                imgList: a,
                curPage: b,
                zanCfg: c,
                zan: function(a) {
                    var b, c = $(this),
                        e = document.getElementById("J-wrapper" + a),
                        f = e.getAttribute("pid"),
                        g = e.getAttribute("zanliked"),
                        h = parseInt(e.getAttribute("zannum")) || 0,
                        k = c.find("#J-zan-text"),
                        l = c.find("#J-zan-count"),
                        m = c.find(".icon");
                    c.hasClass("disabled") || (c.addClass("disabled"), m.removeClass("pulse"), b = "true" == g ? "/showpic/destroy" : "/showpic/like", i({
                        url: b,
                        type: "POST",
                        dataType: "json",
                        data: "mid=" + d + "&pid=" + f,
                        success: function(b) {
                            b && (1 == b.ok ? ("false" == g ? (m.removeClass("icon-like").addClass("icon-liked pulse"), l.html(j(++h)), $("#J-wrapper" + a).attr("zanLiked", "true").attr("zanNum", h)) : (m.removeClass("icon-liked").addClass("icon-like pulse"), l.html(j(--h)), $("#J-wrapper" + a).attr("zanLiked", "false").attr("zanNum", h)), h > 0 ? (k.hide(), l.show()) : (k.show(), l.hide())) : alert(b.msg), setTimeout(function() {
                                c.removeClass("disabled")
                            }, 200))
                        }
                    }))
                }
            })
        }

        function l(a, b) {
            var c = require("ux/popMenu");
            c.init({
                icons: a,
                items: b,
                clickPopMenu: function(a) {
                    g.clickItem(a)
                }
            })
        }

        function m() {
            a.off("click", '[data-node="pic"]'), a.on("click", '[data-node="pic"]', function() {
                var a = $(this).attr("src").replace(/\/(wap|thumb)\d+\//i, "/large/"),
                    b = [],
                    c = $(this).parents("ul");
                c.size() ? c.find("img").each(function() {
                    b.push($(this).attr("src").replace("/thumb180/", "/large/"))
                }) : b = [a], console.log(a, b), WeiboJSBridge.invoke("openImage", {
                    url: a,
                    urls: b
                }, function(a, b, c) {})
            })
        }
        a = $(a);
        var n = b.mblog,
            o = $render_data.common.isInClient;
        if (n.cardid) {
            $vip = $('<div class="vip-card"></div>');
            var p = "_os7";
            window.innerWidth > 640 && (p += "_d6p"), $vip.css({
                "background-image": "url(http://img.t.sinajs.cn/t6/skin/public/feed_cover/" + n.cardid + p + ".png)"
            }), 0 === a.find(".head-bar").size() && $vip.css("z-index", 0), a.prepend($vip)
        }
        if (n.title && "" != n.title) {
            var q = a.find('[data-node="title"]'),
                r = n.title.text;
            $.each(n.title.structs, function(a, b) {
                r = r.replace(b.name, '<a href="' + b.scheme + '">' + b.name + "</a>")
            }), q.html(r)
        }
        o && a.on("click", function(a) {
            var b = a.target.tagName,
                c = $(a.target);
            return c.closest("a").size() || "img" == b.toLowerCase() ? !0 : void(location.href = "sinaweibo://detail?mblogid=" + n.bid)
        }), a.on("click", "[data-pic]", function(a) {
            a.preventDefault();
            var b = $(this).data("pic");
            return new e({
                imgList: [b]
            }), !1
        }), a.on("click", '[data-node="forward"]', function() {
            return f ? void(location.href = "/repost?id=" + b.mblog.mid) : (c.notice.trigger("AccessDenied"), !1)
        }), a.on("click", '[data-node="comment"]', function() {
            return f ? void("single" == $config.stage || 0 == b.mblog.comments_count ? location.href = "/comment?id=" + b.mblog.mid : location.href = "/" + b.mblog.user.id + "/" + b.mblog.mid) : (c.notice.trigger("AccessDenied"), !1)
        }), a.on("click", '[data-node="like"]', function() {
            if (!f) return c.notice.trigger("AccessDenied"), !1;
            var a = $(this),
                d = a.find("i");
            if (1 != a.data("loading")) {
                a.data("loading", 1);
                var e = n.attitudes_status,
                    g = "/attitudesDeal/add",
                    h = "id=" + n.id;
                e ? g = "/attitudesDeal/delete" : h += "&attitude=heart", i({
                    url: g,
                    dataType: "json",
                    type: "POST",
                    data: h,
                    success: function(c) {
                        if (a.data("loading", 0), 1 == c.ok) {
                            var f = a.find("em"),
                                g = f.text();
                            e ? (isNaN(g) || 1 == b.single || f.text(1 == g ? "赞" : g - 1), n.attitudes_status = 0, d.removeClass("icon-likedsmall pulse"), d.addClass("icon-likesmall")) : (1 != b.single && (isNaN(g) ? f.text(1) : f.text(1 * g + 1)), n.attitudes_status = 1, d.removeClass("icon-likesmall"), d.addClass("icon-likedsmall animated pulse"))
                        }
                    }
                })
            }
        }), a.on("click", '[data-node="pic"]', function() {
            var c, d = [],
                e = $(this),
                f = b.mblog,
                g = f.pics,
                h = f.pic_ids,
                j = f.mid,
                l = !(void 0 === f.retweeted_status),
                m = a.find('[data-node="pic"]').index(e) + 1,
                n = [];
            l && (g = f.retweeted_status.pics, h = f.retweeted_status.pic_ids, j = f.retweeted_status.mid);
            for (var o in g) n.push(g[o].url.replace(/\/\w+\//, "/large/"));
            for (var p = 0; p < n.length; p++) d.push({
                like_counts: 0,
                liked: !1,
                objectid: "",
                pid: "",
                disabled: !0
            });
            c = k(n, m, d, f.mid), i({
                url: "/showpic/likesinfo",
                type: "POST",
                dataType: "json",
                data: "mid=" + j + "&pids=" + h.join(","),
                success: function(a) {
                    if (a && 1 == a.ok) {
                        var b = [],
                            d = a.data;
                        for (var e in d) b.push(d[e]);
                        c.setZan(!0, b)
                    }
                },
                error: function() {}
            })
        }), a.on("click", ".head-bar, .operate-box", function() {
            if (!f) return c.notice.trigger("AccessDenied"), !1;
            var b = g.getMenuList({
                wb: n,
                box: a
            });
            l(null, b)
        }), "single" == $config.stage && d.on("topbar:more", function(a) {
            var b = g.getMenuList({
                wb: n
            }, !0);
            l(!0, b)
        }), window.WeiboJSBridge ? m() : document.addEventListener("WeiboJSBridgeReady", function() {
            m()
        })
    }
}), define("ux/picShow", function(require, a, b) {
    b.exports = function(a) {
        var b, c = document.body,
            d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            e = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
            f = document.documentElement.scrollTop || document.body.scrollTop,
            g = navigator.userAgent.match(/Android ([3-9][._][0-9])/),
            h = navigator.userAgent.match(/OS ([5-9])_\d[_\d]*/),
            i = [],
            j = {
                imgList: [],
                el: null,
                hidDom: document.getElementById("box"),
                preloadCount: 2,
                curPage: 1,
                showPage: !0,
                showCtrlBtn: !0,
                zanCfg: null,
                setGuide: !1,
                maxW: null,
                maxH: null,
                zan: function() {},
                close: function() {}
            },
            k = function() {
                try {
                    return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
                } catch (a) {
                    return !1
                }
            },
            l = function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            m = function(a, b) {
                a.className += (a.className ? " " : "") + b
            },
            n = function(a, b) {
                return RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
            },
            o = function(a, b) {
                a.className = a.className.replace(RegExp(b + "(\\s|$)"), "")
            },
            p = function(a, c, d) {
                b.style.webkitTransform = "translate(" + a + "px," + c + "px) translateZ(0)"
            },
            q = function(a, c, d) {
                b.style.webkitTransition = a + " " + c + "s " + d
            },
            r = function() {
                var a = h || g && navigator.userAgent.indexOf("UCBrowser") > 0 ? "fixed" : "absolute",
                    f = j.imgList.length || 0,
                    i = "";
                j.el || (j.el = document.createElement("div"), j.el.className = "J-slider", c.appendChild(j.el)), j.el.style.position = a, i += '<div id="J-slider-cont">';
                for (var k = 1; f >= k; k++) i += '<div id="J-wrapper' + k + '" class="wrapper" style="-webkit-transform:translate3d(0,0,0);width:' + d + "px;height:" + e + 'px"><div id="J-scroller' + k + '" class="scroller"></div></div>';
                i += "</div>", j.showCtrlBtn && (i += '<div class="ctrlbar" style="position:' + a + '"><a id="J-zan" href="javascript:;"><i class="icon animated"></i><span id="J-zan-text" class="zan">赞</span><span id="J-zan-count" data-num="0"></span></a><a id="J-close" href="javascript:;">关闭</a>', j.showPage && j.imgList.length > 1 && (i += '<span id="J-curPage">' + j.curPage + '</span><span id="J-pageCount">/' + f + "</span>"), i += "</div>"), j.el.innerHTML = i, j.el.style.margin = "auto", j.el.style.overflow = "hidden", j.el.style.width = d + "px;", b = document.getElementById("J-slider-cont"), b.style.cssText = "position:relative;top:0px;left:0px;width:" + f * d + "px;height:" + e + "px", navigator.userAgent.toLowerCase().indexOf("firefox") > 0 && (document.querySelector(".ctrlbar").style.cssText = "position:absolute;top:20px;left:0;")
            },
            s = function(a) {
                var b, c, d;
                for (d = 0; d < j.preloadCount; d++) b = "next" == a ? j.curPage + j.preloadCount + d : j.curPage - j.preloadCount - d, c = document.getElementById("J-scroller" + b), c && "" == c.innerHTML && u(b)
            },
            t = function(a, b) {
                var c = document.getElementById(a),
                    d = !1,
                    e = !1;
                navigator.userAgent.toLowerCase().indexOf("mobile") > 0 && (d = !0, e = !0), require(["core/lib/iscroll"], function(a) {
                    var e = new a(c, {
                        zoom: !0,
                        zoomMin: 1,
                        zoomMax: 2,
                        disableMouse: d,
                        tap: "tap",
                        scrollX: !0,
                        scrollY: !0,
                        mouseWheel: !0,
                        wheelAction: "zoom",
                        doubleTapZoom: 2,
                        slider: j.el
                    });
                    e.on("flick", function(a) {
                        this.hasHorizontalScroll || Math.abs(this.distY) > Math.abs(this.distX) || (this.distX > 0 ? C() : D())
                    }), i.push(e), b(e)
                })
            },
            u = function(a) {
                var b = document.getElementById("J-scroller" + a);
                b && t("J-wrapper" + a, function(c) {
                    m(b.parentNode, "loading");
                    var d = new Image;
                    d.onload = function() {
                        b && (o(b.parentNode, "loading"), b.style.lineHeight = e + "px", c.refresh(), d.style.opacity = "1")
                    }, d.src = j.imgList[a - 1], document.getElementById("J-scroller" + a).appendChild(d)
                })
            },
            v = function(a) {
                return a > 0 && (a > 99999999 && (a = Math.floor(a / 1e8) + "亿"), a > 9999 && (a = a > 99999999 ? Math.floor(a / 1e8) + "亿" : Math.floor(a / 1e4) + "万")), a
            },
            w = function(a, b) {
                b = b ? b : j.zanCfg;
                var c = document.getElementById("J-zan"),
                    d = document.getElementById("J-zan-count"),
                    e = document.getElementById("J-zan-text"),
                    f = c.getElementsByTagName("i")[0],
                    g = (l(b) ? b[j.curPage - 1] : [b], document.getElementById("J-wrapper" + j.curPage));
                if (a) {
                    b[0].disabled && !n(c, "disabled") ? m(c, "disabled") : o(c, "disabled");
                    for (var h = 1, i = b.length; i >= h; h++) {
                        var k = document.getElementById("J-wrapper" + h);
                        k.setAttribute("pid", b[h - 1].pid), k.setAttribute("zanNum", b[h - 1].like_counts), k.setAttribute("zanLiked", b[h - 1].liked)
                    }
                }
                o(f, "icon-like"), o(f, "icon-liked"), "true" == g.getAttribute("zanLiked") ? m(f, "icon-liked") : m(f, "icon-like"), d.innerHTML = v(g.getAttribute("zanNum")), parseInt(d.innerHTML) > 0 ? (e.style.display = "none", d.style.display = "") : (e.style.display = "", d.style.display = "none")
            },
            x = function() {
                var a = document.createElement("div");
                a.className = "J-guide", a.style.cssText = "height:" + e + "px;line-height:" + e + "px;opacity:0;-webkit-transition:opacity 0.6s ease", a.innerHTML = '<div class="J-guide-pop"></div>', j.el.appendChild(a), setTimeout(function() {
                    a.style.opacity = "1"
                }, 1e3);
                var b = setTimeout(function() {
                    j.el.removeChild(a)
                }, 5e3);
                if (a.onclick = function() {
                        clearTimeout(b), j.el.removeChild(a)
                    }, j.setGuide) try {
                    k && (window.localStorage.H5_IMGZOOM_GUIDE = "1")
                } catch (c) {}
            },
            y = function() {
                var a = document.getElementById("J-close"),
                    b = "#showPic",
                    c = location.hash;
                (!c || b.indexOf(c) < 0) && (j.close.call(a), E())
            },
            z = function() {
                document.getElementById("J-close").onclick = function() {
                    j.close.call(this), E()
                }, document.getElementById("J-zan").onclick = function() {
                    n(this, "disabled") || j.zan.call(this, j.curPage)
                }, window.onorientationchange = window.onresize = function() {
                    for (var a = document.documentElement.clientHeight || window.innerHeight, b = 0; b < i.length; b++) $(".J-slider .wrapper").css("height", a + "px"), $(".J-slider .scroller").css("line-height", a + "px"), i[b].refresh()
                }
            },
            A = function() {
                if (l(j.imgList) || (j.imgList = [j.imgList]), j.curPage ? j.curPage = parseInt(j.curPage) : j.curPage = 1, !document.querySelector(".J-slider")) {
                    window.location.hash = "showPic", window.onhashchange = y;
                    var a = Math.min(document.documentElement.clientHeight, window.innerHeight);
                    e = a > 0 ? a : e, r(), j.zanCfg ? w(1) : document.getElementById("J-zan").style.display = "none", j.hidDom && (j.hidDom.style.display = "none"), p(-1 * (j.curPage - 1) * d, 0, 0), setTimeout(function() {
                        if (u(j.curPage), u(j.curPage - 1), u(j.curPage + 1), z(), j.setGuide) try {
                            k() && !window.localStorage.H5_IMGZOOM_GUIDE && x()
                        } catch (a) {}
                    }, 200)
                }
            },
            B = function() {
                j.zanCfg && w(), j.showPage && (document.getElementById("J-curPage").innerHTML = "" + j.curPage), q("all", .3, "ease-out"), p(-1 * (j.curPage - 1) * d, 0, 0), h && h[1] && h[1] >= 8 && setTimeout(function() {
                    var a = document.getElementById("J-scroller" + j.curPage).getElementsByTagName("img");
                    a && a[0] && ("1" === a[0].style.opacity ? a[0].style.opacity = "0.999" : "0.999" === a[0].style.opacity && (a[0].style.opacity = "1"))
                }, 400)
            },
            C = function() {
                j.curPage > 1 && (s("prev"), j.curPage--, B())
            },
            D = function() {
                j.curPage < j.imgList.length && (s("next"), j.curPage++, B())
            },
            E = function() {
                j.el && (c.removeChild(j.el), j.el = null, j.hidDom && (j.hidDom.style.display = "block", f > 0 && 0 == document.querySelectorAll("#detail-wrap").length && window.scrollTo(0, f)), "#showPic" == location.hash && history.go(-1))
            };
        for (var F in a) j[F] = a[F];
        return A(), {
            setZan: w,
            distroy: E,
            prev: C,
            next: D
        }
    }
}), define("ux/moreMenu", function(require, a, b) {
    ! function() {
        var a = require("ux/toast"),
            c = window.$config.stageId,
            d = require("core/io/trans")().json,
            e = {},
            f = function(a, b) {
                var d = [];
                return e = a, b ? "single" == $config.stage ? (d = [{
                    type: e.wb.favorited ? "delFav" : "addFav",
                    text: e.wb.favorited ? "取消收藏" : "收藏"
                }], e.wb.user.id == $render_data.common.uid ? d.push({
                    type: "deleteWB",
                    text: "删除"
                }) : d.push({
                    type: "report",
                    reporttype: "1",
                    text: "举报"
                })) : c && 0 == c.indexOf("100505") && c != "100505" + window.$render_data.common.uid && d.push({
                    type: "addBlackList",
                    text: "加入黑名单"
                }, {
                    type: "report",
                    reporttype: "3",
                    text: "举报"
                }) : (d = [{
                    type: e.wb.favorited ? "delFav" : "addFav",
                    text: e.wb.favorited ? "取消收藏" : "收藏"
                }], e.wb.user.id == $render_data.common.uid ? d.push({
                    type: 2 == e.wb.type ? "deleteCmt" : "deleteWB",
                    text: "删除"
                }) : ("home" == $config.stage && d.push({
                    type: "shield",
                    text: "屏蔽"
                }, {
                    type: "report",
                    reporttype: "1",
                    text: "举报"
                }), ("page" == $config.stage || "atme" == $config.stage) && d.push({
                    type: "report",
                    reporttype: "1",
                    text: "举报"
                }), "cmts" == $config.stage && d.push({
                    type: "report",
                    reporttype: "2",
                    text: "举报"
                }))), d
            },
            g = function(b) {
                var d, f = $(b.target);
                if ("a" != b.target.nodeName.toLowerCase() && f.parents("a").length > 0 && (f = f.parents("a")), d = f.attr("node-type")) switch (d) {
                    case "addFav":
                        setTimeout(function() {
                            h({
                                url: "/mblogDeal/addFavMblog",
                                data: "id=" + e.wb.id
                            }, function(b) {
                                b.ok && 1 == b.ok ? (e.wb.favorited = !0, a.success(b.msg, 1e3)) : a.error(b.msg, 1e3)
                            })
                        }, 250);
                        break;
                    case "delFav":
                        setTimeout(function() {
                            h({
                                url: "/mblogDeal/delFavMblog",
                                data: "id=" + e.wb.id
                            }, function(b) {
                                b.ok && 1 == b.ok ? (e.wb.favorited = !1, a.success(b.msg, 1e3)) : a.error(b.msg, 1e3)
                            })
                        }, 250);
                        break;
                    case "shieldWB":
                        setTimeout(function() {
                            confirm("确定隐藏这条微博吗？") && h({
                                url: "/members/membersDeal/wbFilterCreate",
                                data: "id=" + e.wb.id
                            }, function() {
                                e.box && $(e.box).remove()
                            })
                        }, 250);
                        break;
                    case "shield":
                        setTimeout(function() {
                            location.href = "/setting?tab=block&blockType=2&id=" + e.wb.id
                        }, 250);
                        break;
                    case "report":
                        setTimeout(function() {
                            "1" == f.attr("reporttype") && (location.href = "/report?rid=" + e.wb.id), "3" == f.attr("reporttype") && (location.href = "/report/user?rid=" + c.replace(/^100505/, "")), "2" == f.attr("reporttype") && (location.href = "/report/comment?rid=" + e.wb.id)
                        }, 250);
                        break;
                    case "deleteWB":
                        setTimeout(function() {
                            var a = "确定要删除这条微博？";
                            e.wb.notation && e.wb.notation.article_delete_text && (a = e.wb.notation.article_delete_text), confirm(a) && h({
                                url: "/mblogDeal/delMyMblog",
                                data: "id=" + e.wb.id
                            }, function() {
                                e.box && $(e.box).remove()
                            })
                        }, 250);
                        break;
                    case "deleteCmt":
                        setTimeout(function() {
                            confirm("确定要删除这条评论？") && h({
                                url: "/commentDeal/cmtDel",
                                data: "cmtId=" + e.wb.id
                            }, function() {
                                e.box && $(e.box).remove()
                            })
                        }, 250);
                        break;
                    case "topWB":
                        break;
                    case "cancelTopWB":
                        break;
                    case "at":
                        setTimeout(function() {
                            location.href = "/mblog"
                        }, 250);
                        break;
                    case "addBlackList":
                        setTimeout(function() {
                            confirm("你们将自动解除关注关系，他不能再关注你或给你发评论、私信、@通知。且你们的私信将被删除。确认要加入黑名单吗？") && h({
                                url: "/attentionDeal/addBlockList",
                                data: "uid=" + c.replace(/^100505/, "")
                            }, function(b) {
                                b.ok && 1 == b.ok ? a.success(b.msg, 1e3) : a.error(b.msg, 1e3)
                            })
                        }, 250)
                }
            },
            h = function(a, b) {
                d({
                    url: a.url,
                    type: "POST",
                    dataType: "json",
                    data: a.data,
                    success: function(a) {
                        b && b(a)
                    },
                    error: function() {
                        alert("出错啦，请稍后再试！")
                    }
                })
            };
        b.exports = {
            getMenuList: f,
            clickItem: g
        }
    }()
}), define("ux/toast", function(require, a, b) {
    var c = require("tpl/ux/toast"),
        d = $(document.createDocumentFragment());
    d.append(c());
    var e = function() {
        var a, b, c, e, f, g = $("body").height(),
            h = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight),
            i = g > h ? g : h,
            j = ["isLoad", "isSuccess", "isError", "isAlarm"],
            k = {
                status: 0,
                msg: "加载中"
            },
            l = function(a, b) {
                p({
                    status: 0,
                    msg: a,
                    time: b || null
                })
            },
            m = function(a, b) {
                p({
                    status: 1,
                    msg: a,
                    time: b || null
                })
            },
            n = function(a, b) {
                p({
                    status: 2,
                    msg: a,
                    time: b || null
                })
            },
            o = function(a, b) {
                p({
                    status: 3,
                    msg: a,
                    time: b || null
                })
            },
            p = function(g) {
                f || ($("body").append(d), b = $("#J-toast-wrapper"), c = $("#J-toast-box"), e = $("#J-toast-txt")), f = !0, a = document.documentElement.scrollTop || document.body.scrollTop, g ? k = g : "", e.html(k.msg), c.removeClass("isLoad").addClass(j[k.status]), b.removeClass("hid").css("height", i), c.css("margin-top", (h - c.innerHeight()) / 2 + a), this.timer = setTimeout(function() {
                    q()
                }, k.time || 3e3)
            },
            q = function() {
                clearTimeout(this.timer), b.addClass("hid"), c.removeClass(j[k.status]).addClass("isLoad")
            },
            r = function() {
                b.remove(), $(document).off("click", "#J-toast-wrapper", s)
            },
            s = function(a) {
                var b = a.target || a.srcElement;
                return "J-toast-wrapper" === b.id ? (q(), !1) : void 0
            };
        return this.timer = 0, $("body").on("touchend", "#J-toast-wrapper", s), {
            show: p,
            close: q,
            distroy: r,
            loading: l,
            success: m,
            error: n,
            alarm: o
        }
    };
    b.exports = new e
}), define("tpl/ux/toast", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<section id="J-toast-wrapper" class="toast-wrapper hid"><p id="J-toast-box" class="toast-info isLoad"><i class="icon"></i><span id="J-toast-txt">提示文字</span></p></section>';
        return b
    }
}), define("core/io/trans", function(require, a, b) {
    var c = require("core/util/keepParams"),
        d = require("../../ux/alertPop"),
        d = require("../../ux/alertPop");
    b.exports = function() {
        var a = {},
            b = {};
        return b.set = function(b, c) {
            if ("undefined" != typeof a[b]) throw b + " 接口已经被定义！";
            a[b] = c
        }, b.get = function(c, d) {
            if ("undefined" == typeof a[c]) throw c + " 接口没有定义！";
            var e = $.extend({}, a[c], d);
            b.json(e)
        }, b.json = function(a) {
            a.url = c(a.url, !0), a.type = a.type || "get", a.dataType = a.dataType || "json", a.timeout = a.timeout || 1e3 * ("get" == a.type ? 30 : 60), "post" == a.type.toLowerCase() && (a.data = a.data || {}, a.data.st || (a.data.st = $render_data.common.st));
            var e = a.success;
            a.success = function(f) {
                var g = ((new Date).getTime(), "" + f.ok);
                switch (g) {
                    case "-3":
                    case "20031":
                        $("#J-toast-wrapper").addClass("hid");
                        var h = new d;
                        return h.init({
                            wrapperId: "J-" + (new Date).getTime(),
                            html: '<div style="overflow:hidden;"><p style="margin:6px auto 22px;font-size:1.125rem;text-align:center">你发的太疯狂啦，请验证一下</p><img style="display:block;margin:0 0 15px;height:30px;" src="http://weibo.cn/interface/f/ttt/captcha/show.php?c=' + f.captId + '" alt="验证码获取失败" /></div>',
                            inputArr: [{
                                placeholder: "请输入验证码"
                            }],
                            cancelBtn: {},
                            confirmBtn: {
                                callback: function(c) {
                                    var d = c.find("input"),
                                        e = String.prototype.trim.call(d.val());
                                    return "" == e ? (h.showError(d, "验证码不能为空"), !1) : (h.close(), a.data.captId = f.captId, a.data.code = e, void b.json(a))
                                }
                            }
                        }), !1;
                    case "-7":
                        window.location.href = "/security?from=0";
                        break;
                    case "-8":
                        window.location.href = "/security";
                        break;
                    case "-9":
                        "post" == a.type.toLowerCase() ? (alert("您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。"), location.href = "/security/readonly") : e(f);
                        break;
                    case "-9+225":
                    case "-9+222":
                        "post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"), (new d).init({
                            wrapperId: "J-" + (new Date).getTime(),
                            info: "您的帐号存在风险，系统暂时锁定了部分功能，请通过手机验证以恢复正常。",
                            confirmBtn: {
                                callback: function() {
                                    window.location.href = "/security/stolenReadOnly"
                                }
                            }
                        })) : e(f);
                        break;
                    case "-98":
                    case "-100":
                        location.href = c(f.url || "/login?backUrl=" + decodeURIComponent(location.href));
                        break;
                    case "-255":
                        alert("您的帐号疑似被盗，已经被系统锁定部分功能，为了保障您的帐号安全，请立即修改密码。"), location.href = "/security";
                        break;
                    case "403":
                        $("#J-toast-wrapper").addClass("hid"), alert("您输入的网址疑似为不安全链接，无法发表，请谅解。\n如需帮助，请联系客服。");
                        break;
                    case "2014":
                        location.href = data.location;
                        break;
                    case "20016":
                        $("#J-toast-wrapper").addClass("hid"), alert("发微博太多啦，休息一会儿吧!");
                        break;
                    case "20018":
                        $("#J-toast-wrapper").addClass("hid"), alert("您输入的网址疑似为不安全链接，无法发表，请谅解。");
                        break;
                    case "20019":
                        $("#J-toast-wrapper").addClass("hid"), alert("相同内容请隔10分钟再进行发布哦。");
                        break;
                    case "20020":
                        $("#J-toast-wrapper").addClass("hid"), alert("由于该内容为广告信息，无法进行发布！");
                        break;
                    case "20021":
                        $("#J-toast-wrapper").addClass("hid"), alert("抱歉，此内容违反了《微博社区管理规定(试行)》或相关法规政策，无法进行指定操作。");
                        break;
                    case "20038":
                        $("#J-toast-wrapper").addClass("hid"), alert("您刚才已经发过相似的内容啦，建议您第二天再尝试！");
                        break;
                    case "20046":
                        "post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"), (new d).init({
                            wrapperId: "J-" + (new Date).getTime(),
                            info: "您的登录邮箱尚未验证，不能使用完整功能，请验证邮箱。",
                            cancelBtn: {},
                            confirmBtn: {
                                callback: function() {
                                    window.location.href = "/edmActive?disable_sinaurl=1"
                                }
                            }
                        })) : e(f);
                        break;
                    case "ag:4_st:3":
                        "post" == a.type.toLowerCase() ? ($(".toast-wrapper").addClass("hid"), (new d).init({
                            wrapperId: "J-" + (new Date).getTime(),
                            info: "你的邮箱未激活！激活邮箱，即可使用邮箱和密码登录微博，安全又方便。",
                            cancelBtn: !0,
                            confirmBtn: {
                                txt: "立即激活",
                                callback: function() {
                                    window.location.href = "https://passport.sina.cn/bindname/mail?entry=mweibo"
                                }
                            }
                        })) : e(f);
                        break;
                    default:
                        e(f)
                }
            }, $.ajax(a)
        }, b
    }
}), define("ux/alertPop", function(require, a, b) {
    function c() {
        function a(a) {
            return m = a || {}, m.wrapperId ? $("#" + m.wrapperId).size() ? void alert(m.wrapperId + " ID 已经被占用啦！") : (h = d(m), e.append(h), $("body").append(e), i = $("#" + (m.wrapperId || "J-alertPop")), j = i.find(".wrapper"), k = i.find("#" + (m.cancelBtn && m.cancelBtn.id || "J-alertPop-cancel")), l = i.find("#" + (m.confirmBtn && m.confirmBtn.id || "J-alertPop-confirm")), g(), i.removeClass("hid"), f(), void(m.html && m.htmlFunction && m.htmlFunction.call(this, i.find(".custom-wrapper")))) : void alert("alertPop 需要唯一标示 ID，庸人这么多，牵错手了可不是闹着玩儿的！")
        }

        function b(a, b, c) {
            c = "number" == typeof c && c > 3e3 ? c : 3e3;
            var d = a.parent().parent().find(".error-label");
            d.html(b || "请重新输入").removeClass("hid"), clearTimeout(n.errorTimer), n.errorTimer = setTimeout(function() {
                d.addClass("hid").html("")
            }, c)
        }

        function c() {
            i.addClass("hid"), i.remove()
        }

        function f() {
            var a = $("body").outerHeight(!0),
                b = j.outerHeight(),
                c = j.outerWidth(),
                d = window.scrollY,
                e = window.innerHeight,
                f = window.innerWidth;
            j.css({
                top: (e - b) / 2 + d,
                left: (f - c) / 2
            }), i.css({
                height: a > e ? a : e
            })
        }

        function g(a) {
            l.on("click", o.confirm), k.on("click", o.cancel)
        }
        var h, i, j, k, l, m, n = {},
            o = {
                cancel: function() {
                    var a = $(this);
                    if (!a.hasClass("isDisabled")) return c(), m.cancelBtn && m.cancelBtn.callback && m.cancelBtn.callback.call(this, i), !1
                },
                confirm: function() {
                    var a = $(this);
                    if (!a.hasClass("isDisabled")) return m.confirmBtn && m.confirmBtn.callback ? m.confirmBtn.callback.call(this, i) : c(), !1
                }
            };
        return {
            init: a,
            showError: b,
            close: c
        }
    }
    var d = require("tpl/ux/alertPop"),
        e = $(document.createDocumentFragment());
    b.exports = c
}), define("tpl/ux/alertPop", function(require, a, b) {
    require("core/tplFunc");
    b.exports = function(a) {
        var b = '<div id="' + a.wrapperId + '" class="alert-wrapper hid"><article class="wrapper">';
        if (a.title && (b += '<header class="title">' + a.title + "</header>"), b += " ", a.info && (b += '<span class="info">' + a.info + "</span>"), b += " ", a.html && (b += '<div class="custom-wrapper">' + a.html + "</div>"), b += " ", a.label && (b += '<span class="label">' + a.label + "</span>"), b += " ", a.inputArr && a.inputArr.length) {
            b += " ";
            var c = a.inputArr;
            if (c)
                for (var d, e = -1, f = c.length - 1; f > e;) {
                    if (d = c[e += 1], b += '<div class="input-wrapper"><div class="input-item">', "object" == typeof d && d.length) {
                        b += " ";
                        var g = d;
                        if (g)
                            for (var h, i = -1, j = g.length - 1; j > i;) h = g[i += 1], b += '<input id="' + (h.id || "") + '" name="' + (h.name || "") + '" type="text" placeholder="' + (h.placeholder || "") + '" value="' + (h.value || "") + '"/>';
                        b += " "
                    } else b += '<input id="' + (d.id || "") + '" name="' + (d.name || "") + '" type="text" placeholder="' + (d.placeholder || "") + '" value="' + (d.value || "") + '"/>';
                    b += '</div><p class="error-label hid"></p></div>'
                }
            b += " "
        }
        return b += '<div class="action">', (a.cancelBtn || !a.cancelBtn && !a.confirmBtn) && (b += '<a id="' + (a.cancelBtn && a.cancelBtn.id || "J-alertPop-cancel") + '" href="javascript:void(0);" class="btn cancel-btn', a.cancelBtn && a.cancelBtn.isDisabled && (b += " isDisabled"), b += '">' + (a.cancelBtn && a.cancelBtn.txt || "取消") + "</a>"), b += " ", a.confirmBtn && (b += '<a id="' + (a.confirmBtn && a.confirmBtn.id || "J-alertPop-confirm") + '" href="javascript:void(0);" class="btn confirm-btn', a.confirmBtn && a.confirmBtn.isDisabled && (b += " isDisabled"), b += '">' + (a.confirmBtn && a.confirmBtn.txt || "确定") + "</a>"), b += "</div></article></div>"
    }
}), define("ux/popMenu", function(require, a, b) {
    function c(a) {
        e(a || {}), f(a)
    }

    function d() {
        "#popMenu" == location.hash && history.go(-1), j.css({
            bottom: -j.height() + "px"
        }), i.css({
            "background-color": "transparent"
        }), setTimeout(function() {
            i.remove()
        }, 200), k("body").off("touchmove", h)
    }

    function e(a) {
        window.location.hash = "popMenu", window.onhashchange = g, i = k(l(a)).appendTo(k("body")).show(), j = i.find(".content"), j.css({
            bottom: -j.height() + "px"
        }).addClass("show").css({
            bottom: 0
        }), m.os.ios && m.os.v < 5 || m.os.android && m.os.v < 4 || (i.css({
            position: "fixed"
        }), j.css({
            position: "fixed"
        })), i.css({
            "background-color": "rgba(0,0,0,.5)"
        })
    }

    function f(a) {
        k("body").on("touchmove", h), i.on("click", function(b) {
            a && a.clickPopMenu && a.clickPopMenu.call(this, b), d()
        })
    }

    function g() {
        var a = "#popMenu",
            b = location.hash;
        (!b || a.indexOf(b) < 0) && d()
    }

    function h(a) {
        a.preventDefault()
    }
    var i, j, k = require("jquery"),
        l = require("tpl/ux/popMenu"),
        m = require("core/device/ua");
    b.exports = {
        init: c
    }
}), define("tpl/ux/popMenu", function(require, a, b) {
    var c = require("core/tplFunc");
    b.exports = function(a) {
        var b = '<div class="ux-popmenu"><div class="content">';
        if (null !== a.icons && (b += '<header class="line-bottom"><!--<a href="javascript:;" data-type="1"><span class="faved"></span><em>收藏</em></a>--><a href="' + c.href("/index/router?cookie=0_all") + '"><i class="iconf iconf_tabbar_home" node-type="home"></i><span>首页</span></a><a href="' + c.href("/index/router?cookie=1") + '"><i class="iconf iconf_tabbar_msgcenter" node-type="msg"></i><span>消息</span></a><a href="' + c.href("/index/router?cookie=2") + '"><i class="iconf iconf_tabbar_discover" node-type="discover"></i><span>发现</span></a><a href="' + c.href("/index/router?cookie=3") + '"><i class="iconf iconf_tabbar_profile" node-type="profile"></i><span>我</span></a></header>'), b += '<section class="card-combine">', a.items) {
            b += " ";
            var d = a.items;
            if (d)
                for (var e, f = -1, g = d.length - 1; g > f;) e = d[f += 1], b += '<a href="' + c.href(e.url) + '" node-type="' + e.type + '"', f + 1 != a.items.length && (b += ' class="line-bottom"'), b += ' reporttype="', e.reporttype && (b += e.reporttype), b += '"><span>' + e.text + "</span></a>";
            b += " "
        }
        return b += '<a class="close line-top" href="javascript:;"><span>取消</span></a></section></div></div>'
    }
}), define("core/device/ua", function(require, a, b) {
    var c = {},
        d = {},
        e = navigator.userAgent,
        f = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        g = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        h = !!e.match(/\(Macintosh\; Intel /),
        i = e.match(/(iPad).*OS\s([\d_]+)/),
        j = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        k = !i && e.match(/(iPhone\sOS)\s([\d_]+)/),
        l = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        m = e.match(/Windows Phone ([\d.]+)/),
        n = l && e.match(/TouchPad/),
        o = e.match(/Kindle\/([\d.]+)/),
        p = e.match(/Silk\/([\d._]+)/),
        q = e.match(/(BlackBerry).*Version\/([\d.]+)/),
        r = e.match(/(BB10).*Version\/([\d.]+)/),
        s = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        t = e.match(/PlayBook/),
        u = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
        v = e.match(/Firefox\/([\d.]+)/),
        w = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        x = !u && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        y = x || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
        z = e.match(/MQQBrowser/),
        A = e.match(/UCBrowser/);
    (d.webkit = !!f) && (d.version = f[1]), g && (c.android = !0, c.version = g[2]), k && !j && (c.ios = c.iphone = !0, c.version = k[2].replace(/_/g, ".")), i && (c.ios = c.ipad = !0, c.version = i[2].replace(/_/g, ".")), j && (c.ios = c.ipod = !0, c.version = j[3] ? j[3].replace(/_/g, ".") : null), m && (c.wp = !0, c.version = m[1]), l && (c.webos = !0, c.version = l[2]), n && (c.touchpad = !0), q && (c.blackberry = !0, c.version = q[2]), r && (c.bb10 = !0, c.version = r[2]), s && (c.rimtabletos = !0, c.version = s[2]), t && (d.playbook = !0), o && (c.kindle = !0, c.version = o[1]),
        p && (d.silk = !0, d.version = p[1]), !p && c.android && e.match(/Kindle Fire/) && (d.silk = !0), u && (d.chrome = !0, d.version = u[1]), v && (d.firefox = !0, d.version = v[1]), w && (d.ie = !0, d.version = w[1]), y && (h || c.ios) && (d.safari = !0, h && (d.version = y[1])), x && (d.webview = !0), z && (d.qq = !0), A && (d.uc = !0), c.version && (c.v = c.version.split(".")[0]), b.exports = {
            os: c,
            browser: d
        }
});
