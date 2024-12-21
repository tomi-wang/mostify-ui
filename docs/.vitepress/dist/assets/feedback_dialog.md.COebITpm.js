import{r as o,l as r,D as i,s as a,a as e,x as l,a8 as d,M as n,k as E}from"./chunks/framework.BR4-Xczm.js";const b=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"feedback/dialog.md","filePath":"feedback/dialog.md","lastUpdated":1734783106000}'),g={name:"feedback/dialog.md"},c=Object.assign(g,{setup(u){const t=o(!1);return(y,s)=>{const p=n("m-dialog"),h=n("m-button");return E(),r("div",null,[s[4]||(s[4]=i("h1",{id:"dialog",tabindex:"-1"},[a("Dialog "),i("a",{class:"header-anchor",href:"#dialog","aria-label":'Permalink to "Dialog"'},"​")],-1)),s[5]||(s[5]=i("p",null,"A dialog box is a special pop-up layer that can be used to prompt users for information, request user feedback, or display some content. Or used to request users to input some information. The level of pop-up layer components is higher than that of regular elements and can be overlaid on top of regular elements.",-1)),s[6]||(s[6]=i("h2",{id:"useage",tabindex:"-1"},[a("Useage "),i("a",{class:"header-anchor",href:"#useage","aria-label":'Permalink to "Useage"'},"​")],-1)),s[7]||(s[7]=i("p",null,"Using dialog box components in single file components",-1)),e(p,{visible:t.value,title:"Title Text",onClose:s[0]||(s[0]=k=>t.value=!1)},{default:l(()=>s[2]||(s[2]=[a(" This is a dialog box component ")])),_:1},8,["visible"]),e(h,{onClick:s[1]||(s[1]=k=>t.value=!0),type:"primary"},{default:l(()=>s[3]||(s[3]=[a("open a dialog box")])),_:1}),s[8]||(s[8]=d(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  import {ref} from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const visible = ref(false)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-dialog</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :visible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visible&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Title Text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visible = false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    This is a dialog box component</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visible = true&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;open a dialog box&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,2))])}}});export{b as __pageData,c as default};