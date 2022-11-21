(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);var t=e.$,r=e.utils,s=(e.getDevice,e.getSupport),l=(e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,e.$jsx,r.bindMethods);const o={destroy(e){const a=t(e).closest(".page");a.length&&a[0].f7LazyDestroy&&a[0].f7LazyDestroy()},create(e){const a=this,r=s(),l=t(e).closest(".page").eq(0),o=l.find(".lazy");if(0===o.length&&!l.hasClass("lazy"))return;const n=a.params.lazy.placeholder;!1!==n&&o.each((e=>{t(e).attr("data-src")&&!t(e).attr("src")&&t(e).attr("src",n)}));const d=[];let i=!1;function y(e){d.indexOf(e)>=0&&d.splice(d.indexOf(e),1),i=!1,a.params.lazy.sequential&&d.length>0&&(i=!0,a.lazy.loadImage(d[0],y))}if(a.params.lazy.observer&&r.intersectionObserver){let e=l[0].f7LazyObserver;return e||(e=new window.IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){if(a.params.lazy.sequential&&i)return void(d.indexOf(e.target)<0&&d.push(e.target));i=!0,a.lazy.loadImage(e.target,y),t.unobserve(e.target)}}))}),{root:l[0]})),o.each((a=>{a.f7LazyObserverAdded||(a.f7LazyObserverAdded=!0,e.observe(a))})),void(l[0].f7LazyDestroy||(l[0].f7LazyDestroy=()=>{e.disconnect(),delete l[0].f7LazyDestroy,delete l[0].f7LazyObserver}))}function c(){a.lazy.load(l,(e=>{a.params.lazy.sequential&&i?d.indexOf(e)<0&&d.push(e):(i=!0,a.lazy.loadImage(e,y))}))}l[0].f7LazyDestroy||(l[0].f7LazyDestroy=function(){l[0].f7LazyAttached=!1,delete l[0].f7LazyAttached,l.off("lazy",c),l.off("scroll",c,!0),l.find(".tab").off("tab:mounted tab:show",c),a.off("resize",c)}),l[0].f7LazyAttached||(l[0].f7LazyAttached=!0,l.on("lazy",c),l.on("scroll",c,!0),l.find(".tab").on("tab:mounted tab:show",c),a.on("resize",c)),c()},isInViewport(e){const a=this,t=e.getBoundingClientRect(),r=a.params.lazy.threshold||0;return t.top>=0-r&&t.left>=0-r&&t.top<=a.height+r&&t.left<=a.width+r},loadImage(e,a){const r=this,s=t(e),l=s.attr("data-background"),o=l||s.attr("data-src");function n(){s.removeClass("lazy").addClass("lazy-loaded"),l?s.css("background-image",`url(${o})`):o&&s.attr("src",o),a&&a(e),s.trigger("lazy:loaded"),r.emit("lazyLoaded",s[0])}if(!o)return s.trigger("lazy:load"),r.emit("lazyLoad",s[0]),void n();const d=new window.Image;d.onload=n,d.onerror=function(){s.removeClass("lazy").addClass("lazy-loaded"),l?s.css("background-image",`url(${r.params.lazy.placeholder||""})`):s.attr("src",r.params.lazy.placeholder||""),a&&a(e),s.trigger("lazy:error"),r.emit("lazyError",s[0])},d.src=o,s.removeAttr("data-src").removeAttr("data-background"),s.trigger("lazy:load"),r.emit("lazyLoad",s[0])},load(e,a){const r=this;let s=t(e);s.hasClass("page")||(s=s.parents(".page").eq(0)),0!==s.length&&s.find(".lazy").each((e=>{t(e).parents(".tab:not(.tab-active)").length>0||r.lazy.isInViewport(e)&&(a?a(e):r.lazy.loadImage(e))}))}};var n={name:"lazy",params:{lazy:{placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",threshold:0,sequential:!0,observer:!0}},create(){l(this,{lazy:o})},on:{pageInit(e){const a=this;(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.create(e.$el)},pageAfterIn(e){const a=this,t=s();a.params.lazy.observer&&t.intersectionObserver||(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.create(e.$el)},pageBeforeRemove(e){const a=this;(e.$el.find(".lazy").length>0||e.$el.hasClass("lazy"))&&a.lazy.destroy(e.$el)},tabMounted(e){const a=this,r=t(e);(r.find(".lazy").length>0||r.hasClass("lazy"))&&a.lazy.create(r)},tabBeforeRemove(e){const a=this,r=s();if(a.params.lazy.observer&&r.intersectionObserver)return;const l=t(e);(l.find(".lazy").length>0||l.hasClass("lazy"))&&a.lazy.destroy(l)}}};if(a){if(e.prototype.modules&&e.prototype.modules[n.name])return;e.use(n),e.instance&&(e.instance.useModuleParams(n,e.instance.params),e.instance.useModule(n))}return n}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
