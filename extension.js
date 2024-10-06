const review= require ("./assets/data generator.js");
const configs= require("./assets/config.js");
const connectors =require("./assets/connectors.js");
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const oConfigs=configs.configs();
const oConnectors=connectors.connectors();
console.log(oConnectors)
function activate(context) {

	console.log('Congratulations, your extension "Autoreview" is now active!');

	const arDetails = vscode.commands.registerCommand('Autoreview.details', function () {
		const oData=getJSON();
		const sDetails=oData.trigger

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from AutoReview!'+sDetails);

	});

	context.subscriptions.push(arDetails);

    let arJson = vscode.commands.registerCommand('Autoreview.getJson', async function () {
        const oData=getJSON();	
		const newDocument = await vscode.workspace.openTextDocument({ content: JSON.stringify(oData, null, 4) });
		await vscode.window.showTextDocument(newDocument);	
    });

    context.subscriptions.push(arJson);
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