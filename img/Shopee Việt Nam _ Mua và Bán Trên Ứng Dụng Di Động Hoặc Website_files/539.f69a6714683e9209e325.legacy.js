(self.wpJsonpPcmallFlashsale=self.wpJsonpPcmallFlashsale||[]).push([[539],{9061:function(e,t,a){"use strict";a.d(t,{Z:function(){return q}});var r=a(3804),n=a.n(r),o=a(9500),i=a.n(o),l=a(5042),s=a(6704),m=a(3532),c=a(638),d=a(9056),p=a(940),u=a(9014),h={"home-page":"j3sDV8",price_sale_price:"i25Yvf",price_hidden_price:"Q6q+ds","landing-page":"qOgYxF","mart-landing-page":"rGLNhT",currencySymbol:"-92Xgq","mart-home-page":"nYO6iM"},f=function(e){var t=e.locale,a=e.price,r=e.hiddenPrice,o=e.layout,i=e.type,l=(0,d.b5)(t).formatServerCurrency,s=(0,p.jK)(t),m=u.gJ.has(t),c=u.O9.has(t),f=a?l(a,{symbol:""}):r;return n().createElement("div",{className:h[o]},(!m||c)&&n().createElement("span",{className:h.currencySymbol},(c?s[0]:s)+" "),n().createElement("span",{className:h["price_"+i]},f),(m||c)&&n().createElement("span",{className:h.currencySymbol}," "+(c?s[1]:s)))},g=a(6579),_=a(9298),v=a(6025),I=(0,a(5035).S)((0,v.of)()),w=_.LU.bind(null,_.x5[I]),y=function(e,t){var a=new Date(1e3*t),r=new Date(1e3*e),n=(0,_.IS)("minute",a,r);return w(a,r,{totalUnits:1,endUnit:"minute",roundLast:n>60?"floor":n<1?"ceil":"round",unitLowerBounds:{year:Number.MAX_VALUE,month:Number.MAX_VALUE,week:Number.MAX_VALUE,day:Number.MAX_VALUE}})},S=a(476),E=a(9739),C=["trackingClick","to","history"],N=["targetType"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},L.apply(this,arguments)}function O(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}function b(e,t,a,r){return function(n){e(),n&&n.stopPropagation(),n&&n.preventDefault(),r?window.location.href=t:a.push(t)}}function k(e){var t=e.trackingClick,a=e.to,n=e.history,o=O(e,C);return r.createElement("div",{onClick:b(t,a,n,"string"==typeof a&&/^http/.test(a))},o.children)}function P(e){var t=e.targetType,a=O(e,N),n=(0,E.Z)(t,L({},a));return r.createElement(k,L({trackingClick:n},a))}var A=a(980),x=a(4233),D=a(8312),B=a(5949),T=a(6219),M={flashSaleItemCardLink:"PMpbYz",flashSaleItemCardPlaceholderImage:"oNU6Ce",shopeeFsItemCardBadgeWrapper:"aS+-QV","shopeeFsItemCardBadgeWrapper--mart-home-page":"zSJBKg",flashSaleItemCard:"B3+pb+","flashSaleItemCard--mart-home-page":"_6ICddM","flashSaleItemCard--home-page":"j-EwUq","flashSaleItemCard--mart-landing-page":"_46epaO","flashSaleItemCard--landing-page":"N8hR+F","shopee-item-card__cover-img-background":"ftNnkX",flashSaleItemCardImageOverlay:"_6y1ec4","flashSaleItemCardImageOverlay--mart-home-page":"YSn+8X","flashSaleItemCardImageOverlay--home-page":"qgVEW-","flashSaleItemCardImageOverlay--mart-landing-page":"na4vkv","flashSaleItemCardImageOverlay--landing-page":"qOUKdN",flashSaleItemCardImage:"FSzItq","flashSaleItemCardImage--mart-home-page":"_9LTz0S","flashSaleItemCardImage--home-page":"X2noab","flashSaleItemCardImage--mart-landing-page":"cmjSHU","flashSaleItemCardImage--landing-page":"qifRic",flashSaleItemCardAnimatedImage:"_8+rkhW",itemName:"LERASq",itemNameExtraDiscount:"_5W9sdV",itemNameBox:"OHv6Qr",itemNameBoxExtraDiscount:"_3pphAa",originalPrice:"IKgh3U","originalPrice--mart-home-page":"hkj7Sh",currentPrice:"dgZNpS","currentPrice--home-page":"KTjgSZ","currentPrice--mart-landing-page":"_7nOJu6","currentPrice--landing-page":"sQmr2P","currentPrice--mart-home-page":"PV1fAR","currentPrice--mart-home-page__coming-soon":"poi42Q",extraDiscountLabel:"t6IiNO",itemCardLowerWrapper:"_02pRMf","itemCardLowerWrapper--mart-home-page":"euvAqH","itemCardLowerWrapper--mart-home-page__coming-soon":"i68sQJ",itemCardLowerLeft:"_6C-j0b",buyNowButton:"fQZ-l0","buyNowButton--mart-landing-page":"Ye4-xC","buyNowButton--mart-home-page":"vQ8QQz",viewDetailsButton:"dKXhBJ","viewDetailsButton--mart-home-page":"fEUtpT","viewDetailsButton--mart-landing-page":"gne+9K",itemCardSoldOut:"_1YBVZp","flashSaleItemCard--TH":"NFHIb6","flashSaleItemCard--TW":"vflhlw","flashSaleItemCard--ID":"gp1Hrx","flashSaleItemCard--VN":"y+U+-m","flashSaleItemCard--BR":"gaRuhn","flashSaleItemCard--ES":"j0gFhx","flashSaleItemCard--AR":"ftNRLY","flashSaleItemCard--PL":"C6TwWM","flashSaleItemCard--FR":"XuE+li"};function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},H.apply(this,arguments)}var W=s.I18n.t,F=s.I18n.withI18nCollections,U=s.Env.getLocale(),j={IN:"hot_deals",default:"flash_sale"},R=j[U]||j.default;function V(e){var t=e.item,a=e.layout,r=e.overwriteCardLink,o=e.displayFlashSaleProgressBar,s=e.setShowDiscountBadge,m=e.isOngoing,d=e.isOngoingSession,p=e.positionId,h=e.history,_=e.index,v={item:t,positionId:p,isOngoing:m,isOngoingSession:d,startTime:e.startTime,index:_,layout:a,overwriteCardLink:r,displayFlashSaleProgressBar:o,setShowDiscountBadge:s,history:h,recommendation_info:e.recommendation_info},I=(0,B.Z)("FlashSaleItemCard",H({},e)),w=(0,E.Z)("FlashSaleItemCard",H({},e));if(e.isPlaceholder&&"home-page"===e.layout)return n().createElement("div",{className:i()(M.flashSaleItemCard,M["flashSaleItemCard--home-page"])},n().createElement("div",{className:i()(M.flashSaleItemCardImage,M["flashSaleItemCardImage--home-page"])},n().createElement(c.p,{className:M.flashSaleItemCardPlaceholderImage})),n().createElement("div",{className:i()(M.itemCardLowerWrapper,M["itemCardLowerWrapper--home-page"])},n().createElement("div",{className:"skeleton-full"},n().createElement("div",{className:"center skeleton-full",style:{height:26}},n().createElement("div",{className:"skeleton skeleton-medium skeleton-line"})),n().createElement("div",{className:"center skeleton-full",style:{height:16}},n().createElement("div",{className:"skeleton skeleton-full skeleton-line"})))));var C=t.flash_sale_stock,N=t.stock,L=C-N;m&&window.Sentry&&t&&L&&L<0&&window.Sentry.captureMessage("Flash Sale sold out count is negative\n      trace id: "+t.recommendation_trace_id+"\n      promotionid: "+t.promotionid+"\n      itemid: "+t.itemid+"\n      flash_sale_stock:"+C+"\n      stock:"+N+"\n      sold(flash_sale_stock-stock): "+L+",","error");var O=m,b=O&&(0===t.stock||0===t.flash_sale_stock||t.is_soldout),k=t.raw_discount,F=(0,l.Jn)(t.promo_images&&t.promo_images.length>0?t.promo_images[0]:t.image,!0),j=function(e,t){if(e){var a="TW"===__LOCALE__?(100-e.extra_discount)/10:e.extra_discount,r="";if(e.end_time&&e.start_time&&(r=y(e.start_time,e.end_time)),e&&"function"==typeof t)return r?t("fs_extra_n_off_applied_for_first_m_in_x",{n:a,m:e.extra_discount_stock,x:r}):t("fs_extra_n_off_applied_for_first_m",{n:a,m:e.extra_discount_stock})}return""}(t.extra_discount_info,W),V=a===u.HS.LANDING_PAGE||a===u.HS.MART_LANDING_PAGE,Z=!!j&&V,q=t.hidden_price_display,Q=!!t&&!!t.shopid&&!!t.itemid,X=r||(Q?b?T.xW.getUrl({seoName:t.name,shopId:t.shopid,itemId:t.itemid,from:R,promotionid:t.promotionid}):(0,x.O)(t.shopid,t.itemid,t.name):"");return Q?n().createElement("div",{ref:I,onClick:w,className:i()(M.flashSaleItemCard,M["flashSaleItemCard--"+a],M["flashSaleItemCard--"+__LOCALE__],b&&M.itemCardSoldOut)},n().createElement(A.Z,{className:M.flashSaleItemCardLink,to:X},n().createElement("div",{className:i()(M.flashSaleItemCardImage,M["flashSaleItemCardImage--"+a])},b&&n().createElement(S.VL,null),t.promo_overlay_image&&n().createElement(c.p,{src:(0,l.Jn)(t.promo_overlay_image,!0),className:i()(M.flashSaleItemCardImageOverlay,M["flashSaleItemCardImageOverlay--"+a]),imageServerWidthOperator:320}),n().createElement(c.p,{className:M.flashSaleItemCardAnimatedImage,src:F,imageServerWidthOperator:320})),V&&n().createElement("div",{className:i()(M.itemName,!j&&M.itemNameExtraDiscount)},n().createElement("div",{className:j?M.itemNameBoxExtraDiscount:M.itemNameBox,title:t.promo_name||t.name},t.promo_name||t.name)),Z&&n().createElement("div",{className:M.extraDiscountLabel},j),(V||!m&&a===u.HS.MART_HOME_PAGE)&&t.price_before_discount!==t.price&&n().createElement("div",{className:i()(M.originalPrice,M["originalPrice--"+a])},n().createElement(f,{locale:U,price:t.price_before_discount,layout:a,type:u.g8.ORIGINAL_PRICE})),n().createElement("div",{className:i()(M.itemCardLowerWrapper,M["itemCardLowerWrapper--"+a],!O&&M["itemCardLowerWrapper--"+a+"__coming-soon"])},n().createElement("div",{className:M.itemCardLowerLeft},n().createElement("div",{className:i()(M.currentPrice,M["currentPrice--"+a],!O&&M["currentPrice--"+a+"__coming-soon"])},n().createElement(f,{locale:U,price:t.price,hiddenPrice:q,layout:a,type:t.price?u.g8.SALE_PRICE:u.g8.HIDDEN_PRICE})),o&&n().createElement(g.Z,{sold:t.flash_sale_stock-t.stock,total:t.flash_sale_stock,soldOutTime:t.end_time,startTime:t.start_time,layout:a})),n().createElement("div",null,!b&&V&&O&&n().createElement(P,H({},v,{targetType:"BuyNowButton",to:X,history:h}),n().createElement("div",{className:i()(M.buyNowButton,M["buyNowButton--"+a])},W("label_buy_now_flash_sale"))),(V||a===u.HS.MART_HOME_PAGE)&&!O&&n().createElement(P,H({},v,{targetType:"ViewDetailsButton",to:X,history:h}),n().createElement("div",{className:i()(M.viewDetailsButton,M["viewDetailsButton--"+a])},W("label_btn_view_details")))),s&&!!k&&m&&n().createElement("div",{className:i()(M.shopeeFsItemCardBadgeWrapper,M["shopeeFsItemCardBadgeWrapper--"+a])},n().createElement(S.OO,{rawDiscount:k,language:D.UA,key:"badge-promotion",offText:W("pr_badge_label_off")}))))):null}var Z=function(e,t){return!!e.item&&!!e.item.itemid&&e.item.itemid===t.item.itemid&&e.item.promotionid===t.item.promotionid},q=F([m.x7,m.L])(n().memo(V,Z))},4233:function(e,t,a){"use strict";a.d(t,{O:function(){return n}});var r=a(9373);function n(e,t,a){return a?r.Z.getUrl({seoName:a,shopId:e,itemId:t}):r.O.getUrl({shopId:e,itemId:t})}},8312:function(e,t,a){"use strict";a.d(t,{UA:function(){return o},se:function(){return l}});var r=a(6025),n=a(7143),o=(0,r.of)(),i=(0,n.pO)(__LOCALE__),l=(i.language,i.languages,i.countryName,i.currency);i.adultAge,n.H0[__LOCALE__]},5739:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(3804);function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function o(e){return e?e.offsetTop+o(e.offsetParent):0}var i=function(e){var t,a;function i(t){var a,r,n,i;return(a=e.call(this,t)||this).scrollListener=function(){if(a.props.hasMore&&!a.props.isFetching){var e=(new Date).getTime(),t=a._el;if(t){var r=a.props.window===window?window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop:a.props.window.scrollTop;if(o(t)+t.offsetHeight-r-(a.props.window.innerHeight||a.props.window.offsetHeight)<Number(a.props.threshold)){var n=a.props.loadDelay-(e-a._lastLoading);n<=0?a.loadMore():a._watingLoad||(a._watingLoad=window.setTimeout(a.loadMore.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),n))}}}},a._lastLoading=(new Date).getTime()-t.loadDelay,a._watingLoad=null,a.throttleScrollHandler=(r=a.scrollListener,50,n=null,i=null,function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var o=Date.now(),l=n?n+50-o:0;l<=0?(n=o,r.apply(void 0,t)):(i&&clearTimeout(i),i=setTimeout((function(){n=Date.now(),r.apply(void 0,t),i=null}),l))}),a}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,n(t,a);var l=i.prototype;return l.render=function(){var e=this;return r.createElement("div",{ref:function(t){return e._el=t}},this.props.hasMore?this.props.loadIndicator:null)},l.loadMore=function(){this.props.hasMore&&(this._watingLoad&&(clearTimeout(this._watingLoad),this._watingLoad=null),this._lastLoading=(new Date).getTime(),this.props.loadMore())},l.attachScrollListener=function(){this.props.window.addEventListener("scroll",this.throttleScrollHandler),this.props.window.addEventListener("resize",this.throttleScrollHandler),this.props.disableAutoFetch||setTimeout(this.scrollListener,0)},l.detachScrollListener=function(){this.props.window.removeEventListener("scroll",this.throttleScrollHandler),this.props.window.removeEventListener("resize",this.throttleScrollHandler)},l.componentDidMount=function(){this.attachScrollListener()},l.componentWillUnmount=function(){this.detachScrollListener()},i}(r.Component);i.defaultProps={loadMore:function(){},hasMore:!1,loadIndicator:r.createElement("div",null,"Loading ..."),threshold:800,loadDelay:1e3,isFetching:!1,window:window,autoFetch:!0};var l=i},5843:function(e,t,a){"use strict";a.d(t,{T:function(){return m}});var r=a(3804),n=a.n(r),o=a(9500),i=a.n(o),l=a(343);function s(e){var t=e.show,a=void 0!==t&&t,r=e.color,o=void 0===r?l._8:r,s=e.hideOverlay,m=void 0!==s&&s,c=e.spinnerClassName;return n().createElement("div",{className:i()({"stardust-spinner--hidden":!a},"stardust-spinner")},n().createElement("div",{className:i()("stardust-spinner__background",{"stardust-spinner__background--no-overlay":m})},n().createElement("div",{className:i()(c,"stardust-spinner__main"),role:"img"},n().createElement("svg",{width:"34",height:"12",viewBox:"-1 0 33 12"},n().createElement("circle",{className:"stardust-spinner__spinner",cx:4,cy:6,r:4,fill:o}),n().createElement("circle",{className:"stardust-spinner__spinner",cx:16,cy:6,r:4,fill:o}),n().createElement("circle",{className:"stardust-spinner__spinner",cx:28,cy:6,r:4,fill:o})))))}var m=function(){return r.createElement("div",{className:"spinner-container"},r.createElement(s,{hideOverlay:!0,show:!0}))}}}]);
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-flashsale/_/539.f69a6714683e9209e325.legacy.js.map