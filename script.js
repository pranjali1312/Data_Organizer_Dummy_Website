document.addEventListener("DOMContentLoaded", function () {
    // Append Data Form Submission
    const appendForm = document.getElementById("append-data-form");
    appendForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const appendInput = document.getElementById("data-append").value.trim();

        if (appendInput !== "") {
            // Append the data to the view section
            const dataView = document.getElementById('data-view');
            const newData = document.createElement('p');
            newData.textContent = "Appended: " + appendInput;
            dataView.appendChild(newData);

            // Clear input field
            document.getElementById("data-append").value = '';

            // Show success message
            alert("Data appended successfully!");
        }
    });

    // Write Data Form Submission
    const writeForm = document.getElementById("write-data-form");
    writeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const writeInput = document.getElementById("data-write").value.trim();

        if (writeInput !== "") {
            // Overwrite the view section with new data
            const dataView = document.getElementById("data-view");
            dataView.innerHTML = ''; // Clear existing data
            const newData = document.createElement('p');
            newData.textContent = "Written: " + writeInput;
            dataView.appendChild(newData);

            // Clear input field
            document.getElementById("data-write").value = '';

            // Show success message
            alert("Data written successfully!");
        }
    });

    // Store Data Form Submission
    const storeForm = document.getElementById("store-data-form");
    storeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const storeInput = document.getElementById("data-store").value.trim();

        if (storeInput !== "") {
            // Add the stored data to the view section
            const dataView = document.getElementById("data-view");
            const newData = document.createElement('p');
            newData.textContent = "Stored: " + storeInput;
            dataView.appendChild(newData);

            // Clear input field
            document.getElementById("data-store").value = '';

            // Show success message
            alert("Data stored successfully!");
        }
    });

    // Clear Data Button Click Event
    const clearDataButton = document.getElementById('clear-data-button');
    if (clearDataButton) {
        clearDataButton.addEventListener('click', function () {
            // Clear all the data inside the data-view div
            const dataView = document.getElementById('data-view');
            dataView.innerHTML = '<p class="data-view-empty">No data available.</p>';
        });
    }
});