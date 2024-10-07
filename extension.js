const review= require ("./assets/dataGenerator.js");
const configs= require("./assets/config.js");
const connectors =require("./assets/connectors.js");
const vscode = require("vscode");
const oConfigs=configs.configs();
const oConnectors=connectors.connectors();
const diagram=require("./assets/diagram.js");

function activate(context) {

	console.log('Congratulations, your extension "Autoreview" is now active!');

	const arDetails = vscode.commands.registerCommand('Autoreview.details', function () {
		const oData=getJSON();
		const sDetails="Actions: "+oData.steps+" |  Trigger: "+oData.trigger+" | Premium: "+oData.premium;
		vscode.window.showInformationMessage(sDetails);
	});

	context.subscriptions.push(arDetails);

    let arJson = vscode.commands.registerCommand('Autoreview.getJson', async function () {
        const oData=getJSON();	
		const newDocument = await vscode.workspace.openTextDocument({ content: JSON.stringify(oData, null, 4) });
		await vscode.window.showTextDocument(newDocument);	
    });

    context.subscriptions.push(arJson);

	let arJsonConnections= vscode.commands.registerCommand('Autoreview.getConnections', async function () {
        const oData=getJSON();	
		const newDocument = await vscode.workspace.openTextDocument({ content: JSON.stringify(oData.connectionArray, null, 4) });
		await vscode.window.showTextDocument(newDocument);	
		
    });

    context.subscriptions.push(arJsonConnections);
	
	let arJsonSteps = vscode.commands.registerCommand('Autoreview.getActions', async function () {
        const oData=getJSON();	

		let aActions = removeKey(oData.actionObjectArray,"hashId")
		const newDocument = await vscode.workspace.openTextDocument({ content: JSON.stringify(aActions, null, 4) });
		await vscode.window.showTextDocument(newDocument);	
    });

    context.subscriptions.push(arJsonSteps);

	let arDiagram = vscode.commands.registerCommand('Autoreview.getDiagram', function () {
		const oData=getJSON();	
		const {renderSvg} =require("./assets/nomnoml");
		const sDiagram = diagram.createDiagram(oData.actionArray,oData.name,oData.trigger,oData.actionObjectArray);
        const panel = vscode.window.createWebviewPanel(
            'htmlPreview', 'Flow Diagram', vscode.ViewColumn.One,
            {} 
        );
        panel.webview.html = renderSvg(sDiagram);
	});

	context.subscriptions.push(arDiagram);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

function getJSON(){
	const editor = vscode.window.activeTextEditor;
	if (editor) {
		const document = editor.document;
		const sText = document.getText();

		try{
			let oData=review.CreateReview(
				sText,
				"vs code",
				"unknown",
				oConfigs.aComplexityTemplate,
				oConfigs.oNamingTemplate,
				oConnectors.value,
				"no owner",
				"no environment"
			)
			return oData
		} catch(error){
			return "Vaild flow not found"
		}
	}else{
		return "Flow not found"
	}
}

function removeKey(array, key) {
	array.forEach(obj => {
		delete obj[key];
	});
	return array;
}