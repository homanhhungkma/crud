(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n(1),r=n.n(a),c=n(9),o=n.n(c),i=(n(15),n(2)),l=n(3),u=n(5),d=n(4),j=n(6),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,a=e.value;s.setState(Object(j.a)({},n,a))},s.onSearch=function(){s.props.onSearch(s.state.keyword)},s.state={keyword:""},s}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.keyword;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("input",{type:"text",name:"keyword",className:"form-control",value:e,onChange:function(e){return t.onChange(e)},placeholder:"Nh\u1eadp t\u1eeb kh\xf3a..."}),Object(s.jsx)("span",{className:"input-group-btn",children:Object(s.jsxs)("button",{className:"btn btn-primary",onClick:function(){return t.onSearch()},type:"button",children:[Object(s.jsx)("span",{className:"fa fa-search mr-5"}),"T\xecm"]})})]})})})}}]),n}(a.Component),b=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).onClick=function(e,n){t.props.onSort(e,n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.sortBy,a=e.sortValue;return Object(s.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6",children:Object(s.jsxs)("div",{className:"dropdown",children:[Object(s.jsxs)("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:["S\u1eafp X\u1ebfp ",Object(s.jsx)("span",{className:"fa fa-caret-square-o-down ml-5"})]}),Object(s.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",children:[Object(s.jsx)("li",{onClick:function(){return t.onClick("name",1)},children:Object(s.jsxs)("a",{role:"button",className:"name"===n&&1===a?"sort-selected":"",children:[Object(s.jsx)("i",{className:"fa fa-sort-alpha-asc black"}),"\xa0 T\xean A-Z"]})}),Object(s.jsx)("li",{onClick:function(){return t.onClick("name",-1)},children:Object(s.jsxs)("a",{role:"button",className:"name"===n&&-1===a?"sort-selected":"",children:[Object(s.jsx)("i",{className:"fa fa-sort-alpha-desc black"}),"\xa0 T\xean Z-A"]})}),Object(s.jsx)("li",{role:"separator",className:"divider"}),Object(s.jsx)("li",{onClick:function(){return t.onClick("status",1)},children:Object(s.jsx)("a",{role:"button",className:"status"===n&&1===a?"sort-selected":"",children:"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t"})}),Object(s.jsx)("li",{onClick:function(){return t.onClick("status",-1)},children:Object(s.jsx)("a",{role:"button",className:"status"===n&&-1===a?"sort-selected":"",children:"Tr\u1ea1ng Th\xe1i \u1ea8n"})})]})]})})}}]),n}(a.Component),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"row mt-15",children:[Object(s.jsx)(h,{onSearch:this.props.onSearch}),Object(s.jsx)(b,{sortBy:this.props.sortBy,sortValue:this.props.sortValue,onSort:this.props.onSort})]})}}]),n}(a.Component),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).onChangeValue=function(t){var e=t.target,n=e.name,a=e.value;"status"===n&&(a="true"===e.value),s.setState(Object(j.a)({},n,a))},s.onSubmitValue=function(t){t.preventDefault(),""===s.state.name?alert("Please!  fill in the information"):(s.props.onSubmitValue(s.state),s.onClear(),s.props.setForm()),console.log(s.state)},s.onClear=function(){s.setState({name:"",status:!1}),s.props.setForm()},s.state={id:"",name:"",status:!1},s}return Object(l.a)(n,[{key:"componentWillMount",value:function(){this.props.taskEditing&&this.setState({id:this.props.taskEditing.id,name:this.props.taskEditing.name,status:this.props.taskEditing.status}),console.log(this.state)}},{key:"componentWillReceiveProps",value:function(t){t&&t.taskEditing?this.setState({id:t.taskEditing.id,name:t.taskEditing.name,status:t.taskEditing.status}):t.taskEditing||this.setState({id:"",name:"",status:!1})}},{key:"render",value:function(){var t=this,e=this.state.id;return Object(s.jsxs)("div",{className:"panel panel-warning",children:[Object(s.jsxs)("div",{className:"panel-heading",children:[Object(s.jsx)("h3",{className:"panel-title inline-block",children:""!==e?"C\u1eadp nh\u1eadt c\xf4ng vi\u1ec7c":"Th\xeam C\xf4ng vi\u1ec7c"}),Object(s.jsx)("span",{onClick:function(){return t.props.setForm()},className:"text-right",children:Object(s.jsx)("i",{class:"fas fa-times-circle"})})]}),Object(s.jsx)("div",{className:"panel-body",children:Object(s.jsxs)("form",{onSubmit:this.onSubmitValue,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"T\xean :"}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:function(e){return t.onChangeValue(e)}})]}),Object(s.jsx)("label",{children:"Tr\u1ea1ng Th\xe1i :"}),Object(s.jsxs)("select",{className:"form-control",required:"required",name:"status",value:this.state.status,onChange:function(e){return t.onChangeValue(e)},children:[Object(s.jsx)("option",{value:!0,children:"K\xedch Ho\u1ea1t"}),Object(s.jsx)("option",{value:!1,children:"\u1ea8n"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("button",{type:"submit",className:"btn btn-warning",children:""!==e?"C\u1eadp nh\u1eadt":"Th\xeam"}),"\xa0",Object(s.jsx)("button",{onClick:this.onClear,type:"button",className:"btn btn-danger",children:"H\u1ee7y B\u1ecf"})]})]})})]})}}]),n}(a.Component),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).onUpdateStatus=function(){t.props.onUpdateStatus(t.props.task.id)},t.OnDelete=function(){t.props.onDelete(t.props.task.id)},t.onUpdate=function(){t.props.onUpdate(t.props.task.id)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.task,a=e.index;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:a+1}),Object(s.jsx)("td",{children:n.name}),Object(s.jsx)("td",{className:"text-center ",children:Object(s.jsx)("span",{className:n.status?"label label-success pointer":"label label-danger pointer",onClick:function(){return t.onUpdateStatus()},children:n.status?"K\xedch Ho\u1ea1t":"\u1ea8n"})}),Object(s.jsxs)("td",{className:"text-center",children:[Object(s.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:function(){return t.onUpdate()},children:[Object(s.jsx)("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda"]}),"\xa0",Object(s.jsxs)("button",{onClick:function(){return t.OnDelete()},type:"button",className:"btn btn-danger",children:[Object(s.jsx)("span",{className:"fa fa-trash mr-5"}),"X\xf3a"]})]})]})}}]),n}(a.Component),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,a=e.value;s.props.onFilter("filterName"===n?a:s.state.filterName,"filterStatus"===n?a:s.state.filterStatus),s.setState(Object(j.a)({},n,a))},s.state={filterName:"",filterStatus:-1},s}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.tasks,n=this.state,a=n.filterName,r=n.filterStatus,c=e.map((function(e,n){return Object(s.jsx)(f,{onUpdate:t.props.onUpdate,onDelete:t.props.onDelete,onUpdateStatus:function(e){return t.props.onUpdateStatus(e)},index:n,task:e},e.id)}));return Object(s.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"text-center",children:"STT"}),Object(s.jsx)("th",{className:"text-center",children:"T\xean"}),Object(s.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng Th\xe1i"}),Object(s.jsx)("th",{className:"text-center",children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{onChange:function(e){return t.onChange(e)},value:a,name:"filterName",type:"text",className:"form-control"})}),Object(s.jsx)("td",{children:Object(s.jsxs)("select",{onChange:function(e){return t.onChange(e)},value:r,name:"filterStatus",className:"form-control",children:[Object(s.jsx)("option",{value:-1,children:"T\u1ea5t C\u1ea3"}),Object(s.jsx)("option",{value:0,children:"\u1ea8n"}),Object(s.jsx)("option",{value:1,children:"K\xedch Ho\u1ea1t"})]})}),Object(s.jsx)("td",{})]}),c]})]})}}]),n}(a.Component),x=(n(16),n(8)),g=n.n(x),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).onCloseForm=function(){return s.setState({isDisplayForm:!1,taskEditing:null})},s.randomStringId=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},s.generateId=function(){return s.randomStringId()+"-"+s.randomStringId()+s.randomStringId()+"-"+s.randomStringId()+"-"+s.randomStringId()},s.onToggleForm=function(){s.state.isDisplayForm&&null!==s.state.taskEditing?s.setState({isDisplayForm:!0,taskEditing:null}):s.setState({isDisplayForm:!s.state.isDisplayForm,taskEditing:null})},s.showForm=function(){return s.setState({isDisplayForm:!0})},s.onSubmitValue=function(t){var e=s.state.tasks;""===t.id?(t.id=s.generateId(),e.push(t)):e[s.findIndex(t.id)]=t;s.setState({tasks:e,taskEditing:null}),localStorage.setItem("tasks",JSON.stringify(e))},s.onUpdateStatus=function(t){var e=s.state.tasks,n=g.a.findIndex(e,(function(e){return e.id===t}));-1!==n&&(e[n].status=!e[n].status,s.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e)))},s.findIndex=function(t){var e=s.state.tasks,n=-1;return e.forEach((function(e,s){e.id===t&&(n=s)})),n},s.onDelete=function(t){var e=s.state.tasks,n=s.findIndex(t);-1!==n&&(e.splice(n,1),s.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))),s.onCloseForm()},s.onUpdate=function(t){var e=s.state.tasks[s.findIndex(t)];s.setState({taskEditing:e}),s.showForm()},s.onFilter=function(t,e){e=parseInt(e,10),s.setState({filter:{name:t.toLowerCase(),status:e}})},s.onSearch=function(t){s.setState({keyword:t})},s.onSort=function(t,e){s.setState({sortBy:t,sortValue:e})},s.state={tasks:[],isDisplayForm:!1,taskEditing:null,filter:{name:"",status:-1},sortBy:"name",sortValue:1},s}return Object(l.a)(n,[{key:"componentWillMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:t})}}},{key:"render",value:function(){var t=this,e=this.state,n=e.tasks,a=e.isDisplayForm,r=e.taskEditing,c=e.filter,o=e.keyword,i=e.sortBy,l=e.sortValue;c&&(c.name&&(n=n.filter((function(t){return-1!==t.name.toLowerCase().indexOf(c.name)}))),n=n.filter((function(t){return-1===c.status?t:t.status===(1===c.status)}))),o&&(console.log(o),n=g.a.filter(n,(function(t){return-1!==t.name.toLowerCase().indexOf(o.toLowerCase())}))),"name"===i?n.sort((function(t,e){return t.name>e.name?l:t.name<e.name?-l:0})):n.sort((function(t,e){return t.status>e.status?-l:t.status<e.status?l:0}));var u=a?Object(s.jsx)(p,{taskEditing:r,onSubmitValue:this.onSubmitValue,setForm:function(){return t.onCloseForm()}}):"";return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("h1",{children:"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"}),Object(s.jsx)("hr",{})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:a?"col-xs-4 col-sm-4 col-md-4 col-lg-4":"",children:u}),Object(s.jsxs)("div",{className:a?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:[Object(s.jsxs)("button",{type:"button",className:"btn btn-primary ml-5",onClick:function(){return t.onToggleForm()},children:[Object(s.jsx)("span",{className:"fa fa-plus mr-5"}),"Th\xeam C\xf4ng Vi\u1ec7c"]}),Object(s.jsx)(m,{sortBy:i,sortValue:l,onSort:this.onSort,onSearch:this.onSearch}),Object(s.jsx)("div",{className:"row mt-15",children:Object(s.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:Object(s.jsx)(O,{onFilter:this.onFilter,onUpdate:this.onUpdate,tasks:n,onDelete:this.onDelete,onUpdateStatus:this.onUpdateStatus})})})]})]})]})})}}]),n}(a.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),r(t),c(t)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.7358bb53.chunk.js.map