(this["webpackJsonplogic-circuit-playground"]=this["webpackJsonplogic-circuit-playground"]||[]).push([[0],{69:function(e,t,a){e.exports=a(82)},74:function(e,t,a){},75:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n,l=a(0),i=a.n(l),o=a(22),c=a.n(o),r=(a(74),a(16)),s=a(17),m=a(21),u=a(19),g=a(66),d=a(65),p=(a(75),a(53)),E=a(43),h=a(49),b=a(28),f=a(56),v=a.n(f),S=a(57),N=a.n(S),I=a(58),w=a.n(I),k=a(59),y=a.n(k);function C(e){return i.a.createElement(p.a.Brand,{className:"px-3",href:"#"},i.a.createElement(b.Icon,{className:"mr-2",icon:v.a,width:"25"}),i.a.createElement("span",{className:"Title"},"Circuify"))}function O(e){return i.a.createElement("a",{className:"mr-2",href:e.redirect,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(b.Icon,{icon:e.source,width:"30",color:"white"}))}function T(e){return i.a.createElement(E.a,{className:"mr-2"},i.a.createElement(E.a.Toggle,{variant:"secondary",style:{backgroundColor:"transparent",border:0},id:"dropdown-basic"},e.name),i.a.createElement(E.a.Menu,null,e.options.map((function(e,t){return i.a.createElement(E.a.Item,{key:t,onClick:function(){e.action()}},e.name)}))))}var A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(r.a)(this,a),l=t.call(this),n=e,l}return Object(s.a)(a,[{key:"New",value:function(){window.confirm("Are you sure you want to start over?")&&(sessionStorage.setItem("NavCommand","New"),n.updateState())}},{key:"Close",value:function(){window.close()}},{key:"DeleteSelection",value:function(){sessionStorage.setItem("NavCommand","Delete Selection")}},{key:"SelectAll",value:function(){sessionStorage.setItem("NavCommand","Select All")}},{key:"SelectNone",value:function(){sessionStorage.setItem("NavCommand","Select None")}},{key:"ZoomIn",value:function(){sessionStorage.setItem("NavCommand","Zoom In")}},{key:"ZoomOut",value:function(){sessionStorage.setItem("NavCommand","Zoom Out")}},{key:"RunSimulation",value:function(){sessionStorage.setItem("NavCommand","Run Simulation")}},{key:"PauseSimulation",value:function(){sessionStorage.setItem("NavCommand","Pause Simulation")}},{key:"GithubRepository",value:function(){window.open("https://github.com/StefanJo3107/logic-circuit-playground","_blank","noopener,noreferrer")}},{key:"Tutorial",value:function(){n.setTutorialShow(!0),n.setTutorialPage(-1),n.updateState()}},{key:"About",value:function(){n.setTutorialShow(!0),n.setTutorialPage(0),n.updateState()}},{key:"render",value:function(){var e=this,t=[{name:"New",action:this.New},{name:"Close",action:this.Close}],a=[{name:"Delete Selection",action:this.DeleteSelection},{name:"Select All",action:this.SelectAll},{name:"Select None",action:this.SelectNone}],n=[{name:"Zoom In",action:this.ZoomIn},{name:"Zoom Out",action:this.ZoomOut}],l=[{name:"Run Simulation",action:this.RunSimulation},{name:"Pause Simulation",action:this.PauseSimulation}],o=[{name:"Github Repository",action:this.GithubRepository},{name:"Tutorial",action:this.Tutorial},{name:"About",action:this.About}];return i.a.createElement(p.a,{bg:"dark",variant:"dark",className:"shadow flex-md-nowrap p-1"},i.a.createElement(h.a,{md:3,lg:2},i.a.createElement(C,null)),i.a.createElement(T,{updateState:function(){return e.New()},name:"File",options:t}),i.a.createElement(T,{name:"Edit",options:a}),i.a.createElement(T,{name:"View",options:n}),i.a.createElement(T,{name:"Run",options:l}),i.a.createElement(T,{name:"Help",options:o}),i.a.createElement("div",{className:"ml-auto"},i.a.createElement(O,{redirect:"https://github.com/StefanJo3107",source:N.a}),i.a.createElement(O,{redirect:"https://twitter.com/SJovGD",source:w.a}),i.a.createElement(O,{redirect:"https://www.reddit.com/user/sjovanovic3107",source:y.a})))}}]),a}(i.a.Component),x=a(50),F=a(23),j=a(45),R=a(52),P=a(60),D=a.n(P),L=a(61),W=a.n(L),M=a(62),B=a.n(M),_=a(44),U=a(41),G=a(67),H=a(63),X=a.n(H),J=a(64),Z=a.n(J);function z(e){return i.a.createElement(U.a,null,i.a.createElement("div",{className:"btn-dark tab-link nav-link "+e.activeState+" "+("Main"===e.content?"px-4 ml-2":""),onClick:function(){e.onClick(),K.props.updateState()}},e.content,i.a.createElement(F.a,{className:"p-0 remove-btn "+e.activeState+" "+(e.showClose?"":"d-none"),onClick:function(){e.onDelete(),K.props.updateState()}},i.a.createElement(b.Icon,{icon:Z.a}))))}function V(e){return i.a.createElement(U.a,null,i.a.createElement("div",{className:"plus-btn btn-dark tab-link nav-link",onClick:function(){e.onClick(),K.props.updateState()}},i.a.createElement(b.Icon,{icon:X.a,width:"25"})))}z.defaultProps={showClose:!0};var K,$=["Main"],q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this),sessionStorage.setItem("currentCircuit","Main"),sessionStorage.setItem("circuits",$),K=Object(_.a)(n),n}return Object(s.a)(a,[{key:"setActive",value:function(e){$.includes(e)&&(sessionStorage.setItem("currentCircuit",e),this.setState({}))}},{key:"AddNewTab",value:function(){var e=prompt("Please enter the name of the circuit:");null!=e&&""!==e&&!$.includes(e)&&e.length<=20?($.push(e),this.setState({}),this.setActive($[$.length-1]),sessionStorage.setItem("circuits",$),this.props.updateState()):""===e?alert("Circuit creation aborted because chosen name is invalid!"):$.includes(e)?alert("Circuit creation aborted because chosen name already exists!"):null!=e&&e.length>20&&alert("Circuit creation aborted because name must be less than 21 characters long!")}},{key:"RemoveTab",value:function(e){!0===window.confirm("Are you sure you want to delete "+$[e]+"?")&&($.splice(e,1),this.setState({}),$.length>e?this.setActive($[e]):this.setActive($[$.length-1]),sessionStorage.setItem("circuits",$),this.props.updateState())}},{key:"render",value:function(){var e=this;return"New"===sessionStorage.getItem("NavCommand")&&($=["Main"],sessionStorage.setItem("currentCircuit","Main"),sessionStorage.setItem("circuits",$)),i.a.createElement(G.a,{className:"nav-tabs"},i.a.createElement(z,{key:0,content:"Main",onClick:function(){return e.setActive("Main")},activeState:"Main"===sessionStorage.getItem("currentCircuit")?"active":"",showClose:!1,onDelete:function(){return e.RemoveTab(0)}}),$.map((function(t,a){return"Main"!==t?i.a.createElement(z,{key:a,content:t,onClick:function(){return e.setActive(t)},activeState:sessionStorage.getItem("currentCircuit")===t?"active":"",onDelete:function(){return e.RemoveTab(a)}}):""})),i.a.createElement(V,{onClick:function(){return e.AddNewTab()}}))}}]),a}(i.a.Component),Q={option:"SELECT",type:"TOOL"};function Y(e){return i.a.createElement(F.a,{className:e.name===sessionStorage.getItem("selectedOption")?"btnOutline border-0":"btnNoOutline border-0",variant:"secondary",style:{backgroundColor:"transparent"},onClick:e.onClick},i.a.createElement(R.a,null,i.a.createElement(R.a.Image,{src:e.image,width:e.imageWidth,alt:e.name}),i.a.createElement(R.a.Caption,{className:"text-center",style:{color:"black"}},i.a.createElement("span",{className:"d-inline-block text-center",style:{maxWidth:100,wordWrap:"break-word"}},e.name))))}function ee(e){return e.menuChunks.map((function(t,a){return i.a.createElement("div",{key:a,className:"d-flex justify-content-around"},t.map((function(t,a){return i.a.createElement(Y,{key:a,name:t.name,image:t.image,imageWidth:e.imageWidth,onClick:function(){e.onClick(t.name)}})})))}))}function te(e){var t=Object(l.useState)(e.isOpen),a=Object(x.a)(t,2),n=a[0],o=a[1],c=D.a.chunk(e.menuItems,Math.ceil(2));return i.a.createElement(i.a.Fragment,null,i.a.createElement(F.a,{onClick:function(){return o(!n)},"aria-controls":"collapse-content","aria-expanded":n,variant:n?"dark":"secondary",className:"rounded-0 shadow"},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("p",{className:"m-0 p-0"},e.menuName),i.a.createElement(b.Icon,{icon:n?B.a:W.a,width:"20"}))),i.a.createElement(j.a,{in:n},i.a.createElement("div",{id:"collapse-content",className:"mt-2 mb-2 px-2"},i.a.createElement(ee,{menuChunks:c,imageWidth:e.imageWidth,onClick:function(t){e.onClick(t)}}))))}Y.defaultProps={imageWidth:50};var ae=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).setSelection=function(e,t){Q={option:e,type:t},sessionStorage.setItem("selectedOption",e),sessionStorage.setItem("selectedType",t),n.setState({refresh:!n.state.refresh})},n.state={refresh:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){Q.option!==sessionStorage.getItem("selectedOption")&&(Q={option:sessionStorage.getItem("selectedOption"),type:sessionStorage.getItem("selectedType")},e.setState({refresh:!e.state.refresh}))}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){for(var e,t=this,a=[],n=sessionStorage.getItem("currentCircuit"),l=1;l<$.length;l++)$[l]!==n&&a.push({image:"../public/Images/IntegratedCircuit.png",name:$[l]});return e=a.length>0?i.a.createElement(te,{isOpen:!0,menuName:"Integrated Circuits",menuItems:a,onClick:function(e){t.setSelection(e,"CIRCUIT")},imageWidth:70}):i.a.createElement(i.a.Fragment,null),i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{md:3,lg:2,className:"d-md-block bg-light sidebar collapse"},i.a.createElement("div",{className:"sidebar-sticky pt-0"},i.a.createElement("ul",{className:"nav flex-column"},i.a.createElement(te,{isOpen:!0,menuName:"Tools",type:"TOOL",menuItems:[{image:"../public/Images/Cursor.png",name:"SELECT"},{image:"../public/Images/DeleteWire.png",name:"REMOVE WIRE"}],onClick:function(e){return t.setSelection(e,"TOOL")},imageWidth:45}),i.a.createElement(te,{isOpen:!0,menuName:"Inputs",menuItems:[{image:"../public/Images/True.png",name:"TRUE"},{image:"../public/Images/False.png",name:"FALSE"},{image:"../public/Images/Clock.png",name:"CLOCK"},{image:"../public/Images/Button.png",name:"BUTTON"},{image:"../public/Images/Switch.png",name:"SWITCH"}],onClick:function(e){return t.setSelection(e,"INPUT")},imageWidth:55}),i.a.createElement(te,{isOpen:!0,menuName:"Logic Gates",menuItems:[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Buffer_ANSI.svg/150px-Buffer_ANSI.svg.png",name:"BUFFER"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/NOT_ANSI.svg/150px-NOT_ANSI.svg.png",name:"NOT"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/AND_ANSI.svg/150px-AND_ANSI.svg.png",name:"AND"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/NAND_ANSI.svg/150px-NAND_ANSI.svg.png",name:"NAND"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/OR_ANSI.svg/150px-OR_ANSI.svg.png",name:"OR"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/NOR_ANSI.svg/150px-NOR_ANSI.svg.png",name:"NOR"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/XOR_ANSI.svg/150px-XOR_ANSI.svg.png",name:"XOR"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/XNOR_ANSI.svg/150px-XNOR_ANSI.svg.png",name:"XNOR"}],onClick:function(e){return t.setSelection(e,"GATE")},imageWidth:55}),i.a.createElement(te,{isOpen:!0,menuName:"Outputs",menuItems:[{image:"../public/Images/Lightbulb.png",name:"LIGHT BULB"},{image:"../public/Images/Hexdigit02.png",name:"HEX DIGIT"},{image:"../public/Images/SevenSegment.png",name:"SEVEN SEGMENT"},{image:"../public/Images/Oscilloscope.png",name:"O-SCOPE"}],onClick:function(e){return t.setSelection(e,"OUTPUT")},imageWidth:55}),i.a.createElement(te,{isOpen:!0,menuName:"Flip-Flops",menuItems:[{image:"../public/Images/SRFlip-Flop.png",name:"SR FLIP-FLOPs"},{image:"../public/Images/DFlip-Flop.png",name:"D FLIP-FLOP"},{image:"../public/Images/JKFlip-Flop.png",name:"JK FLIP-FLOP"},{image:"../public/Images/TFlip-Flop.png",name:"T FLIP-FLOP"}],onClick:function(e){t.setSelection(e,"FLIP-FLOP")},imageWidth:70}),i.a.createElement(te,{isOpen:!0,menuName:"Plexers",menuItems:[{image:"../public/Images/Multiplexer.png",name:"MUX"},{image:"../public/Images/Demultiplexer.png",name:"DEMUX"}],onClick:function(e){t.setSelection(e,"PLEXER")},imageWidth:70}),e))))}}]),a}(i.a.Component),ne=a(15),le=a(51),ie=a(68),oe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(ne.a.Dialog,{className:"modalBox"},i.a.createElement(ne.a.Header,null,i.a.createElement(ne.a.Title,null,"Name"),i.a.createElement("button",{type:"button",className:"close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"),i.a.createElement("span",{className:"sr-only"},"Close"))),i.a.createElement(ne.a.Body,{className:"modalBody"},i.a.createElement(le.a,{className:"mb-3"},i.a.createElement(le.a.Prepend,null,i.a.createElement(le.a.Text,{id:"basic-addon1"},"Name:")),i.a.createElement(ie.a,{placeholder:"Element Name","aria-label":"Element Name","aria-describedby":"basic-addon1"}))))}}]),a}(i.a.Component),ce=a(42),re=a(7),se=[{name:"About",content:i.a.createElement("div",{className:"tutorial-content"},i.a.createElement("p",null,i.a.createElement("strong",null,"Circuify - Logic Circuit Visualizer")," is free, open-source tool for building and visualizing logic circuits."),i.a.createElement("p",null,i.a.createElement("strong",null,"Most notable features:")),i.a.createElement("ul",{className:"tutorial-list"},i.a.createElement("li",null,"Design logic circuits with"," ",i.a.createElement("strong",null,"intuitive and easy to use user interface")),i.a.createElement("li",null,"Great range of different"," ",i.a.createElement("strong",null,"logic gates, inputs, outputs...")),i.a.createElement("li",null,"Support for"," ",i.a.createElement("strong",null,"making custom integrated circuits")," for easier project organization and endless creation possibilities"),i.a.createElement("li",null,"And many more to explore")),i.a.createElement(ce.a,{className:"img-fluid",src:"../public/Images/TitleBanner.png"}))},{name:"UI Introduction",content:i.a.createElement("div",{className:"tutorial-content"},i.a.createElement("p",null,"User Interface can be separated into three parts:"),i.a.createElement("ul",{className:"tutorial-list"},i.a.createElement("li",null,i.a.createElement("strong",null,"Sidebar - "),"containts all the elements and the tools"),i.a.createElement("li",null,i.a.createElement("strong",null,"Navbar - "),"containts all the options you would expect to find like starting new project, canvas manipulation, element selection..."),i.a.createElement("li",null,i.a.createElement("strong",null,"Canvas - "),"main part of the application where elements are placed and manipulated")),i.a.createElement(re.a,null,i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/SidebarTutorial.jpg",alt:"First slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",null,"Sidebar"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/NavTutorial.jpg",alt:"Second slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",null,"Navbar"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/CanvasTutorial.jpg",alt:"Third slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Canvas")))))},{name:"Element Manipulation",content:i.a.createElement("div",{className:"tutorial-content"},i.a.createElement("p",null,i.a.createElement("strong",null,"Placing an element")," is done by selecting the element on the sidebar and then clicking on the desired location on the canvas."),i.a.createElement("p",null,i.a.createElement("strong",null,"Selecting an element")," can be done in multiple ways:"),i.a.createElement("ul",{className:"tutorial-list"},i.a.createElement("li",null,"Selecting the single element by simply clicking on it"),i.a.createElement("li",null,"Selecting single or group of elements by creating the rectangular selection"),i.a.createElement("li",null,"Selecting all elements by choosing select all option under ",i.a.createElement("strong",null,"Edit ",">"," Select All"))),i.a.createElement("p",null,i.a.createElement("strong",null,"Dragging an element")," is done by selecting it and then dragging the mouse to the desired location on the canvas."),i.a.createElement("p",null,i.a.createElement("strong",null,"Deleting an element")," can be done in two ways:"),i.a.createElement("ul",{className:"tutorial-list"},i.a.createElement("li",null,"Selecting elements and then hitting"," ",i.a.createElement("strong",null,"DELETE key")," on the keyboard"),i.a.createElement("li",null,"Selecting elements and choosing delete option under"," ",i.a.createElement("strong",null,"Edit ",">"," Delete Selection"))),i.a.createElement(re.a,{interval:null},i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/PlacingElementTutorial.gif",alt:"First slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Placing an element"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/SelectingGroupTutorial.gif",alt:"Second slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Selecting group of elements"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/DraggingElementTutorial.gif",alt:"Third slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Dragging an element"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/DeletingElementsTutorial.gif",alt:"Fourth slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Deleting elements")))))},{name:"Element Wiring",content:i.a.createElement("div",{className:"tutorial-content"},i.a.createElement("p",null,"Crucial part of every logic curcuit are"," ",i.a.createElement("strong",null,"wires"),", connecting inputs and outputs of elements."),i.a.createElement("p",null,i.a.createElement("strong",null,"Adding wire")," is done by firstly selecting input(output) of the first element you wish to connect. After that, valid output(input) joint needs to be selected(indicated by the blue color) in order to add the wire."),i.a.createElement("p",null,i.a.createElement("strong",null,"Removing wire")," is done by selecting Remove Wire tool on the sidebar and then selecting input and output joints of the wire you wish to remove."),i.a.createElement(re.a,{interval:null},i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/ConnectingElementsTutorial.gif",alt:"First slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Connecting elements"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/RemovingWireTutorial.gif",alt:"Second slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Removing wire")))))},{name:"Integrated Circuits",content:i.a.createElement("div",{className:"tutorial-content"},i.a.createElement("p",null,"One of the most important features of Circuify is the support for ",i.a.createElement("strong",null,"Integrated Circuits.")," Once you create IC, you can use it repeatedly, which allows for better organized and more structured design."),i.a.createElement("p",null,i.a.createElement("strong",null,"Creating circuit")," is done by clicking on the + button located on the tab bar on top of the canvas. Once you press it, you will be prompted to choose a name for your circuit."),i.a.createElement("p",null,i.a.createElement("strong",null,"Inputs and outputs of the integrated circuit:")),i.a.createElement("ul",{className:"tutorial-list"},i.a.createElement("li",null,"Inputs will be assignable on the integrated circuit only for the inputs of type ",i.a.createElement("strong",null,"Switch"),". Other inputs will only be manageable in the circuit itself."),i.a.createElement("li",null,"Outputs will be assignable on the integrated circuit only for the outputs of type ",i.a.createElement("strong",null,"Light Bulb"),". Other outputs will only be manageable in the circuit itself.")),i.a.createElement("p",null,"It is highly recommended to name every Switch and Light Bulb in the circuit, as those names will be visible on the Integrated Circuit element."),i.a.createElement("p",null,i.a.createElement("strong",null,"Adding Integrated Circuit element")," - Once the circuit is created, it can be used across all the other circuits in form of an integrated circuit. Just locate the element at the bottom of the Sidebar and add it to a canvas."),i.a.createElement(re.a,{interval:null},i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/CreatingCircuitTutorial.gif",alt:"First slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Creating circuit"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/NamingSwitchTutorial.gif",alt:"Second slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Naming a switch"))),i.a.createElement(re.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:"../public/Images/AddingCircuitTutorial.gif",alt:"Third slide"}),i.a.createElement(re.a.Caption,null,i.a.createElement("h3",{className:"text-info"},"Adding integrated circuit")))))},{name:"Finishing Up",content:i.a.createElement("div",{className:"tutorial-content"},i.a.createElement("p",null,"That is about everything you need to know in order to use Circuify. All that is left now is to let your imagination run wild and create awesome things. Hopefully you'll enjoy using it as much as I enjoyed making it."),i.a.createElement("p",null,"If you get stuck at any point, you can always re-read this tutorial by going under ",i.a.createElement("strong",null,"Help ",">"," Tutorial"),"."),i.a.createElement("img",{class:"d-block w-100",src:"../public/Images/CircuifySevenSegment.gif"}))}],me=0;function ue(e){var t=function(){var e=Object(l.useState)(0),t=Object(x.a)(e,2),a=(t[0],t[1]);return function(){return a((function(e){return++e}))}}();return-1!==e.pages.pageToShow&&(me=e.pages.pageToShow),localStorage.setItem("tutorialShown",!0),i.a.createElement(i.a.Fragment,null,i.a.createElement(ne.a,{show:e.tutorialShow.show,onHide:function(){me=0,e.setShow(!1),t()},dialogClassName:"modal-60w","aria-labelledby":"tutorial-modal-label",centered:!0},i.a.createElement(ne.a.Header,{closeButton:!0},i.a.createElement(ne.a.Title,null,se[me].name)),i.a.createElement(ne.a.Body,null,se[me].content),function(e,t){return-1===e.pages.pageToShow?i.a.createElement(ne.a.Footer,null,i.a.createElement("span",{className:"page-number"},i.a.createElement("strong",null,"(",me+1,"/",se.length,")")),i.a.createElement(F.a,{onClick:function(){me>0&&(me--,t())},variant:"info",className:me<=0?"disabled":""},"Previous"),i.a.createElement(F.a,{onClick:function(){me+1<se.length?(me++,t()):(e.setShow(!1),t())},variant:"info"},me+1>=se.length?"Finish":"Next")):void 0}(e,t)))}var ge={show:!0},de={pageToShow:-1},pe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this),"true"===localStorage.getItem("tutorialShown")&&n.showTutorial(!1),n}return Object(s.a)(a,[{key:"showTutorial",value:function(e){ge.show=e}},{key:"setTutorialPage",value:function(e){de.pageToShow=e}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{updateState:function(){e.setState({})},setTutorialShow:this.showTutorial,setTutorialPage:this.setTutorialPage}),i.a.createElement(ae,{selection:sessionStorage.getItem("selectedOption")}),i.a.createElement(d.a,{fluid:!0},i.a.createElement(g.a,null,i.a.createElement("div",{className:"col-md-9 ml-sm-auto px-0 col-lg-10",id:"canvasHolder"},i.a.createElement(q,{updateState:function(){e.setState({})}}))),i.a.createElement(oe,null)),i.a.createElement(ue,{tutorialShow:ge,setShow:this.showTutorial,pages:de}),i.a.createElement("img",{src:"../public/Images/Button.png"}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.d51f791e.chunk.js.map