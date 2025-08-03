const sExceptLink ="concat('https://make.powerautomate.com/manage/environments/', workflow()?['tags']?['environmentName']";
const sExceptLink2 ="concat('https://make.powerautomate.com/manage/environments/',workflow()?['tags']?['environmentName']";
const regExpEnviron = new RegExp("@parameters(.*?)\\)", "gm");
const regExpEnviron2 = new RegExp("@{parameters(.*?)\\)", "gm");

function CreateReview(
  $inputString,
  sName,
  sId,
  aComplexity,
  aNaming,
  aConnectionTier,
  sOwner,
  sEnvironment
) {
    let aActionReturn = [];
    let aVariableReturn = [];
    let aConnectionReturn = [];
    let aExceptionList = [];
    let aApiList = [];
    let aActionObjects = [];
    let aConnectionReferences=[];
    let sError = "";

    let sTrigger = "unknown";
    let sTriggerParam = "none";
    let sTriggerData = "none";
    let sTriggerConfig = "none";
    let sTriggerExpress = "none";
    let sTriggerInputs = "none";
    let sTriggerRecur = "none";

    if (sOwner == "" || sOwner == undefined) {
    sOwner = "please input";
    }

    const oInput = JSON.parse($inputString);
    const aActions = getChildren(
        oInput.properties.definition,
        new Array(),
        0,
        "root"
    );
    
    if (oInput.properties?.displayName != undefined) {
        sName = oInput.properties.displayName;
        sId = oInput.name;
    } else if (oInput.name != undefined) {
        sId = oInput.name;
    }

    if (oInput.properties?.connectionReferences != undefined) {
        const aConnectionKeys = Object.keys(oInput.properties.connectionReferences);
        aConnectionKeys.forEach((key) => {
            const value = oInput.properties.connectionReferences[key];
            if(value?.connection?.connectionReferenceLogicalName != null){                
                aConnectionReferences.push(
                    {
                        connection:key,
                        referenceName:value.connection.connectionReferenceLogicalName,
                        type:value.api.name                    
                    }
                )
            }
        })    
    }

    const aTriggerKeys = Object.keys(oInput.properties.definition.triggers);
    aTriggerKeys.forEach((key) => {
        const value = oInput.properties.definition.triggers[key];
        sTrigger = key;
        if (value?.inputs?.schema != null) {
            sTriggerParam = JSON.stringify(value.inputs);
        }
        if (value?.inputs?.parameters != null) {
            sTriggerParam = JSON.stringify(value.inputs);
        }
        if (value?.inputs?.parameters != null) {
            sTriggerData = JSON.stringify(value.inputs.parameters);
        }
        if (value?.recurrance != null) {
            sTriggerRecur = value.recurrance;
        }
        if (value?.conditions != null) {
            if (value.conditions[0]?.expression != null) {
            sTriggerExpress = value.conditions[0].expression;
            }
        }
        if (value?.inputs?.schema?.properties != null) {
            sTriggerInputs = JSON.stringify(value.inputs.schema.properties);
        }
        if (value?.runtimeConfiguration != null) {
            sTriggerConfig = JSON.stringify(value.runtimeConfiguration);
        }
    });

    //// actions
    aActions.forEach((item, index) => {
        let sId = "MISSING";
        if (item.metadata?.operationMetadataId != null) {
            sId = item.metadata.operationMetadataId;
        }

        let sStep = "";
        let sConnector = "";
        let sConApiID = "";
        if (item.type == "OpenApiConnection") {
            sStep = item.inputs.host.operationId;
            sConnector = item.inputs.host.connectionName;
            sConApiID = item.inputs.host.apiId;
        } else {
            sStep = item.type;
        }

        let sNewTier = "Standard";
        let sNewImgURL = null;
        if (sConnector != "") {
            let sNewConnectorInfo = aConnectionTier.find((c) =>
                c.name.includes(sConnector.substring(0, sConnector.length - 2).trim())
            );
            if (sConnector == "shared_sendmail" || sConnector == "shared_teams") {
            sNewTier = "Standard";
            } else if (sNewConnectorInfo != undefined) {
                sNewTier = sNewConnectorInfo.properties.tier;
                sNewImgURL = sNewConnectorInfo.properties.iconUri;
            } else {
                sNewTier = "Premium";
            }
        }

        let sRunAfter = "";
        let sPosition = "|";
        let sException = "Non-Exception";
        if (JSON.stringify(item.runAfter) == "{}" || item.runAfter==undefined || item.runAfter== null) {
            sRunAfter= item.parent+":Success";
        }else{
            const keys = Object.keys(item.runAfter);
            keys.forEach((key) => {
            sPosition += key + "|";
            sRunAfter =
                key + ":" + JSON.stringify(item.runAfter[key]).replaceAll(",", " | ");
            if (JSON.stringify(item.runAfter[key]).includes("Failed")) {
                sException = "Exception";
            }
            });
        }
    
        if (sPosition == "|" && item.nestedLevel == 0) {
            sPosition = "|trigger|";
        }
        if (sPosition == "|" && item.nestedLevel != 0) {
            sPosition = "|" + item.parent + "|";
        }

        if (sRunAfter.length > 1) {
            sRunAfter = sRunAfter.substring(0, sRunAfter.length - 1);
        }

        let iNewComplexity;
        let aNewComplexFind = aComplexity.find(
            (c) => c.Name.includes(sStep + sConnector) || c.Name == item.type
        );

        if (aNewComplexFind != null) {
            iNewComplexity = Number(aNewComplexFind.Complexity);
        } else {
            iNewComplexity = 1;
        }
        let sFilter = "";
        if (item?.inputs?.parameters?.$filter != null) {
            sFilter = item.inputs.parameters.$filter;
        }
        let sRetry = "";
        let sRetryDetail = "";
        if (item?.inputs?.retryPolicy != null) {
            sRetry = item.inputs.retryPolicy.type;
            sRetryDetail = JSON.stringify(item.inputs.retryPolicy);
        }
        let sPagination = "";
        if (item?.runtimeConfiguration?.paginationPolicy != null) {
            sPagination = item.runtimeConfiguration.paginationPolicy.minimumItemCount;
        }
        let sSecure = "";
        if (item?.runtimeConfiguration?.secureData != null) {
            sSecure = JSON.stringify(item.runtimeConfiguration.secureData).replace('{"properties":[','').replace(']}','').replaceAll('"','');
        }
        let sTimeout = "";
        if (item?.limit?.timeout != null) {
            sTimeout = item.limit.timeout;
        }
        let sNotes = "";
        if (item?.description != null) {
            sNotes = item.description;
        }

        let oTempItem = item;
       
        removeNestedActions(oTempItem);
         if (oTempItem.hasOwnProperty("cases")) {
            delete oTempItem.cases;
        }

        let aEnvironVar = JSON.stringify(removeCircularReferences(oTempItem)).match(regExpEnviron);

        let bEnvironVar = false;
        let iEnvironVar = 0;
        if (aEnvironVar) {
            console.log(JSON.stringify(removeCircularReferences(oTempItem)));
            aEnvironVar = aEnvironVar.filter(
            (object) => object != "@parameters('$authentication')"
            );
            iEnvironVar = aEnvironVar.length;
            if (aEnvironVar.length > 0) {
                bEnvironVar = true;

            }
        }

        if (!bEnvironVar) {
            aEnvironVar = JSON.stringify(removeCircularReferences(oTempItem)).match(regExpEnviron2);
            if (aEnvironVar) {
                console.log(JSON.stringify(removeCircularReferences(oTempItem)));
            aEnvironVar = aEnvironVar.filter(
                (object) => object != "@{parameters('$authentication')"
            );
             iEnvironVar += aEnvironVar.length;
            if (aEnvironVar.length > 0) {
                bEnvironVar = true;
            }
            }
        }

        let sPostionInfo = "";
        if (item.parent==sRunAfter.split(":")[0]) {
            sPostionInfo = "Internal";
        }

        let sDetails = "";
        if (item.inputs == undefined) {
            sDetails = "";
        } else if (item.inputs.hasOwnProperty("parameters")) {
            sDetails = JSON.stringify(item.inputs.parameters);
        } else {
            sDetails = JSON.stringify(item.inputs);
        }

        if (item.hasOwnProperty("foreach")) {
            sDetails = JSON.stringify(item.foreach);
        }

        if (item.hasOwnProperty("expression")) {
            sDetails = JSON.stringify(item.expression);
        }

        aActionReturn.push({
            name: item.operationName,
            step: sStep,
            type: item.type,
            id: sId,
            hashId: sId + "###" + (index + 1),
            tier: sNewTier,
            connector: sConnector,
            imgURL: sNewImgURL,
            runAfter: sRunAfter.replace(/[\[\]""]/g, ""),
            exception: sException,
            index: index + 1,
            object: item,
            complexity: iNewComplexity,
            detail: sDetails,
            filter: sFilter,
            pagination: sPagination,
            secure: sSecure,
            retry: sRetry,
            timeout: sTimeout,
            position: sPosition,
            positionInfo: sPostionInfo,
            environmentVariables: JSON.stringify(aEnvironVar),
            environmentB: bEnvironVar,
            environmentCount: iEnvironVar,
            notes: sNotes,
            parent: item.parent,
            apiId: sConApiID,
            branch: item.branch
        });

        aActionObjects.push({
            step: sStep,
            connector: sConnector,
            name: item.operationName,
            id: sId,
            hashId: sId + "###" + (index + 1),
            object: JSON.stringify(removeCircularReferences(item)),
            type: item.type,
            index: index + 1,
            parent: item.parent
        });
    });

    aActionReturn.forEach((item) => {
        if (item.position == "|trigger|") {
            item.positionIndex = "|0";
            item.positionType = "|trigger";
            item.nested = "";
        } else {
            item.positionIndex = "";
            item.positionType = "";
            item.nested = "";
            const aPosition = aActionReturn.filter((value) =>
                item.position.includes("|" + value.name + "|")
            );
            aPosition.forEach((object) => {
                item.positionIndex += "|" + Number(object.index);
                item.positionType += "|" + object.type;
                let sFullNest = getNesting(item.parent,aActionReturn) + "";

                if (sFullNest.substring(sFullNest.length - 2, 2) == "|0") {
                    sFullNest = sFullNest.substring(0, sFullNest.length - 2);
                }
                if (
                    sFullNest == "0" ||
                    sFullNest == undefined ||
                    sFullNest == null ||
                    sFullNest == "undefined"
                ) {
                    sFullNest = "";
                }
                item.nested = sFullNest;
            });
        }
    });

    ///variables
    const aHasDetail = aActionReturn.filter((item) =>
        item.detail != null &&
        item.detail != undefined &&
        item.type != "InitializeVariable"
    );

    const aVariables = aActions.filter((item) => 
        item.type == "InitializeVariable"
    );

    aVariables.forEach((item) => {
        let sNameLead = "";
        let sNamedCorrect = false;
        let sNameLocal = false;

        const oInputs = item.inputs.variables[0];
        const aFindUse = aHasDetail.filter((object) =>
            typeof object.detail === "string" && object.detail.includes(oInputs.name)
        );

        if (aNaming.data.filter((object) => object.Type == oInputs.type).length > 0) {
            sNameLead = aNaming.data.find((object) => 
                object.Type == oInputs.type
            ).Letter;
        }

        if (oInputs.name.substring(0, aNaming.char) == sNameLead) {
            sNamedCorrect = true;
        }

        if (
            oInputs.value != "" &&
            oInputs.value != undefined &&
            oInputs.value != null
        ) {
            if (
                oInputs.name.substring(1, oInputs.name.length - 1) ===
                oInputs.name.substring(1, oInputs.name.length - 1).toUpperCase()
            ) {
                sNameLocal = true;
            }
        } else {
            sNameLocal = true;
        }

        let sValue = "";

        if (isObject(oInputs.value)) {
            sValue = JSON.stringify(oInputs.value);
        } else if (oInputs.value == undefined) {
            sValue = "";
        } else {
            sValue = oInputs.value + "";
        }

        if (oInputs.value == undefined) {
            oInputs.value = "";
        }
        aVariableReturn.push({
            name: oInputs.name,
            type: oInputs.type,
            value: sValue,
            used: aFindUse.length > 0,
            named: sNamedCorrect,
            local: sNameLocal,
        });
    });

    //// connection refs
    getDistinct(aActionReturn).forEach((item) => {
        const oAction = aActionReturn.find((object) => object.connector == item);
        let sAppId=oAction.apiId;
        const oConnectionRef = aConnectionReferences.find((ref) => {return ref.connection==item});
        if(oConnectionRef){
            sAppId=oConnectionRef.referenceName
        }
        aConnectionReturn.push({
            conName: item,
            appId: sAppId,
            opId: oAction.step,
            count: aActionReturn.filter((object) => object.connector == item).length,
        });
    });

    aApiList = aActionReturn.filter((item) => item.type == "OpenApiConnection");

    aExceptionList = aActionReturn.filter((item) => 
        item.exception == "Exception"
    );

    let bName;
    if (aVariableReturn.length == 0) {
        bName = true;
    } else {
        bName = aVariableReturn.every((element) => element.named === true);
    }

    let bLocal;
    if (aVariableReturn.length == 0) {
        bLocal = true;
    } else {
        bLocal = aVariableReturn.every((element) => element.local === true);
    }

    let bUsed;
    if (aVariableReturn.length == 0) {
        bUsed = true;
    } else {
        bUsed = aVariableReturn.every((element) => element.used === true);
    }

    let aExceptionScope = aExceptionList.filter((item) => 
        item.name == "Exception"
    );

    let bExceptionTerminate = false;
    let bExceptionLink = false;

    if (aExceptionScope) {
        bExceptionTerminate = aExceptionScope.length > 0 &&  JSON.stringify(aExceptionScope[0].object).includes("Terminate");
        bExceptionLink = aExceptionScope.length > 0 &&  (
            JSON.stringify(aExceptionScope[0].object).includes(sExceptLink) ||
            JSON.stringify(aExceptionScope[0].object).includes(sExceptLink2)
        );
    }

    aActionReturn.forEach((object) => {
        delete object["object"];
        delete object["apiId"];
        let oParent = aActionReturn.find((item) => item.name == object.parent);
        if (oParent != null) {
            if (oParent.type != "If" && oParent.type != "Switch") {
            object.branch = "";
            }
        }
    });

    return {
        name: sName,
        id: sId,
        environment: sEnvironment,
        owner: sOwner,
        trigger: sTrigger,
        triggerData: sTriggerData,
        triggerParam: sTriggerParam,
        triggerConfig: sTriggerConfig,
        triggerExpress: sTriggerExpress,
        triggerInputs: sTriggerInputs,
        triggerRecur: sTriggerRecur,
        premium: !aActionReturn.every((element) => element.tier === "Standard"),
        connectionRefs: aConnectionReturn.length,
        connectors: aApiList.length,
        steps: aActionReturn.length,
        variables: aVariableReturn.length,
        complexity: sumObj(aActionReturn, "complexity"),
        varNaming: bName,
        varNameConsts: bLocal,
        varNameUse: bUsed,
        composes: aActionReturn.filter((item) => item.type == "Compose").length,
        exception: aExceptionList.length,
        exceptionHandleScope: aExceptionList.filter((item) => item.step == "Scope").length > 0,
        exceptionScope: aExceptionScope.length > 0,
        exceptionTerminate: bExceptionTerminate,
        exceptionLink: bExceptionLink,
        mainScope: aActionReturn.filter((item) => item.name == "Main").length > 0,
        variableArray: aVariableReturn,
        actionArray: aActionReturn,
        apiActionArray: aApiList,
        exceptionArray: aExceptionList,
        connectionArray: aConnectionReturn,
        error: sError,
        actionObjectArray: aActionObjects
    };
}

