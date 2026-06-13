function generateMarkdownReport(data) {
    const sFlowName = data.name || "Flow Review";
    const aSections = [
        "# " + markdownCell(sFlowName),
        "",
        "## Trigger",
        markdownTable(
            ["Field", "Value"],
            [
                ["Name", data.trigger],
                ["Type", data.triggerType],
                ["Data", data.triggerData],
                ["Parameters", data.triggerParam],
                ["Configuration", data.triggerConfig],
                ["Inputs", data.triggerInputs],
                ["Recurrence", data.triggerRecur],
                ["Expressions", data.triggerExpress]
            ],
            (item) => item
        ),
        "",
        "## Variables",
        markdownTable(
            ["Name", "Type", "Value", "Used", "Named", "Constant"],
            data.variableArray,
            (item) => [item.name, item.type, formatValue(item.value), item.used, item.named, item.local]
        ),
        "",
        "## Actions",
        markdownTable(
            ["Name", "Type", "Run After", "Notes", "Nested", "Id"],
            data.actionArray,
            (item) => [item.name, item.step, item.runAfter, item.notes, item.nested, item.index]
        ),
        "",
        "## Action Inputs",
        markdownTable(
            ["Name", "Type", "Secure", "Env", "Inputs"],
            data.actionArray,
            (item) => [item.name, item.step, commaBreak(item.secure), item.environmentB, formatValue(item.detail)]
        ),
        "",
        "## API Actions",
        markdownTable(
            ["Name", "Type", "Connector", "Filter", "Pagination", "Retry"],
            data.apiActionArray,
            (item) => [item.name, item.step, item.connector, item.filter, item.pagination, item.retry]
        ),
        "",
        "## Connection References",
        markdownTable(
            ["Name", "Id", "Count"],
            data.connectionArray,
            (item) => [item.conName, item.appId, item.count]
        ),
        ""
    ];

    return aSections.join("\n");
}

function markdownTable(headers, rows, rowMapper) {
    const safeRows = Array.isArray(rows) ? rows : [];
    const table = [
        "| " + headers.map(markdownCell).join(" | ") + " |",
        "| " + headers.map(() => "---").join(" | ") + " |"
    ];

    safeRows.forEach((item) => {
        table.push("| " + rowMapper(item).map(markdownCell).join(" | ") + " |");
    });

    return table.join("\n");
}

function markdownCell(value) {
    if (value == undefined || value == null) {
        return "";
    }

    return String(value)
        .replaceAll("£$", "")
        .replaceAll("<", "&lt;")
        .replace(/\\r/g, "")
        .replace(/\r?\n|\\n/g, "<br>")
        .replace(/\t|\\t/g, " ")
        .replace(/\|/g, "\\|")
        .trim();
}

function formatValue(value) {
    if (value == undefined || value == null) {
        return "";
    }

    return String(value)
        .replace(/\\n/g, "\n")
        .replace(/\\r/g, "")
        .replace(/\\t/g, "");
}

function commaBreak(value) {
    if (value == undefined || value == null) {
        return "";
    }

    return String(value).replaceAll(",", "\n");
}

module.exports = {
    generateMarkdownReport
};