import{i as l}from"./chunks/iconfont.1BrGjfOZ.js";import{_ as d,l as s,a8 as c,D as n,F as h,N as p,E as o,M as k,k as i,a as r,t as b}from"./chunks/framework.BR4-Xczm.js";const v={class:"icon_list_demo"},C=JSON.parse('{"title":"Icons","description":"","frontmatter":{},"headers":[],"relativePath":"en/bases/icon.md","filePath":"en/bases/icon.md","lastUpdated":null}'),E={name:"en/bases/icon.md"},g=Object.assign(E,{setup(u){return(y,t)=>{const e=k("m-icon");return i(),s("div",null,[t[0]||(t[0]=c(`<h1 id="icons" tabindex="-1" data-v-b9c08096>Icons <a class="header-anchor" href="#icons" aria-label="Permalink to &quot;Icons&quot;" data-v-b9c08096>​</a></h1><p data-v-b9c08096>Icon components are a collection of icons, and the system provides some basic icons that need to be installed separately</p><h2 id="installation-icon" tabindex="-1" data-v-b9c08096>Installation icon <a class="header-anchor" href="#installation-icon" aria-label="Permalink to &quot;Installation icon&quot;" data-v-b9c08096>​</a></h2><div class="language-bash vp-adaptive-theme" data-v-b9c08096><button title="Copy Code" class="copy" data-v-b9c08096></button><span class="lang" data-v-b9c08096>bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b9c08096><code data-v-b9c08096><span class="line" data-v-b9c08096><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b9c08096>npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c08096> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c08096> mostify-ui-icon</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b9c08096> --save</span></span></code></pre></div><h2 id="global-introduction" tabindex="-1" data-v-b9c08096>Global Introduction <a class="header-anchor" href="#global-introduction" aria-label="Permalink to &quot;Global Introduction&quot;" data-v-b9c08096>​</a></h2><div class="language-js vp-adaptive-theme" data-v-b9c08096><button title="Copy Code" class="copy" data-v-b9c08096></button><span class="lang" data-v-b9c08096>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b9c08096><code data-v-b9c08096><span class="line" data-v-b9c08096><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-b9c08096>// main.js</span></span>
<span class="line" data-v-b9c08096><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096> Vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c08096> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>;</span></span>
<span class="line" data-v-b9c08096><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096> MostifyIcon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c08096> &quot;mostify-ui-icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>;</span></span>
<span class="line" data-v-b9c08096><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c08096> &quot;./App.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>;</span></span>
<span class="line" data-v-b9c08096></span>
<span class="line" data-v-b9c08096><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b9c08096> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c08096> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096> Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b9c08096>createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>(App);</span></span>
<span class="line" data-v-b9c08096><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b9c08096>use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>(MostifyIcon);</span></span></code></pre></div><h2 id="use-icons" tabindex="-1" data-v-b9c08096>Use Icons <a class="header-anchor" href="#use-icons" aria-label="Permalink to &quot;Use Icons&quot;" data-v-b9c08096>​</a></h2><div class="language-html vp-adaptive-theme" data-v-b9c08096><button title="Copy Code" class="copy" data-v-b9c08096></button><span class="lang" data-v-b9c08096>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-b9c08096><code data-v-b9c08096><span class="line" data-v-b9c08096><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-b9c08096>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>&gt;</span></span>
<span class="line" data-v-b9c08096><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-b9c08096>m-icon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b9c08096> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c08096>&quot;close&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b9c08096> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c08096>&quot;20px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096> /&gt;</span></span>
<span class="line" data-v-b9c08096><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-b9c08096>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c08096>&gt;</span></span></code></pre></div><h2 id="icon-list" tabindex="-1" data-v-b9c08096>Icon list <a class="header-anchor" href="#icon-list" aria-label="Permalink to &quot;Icon list&quot;" data-v-b9c08096>​</a></h2>`,9)),n("div",v,[(i(!0),s(h,null,p(o(l).glyphs,a=>(i(),s("section",{class:"item",key:a.name},[r(e,{name:a.name,size:"36px"},null,8,["name"]),n("span",null,b(a.name),1)]))),128))])])}}}),f=d(g,[["__scopeId","data-v-b9c08096"]]);export{C as __pageData,f as default};