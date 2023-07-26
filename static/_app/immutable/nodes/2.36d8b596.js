import{s as $e,n as ze}from"../chunks/scheduler.e108d1fd.js";import{S as et,i as tt,g as l,s as n,z as lt,h as a,f as i,c as o,j as v,x as s,k as t,A as T,l as at,y as e,a as Xe}from"../chunks/index.a9aad4a7.js";const st=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:st},Symbol.toStringTag,{value:"Module"}));function nt(Ye){let L,ee,u,j,Me='<div class="container-fluid"><a href="/" class="navbar-brand svelte-1y81bwy">SNDI</a> <div class="d-flex"><div class="btn-group dropdown"><button class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" title="Profil" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg></button> <ul class="dropdown-menu dropdown-menu-end"><li><h6 class="dropdown-header">Profil</h6></li> <li><button class="dropdown-item" type="button">Aktueller Benutzer</button></li> <li><button class="dropdown-item" type="button">Passwort ändern</button></li> <li><button id="login-creator" class="dropdown-item" type="button">Logins Verwalten</button></li> <li><button class="dropdown-item" type="button">Ausloggen</button></li></ul></div></div></div>',re,K,Be=`<div class="bg-dark-subtle"><div class="btn-group p-2 svelte-1y81bwy"><button id="add" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Hinzufügen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="edit" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Bearbeiten" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="del" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Entfernen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="cancel" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Schließen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg></button></div></div> <ul class="sidebar-list list-group list-group-flush svelte-1y81bwy" id="sidebar-list"></ul> <div class="sidebar-search input-group pb-1 px-1 svelte-1y81bwy"><button id="advanced" class="btn btn-outline-secondary dropdown-toggle hide-arrow svelte-1y81bwy" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside" title="Nach Parametern Suchen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path></svg></button> <ul class="dropdown-menu" id="group-select-dropdown"><li><h6 class="dropdown-header">Gruppe</h6></li> <form class="px-3 py-1" action="javascript:handleAdvanced()"><div class="mb-2"><select id="group-select" class="form-select" aria-label="Group Select"></select></div> <button id="button-group-select" type="submit" class="btn btn-primary"><span id="spinner-group-select" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
                        Suchen</button></form></ul> <input type="text" class="form-control" placeholder="Suche" id="search"/> <button id="select-button" class="btn btn-outline-secondary dropdown-toggle" type="button" title="Kategorie" data-bs-toggle="dropdown" aria-expanded="false">Bürger</button> <ul class="dropdown-menu dropdown-menu-end"><li><h6 class="dropdown-header">Kategorie</h6></li> <li><button id="user" class="dropdown-item active" type="button">Bürger</button></li> <li><button id="workless" class="dropdown-item" type="button">Arbeitslosenreg.</button></li> <li><button id="criminal" class="dropdown-item" type="button">Kriminalregister</button></li></ul></div>`,ie,r,k,Te='<div class="card-title row"><div class="col"><label for="forename" class="form-label">Vorname</label> <input id="forename" type="text" class="form-control" placeholder="Vorname" aria-label="Vorname" readonly=""/></div> <div class="col"><label for="surname" class="form-label">Nachname</label> <input id="surname" type="text" class="form-control" placeholder="Nachname" aria-label="Nachname" readonly=""/></div></div> <div class="row"><div class="col"><label for="account" class="form-label">Account</label> <input id="account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div> <div class="col"><label for="role" class="form-label">Gruppe</label> <input id="role" type="text" class="form-control" placeholder="Gruppe" aria-label="Gruppe" readonly=""/></div></div> <button id="user-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="user-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="user-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="user-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="user-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button>',de,H,Le='<div class="card-title row"><div class="col"><label for="workless-select" class="form-label">Account</label> <div class="input-group mb-3 workless-select"><button id="workless-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="workless-select-dropdown" class="dropdown-menu"></ul> <input id="workless-account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div></div> <div class="col"><label for="old-company" class="form-label">Vorheriger Betrieb</label> <input id="old-company" type="text" class="form-control" placeholder="Vorgeriger Betrieb" aria-label="Vorgeriger Betrieb" readonly=""/></div></div> <div class="row"><div class="col form-group"><label for="date-of-dismiss" class="form-label">Datum der Entlassung</label> <input type="date" class="form-control" id="date-of-dismiss" readonly=""/></div> <div class="col"><label for="currently-workless" class="form-label">Aktuell Arbeitslos</label> <div class="input-group mb-3 currently-select"><button id="currently-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswahl">Auswahl</button> <ul id="currently-select-dropdown" class="dropdown-menu"><li><button id="yes-currently" class="dropdown-item" type="button">Ja</button></li> <li><button id="no-currently" class="dropdown-item" type="button">Nein</button></li></ul> <input id="currently-workless" type="text" class="form-control" placeholder="Auswahl" aria-label="Auswahl" readonly=""/></div></div></div> <div id="only-on-currently-no" class="row" hidden=""><div class="col"><label for="new-company" class="form-label">Neuer Betrieb</label> <input id="new-company" type="text" class="form-control" placeholder="Neuer Betrieb" aria-label="Neuer Betrieb" readonly=""/></div> <div class="col"><label for="total-time" class="form-label">Insgeammte arbeitslose Zeit</label> <input id="total-time" type="text" class="form-control" placeholder="Insgeammte arbeitslose Zeit" aria-label="Insgeammte arbeitslose Zeit" readonly=""/></div></div> <button id="workless-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="workless-confirm-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="workless-abort-button" class="btn btn-outline-danger m-3" type="button" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 justify-content-center get-user" style="max-width: 160px;">Bürger abrufen</button>',ce,N,ke=`<div class="card-title row"><div class="col"><label for="criminal-select" class="form-label">Beschuldigter</label> <div class="input-group mb-3 criminal-select"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="criminal-select-dropdown" class="dropdown-menu"></ul> <input id="criminal-account" type="text" class="form-control" placeholder="Beschuldigter" aria-label="Beschuldigter" readonly=""/></div></div> <div class="col"><label for="kind" class="form-label">Art</label> <input id="kind" type="text" class="form-control" placeholder="Art" aria-label="Art" readonly=""/></div></div> <div class="row"><div class="col"><label for="accuser-select" class="form-label">Anzeiger</label> <div class="input-group mb-3 accuser-select"><button id="accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="accuser-select-dropdown" class="dropdown-menu"></ul> <input id="accuser" type="text" class="form-control" placeholder="Anzeiger" aria-label="Anzeiger" readonly=""/></div></div> <div class="col"><label for="police-consultant" class="form-label">Sachberater Polizei</label> <div class="input-group mb-3 police-consultant-select"><button id="police-consultant-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="police-consultant-select-dropdown" class="dropdown-menu"></ul> <input id="police-consultant" type="text" class="form-control" placeholder="Sachberater Polizei" aria-label="Sachberater Polizei" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="lawyer-culprit" class="form-label">Anwalt des Beschuldigtens</label> <div class="input-group mb-3 lawyer-culprit-select"><button id="lawyer-culprit-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-culprit-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-culprit" type="text" class="form-control" placeholder="Anwalt des Beschuldigtens" aria-label="Anwalt des Beschuldigtens" readonly=""/></div></div> <div class="col"><label for="lawyer-accuser" class="form-label">Anwalt des Anzeigers</label> <div class="input-group mb-3 lawyer-accuser-select"><button id="lawyer-accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-accuser-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-accuser" type="text" class="form-control" placeholder="Anwalt des Anzeigers" aria-label="Anwalt des Anzeigers" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="facts" class="form-label">Tatbestand</label> <input id="facts" type="text" class="form-control" placeholder="Tatbestand" aria-label="Tatbestand" readonly=""/></div></div> <div class="row"><div class="col"><label for="time-of-crime" class="form-label">Zeitpunkt der Tat</label> <input id="time-of-crime" type="text" class="form-control" placeholder="Zeitpunkt der Tat" aria-label="Zeitpunkt der Tat" readonly=""/></div> <div class="col"><label for="location-of-crime" class="form-label">Ort der Tat</label> <input id="location-of-crime" type="text" class="form-control" placeholder="Ort der Tat" aria-label="Ort der Tat" readonly=""/></div></div> <div class="row"><div class="col"><label for="note" class="form-label">Kommentar</label> <input id="note" type="text" class="form-control" placeholder="Kommentar" aria-label="Kommentar" readonly=""/></div></div> <div class="row"><div class="col"><label for="verdict" class="form-label">Urteil</label> <div class="input-group mb-3 verdict-select"><button id="verdict-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen">Urteil</button> <ul id="verdict-select-dropdown" class="dropdown-menu"><li><button id="no-yet" class="dropdown-item" type="button">a.) Noch kein
                                    Verfahren</button></li> <li><button id="guilty" class="dropdown-item" type="button">b.) Schuldig</button></li> <li><button id="innocent" class="dropdown-item" type="button">c.) Unschuldig</button></li></ul> <input id="verdict" type="text" class="form-control" placeholder="Urteil" aria-label="Urteil" readonly=""/></div></div></div> <button id="criminal-add-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="criminal-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="criminal-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 get-user" style="max-width: 160px;">Bürger abrufen</button>`,ue,d,b,V,He="Einen Login hinzufügen:",be,U,Ne='<div class="col"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-add-select-dropdown" class="dropdown-menu"></ul> <input id="login-add-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <div class="col"><label for="login-add-password" class="form-label">Passwort</label> <input id="login-add-password" type="password" class="form-control" placeholder="Passwort" aria-label="Passwort"/></div>',pe,p,O,E,Ve=`Rechte für
                            Bürger`,ve,h,m,Oe="None",f,Ee="ReadOnly",y,Ie="Write",he,I,P,Pe=`Rechte für
                            Arbeitslose`,ge,g,x,Se="None",_,De="ReadOnly",C,Ze="Write",we,S,D,qe=`Rechte für
                            das Kriminalregister`,me,w,A,Re="None",z,We="ReadOnly",M,je="Write",fe,B,Ke=`<span id="add-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
                    Hinzufügen`,ye,F,Ue=`<label for="delete-login" class="form-label">Einen Login entfernen:</label> <div class="card-title row col delete-login"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-delete-select-dropdown" class="dropdown-menu"></ul> <input id="login-delete-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <button id="delete-login-button" type="button" class="btn btn-outline-danger m-3"><span id="delete-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
                    Entfernen</button>`,xe,Q,Ge=`<p style="margin: 0;">Alle Logins entfernen:</p> <button id="delete-all-logins-button" type="button" class="btn btn-outline-danger m-3 delete-all-logins"><span id="delete-all-logins-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
                    Alle Logins löschen</button>`,_e,Z,Je="Schließen",Ce,q,Fe=`<div><label for="password-changer" class="form-label">Passwort ändern:</label> <div class="card-title row password-changer"><div class="col"><label for="new-password" class="form-label">Neues Passwort</label> <input id="new-password" type="password" class="form-control" placeholder="Neues Passwort" aria-label="Neues Passwort"/></div> <div class="col"><label for="new-password-wdh" class="form-label">Wiederholen</label> <input id="new-password-wdh" type="password" class="form-control" placeholder="Wiederholen" aria-label="Wiederholen"/></div></div> <button id="change-password-button" type="button" class="btn btn-outline-danger m-3"><span id="change-password-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Ändern</button></div> <button class="btn btn-outline-danger m-2" type="button">Schließen</button>`,Ae,G,Qe='<div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Name</h5> <p class="card-text" id="name"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Version</h5> <p class="card-text" id="version"></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Entwickler</h5> <p class="card-text" id="devs"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Repository</h5> <p class="card-text"><a target="_blank" id="repo"></a></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Beschreibung</h5> <p class="card-text" id="description"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Bürger insgesammt</h5> <p class="card-text" id="users"></p></div></div></div></div>';return{c(){L=l("meta"),ee=n(),u=l("section"),j=l("nav"),j.innerHTML=Me,re=n(),K=l("div"),K.innerHTML=Be,ie=n(),r=l("div"),k=l("div"),k.innerHTML=Te,de=n(),H=l("div"),H.innerHTML=Le,ce=n(),N=l("div"),N.innerHTML=ke,ue=n(),d=l("div"),b=l("div"),V=l("label"),V.textContent=He,be=n(),U=l("div"),U.innerHTML=Ne,pe=n(),p=l("div"),O=l("div"),E=l("label"),E.textContent=Ve,ve=n(),h=l("select"),m=l("option"),m.textContent=Oe,f=l("option"),f.textContent=Ee,y=l("option"),y.textContent=Ie,he=n(),I=l("div"),P=l("label"),P.textContent=Pe,ge=n(),g=l("select"),x=l("option"),x.textContent=Se,_=l("option"),_.textContent=De,C=l("option"),C.textContent=Ze,we=n(),S=l("div"),D=l("label"),D.textContent=qe,me=n(),w=l("select"),A=l("option"),A.textContent=Re,z=l("option"),z.textContent=We,M=l("option"),M.textContent=je,fe=n(),B=l("button"),B.innerHTML=Ke,ye=n(),F=l("div"),F.innerHTML=Ue,xe=n(),Q=l("div"),Q.innerHTML=Ge,_e=n(),Z=l("button"),Z.textContent=Je,Ce=n(),q=l("div"),q.innerHTML=Fe,Ae=n(),G=l("div"),G.innerHTML=Qe,this.h()},l(J){const $=lt("svelte-pset25",document.head);L=a($,"META",{name:!0,content:!0}),$.forEach(i),ee=o(J),u=a(J,"SECTION",{class:!0});var X=v(u);j=a(X,"NAV",{class:!0,"data-svelte-h":!0}),s(j)!=="svelte-qlc8r4"&&(j.innerHTML=Me),re=o(X),K=a(X,"DIV",{class:!0,"data-svelte-h":!0}),s(K)!=="svelte-3iw2ll"&&(K.innerHTML=Be),ie=o(X),r=a(X,"DIV",{class:!0});var c=v(r);k=a(c,"DIV",{id:!0,"data-svelte-h":!0}),s(k)!=="svelte-12km6ig"&&(k.innerHTML=Te),de=o(c),H=a(c,"DIV",{id:!0,"data-svelte-h":!0}),s(H)!=="svelte-1bg6n31"&&(H.innerHTML=Le),ce=o(c),N=a(c,"DIV",{id:!0,"data-svelte-h":!0}),s(N)!=="svelte-1nfmse6"&&(N.innerHTML=ke),ue=o(c),d=a(c,"DIV",{id:!0});var R=v(d);b=a(R,"DIV",{});var W=v(b);V=a(W,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(V)!=="svelte-1elzi6x"&&(V.textContent=He),be=o(W),U=a(W,"DIV",{class:!0,"data-svelte-h":!0}),s(U)!=="svelte-1kchv48"&&(U.innerHTML=Ne),pe=o(W),p=a(W,"DIV",{class:!0,style:!0});var Y=v(p);O=a(Y,"DIV",{class:!0});var te=v(O);E=a(te,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(E)!=="svelte-1bkw7t5"&&(E.textContent=Ve),ve=o(te),h=a(te,"SELECT",{id:!0,class:!0,"aria-label":!0});var le=v(h);m=a(le,"OPTION",{"data-svelte-h":!0}),s(m)!=="svelte-qtemz2"&&(m.textContent=Oe),f=a(le,"OPTION",{"data-svelte-h":!0}),s(f)!=="svelte-qphrza"&&(f.textContent=Ee),y=a(le,"OPTION",{"data-svelte-h":!0}),s(y)!=="svelte-ov28pk"&&(y.textContent=Ie),le.forEach(i),te.forEach(i),he=o(Y),I=a(Y,"DIV",{class:!0});var ae=v(I);P=a(ae,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(P)!=="svelte-1ak2on"&&(P.textContent=Pe),ge=o(ae),g=a(ae,"SELECT",{id:!0,class:!0,"aria-label":!0});var se=v(g);x=a(se,"OPTION",{"data-svelte-h":!0}),s(x)!=="svelte-qtemz2"&&(x.textContent=Se),_=a(se,"OPTION",{"data-svelte-h":!0}),s(_)!=="svelte-qphrza"&&(_.textContent=De),C=a(se,"OPTION",{"data-svelte-h":!0}),s(C)!=="svelte-ov28pk"&&(C.textContent=Ze),se.forEach(i),ae.forEach(i),we=o(Y),S=a(Y,"DIV",{class:!0});var ne=v(S);D=a(ne,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(D)!=="svelte-jkapt"&&(D.textContent=qe),me=o(ne),w=a(ne,"SELECT",{id:!0,class:!0,"aria-label":!0});var oe=v(w);A=a(oe,"OPTION",{"data-svelte-h":!0}),s(A)!=="svelte-qtemz2"&&(A.textContent=Re),z=a(oe,"OPTION",{"data-svelte-h":!0}),s(z)!=="svelte-qphrza"&&(z.textContent=We),M=a(oe,"OPTION",{"data-svelte-h":!0}),s(M)!=="svelte-ov28pk"&&(M.textContent=je),oe.forEach(i),ne.forEach(i),Y.forEach(i),fe=o(W),B=a(W,"BUTTON",{id:!0,type:!0,class:!0,"data-svelte-h":!0}),s(B)!=="svelte-q7se2l"&&(B.innerHTML=Ke),W.forEach(i),ye=o(R),F=a(R,"DIV",{"data-svelte-h":!0}),s(F)!=="svelte-urn5kl"&&(F.innerHTML=Ue),xe=o(R),Q=a(R,"DIV",{"data-svelte-h":!0}),s(Q)!=="svelte-cbbej8"&&(Q.innerHTML=Ge),_e=o(R),Z=a(R,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),s(Z)!=="svelte-muivp7"&&(Z.textContent=Je),R.forEach(i),Ce=o(c),q=a(c,"DIV",{id:!0,"data-svelte-h":!0}),s(q)!=="svelte-19pohwn"&&(q.innerHTML=Fe),Ae=o(c),G=a(c,"DIV",{id:!0,"data-svelte-h":!0}),s(G)!=="svelte-1pff8ao"&&(G.innerHTML=Qe),c.forEach(i),X.forEach(i),this.h()},h(){document.title="SNDM",t(L,"name","description"),t(L,"content","Main Page"),t(j,"class","nav navbar bg-secondary-subtle svelte-1y81bwy"),t(K,"class","sidebar bg-dark svelte-1y81bwy"),t(k,"id","user-container"),k.hidden=!0,t(H,"id","workless-container"),H.hidden=!0,t(N,"id","criminal-container"),N.hidden=!0,t(V,"for","add-login"),t(V,"class","form-label"),t(U,"class","card-title row add-login"),t(E,"for","login-add-user-permissions"),t(E,"class","form-label"),m.__value="None",T(m,m.__value),f.__value="ReadOnly",T(f,f.__value),y.__value="Write",T(y,y.__value),t(h,"id","login-add-user-permissions"),t(h,"class","form-select"),t(h,"aria-label","Permissions"),t(O,"class","col"),t(P,"for","login-add-workless-permissions"),t(P,"class","form-label"),x.__value="None",T(x,x.__value),_.__value="ReadOnly",T(_,_.__value),C.__value="Write",T(C,C.__value),t(g,"id","login-add-workless-permissions"),t(g,"class","form-select"),t(g,"aria-label","Permissions"),t(I,"class","col"),t(D,"for","login-add-criminal-permissions"),t(D,"class","form-label"),A.__value="None",T(A,A.__value),z.__value="ReadOnly",T(z,z.__value),M.__value="Write",T(M,M.__value),t(w,"id","login-add-criminal-permissions"),t(w,"class","form-select"),t(w,"aria-label","Permissions"),t(S,"class","col"),t(p,"class","row"),at(p,"padding-top","5px"),t(B,"id","add-login-button"),t(B,"type","button"),t(B,"class","btn btn-outline-danger m-3"),t(Z,"class","btn btn-outline-danger m-2"),t(Z,"type","button"),t(d,"id","login-container"),d.hidden=!0,t(q,"id","password-changer-container"),q.hidden=!0,t(G,"id","stats-container"),t(r,"class","mid p-3 bg-body-secondary svelte-1y81bwy"),t(u,"class","main svelte-1y81bwy")},m(J,$){e(document.head,L),Xe(J,ee,$),Xe(J,u,$),e(u,j),e(u,re),e(u,K),e(u,ie),e(u,r),e(r,k),e(r,de),e(r,H),e(r,ce),e(r,N),e(r,ue),e(r,d),e(d,b),e(b,V),e(b,be),e(b,U),e(b,pe),e(b,p),e(p,O),e(O,E),e(O,ve),e(O,h),e(h,m),e(h,f),e(h,y),e(p,he),e(p,I),e(I,P),e(I,ge),e(I,g),e(g,x),e(g,_),e(g,C),e(p,we),e(p,S),e(S,D),e(S,me),e(S,w),e(w,A),e(w,z),e(w,M),e(b,fe),e(b,B),e(d,ye),e(d,F),e(d,xe),e(d,Q),e(d,_e),e(d,Z),e(r,Ce),e(r,q),e(r,Ae),e(r,G)},p:ze,i:ze,o:ze,d(J){J&&(i(ee),i(u)),i(L)}}}class dt extends et{constructor(L){super(),tt(this,L,null,nt,$e,{})}}export{dt as component,it as universal};
