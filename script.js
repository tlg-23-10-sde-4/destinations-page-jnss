// when form is submitted grab user's input and log it
user_input_form.addEventListener("submit", (e) => {
  // e is the event object
  // that object holds more information about the event that we are handling
  e.preventDefault();

  const PLACEHOLDER_PHOTO_URL =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

  const destinationName = destination_name.value;
  const locationName = location_name.value;
  // const photoUrl = photo_url.value === "" ?  PLACEHOLDER_PHOTO_URL : photo_url.value
  const photoUrl = photo_url.value || PLACEHOLDER_PHOTO_URL;
  const descr = description.value;

  //   clear the form
  user_input_form.reset();

  console.log(destinationName, locationName, photoUrl, descr);
});
