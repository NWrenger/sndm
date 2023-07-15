import{s as Pt,n as Ye,r as St,e as $e}from"../chunks/scheduler.e108d1fd.js";import{S as Dt,i as Zt,g as l,s,z as qt,h as a,f as r,c as o,j as i,x as n,k as t,A as q,l as Ut,y as e,a as Ht,B as Nt}from"../chunks/index.a9aad4a7.js";import{g as Vt,M as Ot}from"../chunks/modal.a01c027a.js";import{m as Rt,s as jt,d as Wt}from"../chunks/store.04b0bdc9.js";const Kt=!1,$t=Object.freeze(Object.defineProperty({__proto__:null,ssr:Kt},Symbol.toStringTag,{value:"Module"}));function Gt(B){let A,U,b,x,g,_,de="SNDI",R,m,p,d,xe='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>',ce,c,j,v='<h6 class="dropdown-header">Profil</h6>',me,we,z,et="Aktueller Benutzer",ke,ue,tt='<button class="dropdown-item" type="button">Passwort ändern</button>',Ie,be,lt='<button id="login-creator" class="dropdown-item" type="button">Logins Verwalten</button>',Ee,fe,k,at="Ausloggen",He,se,nt=`<div class="bg-dark-subtle"><div class="btn-group p-2 svelte-1y81bwy"><button id="add" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Hinzufügen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="edit" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Bearbeiten" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="del" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Entfernen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="cancel" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Schließen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg></button></div></div> <ul class="sidebar-list list-group list-group-flush svelte-1y81bwy" id="sidebar-list"></ul> <div class="sidebar-search input-group pb-1 px-1 svelte-1y81bwy"><button id="advanced" class="btn btn-outline-secondary dropdown-toggle hide-arrow svelte-1y81bwy" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside" title="Nach Parametern Suchen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path></svg></button> <ul class="dropdown-menu" id="group-select-dropdown"><li><h6 class="dropdown-header">Gruppe</h6></li> <form class="px-3 py-1" action="javascript:handleAdvanced()"><div class="mb-2"><select id="group-select" class="form-select" aria-label="Group Select"></select></div> <button id="button-group-select" type="submit" class="btn btn-primary"><span id="spinner-group-select" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
						Suchen</button></form></ul> <input type="text" class="form-control" placeholder="Suche" id="search"/> <button id="select-button" class="btn btn-outline-secondary dropdown-toggle" type="button" title="Kategorie" data-bs-toggle="dropdown" aria-expanded="false">Bürger</button> <ul class="dropdown-menu dropdown-menu-end"><li><h6 class="dropdown-header">Kategorie</h6></li> <li><button id="user" class="dropdown-item active" type="button">Bürger</button></li> <li><button id="workless" class="dropdown-item" type="button">Arbeitslosenreg.</button></li> <li><button id="criminal" class="dropdown-item" type="button">Kriminalregister</button></li></ul></div>`,Ne,u,W,st='<div class="card-title row"><div class="col"><label for="forename" class="form-label">Vorname</label> <input id="forename" type="text" class="form-control" placeholder="Vorname" aria-label="Vorname" readonly=""/></div> <div class="col"><label for="surname" class="form-label">Nachname</label> <input id="surname" type="text" class="form-control" placeholder="Nachname" aria-label="Nachname" readonly=""/></div></div> <div class="row"><div class="col"><label for="account" class="form-label">Account</label> <input id="account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div> <div class="col"><label for="role" class="form-label">Gruppe</label> <input id="role" type="text" class="form-control" placeholder="Gruppe" aria-label="Gruppe" readonly=""/></div></div> <button id="user-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="user-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="user-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="user-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="user-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button>',Ve,K,ot='<div class="card-title row"><div class="col"><label for="workless-select" class="form-label">Account</label> <div class="input-group mb-3 workless-select"><button id="workless-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="workless-select-dropdown" class="dropdown-menu"></ul> <input id="workless-account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div></div> <div class="col"><label for="old-company" class="form-label">Vorheriger Betrieb</label> <input id="old-company" type="text" class="form-control" placeholder="Vorgeriger Betrieb" aria-label="Vorgeriger Betrieb" readonly=""/></div></div> <div class="row"><div class="col form-group"><label for="date-of-dismiss" class="form-label">Datum der Entlassung</label> <input type="date" class="form-control" id="date-of-dismiss" readonly=""/></div> <div class="col"><label for="currently-workless" class="form-label">Aktuell Arbeitslos</label> <div class="input-group mb-3 currently-select"><button id="currently-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswahl">Auswahl</button> <ul id="currently-select-dropdown" class="dropdown-menu"><li><button id="yes-currently" class="dropdown-item" type="button">Ja</button></li> <li><button id="no-currently" class="dropdown-item" type="button">Nein</button></li></ul> <input id="currently-workless" type="text" class="form-control" placeholder="Auswahl" aria-label="Auswahl" readonly=""/></div></div></div> <div id="only-on-currently-no" class="row" hidden=""><div class="col"><label for="new-company" class="form-label">Neuer Betrieb</label> <input id="new-company" type="text" class="form-control" placeholder="Neuer Betrieb" aria-label="Neuer Betrieb" readonly=""/></div> <div class="col"><label for="total-time" class="form-label">Insgeammte arbeitslose Zeit</label> <input id="total-time" type="text" class="form-control" placeholder="Insgeammte arbeitslose Zeit" aria-label="Insgeammte arbeitslose Zeit" readonly=""/></div></div> <button id="workless-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="workless-confirm-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="workless-abort-button" class="btn btn-outline-danger m-3" type="button" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 justify-content-center get-user" style="max-width: 160px;">Bürger abrufen</button>',Oe,G,rt='<div class="card-title row"><div class="col"><label for="criminal-select" class="form-label">Beschuldigter</label> <div class="input-group mb-3 criminal-select"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="criminal-select-dropdown" class="dropdown-menu"></ul> <input id="criminal-account" type="text" class="form-control" placeholder="Beschuldigter" aria-label="Beschuldigter" readonly=""/></div></div> <div class="col"><label for="kind" class="form-label">Art</label> <input id="kind" type="text" class="form-control" placeholder="Art" aria-label="Art" readonly=""/></div></div> <div class="row"><div class="col"><label for="accuser-select" class="form-label">Anzeiger</label> <div class="input-group mb-3 accuser-select"><button id="accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="accuser-select-dropdown" class="dropdown-menu"></ul> <input id="accuser" type="text" class="form-control" placeholder="Anzeiger" aria-label="Anzeiger" readonly=""/></div></div> <div class="col"><label for="police-consultant" class="form-label">Sachberater Polizei</label> <div class="input-group mb-3 police-consultant-select"><button id="police-consultant-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="police-consultant-select-dropdown" class="dropdown-menu"></ul> <input id="police-consultant" type="text" class="form-control" placeholder="Sachberater Polizei" aria-label="Sachberater Polizei" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="lawyer-culprit" class="form-label">Anwalt des Beschuldigtens</label> <div class="input-group mb-3 lawyer-culprit-select"><button id="lawyer-culprit-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-culprit-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-culprit" type="text" class="form-control" placeholder="Anwalt des Beschuldigtens" aria-label="Anwalt des Beschuldigtens" readonly=""/></div></div> <div class="col"><label for="lawyer-accuser" class="form-label">Anwalt des Anzeigers</label> <div class="input-group mb-3 lawyer-accuser-select"><button id="lawyer-accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-accuser-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-accuser" type="text" class="form-control" placeholder="Anwalt des Anzeigers" aria-label="Anwalt des Anzeigers" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="facts" class="form-label">Tatbestand</label> <input id="facts" type="text" class="form-control" placeholder="Tatbestand" aria-label="Tatbestand" readonly=""/></div></div> <div class="row"><div class="col"><label for="time-of-crime" class="form-label">Zeitpunkt der Tat</label> <input id="time-of-crime" type="text" class="form-control" placeholder="Zeitpunkt der Tat" aria-label="Zeitpunkt der Tat" readonly=""/></div> <div class="col"><label for="location-of-crime" class="form-label">Ort der Tat</label> <input id="location-of-crime" type="text" class="form-control" placeholder="Ort der Tat" aria-label="Ort der Tat" readonly=""/></div></div> <div class="row"><div class="col"><label for="note" class="form-label">Kommentar</label> <input id="note" type="text" class="form-control" placeholder="Kommentar" aria-label="Kommentar" readonly=""/></div></div> <div class="row"><div class="col"><label for="verdict" class="form-label">Urteil</label> <div class="input-group mb-3 verdict-select"><button id="verdict-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen">Urteil</button> <ul id="verdict-select-dropdown" class="dropdown-menu"><li><button id="no-yet" class="dropdown-item" type="button">a.) Noch kein Verfahren</button></li> <li><button id="guilty" class="dropdown-item" type="button">b.) Schuldig</button></li> <li><button id="innocent" class="dropdown-item" type="button">c.) Unschuldig</button></li></ul> <input id="verdict" type="text" class="form-control" placeholder="Urteil" aria-label="Urteil" readonly=""/></div></div></div> <button id="criminal-add-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="criminal-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="criminal-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 get-user" style="max-width: 160px;">Bürger abrufen</button>',Pe,h,f,J,it="Einen Login hinzufügen:",Se,oe,dt='<div class="col"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-add-select-dropdown" class="dropdown-menu"></ul> <input id="login-add-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <div class="col"><label for="login-add-password" class="form-label">Passwort</label> <input id="login-add-password" type="password" class="form-control" placeholder="Passwort" aria-label="Passwort"/></div>',De,y,F,Q,ct="Rechte für Bürger",Ze,C,I,ut="None",E,bt="ReadOnly",H,pt="Write",qe,X,Y,vt="Rechte für Arbeitslose",Ue,L,N,ht="None",V,gt="ReadOnly",O,mt="Write",Re,$,ee,wt="Rechte für das Kriminalregister",je,M,P,ft="None",S,yt="ReadOnly",D,xt="Write",We,Z,_t=`<span id="add-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Hinzufügen`,Ke,pe,Ct=`<label for="delete-login" class="form-label">Einen Login entfernen:</label> <div class="card-title row col delete-login"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-delete-select-dropdown" class="dropdown-menu"></ul> <input id="login-delete-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <button id="delete-login-button" type="button" class="btn btn-outline-danger m-3"><span id="delete-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Entfernen</button>`,Ge,ve,Lt=`<p style="margin: 0;">Alle Logins entfernen:</p> <button id="delete-all-logins-button" type="button" class="btn btn-outline-danger m-3 delete-all-logins"><span id="delete-all-logins-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Alle Logins löschen</button>`,Je,te,Mt="Schließen",Fe,le,Tt=`<div><label for="password-changer" class="form-label">Passwort ändern:</label> <div class="card-title row password-changer"><div class="col"><label for="new-password" class="form-label">Neues Passwort</label> <input id="new-password" type="password" class="form-control" placeholder="Neues Passwort" aria-label="Neues Passwort"/></div> <div class="col"><label for="new-password-wdh" class="form-label">Wiederholen</label> <input id="new-password-wdh" type="password" class="form-control" placeholder="Wiederholen" aria-label="Wiederholen"/></div></div> <button id="change-password-button" type="button" class="btn btn-outline-danger m-3"><span id="change-password-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					Ändern</button></div> <button class="btn btn-outline-danger m-2" type="button">Schließen</button>`,Qe,re,Bt='<div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Name</h5> <p class="card-text" id="name"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Version</h5> <p class="card-text" id="version"></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Entwickler</h5> <p class="card-text" id="devs"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Repository</h5> <p class="card-text"><a target="_blank" id="repo"></a></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Beschreibung</h5> <p class="card-text" id="description"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Bürger insgesammt</h5> <p class="card-text" id="users"></p></div></div></div></div>',Xe,At;return{c(){A=l("meta"),U=s(),b=l("section"),x=l("nav"),g=l("div"),_=l("a"),_.textContent=de,R=s(),m=l("div"),p=l("div"),d=l("button"),d.innerHTML=xe,ce=s(),c=l("ul"),j=l("li"),j.innerHTML=v,me=s(),we=l("li"),z=l("button"),z.textContent=et,ke=s(),ue=l("li"),ue.innerHTML=tt,Ie=s(),be=l("li"),be.innerHTML=lt,Ee=s(),fe=l("li"),k=l("button"),k.textContent=at,He=s(),se=l("div"),se.innerHTML=nt,Ne=s(),u=l("div"),W=l("div"),W.innerHTML=st,Ve=s(),K=l("div"),K.innerHTML=ot,Oe=s(),G=l("div"),G.innerHTML=rt,Pe=s(),h=l("div"),f=l("div"),J=l("label"),J.textContent=it,Se=s(),oe=l("div"),oe.innerHTML=dt,De=s(),y=l("div"),F=l("div"),Q=l("label"),Q.textContent=ct,Ze=s(),C=l("select"),I=l("option"),I.textContent=ut,E=l("option"),E.textContent=bt,H=l("option"),H.textContent=pt,qe=s(),X=l("div"),Y=l("label"),Y.textContent=vt,Ue=s(),L=l("select"),N=l("option"),N.textContent=ht,V=l("option"),V.textContent=gt,O=l("option"),O.textContent=mt,Re=s(),$=l("div"),ee=l("label"),ee.textContent=wt,je=s(),M=l("select"),P=l("option"),P.textContent=ft,S=l("option"),S.textContent=yt,D=l("option"),D.textContent=xt,We=s(),Z=l("button"),Z.innerHTML=_t,Ke=s(),pe=l("div"),pe.innerHTML=Ct,Ge=s(),ve=l("div"),ve.innerHTML=Lt,Je=s(),te=l("button"),te.textContent=Mt,Fe=s(),le=l("div"),le.innerHTML=Tt,Qe=s(),re=l("div"),re.innerHTML=Bt,this.h()},l(ie){const ye=qt("svelte-pset25",document.head);A=a(ye,"META",{name:!0,content:!0}),ye.forEach(r),U=o(ie),b=a(ie,"SECTION",{class:!0});var he=i(b);x=a(he,"NAV",{class:!0});var zt=i(x);g=a(zt,"DIV",{class:!0});var _e=i(g);_=a(_e,"A",{href:!0,class:!0,"data-svelte-h":!0}),n(_)!=="svelte-130echy"&&(_.textContent=de),R=o(_e),m=a(_e,"DIV",{class:!0});var kt=i(m);p=a(kt,"DIV",{class:!0});var Ce=i(p);d=a(Ce,"BUTTON",{class:!0,type:!0,title:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),n(d)!=="svelte-1uf5uhq"&&(d.innerHTML=xe),ce=o(Ce),c=a(Ce,"UL",{class:!0});var T=i(c);j=a(T,"LI",{"data-svelte-h":!0}),n(j)!=="svelte-juqfu2"&&(j.innerHTML=v),me=o(T),we=a(T,"LI",{});var It=i(we);z=a(It,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),n(z)!=="svelte-1qwv6wx"&&(z.textContent=et),It.forEach(r),ke=o(T),ue=a(T,"LI",{"data-svelte-h":!0}),n(ue)!=="svelte-1ejrwio"&&(ue.innerHTML=tt),Ie=o(T),be=a(T,"LI",{"data-svelte-h":!0}),n(be)!=="svelte-1wg4okg"&&(be.innerHTML=lt),Ee=o(T),fe=a(T,"LI",{});var Et=i(fe);k=a(Et,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),n(k)!=="svelte-2ibqva"&&(k.textContent=at),Et.forEach(r),T.forEach(r),Ce.forEach(r),kt.forEach(r),_e.forEach(r),zt.forEach(r),He=o(he),se=a(he,"DIV",{class:!0,"data-svelte-h":!0}),n(se)!=="svelte-1axk1q2"&&(se.innerHTML=nt),Ne=o(he),u=a(he,"DIV",{class:!0});var w=i(u);W=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(W)!=="svelte-1gdqj6y"&&(W.innerHTML=st),Ve=o(w),K=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(K)!=="svelte-1q1683a"&&(K.innerHTML=ot),Oe=o(w),G=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(G)!=="svelte-yubxqo"&&(G.innerHTML=rt),Pe=o(w),h=a(w,"DIV",{id:!0});var ae=i(h);f=a(ae,"DIV",{});var ne=i(f);J=a(ne,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(J)!=="svelte-1elzi6x"&&(J.textContent=it),Se=o(ne),oe=a(ne,"DIV",{class:!0,"data-svelte-h":!0}),n(oe)!=="svelte-1nek0y8"&&(oe.innerHTML=dt),De=o(ne),y=a(ne,"DIV",{class:!0,style:!0});var ge=i(y);F=a(ge,"DIV",{class:!0});var Le=i(F);Q=a(Le,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(Q)!=="svelte-1dy4v9n"&&(Q.textContent=ct),Ze=o(Le),C=a(Le,"SELECT",{id:!0,class:!0,"aria-label":!0});var Me=i(C);I=a(Me,"OPTION",{"data-svelte-h":!0}),n(I)!=="svelte-qtemz2"&&(I.textContent=ut),E=a(Me,"OPTION",{"data-svelte-h":!0}),n(E)!=="svelte-qphrza"&&(E.textContent=bt),H=a(Me,"OPTION",{"data-svelte-h":!0}),n(H)!=="svelte-ov28pk"&&(H.textContent=pt),Me.forEach(r),Le.forEach(r),qe=o(ge),X=a(ge,"DIV",{class:!0});var Te=i(X);Y=a(Te,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(Y)!=="svelte-1ylgrto"&&(Y.textContent=vt),Ue=o(Te),L=a(Te,"SELECT",{id:!0,class:!0,"aria-label":!0});var Be=i(L);N=a(Be,"OPTION",{"data-svelte-h":!0}),n(N)!=="svelte-qtemz2"&&(N.textContent=ht),V=a(Be,"OPTION",{"data-svelte-h":!0}),n(V)!=="svelte-qphrza"&&(V.textContent=gt),O=a(Be,"OPTION",{"data-svelte-h":!0}),n(O)!=="svelte-ov28pk"&&(O.textContent=mt),Be.forEach(r),Te.forEach(r),Re=o(ge),$=a(ge,"DIV",{class:!0});var Ae=i($);ee=a(Ae,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(ee)!=="svelte-d0gpuu"&&(ee.textContent=wt),je=o(Ae),M=a(Ae,"SELECT",{id:!0,class:!0,"aria-label":!0});var ze=i(M);P=a(ze,"OPTION",{"data-svelte-h":!0}),n(P)!=="svelte-qtemz2"&&(P.textContent=ft),S=a(ze,"OPTION",{"data-svelte-h":!0}),n(S)!=="svelte-qphrza"&&(S.textContent=yt),D=a(ze,"OPTION",{"data-svelte-h":!0}),n(D)!=="svelte-ov28pk"&&(D.textContent=xt),ze.forEach(r),Ae.forEach(r),ge.forEach(r),We=o(ne),Z=a(ne,"BUTTON",{id:!0,type:!0,class:!0,"data-svelte-h":!0}),n(Z)!=="svelte-1h1u1w8"&&(Z.innerHTML=_t),ne.forEach(r),Ke=o(ae),pe=a(ae,"DIV",{"data-svelte-h":!0}),n(pe)!=="svelte-k308nx"&&(pe.innerHTML=Ct),Ge=o(ae),ve=a(ae,"DIV",{"data-svelte-h":!0}),n(ve)!=="svelte-2smmib"&&(ve.innerHTML=Lt),Je=o(ae),te=a(ae,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),n(te)!=="svelte-muivp7"&&(te.textContent=Mt),ae.forEach(r),Fe=o(w),le=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(le)!=="svelte-19r1zvj"&&(le.innerHTML=Tt),Qe=o(w),re=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(re)!=="svelte-1uw969w"&&(re.innerHTML=Bt),w.forEach(r),he.forEach(r),this.h()},h(){document.title="SNDM",t(A,"name","description"),t(A,"content","Main Page"),t(_,"href","/"),t(_,"class","navbar-brand svelte-1y81bwy"),t(d,"class","btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy"),t(d,"type","button"),t(d,"title","Profil"),t(d,"data-bs-toggle","dropdown"),t(d,"aria-expanded","false"),t(z,"class","dropdown-item"),t(z,"type","button"),t(k,"class","dropdown-item"),t(k,"type","button"),t(c,"class","dropdown-menu dropdown-menu-end"),t(p,"class","btn-group dropdown"),t(m,"class","d-flex"),t(g,"class","container-fluid"),t(x,"class","nav navbar bg-secondary-subtle svelte-1y81bwy"),t(se,"class","sidebar bg-dark svelte-1y81bwy"),t(W,"id","user-container"),W.hidden=!0,t(K,"id","workless-container"),K.hidden=!0,t(G,"id","criminal-container"),G.hidden=!0,t(J,"for","add-login"),t(J,"class","form-label"),t(oe,"class","card-title row add-login"),t(Q,"for","login-add-user-permissions"),t(Q,"class","form-label"),I.__value="None",q(I,I.__value),E.__value="ReadOnly",q(E,E.__value),H.__value="Write",q(H,H.__value),t(C,"id","login-add-user-permissions"),t(C,"class","form-select"),t(C,"aria-label","Permissions"),t(F,"class","col"),t(Y,"for","login-add-workless-permissions"),t(Y,"class","form-label"),N.__value="None",q(N,N.__value),V.__value="ReadOnly",q(V,V.__value),O.__value="Write",q(O,O.__value),t(L,"id","login-add-workless-permissions"),t(L,"class","form-select"),t(L,"aria-label","Permissions"),t(X,"class","col"),t(ee,"for","login-add-criminal-permissions"),t(ee,"class","form-label"),P.__value="None",q(P,P.__value),S.__value="ReadOnly",q(S,S.__value),D.__value="Write",q(D,D.__value),t(M,"id","login-add-criminal-permissions"),t(M,"class","form-select"),t(M,"aria-label","Permissions"),t($,"class","col"),t(y,"class","row"),Ut(y,"padding-top","5px"),t(Z,"id","add-login-button"),t(Z,"type","button"),t(Z,"class","btn btn-outline-danger m-3"),t(te,"class","btn btn-outline-danger m-2"),t(te,"type","button"),t(h,"id","login-container"),h.hidden=!0,t(le,"id","password-changer-container"),le.hidden=!0,t(re,"id","stats-container"),t(u,"class","mid p-3 bg-body-secondary svelte-1y81bwy"),t(b,"class","main svelte-1y81bwy")},m(ie,ye){e(document.head,A),Ht(ie,U,ye),Ht(ie,b,ye),e(b,x),e(x,g),e(g,_),e(g,R),e(g,m),e(m,p),e(p,d),e(p,ce),e(p,c),e(c,j),e(c,me),e(c,we),e(we,z),e(c,ke),e(c,ue),e(c,Ie),e(c,be),e(c,Ee),e(c,fe),e(fe,k),e(b,He),e(b,se),e(b,Ne),e(b,u),e(u,W),e(u,Ve),e(u,K),e(u,Oe),e(u,G),e(u,Pe),e(u,h),e(h,f),e(f,J),e(f,Se),e(f,oe),e(f,De),e(f,y),e(y,F),e(F,Q),e(F,Ze),e(F,C),e(C,I),e(C,E),e(C,H),e(y,qe),e(y,X),e(X,Y),e(X,Ue),e(X,L),e(L,N),e(L,V),e(L,O),e(y,Re),e(y,$),e($,ee),e($,je),e($,M),e(M,P),e(M,S),e(M,D),e(f,We),e(f,Z),e(h,Ke),e(h,pe),e(h,Ge),e(h,ve),e(h,Je),e(h,te),e(u,Fe),e(u,le),e(u,Qe),e(u,re),Xe||(At=[Nt(z,"click",B[4]),Nt(k,"click",B[5])],Xe=!0)},p:Ye,i:Ye,o:Ye,d(ie){ie&&(r(U),r(b)),r(A),Xe=!1,St(At)}}}function Jt(B,A,U){let b,x,g;$e(B,Rt,v=>U(1,b=v)),$e(B,jt,v=>U(2,x=v)),$e(B,Wt,v=>U(3,g=v));var _=localStorage.getItem("auth");const de=localStorage.getItem("current_user");var R=localStorage.getItem("permissions");R&&(R=JSON.parse(R)),(!_||!de||!R)&&(Vt("/login",{replaceState:!0}),xe("InvalidLocalKeys"));let m,p,d;function xe(v){if(m&&p&&d){const me=new Ot(m);p.textContent="Fehler",d.textContent=v,me.toggle()}throw v}function ce(){if(m&&p&&d&&de){const v=new Ot(m);p.textContent="Info",d.textContent="Der akutelle Benutzer ist "+de,v.toggle()}}const c=()=>ce(),j=()=>{localStorage.clear(),Vt("/login",{replaceState:!0})};return B.$$.update=()=>{B.$$.dirty&14&&(m=g,p=x,d=b)},[ce,b,x,g,c,j]}class el extends Dt{constructor(A){super(),Zt(this,A,Jt,Gt,Pt,{})}}export{el as component,$t as universal};