function getNesting(parent,aActionReturn) {
    let sParents;
    if (parent != "root") {
        let oParent = aActionReturn.find((item) => {
            return item.name == parent;
        });
        sParents = oParent.index;
        if (oParent.parent != "root") {
            sParents += "|" + getNesting(oParent.parent,aActionReturn);
        }
    }
    return sParents;
}

function getChildren(object, aReturn, nested, parent) {
    if(typeof parent === 'object'){
        parent=parent.operationName
    }
    if (object?.actions != undefined) {
        const keys = Object.keys(object.actions);
        keys.forEach((key) => {
            let value = object.actions[key];
            value.operationName = key;
                (value.nestedLevel = nested),
                (value.parent = parent),
                (value.branch = "Yes");
            aReturn.push(value);
        aReturn = getChildren(value, aReturn, nested + 1, key);
        });
    }
    if (object?.else != undefined) {
        const keys = Object.keys(object.else.actions);
        keys.forEach((key) => {
            let value = object.else.actions[key];
            value.operationName = key;
            (value.nestedLevel = nested),
                (value.parent = parent),
                (value.branch = "No");
            aReturn.push(value);
            aReturn = getChildren(value, aReturn, nested + 1, key);
        });
    }

    if (object?.cases != undefined) {
        const keys = Object.keys(object.cases);
        keys.forEach((key) => {
            let value = object.cases[key];
            const keys2 = Object.keys(value.actions);
            keys2.forEach((key2) => {
                let value2 = object.cases[key].actions[key2];
                value2.operationName = key2;
                    (value2.nestedLevel = nested),
                    (value2.parent = parent),
                    (value2.branch = key);
                aReturn.push(value2);
                aReturn = getChildren(value2, aReturn, nested + 1, key2);
            });
        });
        const keysDef = Object.keys(object.default.actions);
        keysDef.forEach((keyDef) => {
            let valueDefault = object.default.actions[keyDef];
            valueDefault.operationName = keyDef;
                (valueDefault.nestedLevel = nested),
                (valueDefault.parent = parent),
                (valueDefault.branch = "Default");
            aReturn.push(valueDefault);
            aReturn = getChildren(valueDefault, aReturn, nested + 1, valueDefault);
        });
    }
    return aReturn;
}

