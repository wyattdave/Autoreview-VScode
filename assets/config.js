let sReviewTemplate ='<div class="mui-row"> <div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Name</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true" id="target-flowName" >{flowName}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">ID</div> <div class="mui--text-black mui--text-body2">{flowId}</div> </div> </div> </div> </div> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Owner</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true">{owner}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Date</div> <div class="mui--text-black mui--text-body2">{date}</div> </div> </div> </div> </div> </div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" id="complexity" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Complexity</div> <div class="mui--text-display3">{complexity}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" id="actions" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Actions</div> <div class="mui--text-display3">{actions}</div> </div> </div> </div> </div> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" id="variables" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Variables</div> <div class="mui--text-display3">{variables}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" id="exceptions" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Exceptions</div> <div class="mui--text-display3">{exceptions}</div> </div> </div> </div> </div> </div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="mui-panel topCardsScroll" style="overflow: hidden;"> <div class="mui--text-black-54 mui--text-title">Overall Rating</div> <div class="mui-divider"></div> {ratingBar} <div> <table style="width:100% "> <tr> <td>Variables: {variable}</td> <td>Composes: {composes}</td> <td>Main: {main}</td> <td>Exception: {exception}</td> <td>{premium}</td> </tr> </table> </div> </div> </div> <div class="mui-col-md-6"> <div class="mui-panel topCardsScroll"> <div class="mui--text-black-54 mui--text-title">Trigger Details</div> <div class="mui-divider"></div> {trigger} </div> </div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Variables <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="variablesInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="variablesSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Value</option> <option value=3>Used</option> <option value=4>Named</option> <option value=5>Constant</option> </select> </div> </div> <div class="mui-divider"></div> <br> {variablesTable} <p><a href="#!" class="topPadding" id="clickVariables">Show Comments</a></p> <div class="topPadding mui-textfield" style="Display:none" id="divVariables"> <textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea> </div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Actions <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="actionInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="actionSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>RunAfter</option> <option value=3>Notes</option> <option value=4>Nested</option> <option value=5>Id</option> </select> </div> </div> <div class="mui-divider"></div> <br> {actionsTable} <p><a href="#!" class="topPadding" id="clickActions">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divActions"><textarea placeholder="Input your comments" id="actionNotes" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Action Inputs <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="inputInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="inputSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Env</option> <option value=3>Inputs</option> </select> </div> </div> <div class="mui-divider"></div> <br> {inputTable} <p><a href="#!" class="topPadding" id="clickInput">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divInput"><textarea id="inputNotes" placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">API Actions <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="apiInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="apiSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Filter</option> <option value=3>Pagination</option> <option value=4>Retry</option> </select> </div> </div> <div class="mui-divider"></div> <br> {apiTable} <p><a href="#!" class="topPadding" id="clickApi">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divApi"><textarea id="actionNotes" placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Exceptions</div> <div class="mui-divider"></div> {exceptionsTable} <p><a href="#!" class="topPadding" id="clickExcept">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divExcept"><textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> </div> <div class="mui-col-md-6"> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Connection References</div> <div class="mui-divider"></div> {connectionsTable} <p><a href="#!" class="topPadding" id="clickConnect">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divConnect"><textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> </div> </div> </div>';

