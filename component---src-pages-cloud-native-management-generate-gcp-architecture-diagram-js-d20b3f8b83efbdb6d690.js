"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[7221],{85224:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(67294),i=t(71082),r=t(85313);const m=(0,r.default)("div").withConfig({displayName:"style__Container",componentId:"sc-am53qh-0"})(["\n    max-width: 1170px;\n    margin: 0 auto;\n    padding: 0 2rem;\n"]),d=(0,r.default)("div").withConfig({displayName:"style__Wrapper",componentId:"sc-am53qh-1"})(["\n    padding: 2rem 0;\n    display: flex;\n    gap: 1.5rem;    \n    @media only screen and (max-width: 675px){\n        flex-direction: column;\n    }\n"]),l=(0,r.default)("div").withConfig({displayName:"style__CardWrapper",componentId:"sc-am53qh-2"})(["\n    width: 350px;\n    flex: 1;\n    background: ",";\n    border-radius: 0.25rem;\n    box-shadow: 0px 0px "," ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    &:hover {\n        box-shadow: 0px 0px 5px ",";\n    }\n    @media only screen and (max-width: 675px){\n        width: 100%;\n    }\n"],(e=>e.theme.grey212121ToLinear2),(e=>e.theme.projectShadowsize),(e=>e.theme.green00D3A9ToGreyE6E6E6),(e=>e.theme.whiteToGreen3C494F)),o=(0,r.default)("div").withConfig({displayName:"style__CardImageContainer",componentId:"sc-am53qh-3"})([""]),c=(0,r.default)("img").withConfig({displayName:"style__Image",componentId:"sc-am53qh-4"})([""]),s=(0,r.default)("h4").withConfig({displayName:"style__CardTitle",componentId:"sc-am53qh-5"})(["\n    text-align: center;\n    padding: 2rem 1rem;\n"]);var g=t(89192);const p=e=>{let{title:n,imgSrc:t,redirectLink:r}=e;return a.createElement(a.Fragment,null,a.createElement(i.Link,{to:r},a.createElement(l,null,a.createElement(o,null,a.createElement(c,{src:t,alt:"gcp architecture diagram"})),a.createElement(s,null,n))))};var h=e=>{let{heading:n}=e;const{isDark:t}=(0,g.I)(),r=(0,i.useStaticQuery)("586619921");return a.createElement(a.Fragment,null,a.createElement(m,null,a.createElement("h2",null,"Other Supported Platforms"),a.createElement(d,null,r.allMdx.nodes.filter((e=>e.frontmatter.title.split(" ")[0].toLowerCase()!==n)).map((e=>a.createElement(p,{key:e.id,title:e.frontmatter.title,imgSrc:t?e.frontmatter.darkimgsrc.publicURL:e.frontmatter.lightimgsrc.publicURL,redirectLink:e.frontmatter.redirectLink}))))))}},44530:function(e,n,t){t.r(n),t.d(n,{Head:function(){return b},default:function(){return y}});var a=t(67294),i=t(17875),r=t(81912);var m=t.p+"static/gcp-diagram-dark.639d347c.svg",d=t(27030),l=t(85313),o=t(37242),c=t(89192),s=t(68704),g=t(85224),p=t.p+"static/gcp-drag-drop-f23af3dbbf5d823cd392572b40098265.gif",h=t.p+"static/gcp-icon-library-acb8792782a220f3e9407d89561bdf9f.gif",u=t(71082);const f=l.default.div.withConfig({displayName:"diagram__DiagramWrapper",componentId:"sc-12u9l4b-0"})(["\n  min-height: fit-content;\n  border-width: 2px 2px 2px 2px;\n  background-color: ",";\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  padding-bottom: 100px;\n  @media (max-width: 850px) {\n    margin: 3rem 0;\n  }\n  @media (max-width: 767px) {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .diagram-container .catalog:nth-child(odd) {\n    .diagram-image {\n      .image-wrapper {\n        justify-content: center;\n        @media (max-width: 767px) {\n          justify-content: center;\n        }\n      }\n    }\n  }\n\n  .diagram-container .catalog:nth-child(even) {\n    .diagram-image {\n      @media (max-width: 767px) {\n        order: 0;\n      }\n    }\n    .diagram-detail {\n      @media (max-width: 767px) {\n        order: 1;\n      }\n    }\n  }\n\n  .catalog {\n    display: flex;\n    padding: 5rem 0;\n    @media (max-width: 768px) {\n      padding: 2rem 0;\n    }\n    @media (max-width: 468px) {\n      flex-direction: column;\n    }\n    .diagram-detail {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .heading {\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        margin-bottom: 2rem;\n        @media (max-width: 767px) {\n          text-align: center;\n          padding-left: 100px;\n          padding-right: 100px;\n          margin-bottom: 1rem;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          padding-right: 25px;\n          text-align: left;\n        }\n      }\n      .sub-heading {\n        @media (max-width: 767px) {\n          text-align: center;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          text-align: left;\n        }\n      }\n      .caption {\n        font-weight: 400;\n        font-size: 1.1rem;\n        line-height: 1.5rem;\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        opacity: 0.8;\n        @media (max-width: 767px) {\n          font-size: 1rem;\n          line-height: 1.5rem;\n          text-align: center;\n          padding-left: 100px;\n          padding-right: 100px;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          padding-right: 25px;\n          text-align: left;\n        }\n      }\n    }\n    .diagram-image {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .image-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        @media (max-width: 767px) {\n          justify-content: center;\n        }\n        .gcp-image {\n          @media (max-width: 767px) {\n            max-width: 90%;\n            margin-bottom: 2rem;\n          }\n        } \n      }\n    }\n  }\n"],(e=>e.theme.body),(e=>e.theme.tertiaryColor),(e=>e.theme.tertiaryColor));var x=()=>a.createElement(f,null,a.createElement(o.W2,{className:"diagram-container"},a.createElement(o.X2,{className:"catalog"},a.createElement(o.JX,{md:8,className:"diagram-image"},a.createElement("div",{className:"image-wrapper"},a.createElement("img",{src:p,alt:"GCP Diagrams for anything",className:"GCP-image"}))),a.createElement(o.JX,{md:4,className:"diagram-detail"},a.createElement("h2",{className:"heading"},"Visual drag & drop"),a.createElement("p",{className:"caption"},"MeshMap allow you to drag, drop and connect all your cloud components together simply and easily - no-code required!"),a.createElement(u.Link,{className:"link",href:"/cloud-native-management/meshmap/design"},"Learn more →"))),a.createElement(o.X2,{className:"catalog"},a.createElement(o.JX,{md:4,className:"diagram-detail"},a.createElement("h2",{className:"heading"},"Extensive GCP Icon Library"),a.createElement("p",{className:"caption"},"Utilize a vast and continually expanding collection of GCP icons designed for both diagramming and orchestration scenarios. Craft globally comprehensible diagrams that are not only authentic but also aligned with the latest industry standards.")),a.createElement(o.JX,{md:8,className:"diagram-image"},a.createElement("div",{className:"image-wrapper"},a.createElement("img",{src:h,alt:"GCP Diagrams for anything",className:"GCP-image"})))),a.createElement(o.X2,{className:"catalog"},a.createElement(o.JX,{md:8,className:"diagram-image"},a.createElement("div",{className:"image-wrapper"},a.createElement("img",{src:s.Z,alt:"Designing GCP Diagrams with MeshMap",className:"GCP-image"}))),a.createElement(o.JX,{md:4,className:"diagram-detail"},a.createElement("h2",{className:"heading"},"Kickstart with Ready-to-Use Templates"),a.createElement("p",{className:"caption"},"Jumpstart your projects with our quick-start templates designed for both GCP diagramming and orchestration management. Access a range of professionally crafted templates that are fully customizable, ensuring you can tailor them to your specific needs."),a.createElement(u.Link,{className:"link",href:"/cloud-native-management/catalog"},"Learn more →"))),a.createElement(g.Z,{heading:"gcp"})));var w=()=>{const{isDark:e}=(0,c.I)();let n={heading:"GCP Orchestration and Diagramming Software",sub_heading:"Orchestrate and design Google Cloud Platform architecture diagrams easily with predefined templates and symbols designed for professionals.",image:m};return a.createElement(a.Fragment,null,a.createElement(r.Z,{data:n}),a.createElement(x,null),a.createElement(d.Z,null))};var y=()=>a.createElement(a.Fragment,null,a.createElement(w,null));const b=()=>a.createElement(i.Z,{title:"GCP Architecture Diagram",description:"Create your own Google Cloud Platform diagrams with Meshmap.",image:"/images/meshery-logo-dark-text.webp"})},81912:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(67294);var i=t(85313).default.div.withConfig({displayName:"featureHerostyle__FeatureHeroWrapper",componentId:"sc-123iu5-0"})(["\n  .heading-container {\n    z-index: 3;\n    width: 100%;\n    position: relative;\n    padding: 100px 0 70px;\n\n    .section-title {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .whiteboard-image{\n      perspective: 1000px;\n      padding: 0 1rem;\n      &>img {\n        width: 100%;\n        margin: 2rem auto;\n      }\n    }\n\n    #whiteboard-svg {\n      transition: transform 0.3s ease-out;\n      transform-origin: bottom center;\n      transform: rotateX(12deg);\n    }\n\n    .whiteboard-heading {\n      color: "," !important;\n      text-align: center;\n      font-size: 4rem;\n      font-weight: 600;\n      max-width: 965px;\n      margin: 0 auto;\n      padding: 0 1rem;\n    }\n\n    .heading-image {\n      margin: 0 auto;\n    }\n\n  }\n\n  .heading-container::before {\n    content: '';\n    width: 15rem;\n    height: 15rem;\n    border-radius: 50%;\n    background: #00B39F;\n    filter: blur(150px);\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -50%);\n    z-index: -3;\n  }\n\n  .whiteboard-text {\n    color: ",";\n    text-align: center;\n    font-size: 1.75rem;\n    line-height: 2.4rem;\n    max-width: 965px;\n    margin: 1rem auto;\n    padding: 0 1rem\n  }\n\n  @media (max-width: 768px) {\n    .whiteboard-heading{\n      font-size: 2.75rem !important;\n    }\n    .whiteboard-text {\n      font-size: 1.25rem;\n      line-height: 1.5rem;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .section-title {\n      margin-bottom: 1rem;\n      text-align: center !important;\n    }\n\n    .whiteboard-heading{\n      font-size: 2.5rem !important;\n    }\n\n    .whiteboard-text {\n      font-size: 1rem;\n      line-height: 1.2rem;\n    }\n  }\n  \n"],(e=>e.theme.whiteToBlack),(e=>e.theme.greyA0AAAAToGrey666666)),r=t(37242),m=t(63689);var d=e=>((0,a.useEffect)((()=>{const e=document.getElementById("whiteboard-svg"),n=()=>{const n=window.scrollY/16,t=Math.min(n,12);e.style.transform="rotateX("+(12-t)+"deg)"};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}}),[]),a.createElement(i,null,a.createElement(r.W2,{className:"heading-container"},a.createElement("div",{className:"section-title"},a.createElement("h1",{className:"whiteboard-heading"},e.data.heading),a.createElement("p",{className:"whiteboard-text"},e.data.sub_heading),a.createElement(m.default,{primary:!0,title:"Try Now!",url:"https://play.meshery.io",external:!0})),a.createElement("div",{className:"whiteboard-image"},a.createElement("img",{id:"whiteboard-svg",src:e.data.image,alt:""})))))}}]);
//# sourceMappingURL=component---src-pages-cloud-native-management-generate-gcp-architecture-diagram-js-d20b3f8b83efbdb6d690.js.map