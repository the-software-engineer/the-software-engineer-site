import{S as we,i as ye,s as Te,B as Ne,k as N,e as M,H as Ae,l as A,h as d,n as u,F as j,C as Me,D as Se,E as Le,f as ve,t as Ee,A as W,b as w,a as S,c as L,I as D,J as ge,K as He,v as je,q,w as Pe,m as P,r as C,x as We,y as qe}from"../../chunks/index-d46f1a79.js";function G(f,t,l){const e=f.slice();return e[11]=t[l],e}function I(f,t,l){const e=f.slice();return e[14]=t[l],e}function V(f,t,l){const e=f.slice();return e[17]=t[l],e}function J(f){return document.title=f[0],{c:W,l:W,m:W,d:W}}function O(f){let t;return{c(){t=N("meta"),this.h()},l(l){t=A(l,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","description"),u(t,"content",f[3])},m(l,e){w(l,t,e)},p(l,e){e&8&&u(t,"content",l[3])},d(l){l&&d(t)}}}function F(f){let t;return{c(){t=N("link"),this.h()},l(l){t=A(l,"LINK",{rel:!0,href:!0}),this.h()},h(){u(t,"rel","canonical"),u(t,"href",f[5])},m(l,e){w(l,t,e)},p(l,e){e&32&&u(t,"href",l[5])},d(l){l&&d(t)}}}function K(f){let t;return{c(){t=N("meta"),this.h()},l(l){t=A(l,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","keywords"),u(t,"content",f[4])},m(l,e){w(l,t,e)},p(l,e){e&16&&u(t,"content",l[4])},d(l){l&&d(t)}}}function z(f){let t,l,e,i,_,m,c=f[6].title&&B(f),b=f[6].description&&U(f),k=(f[6].url||f[5])&&Q(f),a=f[6].type&&R(f),h=f[6].article&&X(f),s=f[6].images&&f[6].images.length&&ne(f);return{c(){c&&c.c(),t=S(),b&&b.c(),l=S(),k&&k.c(),e=S(),a&&a.c(),i=S(),h&&h.c(),_=S(),s&&s.c(),m=M()},l(n){c&&c.l(n),t=L(n),b&&b.l(n),l=L(n),k&&k.l(n),e=L(n),a&&a.l(n),i=L(n),h&&h.l(n),_=L(n),s&&s.l(n),m=M()},m(n,o){c&&c.m(n,o),w(n,t,o),b&&b.m(n,o),w(n,l,o),k&&k.m(n,o),w(n,e,o),a&&a.m(n,o),w(n,i,o),h&&h.m(n,o),w(n,_,o),s&&s.m(n,o),w(n,m,o)},p(n,o){n[6].title?c?c.p(n,o):(c=B(n),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null),n[6].description?b?b.p(n,o):(b=U(n),b.c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null),n[6].url||n[5]?k?k.p(n,o):(k=Q(n),k.c(),k.m(e.parentNode,e)):k&&(k.d(1),k=null),n[6].type?a?a.p(n,o):(a=R(n),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),n[6].article?h?h.p(n,o):(h=X(n),h.c(),h.m(_.parentNode,_)):h&&(h.d(1),h=null),n[6].images&&n[6].images.length?s?s.p(n,o):(s=ne(n),s.c(),s.m(m.parentNode,m)):s&&(s.d(1),s=null)},d(n){c&&c.d(n),n&&d(t),b&&b.d(n),n&&d(l),k&&k.d(n),n&&d(e),a&&a.d(n),n&&d(i),h&&h.d(n),n&&d(_),s&&s.d(n),n&&d(m)}}}function B(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","og:title"),u(t,"content",l=f[6].title)},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[6].title)&&u(t,"content",l)},d(e){e&&d(t)}}}function U(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","og:description"),u(t,"content",l=f[6].description)},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[6].description)&&u(t,"content",l)},d(e){e&&d(t)}}}function Q(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","og:url"),u(t,"content",l=f[6].url||f[5])},m(e,i){w(e,t,i)},p(e,i){i&96&&l!==(l=e[6].url||e[5])&&u(t,"content",l)},d(e){e&&d(t)}}}function R(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","og:type"),u(t,"content",l=f[6].type.toLowerCase())},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[6].type.toLowerCase())&&u(t,"content",l)},d(e){e&&d(t)}}}function X(f){let t,l,e,i,_,m,c=f[6].article.publishedTime&&Y(f),b=f[6].article.modifiedTime&&Z(f),k=f[6].article.expirationTime&&$(f),a=f[6].article.section&&x(f),h=f[6].article.authors&&f[6].article.authors.length&&ee(f),s=f[6].article.tags&&f[6].article.tags.length&&le(f);return{c(){c&&c.c(),t=S(),b&&b.c(),l=S(),k&&k.c(),e=S(),a&&a.c(),i=S(),h&&h.c(),_=S(),s&&s.c(),m=M()},l(n){c&&c.l(n),t=L(n),b&&b.l(n),l=L(n),k&&k.l(n),e=L(n),a&&a.l(n),i=L(n),h&&h.l(n),_=L(n),s&&s.l(n),m=M()},m(n,o){c&&c.m(n,o),w(n,t,o),b&&b.m(n,o),w(n,l,o),k&&k.m(n,o),w(n,e,o),a&&a.m(n,o),w(n,i,o),h&&h.m(n,o),w(n,_,o),s&&s.m(n,o),w(n,m,o)},p(n,o){n[6].article.publishedTime?c?c.p(n,o):(c=Y(n),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null),n[6].article.modifiedTime?b?b.p(n,o):(b=Z(n),b.c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null),n[6].article.expirationTime?k?k.p(n,o):(k=$(n),k.c(),k.m(e.parentNode,e)):k&&(k.d(1),k=null),n[6].article.section?a?a.p(n,o):(a=x(n),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null),n[6].article.authors&&n[6].article.authors.length?h?h.p(n,o):(h=ee(n),h.c(),h.m(_.parentNode,_)):h&&(h.d(1),h=null),n[6].article.tags&&n[6].article.tags.length?s?s.p(n,o):(s=le(n),s.c(),s.m(m.parentNode,m)):s&&(s.d(1),s=null)},d(n){c&&c.d(n),n&&d(t),b&&b.d(n),n&&d(l),k&&k.d(n),n&&d(e),a&&a.d(n),n&&d(i),h&&h.d(n),n&&d(_),s&&s.d(n),n&&d(m)}}}function Y(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","article:published_time"),u(t,"content",l=f[6].article.publishedTime)},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[6].article.publishedTime)&&u(t,"content",l)},d(e){e&&d(t)}}}function Z(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","article:modified_time"),u(t,"content",l=f[6].article.modifiedTime)},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[6].article.modifiedTime)&&u(t,"content",l)},d(e){e&&d(t)}}}function $(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","article:expiration_time"),u(t,"content",l=f[6].article.expirationTime)},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[6].article.expirationTime)&&u(t,"content",l)},d(e){e&&d(t)}}}function x(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","article:section"),u(t,"content",l=f[6].article.section)},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[6].article.section)&&u(t,"content",l)},d(e){e&&d(t)}}}function ee(f){let t,l=f[6].article.authors,e=[];for(let i=0;i<l.length;i+=1)e[i]=te(V(f,l,i));return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=M()},l(i){for(let _=0;_<e.length;_+=1)e[_].l(i);t=M()},m(i,_){for(let m=0;m<e.length;m+=1)e[m].m(i,_);w(i,t,_)},p(i,_){if(_&64){l=i[6].article.authors;let m;for(m=0;m<l.length;m+=1){const c=V(i,l,m);e[m]?e[m].p(c,_):(e[m]=te(c),e[m].c(),e[m].m(t.parentNode,t))}for(;m<e.length;m+=1)e[m].d(1);e.length=l.length}},d(i){D(e,i),i&&d(t)}}}function te(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","article:author"),u(t,"content",l=f[17])},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[17])&&u(t,"content",l)},d(e){e&&d(t)}}}function le(f){let t,l=f[6].article.tags,e=[];for(let i=0;i<l.length;i+=1)e[i]=ie(I(f,l,i));return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=M()},l(i){for(let _=0;_<e.length;_+=1)e[_].l(i);t=M()},m(i,_){for(let m=0;m<e.length;m+=1)e[m].m(i,_);w(i,t,_)},p(i,_){if(_&64){l=i[6].article.tags;let m;for(m=0;m<l.length;m+=1){const c=I(i,l,m);e[m]?e[m].p(c,_):(e[m]=ie(c),e[m].c(),e[m].m(t.parentNode,t))}for(;m<e.length;m+=1)e[m].d(1);e.length=l.length}},d(i){D(e,i),i&&d(t)}}}function ie(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","article:tag"),u(t,"content",l=f[14])},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[14])&&u(t,"content",l)},d(e){e&&d(t)}}}function ne(f){let t,l=f[6].images,e=[];for(let i=0;i<l.length;i+=1)e[i]=ae(G(f,l,i));return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=M()},l(i){for(let _=0;_<e.length;_+=1)e[_].l(i);t=M()},m(i,_){for(let m=0;m<e.length;m+=1)e[m].m(i,_);w(i,t,_)},p(i,_){if(_&64){l=i[6].images;let m;for(m=0;m<l.length;m+=1){const c=G(i,l,m);e[m]?e[m].p(c,_):(e[m]=ae(c),e[m].c(),e[m].m(t.parentNode,t))}for(;m<e.length;m+=1)e[m].d(1);e.length=l.length}},d(i){D(e,i),i&&d(t)}}}function fe(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","og:image:alt"),u(t,"content",l=f[11].alt)},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[11].alt)&&u(t,"content",l)},d(e){e&&d(t)}}}function oe(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","og:image:width"),u(t,"content",l=f[11].width.toString())},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[11].width.toString())&&u(t,"content",l)},d(e){e&&d(t)}}}function re(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{property:!0,content:!0}),this.h()},h(){u(t,"property","og:image:height"),u(t,"content",l=f[11].height.toString())},m(e,i){w(e,t,i)},p(e,i){i&64&&l!==(l=e[11].height.toString())&&u(t,"content",l)},d(e){e&&d(t)}}}function ae(f){let t,l,e,i,_,m,c=f[11].alt&&fe(f),b=f[11].width&&oe(f),k=f[11].height&&re(f);return{c(){t=N("meta"),e=S(),c&&c.c(),i=S(),b&&b.c(),_=S(),k&&k.c(),m=M(),this.h()},l(a){t=A(a,"META",{property:!0,content:!0}),e=L(a),c&&c.l(a),i=L(a),b&&b.l(a),_=L(a),k&&k.l(a),m=M(),this.h()},h(){u(t,"property","og:image"),u(t,"content",l=f[11].url)},m(a,h){w(a,t,h),w(a,e,h),c&&c.m(a,h),w(a,i,h),b&&b.m(a,h),w(a,_,h),k&&k.m(a,h),w(a,m,h)},p(a,h){h&64&&l!==(l=a[11].url)&&u(t,"content",l),a[11].alt?c?c.p(a,h):(c=fe(a),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null),a[11].width?b?b.p(a,h):(b=oe(a),b.c(),b.m(_.parentNode,_)):b&&(b.d(1),b=null),a[11].height?k?k.p(a,h):(k=re(a),k.c(),k.m(m.parentNode,m)):k&&(k.d(1),k=null)},d(a){a&&d(t),a&&d(e),c&&c.d(a),a&&d(i),b&&b.d(a),a&&d(_),k&&k.d(a),a&&d(m)}}}function me(f){let t,l,e,i,_,m,c,b,k,a,h,s=f[7].site&&ue(f),n=f[7].title&&ce(f),o=f[7].description&&se(f),y=f[7].image&&_e(f),T=f[7].imageAlt&&pe(f),v=f[7].player&&he(f),E=f[7].playerWidth&&de(f),g=f[7].playerHeight&&be(f);return{c(){t=N("meta"),e=S(),s&&s.c(),i=S(),n&&n.c(),_=S(),o&&o.c(),m=S(),y&&y.c(),c=S(),T&&T.c(),b=S(),v&&v.c(),k=S(),E&&E.c(),a=S(),g&&g.c(),h=M(),this.h()},l(r){t=A(r,"META",{name:!0,content:!0}),e=L(r),s&&s.l(r),i=L(r),n&&n.l(r),_=L(r),o&&o.l(r),m=L(r),y&&y.l(r),c=L(r),T&&T.l(r),b=L(r),v&&v.l(r),k=L(r),E&&E.l(r),a=L(r),g&&g.l(r),h=M(),this.h()},h(){u(t,"name","twitter:card"),u(t,"content",l=f[7].card||"summary_large_image")},m(r,p){w(r,t,p),w(r,e,p),s&&s.m(r,p),w(r,i,p),n&&n.m(r,p),w(r,_,p),o&&o.m(r,p),w(r,m,p),y&&y.m(r,p),w(r,c,p),T&&T.m(r,p),w(r,b,p),v&&v.m(r,p),w(r,k,p),E&&E.m(r,p),w(r,a,p),g&&g.m(r,p),w(r,h,p)},p(r,p){p&128&&l!==(l=r[7].card||"summary_large_image")&&u(t,"content",l),r[7].site?s?s.p(r,p):(s=ue(r),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null),r[7].title?n?n.p(r,p):(n=ce(r),n.c(),n.m(_.parentNode,_)):n&&(n.d(1),n=null),r[7].description?o?o.p(r,p):(o=se(r),o.c(),o.m(m.parentNode,m)):o&&(o.d(1),o=null),r[7].image?y?y.p(r,p):(y=_e(r),y.c(),y.m(c.parentNode,c)):y&&(y.d(1),y=null),r[7].imageAlt?T?T.p(r,p):(T=pe(r),T.c(),T.m(b.parentNode,b)):T&&(T.d(1),T=null),r[7].player?v?v.p(r,p):(v=he(r),v.c(),v.m(k.parentNode,k)):v&&(v.d(1),v=null),r[7].playerWidth?E?E.p(r,p):(E=de(r),E.c(),E.m(a.parentNode,a)):E&&(E.d(1),E=null),r[7].playerHeight?g?g.p(r,p):(g=be(r),g.c(),g.m(h.parentNode,h)):g&&(g.d(1),g=null)},d(r){r&&d(t),r&&d(e),s&&s.d(r),r&&d(i),n&&n.d(r),r&&d(_),o&&o.d(r),r&&d(m),y&&y.d(r),r&&d(c),T&&T.d(r),r&&d(b),v&&v.d(r),r&&d(k),E&&E.d(r),r&&d(a),g&&g.d(r),r&&d(h)}}}function ue(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:site"),u(t,"content",l=f[7].site)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].site)&&u(t,"content",l)},d(e){e&&d(t)}}}function ce(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:title"),u(t,"content",l=f[7].title)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].title)&&u(t,"content",l)},d(e){e&&d(t)}}}function se(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:description"),u(t,"content",l=f[7].description)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].description)&&u(t,"content",l)},d(e){e&&d(t)}}}function _e(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:image"),u(t,"content",l=f[7].image)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].image)&&u(t,"content",l)},d(e){e&&d(t)}}}function pe(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:image:alt"),u(t,"content",l=f[7].imageAlt)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].imageAlt)&&u(t,"content",l)},d(e){e&&d(t)}}}function he(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:player"),u(t,"content",l=f[7].player)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].player)&&u(t,"content",l)},d(e){e&&d(t)}}}function de(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:player:width"),u(t,"content",l=f[7].playerWidth)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].playerWidth)&&u(t,"content",l)},d(e){e&&d(t)}}}function be(f){let t,l;return{c(){t=N("meta"),this.h()},l(e){t=A(e,"META",{name:!0,content:!0}),this.h()},h(){u(t,"name","twitter:player:height"),u(t,"content",l=f[7].playerHeight)},m(e,i){w(e,t,i)},p(e,i){i&128&&l!==(l=e[7].playerHeight)&&u(t,"content",l)},d(e){e&&d(t)}}}function ke(f){let t,l=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...f[8]})+"<"}/script>`,e;return{c(){t=new ge(!1),e=M(),this.h()},l(i){t=He(i,!1),e=M(),this.h()},h(){t.a=e},m(i,_){t.m(l,i,_),w(i,e,_)},p(i,_){_&256&&l!==(l=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...i[8]})+"<"}/script>`)&&t.p(l)},d(i){i&&d(e),i&&t.d()}}}function Ce(f){let t,l,e,i,_,m,c,b,k,a,h,s=f[0]&&J(f),n=f[3]&&O(f),o=f[5]&&F(f),y=f[4]&&K(f),T=f[6]&&z(f),v=f[7]&&me(f),E=f[8]&&ke(f);const g=f[10].default,r=Ne(g,f,f[9],null);return{c(){s&&s.c(),t=N("meta"),e=N("meta"),n&&n.c(),_=M(),o&&o.c(),m=M(),y&&y.c(),c=M(),T&&T.c(),b=M(),v&&v.c(),k=M(),E&&E.c(),a=M(),r&&r.c(),this.h()},l(p){const H=Ae('[data-svelte="svelte-1q8xl96"]',document.head);s&&s.l(H),t=A(H,"META",{name:!0,content:!0}),e=A(H,"META",{name:!0,content:!0}),n&&n.l(H),_=M(),o&&o.l(H),m=M(),y&&y.l(H),c=M(),T&&T.l(H),b=M(),v&&v.l(H),k=M(),E&&E.l(H),a=M(),r&&r.l(H),H.forEach(d),this.h()},h(){u(t,"name","robots"),u(t,"content",l=`${f[1]?"noindex":"index"},${f[2]?"nofollow":"follow"}`),u(e,"name","googlebot"),u(e,"content",i=`${f[1]?"noindex":"index"},${f[2]?"nofollow":"follow"}`)},m(p,H){s&&s.m(document.head,null),j(document.head,t),j(document.head,e),n&&n.m(document.head,null),j(document.head,_),o&&o.m(document.head,null),j(document.head,m),y&&y.m(document.head,null),j(document.head,c),T&&T.m(document.head,null),j(document.head,b),v&&v.m(document.head,null),j(document.head,k),E&&E.m(document.head,null),j(document.head,a),r&&r.m(document.head,null),h=!0},p(p,[H]){p[0]?s||(s=J(p),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),(!h||H&6&&l!==(l=`${p[1]?"noindex":"index"},${p[2]?"nofollow":"follow"}`))&&u(t,"content",l),(!h||H&6&&i!==(i=`${p[1]?"noindex":"index"},${p[2]?"nofollow":"follow"}`))&&u(e,"content",i),p[3]?n?n.p(p,H):(n=O(p),n.c(),n.m(_.parentNode,_)):n&&(n.d(1),n=null),p[5]?o?o.p(p,H):(o=F(p),o.c(),o.m(m.parentNode,m)):o&&(o.d(1),o=null),p[4]?y?y.p(p,H):(y=K(p),y.c(),y.m(c.parentNode,c)):y&&(y.d(1),y=null),p[6]?T?T.p(p,H):(T=z(p),T.c(),T.m(b.parentNode,b)):T&&(T.d(1),T=null),p[7]?v?v.p(p,H):(v=me(p),v.c(),v.m(k.parentNode,k)):v&&(v.d(1),v=null),p[8]?E?E.p(p,H):(E=ke(p),E.c(),E.m(a.parentNode,a)):E&&(E.d(1),E=null),r&&r.p&&(!h||H&512)&&Me(r,g,p,p[9],h?Le(g,p[9],H,null):Se(p[9]),null)},i(p){h||(ve(r,p),h=!0)},o(p){Ee(r,p),h=!1},d(p){s&&s.d(p),d(t),d(e),n&&n.d(p),d(_),o&&o.d(p),d(m),y&&y.d(p),d(c),T&&T.d(p),d(b),v&&v.d(p),d(k),E&&E.d(p),d(a),r&&r.d(p)}}}function De(f,t,l){let{$$slots:e={},$$scope:i}=t,{title:_=void 0}=t,{noindex:m=!1}=t,{nofollow:c=!1}=t,{description:b=void 0}=t,{keywords:k=void 0}=t,{canonical:a=void 0}=t,{openGraph:h=void 0}=t,{twitter:s=void 0}=t,{jsonLd:n=void 0}=t;return f.$$set=o=>{"title"in o&&l(0,_=o.title),"noindex"in o&&l(1,m=o.noindex),"nofollow"in o&&l(2,c=o.nofollow),"description"in o&&l(3,b=o.description),"keywords"in o&&l(4,k=o.keywords),"canonical"in o&&l(5,a=o.canonical),"openGraph"in o&&l(6,h=o.openGraph),"twitter"in o&&l(7,s=o.twitter),"jsonLd"in o&&l(8,n=o.jsonLd),"$$scope"in o&&l(9,i=o.$$scope)},[_,m,c,b,k,a,h,s,n,i,e]}class Ge extends we{constructor(t){super(),ye(this,t,De,Ce,Te,{title:0,noindex:1,nofollow:2,description:3,keywords:4,canonical:5,openGraph:6,twitter:7,jsonLd:8})}}function Ie(f){let t,l,e,i,_,m,c,b,k,a,h,s,n,o;return t=new Ge({props:{title:"Startup MVP Development | The Software Engineer LTD - Web & Mobile Experts",description:"Turn your startup idea into a market-ready MVP with The Software Engineer LTD. Specializing in web and mobile development, we are your go-to experts for converting innovative concepts into viable products. Our skilled developers craft custom, scalable solutions designed to validate your business model swiftly and efficiently. From responsive website design to cutting-edge mobile apps, we provide the technical prowess and industry insight needed to launch your vision successfully. Partner with us to build your pathway to success in the startup ecosystem."}}),{c(){je(t.$$.fragment),l=S(),e=N("main"),i=N("h1"),_=q("The Software Engineer Ltd."),m=S(),c=N("p"),b=q("Hired dev for your next idea."),k=S(),a=N("ul"),h=N("li"),s=N("a"),n=q("Vocal"),this.h()},l(y){Pe(t.$$.fragment,y),l=L(y),e=A(y,"MAIN",{class:!0});var T=P(e);i=A(T,"H1",{class:!0});var v=P(i);_=C(v,"The Software Engineer Ltd."),v.forEach(d),m=L(T),c=A(T,"P",{});var E=P(c);b=C(E,"Hired dev for your next idea."),E.forEach(d),k=L(T),a=A(T,"UL",{});var g=P(a);h=A(g,"LI",{});var r=P(h);s=A(r,"A",{class:!0,href:!0});var p=P(s);n=C(p,"Vocal"),p.forEach(d),r.forEach(d),g.forEach(d),T.forEach(d),this.h()},h(){u(i,"class","text-3xl font-bold mb-6"),u(s,"class","text-orange-600"),u(s,"href","https://getvocal.chat"),u(e,"class","max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10")},m(y,T){We(t,y,T),w(y,l,T),w(y,e,T),j(e,i),j(i,_),j(e,m),j(e,c),j(c,b),j(e,k),j(e,a),j(a,h),j(h,s),j(s,n),o=!0},p:W,i(y){o||(ve(t.$$.fragment,y),o=!0)},o(y){Ee(t.$$.fragment,y),o=!1},d(y){qe(t,y),y&&d(l),y&&d(e)}}}class Je extends we{constructor(t){super(),ye(this,t,null,Ie,Te,{})}}export{Je as default};