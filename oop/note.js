/* We can group a related group of function to specific action like fetch data or create UI into
one class
*/

function UI() { }

UI.prototype.addBook = function(book) {
  const tr = document.createElement("tr");
  for (const key in book) {
    const td = document.createElement("td");
    td.textContent = book[key];
    tr.append(td);
  }

  const td = document.createElement("td");
  td.innerHTML = removeBookButton;
  tr.append(td);

  booksList.querySelector('tbody').append(tr);
}

UI.prototype.clearForm = () => {
  const inputFields = addBookForm.querySelectorAll("input.form-control");

  for (const field of inputFields) {
    field.value = "";
  }
}

UI.prototype.showErrorMessage = (message, element) => {
  const errorElement = `<small class="error-message text-danger">${message}</small>`;
  element.insertAdjacentHTML("beforebegin", errorElement);
}

UI.prototype.removeAllErrorMessages = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  for (const errorMessage of errorMessages) {
    errorMessage.remove();
  }
}