let sReportTemplate='<div class="mui-row"> <div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Name</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true" id="target-flowName" >{flowName}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">ID</div> <div class="mui--text-black mui--text-body2">{flowId}</div> </div> </div> </div> </div> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Owner</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true">{owner}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Date</div> <div class="mui--text-black mui--text-body2">{date}</div> </div> </div> </div> </div> </div> <br> <div class="mui-panel topCardsScroll"> <div class="mui--text-black-54 mui--text-title">Trigger Details</div> <div class="mui-divider"></div> {trigger} </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Variables <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="variablesInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="variablesSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Value</option> <option value=3>Used</option> <option value=4>Named</option> <option value=5>Constant</option> </select> </div> </div> <div class="mui-divider"></div> <br> {variablesTable} <p><a href="#!" class="topPadding" id="clickVariables">Show Comments</a></p> <div class="topPadding mui-textfield" style="Display:none" id="divVariables"> <textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea> </div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Actions <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="actionInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="actionSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>RunAfter</option> <option value=3>Notes</option> <option value=4>Nested</option> <option value=5>Id</option> </select> </div> </div> <div class="mui-divider"></div> <br> {actionsTable} <p><a href="#!" class="topPadding" id="clickActions">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divActions"><textarea placeholder="Input your comments" id="actionNotes" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Action Inputs <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="inputInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="inputSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Env</option> <option value=3>Inputs</option> </select> </div> </div> <div class="mui-divider"></div> <br> {inputTable} <p><a href="#!" class="topPadding" id="clickInput">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divInput"><textarea id="inputNotes" placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">API Actions <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="apiInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="apiSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Filter</option> <option value=3>Pagination</option> <option value=4>Retry</option> </select> </div> </div> <div class="mui-divider"></div> <br> {apiTable} <p><a href="#!" class="topPadding" id="clickApi">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divApi"><textarea id="actionNotes" placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Exceptions</div> <div class="mui-divider"></div> {exceptionsTable} <p><a href="#!" class="topPadding" id="clickExcept">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divExcept"><textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> </div> <div class="mui-col-md-6"> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Connection References</div> <div class="mui-divider"></div> {connectionsTable} <p><a href="#!" class="topPadding" id="clickConnect">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divConnect"><textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> </div> </div> </div> </div>';

let sSolutionTemplate=' <div id="content" class="mui-container-fluid"> <div class="mui-row"> <div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Name</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true" id="target-flowName" >{flowName}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Version</div> <div class="mui--text-black mui--text-body2">{flowId}</div> </div> </div> </div> </div> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Publisher</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true">{owner}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Date</div> <div class="mui--text-black mui--text-body2">{date}</div> </div> </div> </div> </div> </div> <br> <div id="tables"> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Flows </div> <div class="mui-divider"></div> <br> {flowsTable} </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Connection References </div> <div class="mui-divider"></div> <br> {connectionsTable} </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Environment Variables </div> <div class="mui-divider"></div> <br> {variablesTable} </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Missing Dependencies </div> <div class="mui-divider"></div> <br> {dependenciesTable} </div> <br> </div> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Custom Connectors </div> <div class="mui-divider"></div> <br> {connectorsTable} </div> <div class="mui-panel" style="display: none;" id="json"> <div class="mui--text-black-54 mui--text-title">JSON Schema </div> <div class="mui-divider"></div> <br> <pre>{json}</pre> </div> </div> </div> </div>';

let changeTemplate= '<div id="content" class="mui-container-fluid"> <div class="mui-row"> <div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Name</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true" id="target-flowName" >{flowName}</div> </div> </div> <div class="mui-col-md-6"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Date</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true">{date}</div> </div> </div> </div> <br> <div class="mui-panel" id="tables"> <div class="mui--text-black-54 mui--text-title">Changes </div> <div class="mui-divider"></div> <br> {changeTable} </div> <div class="mui-panel" style="display: none;" id="json"> <div class="mui--text-black-54 mui--text-title">JSON Schema </div> <div class="mui-divider"></div> <br> <pre>{json}</pre> </div> <br> </div> </div> </div>';

