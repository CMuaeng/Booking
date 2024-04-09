document.getElementById("bookButton").addEventListener("click", function () {
  const name = document.getElementById("Name").value;
  const day = document.getElementById("Day").value;
  const time = document.getElementById("Time").value;
  const seats = document.getElementById("Seats").value;

  const bookingInfo = `Name: ${name}, Date: ${day}, Time: ${time}, Seats: ${seats} seats`;
  const listItem = document.createElement("p");
  listItem.textContent = bookingInfo;

  document.getElementById("bookingList").appendChild(listItem);

  const bookingData = {
    name: name,
    day: day,
    time: time,
    seats: seats,
  };

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(bookingData);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    listItem.remove();

    const updatedBookings = bookings.filter(
      (booking) => booking !== bookingData
    );
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  });
});
