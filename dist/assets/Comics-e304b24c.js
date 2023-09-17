import{j as t,N as u,r as l,u as v,B as x,P as C,S as f}from"./index-28db1ab9.js";import{M as g}from"./MainButton-409c2996.js";const p="_comicsCard_1yemd_1",j="_comicsDescr_1yemd_25",E="_isActive_1yemd_30",m={comicsCard:p,comicsDescr:j,isActive:E},y=a=>{const{id:e,title:r,thumbnail:{extension:s,path:i}}=a.comics;return t.jsx(u,{className:({isActive:o})=>o?`${m.isActive}`:null,to:`/comics/${e}`,children:t.jsxs("div",{className:m.comicsCard,children:[t.jsx("img",{style:i.includes("image_not_available")?{objectFit:"fill"}:null,width:225,height:346,src:`${i}.${s}`,alt:"Comics book cover"}),t.jsx("div",{className:m.comicsDescr,children:t.jsx("h3",{className:"title",children:r})})]})})},b=l.createContext(null),h={didCatch:!1,error:null};class B extends l.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=h}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var r,s,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];(r=(s=this.props).onReset)===null||r===void 0||r.call(s,{args:o,reason:"imperative-api"}),this.setState(h)}}componentDidCatch(e,r){var s,i;(s=(i=this.props).onError)===null||s===void 0||s.call(i,e,r)}componentDidUpdate(e,r){const{didCatch:s}=this.state,{resetKeys:i}=this.props;if(s&&r.error!==null&&N(e.resetKeys,i)){var o,n;(o=(n=this.props).onReset)===null||o===void 0||o.call(n,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(h)}}render(){const{children:e,fallbackRender:r,FallbackComponent:s,fallback:i}=this.props,{didCatch:o,error:n}=this.state;let c=e;if(o){const d={error:n,resetErrorBoundary:this.resetErrorBoundary};if(l.isValidElement(i))c=i;else if(typeof r=="function")c=r(d);else if(s)c=l.createElement(s,d);else throw n}return l.createElement(b.Provider,{value:{didCatch:o,error:n,resetErrorBoundary:this.resetErrorBoundary}},c)}}function N(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return a.length!==e.length||a.some((r,s)=>!Object.is(r,e[s]))}const S=()=>{const{getNewComics:a,loading:e}=v(),[r,s]=l.useState([]),i=async()=>{const n=r.length,c=await a(n);s(d=>[...d,...c])};l.useEffect(()=>{a().then(n=>{s(n)})},[a]);const o=n=>n.map(c=>t.jsx("li",{children:t.jsx(y,{comics:c})},c.id+Math.random()));return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"container",children:[t.jsx(x,{}),t.jsx(B,{fallback:t.jsx(C,{}),children:t.jsx("div",{children:e&&!r.length===0?t.jsx(f,{}):t.jsx("ul",{className:"comicsContainer",children:o(r)})})})]}),t.jsx("div",{className:"btn-wrapper",children:t.jsx(g,{isLoading:e,handleMoreHeroes:i,width:"170px",children:"LOAD MORE"})})]})};export{S as default};