let sExceptionTemplate ='  <div id="content" class="mui-container-fluid" > <div class="mui-row"> <div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Name</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true" id="target-flowName" >{flowName}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Version</div> <div class="mui--text-black mui--text-body2">{flowId}</div> </div> </div> </div> </div> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Publisher</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true">{owner}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Date</div> <div class="mui--text-black mui--text-body2">{date}</div> </div> </div> </div> </div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Flows </div> <div class="mui-divider"></div> <br> {flowsTable} <p><a href="#!" class="topPadding" id="clickFlows">Show Comments</a></p> <div class="topPadding mui-textfield" style="Display:none" id="divFlows"> <textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea> </div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Exceptions <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="exceptiopnsInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="exceptionsSelect" class="filters"> <option value=0 selected="selected">Flow</option> <option value=1>Area</option> <option value=2>Value</option> <option value=3>Level</option> <option value=4>Failed Reason</option> </select> </div> </div> <div class="mui-divider"></div> <br> {exceptionsTable} <p><a href="#!" class="topPadding" id="clickExceptions">Show Comments</a></p> <div class="topPadding mui-textfield" style="Display:none" id="divExceptions"> <textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea> </div> </div> </div> </div> </div> ';
const sMailTemplate ="mailto:auto-review@outlook.com?subject=Auto review Bug Report&body=Thank you for sending this bug report, please paste the definition below and check for any personal information before sending:";
const urlConnectors ="https://powerautomate.microsoft.com/en-us/api/connectors/all/";
const apiUrl = 'https://us.api.flow.microsoft.com/providers/Microsoft.ProcessSimple';
const apiUrlQuery='?api-version=2016-11-01&$expand=swagger,properties.connectionreferences.apidefinition,properties.definitionSummary.operations.apiOperation,operationDefinition,plan,properties.throttleData,properties.estimatedsuspensiondata';

let oConfigReferenceTemplate = {
  "complexity": "default",
  "ratings": "default",
  "naming": "default",
  "score":"default",
};

let aDownloadConfig = [
  {
   "Name":"Actions",
    "headers": {
     "Name":"Name",
      "step": "Step",
      "Type": "Type",
      "id": "MetaID",
      "hasId": "HashId",
      "tier":"Tier",
      "connector": "Connector",
      "imgURL":"Connector Img",
      "runAfter": "Run After",
      "exception": "Exception",
      "index": "Index",
      "Complexity": "Complexity",   
      "detail": "Detail",
      "filter": "Filter",
      "pagination": "Pagination",
      "secure": "Secure Data",
      "retry": "Retry Policy",
      "timeout": "Timeout",
      "positionInfo":"Internal/Route",
      "position": "Previous",
      "notes":"Notes",
      "parent":"Parent",
      "positionIndex":"Previous ID",
      "positionType":"Previous Type",
      "nested": "Nests"
    },
  },
  {
   "Name":"Variables",
    "headers": {
     "Name":"Name",
      "Type": "Type",
      "value": "Value",
      "used": "Used",
      "named": "Named",   
      "local": "Local",   
    },
  },
  {
   "Name":"Connections",
    "headers": {
      "conName": "Name",
      "appId": "AppId",
      "opId": "OpId",
      "count": "Count"
      
    },
  },
];

let oRatingsTemplate = {
  "complexityAm": 50,
  "complexityRe": 100,
  "actionsAm": 30,
  "actionsRe": 50,
  "variablesAm": 3,
  "variablesRe": 5,
  "exceptionsAm": 1,
  "exceptionsRe": 0,
};

