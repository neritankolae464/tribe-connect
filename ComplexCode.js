/* 
Filename: ComplexCode.js
Content: This code generates a complex UI component with a dynamic table
Description: This code creates a dynamic table that allows users to add, edit and delete rows, and also calculates and displays the total value of all rows dynamically.
*/

// Main UI component class
class DynamicTable {
  constructor() {
    this.table = document.createElement("table");
    this.table.className = "dynamic-table";
    this.addRowButton = document.createElement("button");
    this.addRowButton.innerHTML = "Add Row";
    this.addRowButton.addEventListener("click", this.addRow.bind(this));
    this.totalValue = 0;
    this.totalValueEl = document.createElement("div");
    this.totalValueEl.className = "total-value";
  }

  init() {
    this.renderUI();
    this.updateTotalValue();
  }

  renderUI() {
    document.body.appendChild(this.table);
    document.body.appendChild(this.addRowButton);
    document.body.appendChild(this.totalValueEl);
  }

  addRow() {
    let newRow = new Row(this);
    newRow.init();
    this.table.appendChild(newRow.getHTMLRow());
    this.updateTotalValue();
  }

  removeRow(row) {
    this.table.removeChild(row.getHTMLRow());
    this.updateTotalValue();
  }

  updateTotalValue() {
    let rows = Array.from(this.table.getElementsByTagName("tr"));
    this.totalValue = 0;
    rows.forEach((row) => {
      let value = parseFloat(row.getElementsByClassName("value-input")[0].value);
      if (!isNaN(value)) {
        this.totalValue += value;
      }
    });
    this.totalValueEl.innerHTML = "Total Value: " + this.totalValue.toFixed(2);
  }
}

// Class for each row in the table
class Row {
  constructor(table) {
    this.table = table;
    this.row = document.createElement("tr");
    this.nameInput = document.createElement("input");
    this.valueInput = document.createElement("input");
    this.editButton = document.createElement("button");
    this.deleteButton = document.createElement("button");
  }

  init() {
    this.nameInput.className = "name-input";
    this.valueInput.className = "value-input";
    this.editButton.innerHTML = "Edit";
    this.editButton.addEventListener("click", this.editRow.bind(this));
    this.deleteButton.innerHTML = "Delete";
    this.deleteButton.addEventListener("click", this.deleteRow.bind(this));
  }

  getHTMLRow() {
    this.row.innerHTML = `
      <td><input type="text" value="${this.nameInput.value}"></td> 
      <td><input type="number" step="0.01" value="${this.valueInput.value}" class="value-input"></td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>
    `;
    return this.row;
  }

  editRow() {
    this.nameInput.value = this.row.getElementsByTagName("input")[0].value;
    this.valueInput.value = this.row.getElementsByTagName("input")[1].value;
    this.table.updateTotalValue();
  }

  deleteRow() {
    this.table.removeRow(this);
  }
}

// Instantiate the DynamicTable and initialize it
const dynamicTable = new DynamicTable();
dynamicTable.init();