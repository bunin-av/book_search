(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{15:function(A,e,a){A.exports={button:"SearchButton_button__S2tYq"}},17:function(A,e,a){A.exports={wrapper:"Preloader_wrapper__2Ov2f",lds_roller:"Preloader_lds_roller__2BAtS","lds-roller":"Preloader_lds-roller__3GHGF"}},18:function(A,e,a){A.exports={notFound__wrapper:"NotFound_notFound__wrapper__22IxM",kitten:"NotFound_kitten__1mjf8"}},2:function(A,e,a){A.exports={searchResult__wrapper:"SearchResult_searchResult__wrapper__2cZii",active:"SearchResult_active__1bPaO",isFetching:"SearchResult_isFetching__1oMaT",book__title_modal:"SearchResult_book__title_modal__1JzDn",book__author_modal:"SearchResult_book__author_modal__1Svme",book__description_modal:"SearchResult_book__description_modal__1DO9f",book__title:"SearchResult_book__title__3ItHY",book__author:"SearchResult_book__author__3wQmG",book__description:"SearchResult_book__description__1o1jM",book__author_wrapper:"SearchResult_book__author_wrapper__ZdGTj",snippet__wrapper:"SearchResult_snippet__wrapper__1eamu",book__cover:"SearchResult_book__cover__1Rt13",book__cover_img:"SearchResult_book__cover_img__3EvI7",book__cover_modal:"SearchResult_book__cover_modal__2YaK9"}},30:function(A,e,a){},32:function(A,e,a){},5:function(A,e,a){A.exports={wrapper:"Pagination_wrapper__2jcd1",active:"Pagination_active__2L7j0",selectedPage:"Pagination_selectedPage__2jVSz",pages:"Pagination_pages__BkQtj",totalPages:"Pagination_totalPages__26IbE",disabled:"Pagination_disabled__3fQzV"}},59:function(A,e,a){"use strict";a.r(e);a(30);var t=a(6),o=a(1),n=a.n(o),c=(a(32),a(9)),r=a.n(c),i=a(15),s=a.n(i),l=a(0);function u(A){return Object(l.jsx)("div",{className:s.a.button__wrapper,children:Object(l.jsx)("button",{onClick:function(){return A.goSearch(A.searchValue)},className:s.a.button,children:"Search"})})}var d=a.p+"static/media/search.70a801c1.svg";function j(A){var e=Object(o.useState)(),a=Object(t.a)(e,2),n=a[0],c=a[1];return Object(l.jsxs)("div",{className:r.a.wrapper,children:[Object(l.jsxs)("div",{className:r.a.search,children:[Object(l.jsx)("input",{type:"text",value:A.searchValue,onChange:function(e){n&&clearTimeout(n),A.addSearchValue(e.currentTarget.value);var a=setTimeout(A.goSearch,1e3,e.currentTarget.value);c(a)},onKeyPress:function(e){"Enter"===e.key&&(n&&clearTimeout(n),A.goSearch(A.searchValue))},className:r.a.search_field,placeholder:"Search a book",autoFocus:!0}),Object(l.jsx)("img",{src:d,alt:"",className:r.a.search_icon})]}),Object(l.jsx)(u,{searchValue:A.searchValue,goSearch:function(){n&&clearTimeout(n),A.goSearch(A.searchValue)}})]})}var h=a(12),p=a(29),b=a(4),m=a(27),g=a.n(m),v=function(A,e){return g.a.get("https://openlibrary.org/search.json?q=".concat(A,"&page=").concat(e,"&limit=5"))},O="SET_BOOKS",w="TOGGLE_IS_FETCHING",P="CHANGE_PAGE",f="SET_COUNT",M="SET_NOT_FOUND",S="ADD_SEARCH_VALUE",k={booksData:[],isFetching:!1,currentPage:1,numFound:0,notFound:!1,searchValue:""},x=function(A){return{type:w,isFetching:A}},N=function(A){return{type:P,page:A}},K=function(A){return{type:M,value:A}},V=a(5),U=a.n(V);function G(A){var e=Math.ceil(A.numFound/5),a=[];return function(A,e,a){if(e>10)if(a>5)for(var t=a-4;t<=a+5&&(A.push(t),t!==e);t++);else for(var o=1;o<=10&&(A.push(o),o!==e);o++);else for(var n=1;n<=e;n++)A.push(n)}(a,e,A.currentPage),Object(l.jsxs)("div",{className:"".concat(U.a.wrapper," ").concat(a[0]?U.a.active:""),children:[1!==a[0]&&Object(l.jsx)("span",{className:"".concat(U.a.pages," ").concat(a[0]?"":U.a.disabled),onClick:function(){return A.onPageChange(1)},children:1}),a[0]>2&&Object(l.jsx)("span",{children:"..."}),a.map((function(e,a){return A.currentPage===e?Object(l.jsx)("span",{className:"".concat(U.a.selectedPage," ").concat(U.a.pages),children:e},a):Object(l.jsx)("span",{onClick:function(){return A.onPageChange(e)},className:U.a.pages,children:e},a)})),e>11&&Object(l.jsx)("span",{children:"..."}),e>10&&Object(l.jsx)("span",{className:"".concat(U.a.totalPages," ").concat(U.a.pages),children:e})]})}var F=a(17),T=a.n(F),R=function(){return Object(l.jsx)("div",{className:T.a.wrapper,children:Object(l.jsxs)("div",{className:T.a.lds_roller,children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})},C=a(2),_=a.n(C),B=a(7),D=a.n(B),z=function(A){return Object(l.jsx)("div",{className:A.active?"".concat(D.a.modal," ").concat(D.a.active):D.a.modal,onClick:function(){return A.setActive(!1)},children:Object(l.jsx)("div",{className:A.active?"".concat(D.a.modal__content," ").concat(D.a.active):"",onClick:function(A){return A.stopPropagation()},children:A.children})})};function E(A){var e="".concat(_.a.searchResult__wrapper," ").concat(A.isFetching?_.a.isFetching:""," ").concat(A.data.length?_.a.active:""),a=Object(o.useState)(),n=Object(t.a)(a,2),c=n[0],r=n[1],i=A.data.map((function(e,a){return Object(l.jsxs)("div",{className:_.a.snippet__wrapper,onClick:function(){A.setModalActive(!0),r(e.isbn[0])},children:[Object(l.jsx)("div",{className:_.a.book__cover,children:Object(l.jsx)("img",{src:e.coverM,className:_.a.book__cover_img,alt:"".concat(e.title," cover")})}),Object(l.jsxs)("div",{className:_.a.book__description,children:[Object(l.jsx)("span",{className:_.a.book__title,children:e.title}),Object(l.jsx)("span",{className:_.a.book__author,children:e.author_name})]})]},a)})),s=A.data.find((function(A){return A.isbn[0]===c})),u=A.modalActive&&s&&Object(l.jsxs)(z,{active:A.modalActive,setActive:A.setModalActive,children:[Object(l.jsx)("div",{className:_.a.book__cover_modal,children:Object(l.jsx)("img",{src:s.coverM,alt:"".concat(s.title," cover"),className:_.a.book__cover_img})}),Object(l.jsxs)("div",{className:_.a.book__description_modal,children:[Object(l.jsx)("div",{className:_.a.book__title_modal,children:s.title}),Object(l.jsxs)("div",{className:_.a.book__author_wrapper_modal,children:["by ",Object(l.jsx)("span",{className:_.a.book__author_modal,children:s.author_name})]}),Object(l.jsxs)("div",{children:["Published in ",Object(l.jsx)("b",{children:s.first_publish_year})," by ",Object(l.jsx)("b",{children:s.publisher[0]})]}),Object(l.jsxs)("div",{children:["ISBN: ",s.isbn[0]]})]})]});return Object(l.jsxs)("div",{className:e,children:[i,u]})}var Z=a.p+"static/media/wallpaper.428a0322.jpg",y=a(18),q=a.n(y);function I(A){return A.notFound?Object(l.jsx)("div",{className:q.a.notFound__wrapper,children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Nothing found",className:q.a.kitten})}):null}var Y=Object(h.b)((function(A){return{searchValue:A.reducer.searchValue,books:A.reducer.booksData,currentPage:A.reducer.currentPage,numFound:A.reducer.numFound,isFetching:A.reducer.isFetching,notFound:A.reducer.notFound}}),{addSearchValue:function(A){return{type:S,value:A}},getBooks:function(A,e,a){return function(t){t(x(!0)),v(A,e).then((function(A){var o,n;t(x(!1)),A.data.docs.length?t(K(!1)):t(K(!0)),A.data.docs.forEach((function(A){A.author_name=A.author_name?[A.author_name.join(", ")]:[""],A.cover_edition_key?(A.coverS="https://covers.openlibrary.org/b/olid/".concat(A.cover_edition_key,"-S.jpg"),A.coverM="https://covers.openlibrary.org/b/olid/".concat(A.cover_edition_key,"-M.jpg")):(A.coverS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHjSURBVHic7Zu9TsMwFEYPP2KDjUrwRFRsiBmJhUcAZspj8E4gMbDA0nRjQZQBFmAIEsJ1HSf2zXXJPZKHyon9+ZN949zUEMcImAC3wBvwtUKlAsaR4/RyDLwWMJCUMk0Z/GcBA8hRvKwFBj8CHoHtBpNWhdBYvUz46+AHcA7s/9RHOaxIsr47p4GL3B0Ik6xv7jSwl7sDYZJjgHuTe21TvTZR+tZ7EFI0kgYcAjPkH2/JG51lNK2hpvrKc41U8W101GNA34GxU4wafAzY7LGv3E+JLDNs8DPADNAWoI0ZoC1AGzNAW4A2ZoC2AG363AmWmDSxGSBpwEywbZdKotHUfMCYfnICU+Cggz7AcoIWA8wAbQHamAHaArQxA7QFaGMGaAvQxgzQFqCNGSDcvvQncrFP43g6a1sP/b0Od9EP2BIIkmMGSCdFliVDYvVZQmTwS8AM0BagjRmgLUCbNgZcA/f8/ofYRXrD07ZE0eYxuOrYY9DH4A0I4a4p98RI6XSKCaEG3BMjpZPdAPfESOkkvw7Pnd+lvexkIWTAk/P7RFJIiVyxGAQv+WdBMDStd6kPTu7k1aVG643QM3BKfXR20BwBL+jv7VNTZ142Igx4AG6Ad+pzxNvAVsR9pVABZ9TLeYFvyzwZcga5S7UAAAAASUVORK5CYII=",A.coverM="data:image/png;base64,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"),A.isbn||(A.isbn=[" "])})),t((o=A.data.docs,{type:O,data:o})),t(a?N(e):(n=A.data.numFound,{type:f,count:n}))}))}},changePage:N})((function(A){var e=Object(o.useState)(!1),a=Object(t.a)(e,2),n=a[0],c=a[1],r=function(e){A.getBooks(A.searchValue.trim().split(" ").join("+"),e,!0)};return document.getElementsByTagName("body")[0].style.overflow=n?"hidden":"visible",Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"wallpaper__wrapper"}),Object(l.jsx)("img",{src:Z,alt:"Wallpaper",className:"wallpaper"}),Object(l.jsxs)("div",{className:"logo ".concat(A.books.length?"logo_searched":""),children:[Object(l.jsx)("span",{children:"Bookle"}),Object(l.jsx)("span",{className:"author",children:"by Alex Bunin"})]}),Object(l.jsxs)("div",{className:"content__wrapper",children:[Object(l.jsx)(I,{notFound:A.notFound}),Object(l.jsx)(j,{searchValue:A.searchValue,goSearch:function(e){e.trim()&&A.getBooks(e.trim().split(" ").join("+"),1,!1),A.changePage(1)},addSearchValue:A.addSearchValue,onPageChange:r,currentPage:A.currentPage}),Object(l.jsx)(E,{data:A.books,isFetching:A.isFetching,setModalActive:c,modalActive:n}),A.isFetching&&Object(l.jsx)(R,{}),Object(l.jsx)(G,{numFound:A.numFound,onPageChange:r,currentPage:A.currentPage})]})]})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(10),Q=a.n(H),W=a(61),J=a(28),X=Object(W.b)({reducer:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(b.a)(Object(b.a)({},A),{},{booksData:Object(p.a)(e.data)});case w:return Object(b.a)(Object(b.a)({},A),{},{isFetching:e.isFetching});case P:return Object(b.a)(Object(b.a)({},A),{},{currentPage:e.page});case f:return Object(b.a)(Object(b.a)({},A),{},{numFound:e.count});case M:return Object(b.a)(Object(b.a)({},A),{},{notFound:e.value});case S:return Object(b.a)(Object(b.a)({},A),{},{searchValue:e.value});default:return A}}}),L=Object(W.c)(X,Object(W.a)(J.a));Q.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h.a,{store:L,children:Object(l.jsx)(Y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},7:function(A,e,a){A.exports={modal:"Modal_modal__17ugl",active:"Modal_active__5gfRY",modal__content:"Modal_modal__content__3fIEK"}},9:function(A,e,a){A.exports={wrapper:"SearchInput_wrapper__2faSp",search:"SearchInput_search__2VAdC",search_field:"SearchInput_search_field__2RvC2",search_icon:"SearchInput_search_icon__33kVu",input:"SearchInput_input__XmlMQ"}}},[[59,1,2]]]);
//# sourceMappingURL=main.67cf15fe.chunk.js.map