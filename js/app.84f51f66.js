(()=>{"use strict";var t={7793:(t,e,n)=>{n(3792),n(3362),n(9085),n(9391),n(9432);var o=n(5471),a=n(5651),i=n.n(a),s=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e(n.ContactList)],1)},r=[],l=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"w-full h-full relative overflow-hidden"},[e("div",{staticClass:"fixed z-50 w-screen"},[e(n.HeaderContainer,{on:{"toggle-button-click":n.onToggleButtonClick}})],1),e("div",{staticClass:"flex relative contact-list-body"},[e("div",{class:["sidebar-container-wrapper",{"sidebar-container-wrapper__minimize":!n.shouldMinimizeSidebar}]},[e(n.SidebarContainer,{attrs:{"should-minimize-sidebar":n.shouldMinimizeSidebar,"active-page-title":n.activePageTitle},on:{"toggle-sidebar":n.onToggleButtonClick}})],1),e("div",{class:["overlay-box",{"overlay-box__show":n.shouldMinimizeSidebar}],on:{click:n.onOverlayBoxClick}}),e("div",{staticClass:"w-full contact-list-container"},[e(n.ContactListContainer,{attrs:{"table-data":n.UserDetailsData.userDetails.users,"table-header":n.tableHeaders,"table-expand-data":n.tableExpandColumns},on:{"row-click":n.handleTableRowClick,"status-option-click":n.handleStatusOptionClick}})],1),e("div",{class:["user-details-container bg-white shadow-md",{"user-details-container__show":n.userData}]},[n.shouldShowUserDetails?e(n.UserDetails,{attrs:{"user-data":n.userData},on:{"close-button-click":n.onUserDetailsCloseClick}}):t._e()],1)])])},c=[];n(4423),n(1699),n(6031);const u=JSON.parse('{"userDetails":{"userKeys":["Name","Company","Status","Assigned to","Phone","Email"],"users":[{"name":"Amelia Harper","position":"Network Admin","company":"ACME","status":"Salaried","assignedTo":"John Heart","phone":"+1(213)555-4276","email":"ameliah@dx-email.com","address":"527 W 7th St","imageUrl":"https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","userOpportunities":[{"text":"incoming Request for conference Room","price":"$2,115"},{"text":"POS Touch Screens","price":"$1,645"}],"userActivities":[{"activity":"Qualified","date":"05/19/2020","assignedUser":"Samantha Bright"},{"activity":"Disqualified","date":"05/19/2020","assignedUser":"Samantha Bright"},{"activity":"Call planned","date":"05/20/2020","assignedUser":"Samantha Bright"},{"activity":"Message Sent","date":"02/28/2020","assignedUser":"Samantha Bright"}]},{"name":"Antony Remmen","position":"Support Assistant","company":"Clicker","status":"Salaried","assignedTo":"Samantha Bright","phone":"+1(310)555-6625","email":"anthonyr@dx-email.com","address":"1542 S Beacon St","imageUrl":"https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","userOpportunities":[{"text":"incoming Request for conference Room","price":"$2,115"},{"text":"POS Touch Screens","price":"$1,645"}],"userActivities":[{"activity":"Qualified","date":"06/10/2020","assignedUser":"Samantha Bright"},{"activity":"Incoming call logged","date":"06/11/2020","assignedUser":"Samantha Bright"},{"activity":"Outbound call logged","date":"06/11/2020","assignedUser":"Samantha Bright"},{"activity":"Message Sent","date":"06/12/2020","assignedUser":"Samantha Bright"}]},{"name":"Arnie Schwartz","position":"Engineer","company":"Screen Shop","status":"Salaried","assignedTo":"John Heart","phone":"+1(714)555-8882","email":"arnolds@dx-email.com","address":"125 W Elm St","imageUrl":"https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","userOpportunities":[{"text":"incoming Request for conference Room","price":"$2,115"},{"text":"POS Touch Screens","price":"$1,645"}],"userActivities":[{"activity":"Qualified","date":"05/19/2020","assignedUser":"John Heart"},{"activity":"Disqualified","date":"05/19/2020","assignedUser":"John Heart"},{"activity":"Call planned","date":"05/20/2020","assignedUser":"John Heart"},{"activity":"Message Sent","date":"02/28/2020","assignedUser":"John Heart"}]},{"name":"Arthur Miller","position":"CTO","company":"Super Mart of the West","status":"Salaried","assignedTo":"Samantha Bright","phone":"+1(310)555-8583","email":"arthurm@dx-email.com","address":"3800 Horner St.","imageUrl":"https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","userOpportunities":[{"text":"incoming Request for conference Room","price":"$2,115"},{"text":"POS Touch Screens","price":"$1,645"}],"userActivities":[{"activity":"Qualified","date":"05/05/2020","assignedUser":"Samantha Bright"},{"activity":"Disqualified","date":"05/06/2020","assignedUser":"Samantha Bright"},{"activity":"Call planned","date":"05/06/2020","assignedUser":"Samantha Bright"},{"activity":"Message Sent","date":"05/07/2020","assignedUser":"Samantha Bright"}]},{"name":"Barb Banks","position":"Support Manager","company":"StereoShack","status":"Salaried","assignedTo":"Samantha Bright","phone":"+1(310)555-3355","email":"barbarab@dx-email.com","address":"17985 Pacific Coast Hwy","imageUrl":"https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","userOpportunities":[{"text":"incoming Request for conference Room","price":"$2,115"},{"text":"POS Touch Screens","price":"$1,645"}],"userActivities":[{"activity":"Qualified","date":"05/19/2020","assignedUser":"Samantha Bright"},{"activity":"Disqualified","date":"05/19/2020","assignedUser":"Samantha Bright"},{"activity":"Call planned","date":"05/20/2020","assignedUser":"Samantha Bright"},{"activity":"Message Sent","date":"05/21/2020","assignedUser":"Samantha Bright"}]}]}}'),d=JSON.parse('{"e3":{"title":"UI Template Gallery","searchBoxLabel":"Search","icons":{"hamburgerIcon":"mdi-menu","themeSwitchingIcon":"mdi-weather-night","notificationIcon":"mdi-bell-outline"},"userProfile":{"options":[{"text":"John Heart","disableHover":true},{"text":"Logout","prependIcon":"mdi-run","path":"#"}]}},"pz":{"copyrightText":"Copyright © 2024","companyName":"Developer Express Inc.","sidebarContents":[{"title":"CRM","icon":"mdi-account","options":[{"text":"Contact List","path":"#"},{"text":"Contact Details","path":"#"}]},{"title":"Planning","icon":"mdi-calendar","options":[{"text":"Task List","path":"#"},{"text":"Task Details","path":"#"},{"text":"Scheduler","path":"#"}]},{"title":"Analytics","icon":"mdi-chart-box-outline","options":[{"text":"Dashboard","path":"#"},{"text":"Sales Report","path":"#"},{"text":"Geography","path":"#"}]},{"title":"Authentication","icon":"mdi-account-box","options":[{"text":"Sign In Form","path":"#"},{"text":"Sign Up Form","path":"#"},{"text":"Reset Password Form","path":"#"}]},{"title":"Common","icon":"mdi-package","options":[{"text":"User Profile","path":"#"}]}]},"SM":{"title":"Contacts","categoryOptions":{"title":"ALL","options":[{"text":"All","value":"all"},{"text":"Salaried","value":"salaried"},{"text":"Commission","value":"commission"},{"text":"Terminated","value":"terminated"}]},"addContactButton":{"title":"ADD CONTACT","icon":"mdi-plus"},"refreshDataButton":{"icon":"mdi-sync"},"exportOptions":{"icon":"mdi-file-move-outline","options":[{"text":"Export all data into Excel","prependIcon":"mdi-file-excel-outline"},{"text":"Export selected rows to Excel","prependIcon":"mdi-file-document-arrow-right-outline"},{"text":"Export all data to PDF","prependIcon":"mdi-file"},{"text":"Export selected rows to PDF","prependIcon":"mdi-file-document-arrow-right-outline"}]},"columnChooserButton":{"icon":"mdi-file-table-box-outline"},"searchBoxLabel":"Contact Search","userData":{"icons":{"close":"mdi-close","phone":"mdi-phone","email":"mdi-email","address":"mdi-home"},"actionsButton":{"title":"ACTIONS","options":[{"text":"Call"},{"text":"Send Fax"},{"text":"Send Email"},{"text":"Make a Meeting"}]},"editButtonTitle":{"title":"EDIT","icon":"mdi-pencil"},"detailsButtonTitle":"DETAILS","userOpportunitiesTitle":"Opportunities","userActivities":{"title":"Activities","activitiesMenu":{"icon":"mdi-dots-vertical","options":[{"text":"View Details"},{"text":"Delete"}]}}}}}');var p,m,f=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"header-section w-full py-2.5"},[e("div",{staticClass:"title-section"},[e("div",{staticClass:"w-12"},[e(n.CustomButton,{attrs:{"button-style":"shadow-none custom-button",icon:n.headerData.icons.hamburgerIcon},on:{click:n.handleToggleButtonClick}})],1),e("h1",{staticClass:"font-medium header-title"},[t._v(t._s(n.headerData.title))])]),e("div",{staticClass:"flex items-center justify-end w-full"},[e(n.SearchInput,{staticClass:"pl-1.5 search-input",attrs:{placeholder:n.headerData.searchBoxLabel,"prepend-icon":"mdi-magnify"}}),e("div",{staticClass:"min-w-7 ml-1.25"},[e(n.CustomButton,{attrs:{"button-style":"shadow-none custom-button",icon:n.headerData.icons.themeSwitchingIcon}})],1),e("div",{staticClass:"min-w-7 ml-1.25"},[e(n.CustomButton,{attrs:{"button-style":"shadow-none custom-button",icon:n.headerData.icons.notificationIcon}})],1),e("div",[e(n.OptionsDropdown,{staticClass:"pl-1.25 w-fit",attrs:{"content-position":n.DropdownContentPosition.Right,"dropdown-content":n.headerData.userProfile.options,"toggle-button-style":n.headerStyle.dropdownToggleButton,icon:n.headerStyle.profileIcon,"image-url":n.headerStyle.profileImage,"should-hide-toggle-arrow":""}})],1)],1)])},h=[];(function(t){t["Outlined"]="outlined",t["Normal"]="normal"})(p||(p={})),function(t){t["Left"]="left",t["Right"]="right"}(m||(m={}));const v=n.p+"img/userProfileImage.43f5a338.png";var g=n(9749),x=n(872),b=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e(g.A,{class:[t.buttonStyle,{normal:t.variant===n.ButtonVariants.Normal,outlined:t.variant===n.ButtonVariants.Outlined},{icon:n.hasIcon}],attrs:{elevation:"1",outlined:n.showAsOutlined},on:{click:n.handleButtonClick}},[n.props.icon?e(x.A,{staticClass:"button-icon"},[t._v(" "+t._s(n.props.icon)+" ")]):t._e(),n.props.text?e("span",{staticClass:"button-text"},[t._v(" "+t._s(n.props.text)+" ")]):t._e()],1)},w=[];const _=(0,o.defineComponent)({__name:"CustomButton",props:{buttonStyle:{default:""},icon:{default:""},text:{default:""},variant:{default:p.Normal}},emits:["click"],setup:function(t,e){var n=e.emit,a=t,i=(0,o.computed)((function(){return a.variant===p.Outlined})),s=(0,o.computed)((function(){return a.icon&&!a.text})),r=function(t){n("click",t)};return{__sfc:!0,emits:n,props:a,showAsOutlined:i,hasIcon:s,handleButtonClick:r,ButtonVariants:p}}}),y=_;var C=n(1656),D=(0,C.A)(y,b,w,!1,null,"69ce80ea",null);const S=D.exports;var k=n(8142),A=(n(5276),n(2762),function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e(k.A,{staticClass:"text-xs text-input",attrs:{filled:"","hide-details":"",clearable:"",id:"input-box",type:t.type,"clear-icon":"mdi-close","loader-height":"3",placeholder:t.placeholder.trim(),"prepend-inner-icon":n.props.prependIcon,"hide-spin-buttons":""},on:{keydown:[n.onKeyDown,function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.handleEnterKeyPress.apply(null,arguments)}],scroll:function(t){t.preventDefault()}},model:{value:n.inputValue,callback:function(t){n.inputValue="string"===typeof t?t.trim():t},expression:"inputValue"}})}),B=[];const T=(0,o.defineComponent)({__name:"SearchInput",props:{placeholder:{default:""},prependIcon:{default:""},type:{default:"text"},value:{default:""}},emits:["on-input-change"],setup:function(t,e){var n,a=e.emit,i=t,s=(0,o.ref)(i.value),r=(0,o.ref)(!1),l=["ArrowUp","ArrowDown","e","E"],c=1e3,u=3,d=function(t){l.includes(t.key)&&"number"===i.type&&t.preventDefault(),r.value=!1,clearTimeout(n),n=setTimeout((function(){(s.value.length>=u||!s.value)&&(r.value=!0)}),c)},p=function(){a("on-input-change",s.value)};return(0,o.watch)(r,(function(t){t&&a("on-input-change",s.value)})),{__sfc:!0,props:i,emit:a,inputValue:s,shouldInitiateSearch:r,restrictedValues:l,SEARCH_INITIATING_DELAY:c,inputMinLength:u,timeout:n,onKeyDown:d,handleEnterKeyPress:p}}}),I=T;var O=(0,C.A)(I,A,B,!1,null,"24c36574",null);const M=O.exports;var P=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{ref:"dropdownContainer",staticClass:"relative w-full"},[e("button",{class:["dropdown-button w-full",{"bg-zinc-200":n.shouldShowOptions&&!n.hasOnlyImage,"hover:bg-zinc-200":!n.hasOnlyImage},n.props.toggleButtonStyle],on:{click:function(t){return t.stopPropagation(),n.toggleOptions(!n.shouldShowOptions)}}},[e("div",{staticClass:"dropdown-button__content"},[e(x.A,{class:["!text-base/4",{"mr-1":!n.hasOnlyIcon}]},[t._v(" "+t._s(n.props.icon)+" ")]),n.props.imageUrl?e("img",{class:["dropdown-image",{"dropdown-image__active":n.shouldShowOptions,"mr-1":!n.hasOnlyImage}],attrs:{src:n.props.imageUrl,alt:"dropdown image"}}):t._e(),n.props.text?e("span",{staticClass:"dropdown-title"},[t._v(" "+t._s(n.dropdownTitle)+" ")]):t._e()],1),t.shouldHideToggleArrow?t._e():e(x.A,{staticClass:"!text-base/4 ml-1 w-min"},[t._v(" mdi-menu-down ")])],1),n.shouldShowOptions?e("div",{class:["absolute shadow-md bg-white z-50",{"left-0":t.contentPosition===n.DropdownContentPosition.Left,"right-0":t.contentPosition===n.DropdownContentPosition.Right}]},[e("ul",{staticClass:"w-max"},t._l(t.dropdownContent,(function(o){return e("li",{key:o.text,class:["dropdown-item",{"hover:bg-zinc-100 cursor-pointer":!o.disableHover,"bg-black-12 hover:bg-black-14":n.dropdownTitle===o.text}],on:{click:function(){return o.value&&n.onDropdownItemClick(o.value)}}},[o.prependIcon?e(x.A,{staticClass:"dropdown-item__icon"},[t._v(" "+t._s(o.prependIcon)+" ")]):t._e(),e("span",[t._v(t._s(o.text))]),o.appendIcon?e(x.A,{staticClass:"dropdown-item__icon"},[t._v(" "+t._s(o.appendIcon)+" ")]):t._e()],1)})),0)]):t._e()])},U=[];const H=(0,o.defineComponent)({__name:"OptionsDropdown",props:{dropdownContent:null,contentPosition:{default:m.Left},shouldHideToggleArrow:{type:Boolean,default:!1},icon:{default:""},imageUrl:{default:""},text:{default:""},toggleButtonStyle:{default:""}},emits:["dropdown-item-click"],setup:function(t,e){var n=e.emit,a=t,i=(0,o.ref)(a.text),s=(0,o.ref)(!1),r=(0,o.ref)(null),l=(0,o.computed)((function(){return a.icon&&!a.text&&!a.imageUrl})),c=(0,o.computed)((function(){return a.imageUrl&&!a.text&&!a.icon})),u=function(t){s.value=t},d=function(t){i.value=t,s.value=!1,n("dropdown-item-click",t)};return document.addEventListener("click",(function(t){var e;null!==(e=r.value)&&void 0!==e&&e.contains(null===t||void 0===t?void 0:t.target)||(s.value=!1)})),{__sfc:!0,props:a,emits:n,dropdownTitle:i,shouldShowOptions:s,dropdownContainer:r,hasOnlyIcon:l,hasOnlyImage:c,toggleOptions:u,onDropdownItemClick:d,DropdownContentPosition:m}}}),E=H;var L=(0,C.A)(E,P,U,!1,null,"d37f2d2c",null);const z=L.exports,R=(0,o.defineComponent)({__name:"HeaderContainer",emits:["toggle-button-click"],setup:function(t,e){var n=e.emit,a=(0,o.ref)({profileIcon:"",profileImage:"",dropdownToggleButton:""}),i=536,s=(0,o.computed)((function(){return d.e3})),r=function(){window.innerWidth<=i?(a.value.profileIcon="mdi-dots-vertical",a.value.dropdownToggleButton="px-1.25 text-black",a.value.profileImage=""):(a.value.profileImage=v,a.value.profileIcon="",a.value.dropdownToggleButton="")},l=function(t){n("toggle-button-click",t)};return(0,o.onMounted)((function(){r(),window.addEventListener("resize",(function(){return r()}))})),{__sfc:!0,emits:n,headerStyle:a,windowWidth:i,headerData:s,onWindowResize:r,handleToggleButtonClick:l,DropdownContentPosition:m,CustomButton:S,SearchInput:M,OptionsDropdown:z}}}),j=R;var W=(0,C.A)(j,f,h,!1,null,"1ba03b83",null);const V=W.exports;var G=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{class:["h-full sidebar-container",{"w-full":n.props.shouldMinimizeSidebar,"w-12":!n.props.shouldMinimizeSidebar}]},[e("div",{staticClass:"accordion-container w-full pt-4"},t._l(n.sidebarData.sidebarContents,(function(o){return e(n.AccordionComponent,{key:o.title,attrs:{text:o.title,"prepend-icon":o.icon,"toggle-button-style":"py-2.25 pr-4 font-bold text-black-87","container-style":"border-b border-b-zinc-200","hide-toggle-arrow":!n.props.shouldMinimizeSidebar,"should-show-accordion":n.selectedDropdownTitles.includes(o.title)},on:{"toggle-button-click":n.onToggleButtonClick},scopedSlots:t._u([{key:"content-slot",fn:function(){return[e("ul",t._l(o.options,(function(o){return e("li",{key:o.text,class:["py-2.5 pr-4 text-3xs/4 text-left whitespace-nowrap hover:bg-black-04 cursor-pointer",{"bg-black-12 hover:bg-black-12":n.props.activePageTitle===o.text}]},[e("span",{staticClass:"pl-12"},[t._v(t._s(o.text))])])})),0)]},proxy:!0}],null,!0)})})),1),e("div",{class:["pt-5 pb-4 absolute right-0 bottom-0 left-0 sidebar-label-container transition-opacity",{"opacity-0 delay-0 duration-100":!n.props.shouldMinimizeSidebar,"opacity-1 delay-300 duration-500":n.props.shouldMinimizeSidebar}]},[e("span",{staticClass:"sidebar-container__label"},[t._v(" "+t._s(n.sidebarData.copyrightText)+" ")]),e("span",{staticClass:"sidebar-container__label"},[t._v(" "+t._s(n.sidebarData.companyName)+" ")])])])},q=[],N=(n(4114),n(4554),function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{class:["accordion-menu",n.props.containerStyle]},[e("button",{class:["toggle-button",n.props.toggleButtonStyle],on:{click:n.toggleAccordionContent}},[e("div",{staticClass:"toggle-button__title flex justify-start items-center"},[n.props.prependIcon?e(x.A,{staticClass:"prepend-icon"},[t._v(" "+t._s(n.props.prependIcon)+" ")]):t._e(),e("span",[t._v(t._s(n.props.text))])],1),t.hideToggleArrow?t._e():e(x.A,{staticClass:"arrow-icon"},[t._v(" "+t._s(n.toggleArrow)+" ")])],1),e("div",{ref:"accordionContentElement",staticClass:"slot-container",style:n.accordionContentStyle},[t._t("content-slot")],2)])}),F=[];const $=(0,o.defineComponent)({__name:"AccordionComponent",props:{text:null,shouldShowAccordion:{type:Boolean},containerStyle:{default:""},hideToggleArrow:{type:Boolean,default:!1},prependIcon:{default:""},toggleButtonStyle:{default:""}},emits:["toggle-button-click"],setup:function(t,e){var n,a=e.emit,i=t,s=(0,o.ref)(null),r=(0,o.ref)(null===(n=s.value)||void 0===n?void 0:n.offsetHeight),l=!0,c=function(){a("toggle-button-click",i.text)},u=(0,o.computed)((function(){return i.prependIcon?i.shouldShowAccordion?"mdi-chevron-down":"mdi-chevron-right":i.shouldShowAccordion?"mdi-chevron-up":"mdi-chevron-down"})),d=(0,o.computed)((function(){return i.shouldShowAccordion||l?{height:r.value+"px"}:{height:0}}));return(0,o.onMounted)((function(){var t;r.value=null===(t=s.value)||void 0===t?void 0:t.offsetHeight,l=!1})),{__sfc:!0,props:i,emits:a,accordionContentElement:s,accordionContentHeight:r,shouldCalculateHeight:l,toggleAccordionContent:c,toggleArrow:u,accordionContentStyle:d}}}),K=$;var J=(0,C.A)(K,N,F,!1,null,"7e82706a",null);const Y=J.exports,Q=(0,o.defineComponent)({__name:"SidebarContainer",props:{activePageTitle:null,shouldMinimizeSidebar:{type:Boolean}},emits:["toggle-sidebar"],setup:function(t,e){var n=e.emit,a=t,i=(0,o.computed)((function(){return d.pz})),s=i.value.sidebarContents[0].title,r=(0,o.ref)([i.value.sidebarContents[0].title]),l=function(t){var e=0,o=t;a.shouldMinimizeSidebar||(n("toggle-sidebar"),e=100,t===s&&(o="")),setTimeout((function(){r.value.includes(o)?r.value.splice(r.value.indexOf(o),1):r.value.push(o)}),e)};return(0,o.watch)((function(){return a.shouldMinimizeSidebar}),(function(t){t?(r.value.splice(0,r.value.length),r.value.push(s)):r.value=[]})),{__sfc:!0,props:a,emits:n,sidebarData:i,initialActiveAccordionTitle:s,selectedDropdownTitles:r,onToggleButtonClick:l,AccordionComponent:Y}}}),X=Q;var Z=(0,C.A)(X,G,q,!1,null,"9158c65a",null);const tt=Z.exports;var et=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"w-full px-8"},[e("div",{staticClass:"flex justify-between p-6"},[e("div",{staticClass:"flex items-center"},[e("h1",{staticClass:"title"},[t._v(t._s(n.containerData.title))]),e("div",{staticClass:"category-options"},[e(n.OptionsDropdown,{attrs:{text:n.containerData.categoryOptions.title,"dropdown-content":n.containerData.categoryOptions.options,"toggle-button-style":"py-1.25 pr-2 pl-3 font-bold leading-3.50"},on:{"dropdown-item-click":n.onDropdownItemClick}})],1)]),e("div",{staticClass:"flex items-center justify-end pl-3.75"},[e("div",[e(n.CustomButton,{staticClass:"add-contact",attrs:{text:n.containerData.addContactButton.title,icon:n.containerData.addContactButton.icon}})],1),e("div",{staticClass:"pl-1.25 data-refresh-button"},[e(n.CustomButton,{attrs:{icon:n.containerData.refreshDataButton.icon,"button-style":"shadow-none custom-button"}})],1),e("span",{staticClass:"separator ml-1.25"}),e("div",{staticClass:"export-data pl-1.25"},[e(n.OptionsDropdown,{attrs:{icon:n.containerData.exportOptions.icon,"dropdown-content":n.containerData.exportOptions.options,"content-position":n.exportDataDropdownPosition,"toggle-button-style":"py-1.25 px-2"}})],1),e("span",{staticClass:"separator ml-1.25"}),e("div",{staticClass:"pl-1.25 column-chooser"},[e(n.CustomButton,{attrs:{icon:n.containerData.columnChooserButton.icon,"button-style":"shadow-none custom-button"}})],1),e("div",{staticClass:"contact-search"},[e(n.SearchInput,{attrs:{placeholder:n.containerData.searchBoxLabel,"prepend-icon":"mdi-magnify"},on:{"on-input-change":n.onUserSearch}})],1),e("div",{staticClass:"dropdown-button"},[e(n.CustomButton,{staticClass:"shadow-none custom-button",attrs:{icon:"mdi-dots-vertical"}})],1)])]),e(n.TableComponent,{attrs:{"table-header":n.props.tableHeader,"user-data":n.props.tableData,"expanded-menu-data":n.props.tableExpandData,"item-slot-data":n.tableSlotData,"search-keyword":n.searchText},on:{"row-click":n.handleTableRowClick}})],1)},nt=[],ot=n(5229),at=(n(6099),n(2953),function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e(ot.A,{staticClass:"table",attrs:{headers:n.props.tableHeader,items:n.tableData,"headers-length":30,"item-class":n.getRowClass,"show-expand":t.expandedMenuData.length>0,expanded:t.expandedMenuData,"items-per-page":n.ITEMS_PER_PAGE,search:n.props.searchKeyword,"fixed-header":"","hide-default-footer":"","show-select":"","must-sort":"","item-key":"name","mobile-breakpoint":"100",height:n.TABLE_HEIGHT,"checkbox-color":"#03a9f4","expand-icon":"mdi-dots-horizontal","header-props":{"sort-icon":"mdi-arrow-up-thin"}},on:{"click:row":n.handleRowClick},scopedSlots:t._u([{key:"expanded-item",fn:function(n){var o=n.headers,a=n.item;return[e("td",{staticClass:"expanded-data",attrs:{colspan:o.length}},[e("ul",t._l(t.expandedMenuData,(function(n){return e("li",{key:n,staticClass:"pb-2.5"},[e("span",{staticClass:"expand-item-title capitalize"},[t._v(t._s(n))]),e("br"),e("span",{staticClass:"expand-item-data"},[t._v(t._s(a[n]))])])})),0)])]}},n.props.itemSlotData?{key:"item.".concat(n.props.itemSlotData.slotKey),fn:function(o){var a=o.item;return[e("td",[e("span",{staticClass:"leading-4"},[t._v(t._s(a[n.props.itemSlotData.slotKey]))]),t._l(n.props.itemSlotData.values,(function(n){var o;return e("span",{key:n,staticClass:"block text-xs text-black-6"},[t._v(" "+t._s(null!==(o=a[n])&&void 0!==o?o:n)+" ")])}))],2)]}}:null],null,!0)})}),it=[];n(2010);const st=(0,o.defineComponent)({__name:"TableComponent",props:{tableHeader:null,userData:null,expandedMenuData:{default:function(){return[]}},itemSlotData:{default:void 0},searchKeyword:{default:""}},emits:["row-click"],setup:function(t,e){var n=e.emit,a=t,i=(0,o.ref)(""),s=-1,r="100%",l=(0,o.computed)((function(){return a.userData})),c=function(t){i.value=t.name,n("row-click",t)},u=function(t){if(t.name===i.value)return"active-row"};return{__sfc:!0,props:a,emits:n,selectedRow:i,ITEMS_PER_PAGE:s,TABLE_HEIGHT:r,tableData:l,handleRowClick:c,getRowClass:u}}}),rt=st;var lt=(0,C.A)(rt,at,it,!1,null,"b3a3388c",null);const ct=lt.exports,ut=(0,o.defineComponent)({__name:"ContactListContainer",props:{tableData:null,tableHeader:null,tableExpandData:{default:function(){return[]}}},emits:["row-click","status-option-click"],setup:function(t,e){var n=e.emit,a=t,i=(0,o.ref)(""),s={slotKey:"name",values:["position"]},r=(0,o.ref)(m.Left),l=(0,o.computed)((function(){return d.SM})),c=function(t){n("row-click",t)},u=function(t){var e=l.value.categoryOptions.options[0].value===t?"":t;n("status-option-click",e)},p=function(t){i.value=t};return(0,o.onMounted)((function(){return window.addEventListener("resize",(function(){r.value=window.innerWidth<=820?m.Right:m.Left}))})),{__sfc:!0,props:a,emits:n,searchText:i,tableSlotData:s,exportDataDropdownPosition:r,containerData:l,handleTableRowClick:c,onDropdownItemClick:u,onUserSearch:p,TableComponent:ct,SearchInput:M,OptionsDropdown:z,CustomButton:S}}}),dt=ut;var pt=(0,C.A)(dt,et,nt,!1,null,"02bdbd77",null);const mt=pt.exports;var ft=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"user-details relative"},[e("div",{staticClass:"flex justify-between items-center p-2 pl-4 fixed user-details__header"},[e("div",{staticClass:"flex items-center"},[e("h2",{staticClass:"mr-2 pr-1.25 text-3xs/4 font-bold"},[t._v(" "+t._s(n.props.userData.name)+" ")]),e(n.IconTextField,{class:"".concat(n.userStatusClass[n.props.userData.status.toLowerCase()]),attrs:{text:n.props.userData.status,"text-style":"text-inherit text-3xs","prepend-icon":"mdi-circle","prepend-icon-style":"p-0 mr-1.25 status-prepend-icon"}})],1),e("div",{staticClass:"flex items-center justify-end gap-x-1.5"},[e("div",{staticClass:"w-7"},[e(n.CustomButton,{attrs:{icon:"mdi-pin-outline","button-style":"shadow-none -rotate-90 header-button"}})],1),e("div",{staticClass:"w-7"},[e(n.CustomButton,{attrs:{icon:n.containerData.icons.close,"button-style":"shadow-none header-button"},on:{click:n.onCloseButtonClick}})],1)])]),e("div",{staticClass:"user-details__contents"},[e("div",{staticClass:"px-4 border-b border-b-zinc-200"},[e("div",{staticClass:"flex gap-x-5 items-start"},[e("img",{staticClass:"user-details__image object-cover object-top rounded-lg border border-solid border-grey-400",attrs:{src:n.props.userData.imageUrl}}),e("ul",{staticClass:"pl-3"},t._l(n.jobDetails,(function(t){return e("li",{key:t.key,staticClass:"pt-2.5 md:pt-5 first:pt-0 min-h-8"},[e(n.IconTextField,{staticClass:"min-h-8",attrs:{label:t.key,text:t.value,"is-vertically":"","text-style":"text-xs leading-3.25\n                ".concat(t.shouldAddColor?"text-light-blue-500":"")}})],1)})),0)]),e("ul",{staticClass:"pt-5 pb-3.75 md:py-3.75"},t._l(n.personalDetails,(function(t){return e("li",{key:t.value,staticClass:"pt-2.5 md:pt-5 first:pt-0 min-h-8"},[e(n.IconTextField,{staticClass:"min-h-8",attrs:{"prepend-icon":t.prependIcon,"prepend-icon-style":t.prependIconStyle,text:t.value,"text-style":"text-xs leading-3.25"}})],1)})),0)]),e("div",{staticClass:"flex items-center justify-between py-2.5 px-4 border-b border-zinc-200 mb-6"},[e("div",{staticClass:"flex items-center justify-center sm:pr-3 user-details__navigation-panel"},[e(n.OptionsDropdown,{attrs:{text:n.containerData.actionsButton.title,"dropdown-content":n.containerData.actionsButton.options,"toggle-button-style":"pt-1.5 pb-1.25 sm:pr-2 pl-2 min-h-7 font-semibold"}})],1),e("div",{staticClass:"flex items-center justify-end pl-3.75 user-details__navigation-panel"},[e(n.CustomButton,{attrs:{text:n.containerData.editButtonTitle.title,icon:n.containerData.editButtonTitle.icon,"button-style":"font-medium action-button min-h-7 shadow-md"}}),e(n.CustomButton,{attrs:{text:n.containerData.detailsButtonTitle,variant:n.ButtonVariants.Outlined,"button-style":"font-medium action-button min-h-7 border-gray-300  "}})],1)]),e("div",{staticClass:"user-details__selection-panel"},[e(n.AccordionComponent,{attrs:{text:n.containerData.userOpportunitiesTitle,"toggle-button-style":"py-1.5 pr-2.5 pl-2.75 h-10","container-style":"shadow-md","should-show-accordion":n.selectedDropdownTitles.includes(n.containerData.userOpportunitiesTitle)},on:{"toggle-button-click":n.onToggleButtonClick},scopedSlots:t._u([{key:"content-slot",fn:function(){return[e("ul",{staticClass:"p-2.75"},t._l(n.props.userData.userOpportunities,(function(n){return e("li",{key:n.text,staticClass:"text-left pb-2.5 text-3xs h-min"},[e("span",[t._v(t._s(n.text))]),t._v(" "),e("br"),e("span",[t._v(t._s(n.price))])])})),0)]},proxy:!0}])}),e(n.AccordionComponent,{attrs:{text:n.containerData.userActivities.title,"toggle-button-style":"py-1.5 pr-2.5 pl-2.75 h-10","container-style":"shadow-md","should-show-accordion":n.selectedDropdownTitles.includes(n.containerData.userActivities.title)},on:{"toggle-button-click":n.onToggleButtonClick},scopedSlots:t._u([{key:"content-slot",fn:function(){return[e("ul",{staticClass:"p-2.5"},t._l(n.props.userData.userActivities,(function(t){return e("li",{key:t.activity,staticClass:"my-2.5"},[e(n.UserActivityItem,{attrs:{"user-activity":t,"user-activity-menu":n.containerData.userActivities.activitiesMenu}})],1)})),0)]},proxy:!0}])})],1)])])},ht=[],vt=(n(2062),function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"user-activity mr-px py-2 pr-0.5 pl-4 border-l-2 font-normal w-full"},[e("span",{staticClass:"user-activity__title text-left w-full"},[t._v(" "+t._s(n.props.userActivity.activity)+" ")]),e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"user-activity__details px-2.5"},[e("span",{staticClass:"text-xs"},[t._v(" "+t._s(n.props.userActivity.date)+" ")]),e("span",{staticClass:"text-xs whitespace-nowrap"},[t._v(" "+t._s(n.props.userActivity.assignedUser)+" ")])]),e(n.OptionsDropdown,{attrs:{"content-position":n.DropdownContentPosition.Right,"dropdown-content":t.userActivityMenu.options,"should-hide-toggle-arrow":"",icon:t.userActivityMenu.icon,"toggle-button-style":"py-1.5 px-2 rounded-sm"}})],1)])}),gt=[];const xt=(0,o.defineComponent)({__name:"UserActivityItem",props:{userActivity:null,userActivityMenu:null},setup:function(t){var e=t;return{__sfc:!0,props:e,DropdownContentPosition:m,OptionsDropdown:z}}}),bt=xt;var wt=(0,C.A)(bt,vt,gt,!1,null,"221d6e00",null);const _t=wt.exports;var yt=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{class:["flex",t.isVertically?"flex-col items-start":"items-center"]},[n.props.prependIcon?e(x.A,{class:["prepend-icon p-1.5",t.prependIconStyle]},[t._v(" "+t._s(n.props.prependIcon)+" ")]):t._e(),e("div",{class:["font-normal text-container",t.isVertically?"flex-col items-start":"items-center"]},[n.props.label?e("span",{staticClass:"text-2xs pr-1"},[t._v(" "+t._s(n.props.label)+" ")]):t._e(),n.props.text?e("span",{class:n.props.textStyle},[t._v(" "+t._s(n.props.text)+" ")]):t._e()])],1)},Ct=[];const Dt=(0,o.defineComponent)({__name:"IconTextField",props:{text:null,isVertically:{type:Boolean,default:!1},label:{default:""},prependIcon:{default:""},prependIconStyle:{default:""},textStyle:{default:""}},setup:function(t){var e=t;return{__sfc:!0,props:e}}}),St=Dt;var kt=(0,C.A)(St,yt,Ct,!1,null,"6403ff24",null);const At=kt.exports,Bt=(0,o.defineComponent)({__name:"UserDetails",props:{userData:null},emits:["close-button-click"],setup:function(t,e){var n=e.emit,a=t,i=(0,o.ref)([]),s=(0,o.computed)((function(){return d.SM.userData})),r={salaried:"salaried-color",terminated:"terminated-color",commission:"commission-color"},l={company:"Company",position:"Position",assignedTo:"Assigned to"},c=(0,o.computed)((function(){var t=["company","position","assignedTo"],e=["position"];return t.map((function(t){return{key:l[t],value:a.userData[t],shouldAddColor:!e.includes(t)}}))})),u=(0,o.computed)((function(){var t=["phone","email","address"];return t.map((function(t){return{prependIcon:s.value.icons[t],prependIconStyle:"pr-4.50 personal-details-prepend-icon",value:a.userData[t]}}))})),m=function(t){i.value.includes(t)?i.value.splice(i.value.indexOf(t),1):i.value.push(t)},f=function(t){n("close-button-click",t)};return{__sfc:!0,props:a,emits:n,selectedDropdownTitles:i,containerData:s,userStatusClass:r,jobDataLables:l,jobDetails:c,personalDetails:u,onToggleButtonClick:m,onCloseButtonClick:f,ButtonVariants:p,UserActivityItem:_t,OptionsDropdown:z,IconTextField:At,CustomButton:S,AccordionComponent:Y}}}),Tt=Bt;var It=(0,C.A)(Tt,ft,ht,!1,null,null,null);const Ot=It.exports,Mt=(0,o.defineComponent)({__name:"ContactList",setup:function(t){var e=(0,o.ref)(),n=(0,o.ref)(!0),a=(0,o.ref)(!1),i=(0,o.ref)([]),s=(0,o.ref)(""),r=d.pz.sidebarContents[0].options[0].text,l=[{text:"Name",sortable:!0,value:"name",align:"start"},{text:"Company",sortable:!0,value:"company",align:"start max-[447px]:hidden"},{text:"Status",sortable:!0,value:"status",align:"start max-[726px]:hidden",filter:function(t){return!s.value||t.toLocaleLowerCase().includes(s.value.toLocaleLowerCase())}},{text:"Assigned to",sortable:!0,value:"assignedTo",align:"start max-[616px]:hidden"},{text:"Phone",sortable:!0,value:"phone",align:"start max-[854px]:hidden"},{text:"Email",sortable:!0,value:"email",align:"start max-[1372px]:hidden"},{value:"data-table-expand"}],c=function(t){e.value=t},p=function(t){s.value=t},m=function(){e.value=void 0},f=function(){n.value=!n.value},h=function(){n.value=!1},v=function(){switch(!0){case window.innerWidth<448:return["company","assignedTo","status","phone","email"];case window.innerWidth>=448&&window.innerWidth<617:return["assignedTo","status","phone","email"];case window.innerWidth>=617&&window.innerWidth<727:return["status","phone","email"];case window.innerWidth>=727&&window.innerWidth<855:return["phone","email"];case window.innerWidth>=855&&window.innerWidth<1371:return["email"];default:return[]}};return(0,o.watch)(e,(function(t){t?a.value=!0:setTimeout((function(){a.value=!1}),400)})),window.addEventListener("resize",(function(){i.value=v(),window.innerWidth<=1199&&(n.value=!1)})),(0,o.onMounted)((function(){return i.value=v()})),{__sfc:!0,userData:e,shouldMinimizeSidebar:n,shouldShowUserDetails:a,tableExpandColumns:i,selectedUserStatus:s,activePageTitle:r,tableHeaders:l,handleTableRowClick:c,handleStatusOptionClick:p,onUserDetailsCloseClick:m,onToggleButtonClick:f,onOverlayBoxClick:h,updateExpandedMenuData:v,UserDetailsData:u,HeaderContainer:V,SidebarContainer:tt,ContactListContainer:mt,UserDetails:Ot}}}),Pt=Mt;var Ut=(0,C.A)(Pt,l,c,!1,null,"695a4bd6",null);const Ht=Ut.exports,Et=(0,o.defineComponent)({__name:"App",setup:function(t){return{__sfc:!0,ContactList:Ht}}}),Lt=Et;var zt=(0,C.A)(Lt,s,r,!1,null,null,null);const Rt=zt.exports;o["default"].use(i());var jt=new(i());o["default"].config.productionTip=!1,new o["default"]({vuetify:jt,render:function(t){return t(Rt)}}).$mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,(()=>{var t=[];n.O=(e,o,a,i)=>{if(!o){var s=1/0;for(u=0;u<t.length;u++){for(var[o,a,i]=t[u],r=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((t=>n.O[t](o[l])))?o.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}})(),(()=>{n.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return n.d(e,{a:e}),e}})(),(()=>{n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{n.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t)})(),(()=>{n.p="/Customer-Management/"})(),(()=>{var t={524:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var a,i,[s,r,l]=o,c=0;if(s.some((e=>0!==t[e]))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var u=l(n)}for(e&&e(o);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkcustomer_management"]=self["webpackChunkcustomer_management"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var o=n.O(void 0,[504],(()=>n(7793)));o=n.O(o)})();
//# sourceMappingURL=app.84f51f66.js.map