function sumObj(arr = [], field) {
    let sum = 0;
    sum = arr.reduce((accumulator, object) => {
        return accumulator + object[field];
    }, 0);
    return sum;
}

function getParent(data) {
    let sortArray = data.sort((a, b) => {
        return a.value - b.value;
    });
    return sortArray[0];
}

function getDistinct(arr) {
    const distinctCon = new Set();
    for (const obj of arr) {
        if (obj.connector != "") {
        distinctCon.add(obj.connector);
        }
    }

    return Array.from(distinctCon);
}

function isObject(objValue) {
    return (
        objValue && typeof objValue === "object" && objValue.constructor === Object
    );
}

function removeCircularReferences(obj, seen = new WeakSet()) {
    if (typeof obj === 'object' && obj !== null) {
        if (seen.has(obj)) {
            return '[Circular]'; // Replace circular reference
        }
        seen.add(obj);

        if (Array.isArray(obj)) {
            return obj.map((item) => removeCircularReferences(item, seen));
        } else {
            return Object.fromEntries(
                Object.entries(obj).map(([key, value]) => [
                    key,
                    removeCircularReferences(value, seen),
                ])
            );
        }
    }
    return obj;
}

  // Recursively delete all nested 'actions' properties
        function removeNestedActions(obj) {
            if (obj && typeof obj === 'object') {
                if (obj.hasOwnProperty('actions')) {
                    delete obj.actions;
                }
                for (const key in obj) {
                    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
                        removeNestedActions(obj[key]);
                    }
                }
            }
        }

module.exports={
    CreateReview
};