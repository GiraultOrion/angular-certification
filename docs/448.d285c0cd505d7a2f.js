"use strict";(self.webpackChunkangular_certification=self.webpackChunkangular_certification||[]).push([[448],{6448:(q,c,i)=>{i.r(c),i.d(c,{ResultsModule:()=>y});var l=i(3745),g=i(8052),t=i(4946),u=i(6139),a=i(6814),p=i(4944),h=i(6330);function m(e,s){if(1&e&&(t._UZ(0,"angular-certification-question",2),t.ALo(1,"answerForQuestionPipe"),t.ALo(2,"async")),2&e){const o=s.$implicit,n=t.oxw();t.Q6J("question",o)("selectedAnswer",t.xi3(1,3,t.lcZ(2,6,n.answers$),o))("highlightCorrect",!0)}}let f=(()=>{var e;class s{constructor(n){this.questionDataService=n,this.questions$=this.questionDataService.questions$,this.answers$=this.questionDataService.answers$}ngOnInit(){}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(u.IO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["angular-certification-results-highlight"]],decls:3,vars:3,consts:[[1,"question-list-container"],[3,"question","selectedAnswer","highlightCorrect",4,"ngFor","ngForOf"],[3,"question","selectedAnswer","highlightCorrect"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.YNc(1,m,3,8,"angular-certification-question",1),t.ALo(2,"async"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,r.questions$)))},dependencies:[a.sg,p.Y,a.Ov,h.y],encapsulation:2}),s})();var d=i(8246);let C=(()=>{var e;class s{transform(n){return n<2?"red":n<4?"yellow":"green"}}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"resultBackgroundByCountPipe",type:e,pure:!0}),s})(),v=(()=>{var e;class s{constructor(n,r){this.router=n,this.questionDataService=r,this.resultCount=this.questionDataService.getCorrectAnswersCount()}ngOnInit(){}goToQuizz(){this.router.navigate([d.GK.QUIZZ_ROUTE])}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(l.F0),t.Y36(u.IO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["angular-certification-results-counter"]],decls:5,vars:5,consts:[[1,"result-count"],["type","button",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.ALo(1,"resultBackgroundByCountPipe"),t._uU(2),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return r.goToQuizz()}),t._uU(4,"Create a new quizz"),t.qZA()),2&n&&(t.Udp("background-color",t.lcZ(1,3,r.resultCount)),t.xp6(2),t.hij("You scored ",r.resultCount," out of 5"))},dependencies:[C],styles:[".result-count[_ngcontent-%COMP%]{font-size:2em;font-weight:700;width:-moz-fit-content;width:fit-content;padding:.5rem;margin-bottom:1rem}"]}),s})();const R=[{path:"",component:(()=>{var e;class s{constructor(n){this.questionDataService=n}ngOnInit(){}ngOnDestroy(){this.questionDataService.resetQuestion(),this.questionDataService.resetAnswers()}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(u.IO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:4,vars:0,template:function(n,r){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Results"),t.qZA(),t._UZ(2,"angular-certification-results-highlight")(3,"angular-certification-results-counter"))},dependencies:[f,v],encapsulation:2,changeDetection:0}),s})()}];let y=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.g,l.Bz.forChild(R)]}),s})()}}]);