let aScoringTemplate = [
  {
   "Name":"exceptionScope",
   "Score":10,
   "Note":"score added for exception scope",
  },
  {
   "Name":"mainScope",
   "Score":10,
   "Note":"score added for main scope",
  },
  {
   "Name":"varNaming",
   "Score":10,
   "Note":"score added for following variable naming convention (see aRatingsTemplate)",
  },
  {
   "Name":"varUsed",
   "Score":5,
   "Note":"score added for if all variables used",
  },
  {
   "Name":"varConstant",
   "Score":5,
   "Note":"score added for naming variables with value in all capitals",
  },
  {
   "Name":"variables",
   "Score":10,
   "Note":"score given for variables before deductions",
  },
  {
   "Name":"variablesMin",
   "Score":0,
   "Note":"minimum allowed variables before deductions",
  },
  {
   "Name":"variablesDeduction",
   "Score":1,
   "Note":"score added for exception scope",
  },
  {
   "Name":"composes",
   "Score":10,
   "Note":"score given for composes before deductions",
  },
  {
   "Name":"composesMin",
   "Score":0,
   "Note":"minimum allowed composes before deductions",
  },
  {
   "Name":"composesDeduction",
   "Score":5,
   "Note":"score deducted for every scope used",
  },
  {
   "Name":"connections",
   "Score":10,
   "Note":"score given for connections before deductions",
  },
  {
   "Name":"connectionsMin",
   "Score":3,
   "Note":"minimum allowed connections before deductions",
  },
  {
   "Name":"connectionsDeduction",
   "Score":2,
   "Note":"score deducted for every connections used",
  },

  {
   "Name":"complexityRed",
   "Score":0,
   "Note":"score added for red scoring complexity",
  },
  {
   "Name":"complexityAmber",
   "Score":15,
   "Note":"score added for amber scoring complexity",
  },
  {
   "Name":"complexityGreen",
   "Score":20,
   "Note":"score added green scoring complexity",
  },

  {
   "Name":"actionsRed",
   "Score":0,
   "Note":"score added for red scoring actions",
  },
  {
   "Name":"actionsAmber",
   "Score":5,
   "Note":"score added for amber scoring actions",
  },
  {
   "Name":"actionsGreen",
   "Score":10,
   "Note":"score added green scoring actions"
  },
];

let oNamingTemplate = {
  "char": 1,
  "data": [
    { "Type": "boolean", "Letter": "b" },
    { "Type": "string", "Letter": "s" },
    { "Type": "integer", "Letter": "i" },
    { "Type": "float", "Letter": "f" },
    { "Type": "object", "Letter": "o" },
    { "Type": "array", "Letter": "a" }
  ]
};

let aComplexityTemplate = [
  {
   "Name":"GetItemsshared_sharepointonline",
    "Complexity": 1,
  },
  {
   "Name":"CopyFileAsyncshared_sharepointonline",
    "Complexity": 1,
  },
  {
   "Name":"GetFileContentshared_sharepointonline",
    "Complexity": 1,
  },
  {
   "Name":"GetFileContentByPathshared_sharepointonline",
    "Complexity": 1,
  },
  {
   "Name":"HttpRequestshared_sharepointonline",
    "Complexity": 5,
  },
  {
   "Name":"DeleteFileshared_sharepointonline",
    "Complexity": 1,
  },
  {
   "Name":"ConvertFileshared_onedriveforbusiness",
    "Complexity": 2,
  },
  {
   "Name":"ConvertFileByPathshared_onedriveforbusiness",
    "Complexity": 1,
  },
  {
   "Name":"CopyDriveFileshared_onedriveforbusiness",
    "Complexity": 1,
  },
  {
   "Name":"CopyDriveFileByPathshared_onedriveforbusiness",
    "Complexity": 1,
  },
  {
   "Name":"ListFolderV2shared_onedriveforbusiness",
    "Complexity": 1,
  },
  {
   "Name":"ListRootFoldershared_onedriveforbusiness",
    "Complexity": 1,
  },
  {
   "Name":"DeleteFileshared_onedriveforbusiness",
    "Complexity": 1,
  },
  {
   "Name":"GetItemsshared_excelonlinebusiness",
    "Complexity": 1,
  },
  {
   "Name":"PatchItemshared_excelonlinebusiness",
    "Complexity": 1,
  },
  {
   "Name":"RunScriptProdshared_excelonlinebusiness",
    "Complexity": 5,
  },
  {
   "Name":"ListGroupMembersshared_office365groups",
    "Complexity": 1,
  },
  {
   "Name":"SharedMailboxSendEmailV2shared_office365",
    "Complexity": 1,
  },
  {
   "Name":"StartAndWaitForAnApprovalshared_approvals",
    "Complexity": 2,
  },
  {
   "Name":"ApiConnection",
    "Complexity": 2,
  },
  {
   "Name":"ApiConnectionWebhook",
    "Complexity": 2,
  },
  {
   "Name":"ApiManagement",
    "Complexity": 2,
  },
  {
   "Name":"AppendToArrayVariable",
    "Complexity": 2,
  },
  {
   "Name":"AppendToStringVariable",
    "Complexity": 2,
  },
  {
   "Name":"Batch",
    "Complexity": 5,
  },
  {
   "Name":"Compose",
    "Complexity": 2,
  },
  {
   "Name":"DecrementVariable",
    "Complexity": 2,
  },
  {
   "Name":"Expression",
    "Complexity": 2,
  },
  {
   "Name":"FlatFileDecoding",
    "Complexity": 5,
  },
  {
   "Name":"FlatFileEncoding",
    "Complexity": 5,
  },
  {
   "Name":"Foreach",
    "Complexity": 4,
  },
  {
   "Name":"Function",
    "Complexity": 5,
  },
  {
   "Name":"Http",
    "Complexity": 5,
  },
  {
   "Name":"HttpWebhook",
    "Complexity": 5,
  },
  {
   "Name":"If",
    "Complexity": 3,
  },
  {
   "Name":"IncrementVariable",
    "Complexity": 2,
  },
  {
   "Name":"InitializeVariable",
    "Complexity": 1,
  },
  {
   "Name":"IntegrationAccountArtifactLookup",
    "Complexity": 5,
  },
  {
   "Name":"Join",
    "Complexity": 3,
  },
  {
   "Name":"Liquid",
    "Complexity": 5,
  },
  {
   "Name":"ParseJson",
    "Complexity": 3,
  },
  {
   "Name":"Query",
    "Complexity": 3,
  },
  {
   "Name":"Recurrence",
    "Complexity": 5,
  },
  {
   "Name":"Request",
    "Complexity": 1,
  },
  {
   "Name":"Response",
    "Complexity": 1,
  },
  {
   "Name":"Scope",
    "Complexity": -1,
  },
  {
   "Name":"Select",
    "Complexity": 3,
  },
  {
   "Name":"SendToBatch",
    "Complexity": 5,
  },
  {
   "Name":"SetVariable",
    "Complexity": 2,
  },
  {
   "Name":"SlidingWindow",
    "Complexity": 5,
  },
  {
   "Name":"Switch",
    "Complexity": 4,
  },
  {
   "Name":"Table",
    "Complexity": 2,
  },
  {
   "Name":"Terminate",
    "Complexity": -1,
  },
  {
   "Name":"Until",
    "Complexity": 4,
  },
  {
   "Name":"Wait",
    "Complexity": 1,
  },
  {
   "Name":"Workflow",
    "Complexity": 5,
  },
  {
   "Name":"XmlValidation",
    "Complexity": 3,
  },
  {
   "Name":"Xslt",
    "Complexity": 3,
  },
  {
   "Name":"OpenApiConnection",
    "Complexity": 1,
  },
  {
   "Name":"Ai connection",
    "Complexity": 5,
  },
  {
   "Name":"loop till",
    "Complexity": 4,
  },
  {
   "Name":"OpenApiConnectionWebhook",
    "Complexity": 2,
  },
  {
   "Name":"Do_until",
    "Complexity": 4,
  },
];

function configs(){
  return {
    "sReviewTemplate":sReviewTemplate,
    "sReportTemplate":sReportTemplate,
    "sSolutionTemplate":sSolutionTemplate,
    "changeTemplate":changeTemplate,
    "sExceptionTemplate":sExceptionTemplate,
    "oConfigReferenceTemplate":oConfigReferenceTemplate,
    "aDownloadConfig":aDownloadConfig,
    "oRatingsTemplate":oRatingsTemplate,
    "aScoringTemplate":aScoringTemplate,
    "oNamingTemplate":oNamingTemplate,
    "aComplexityTemplate":aComplexityTemplate
  }
}
module.exports = {
  configs
};